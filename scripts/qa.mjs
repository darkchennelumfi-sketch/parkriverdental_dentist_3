import { chromium } from "playwright";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const axe = require("axe-core");

const url = process.env.QA_URL ?? "http://localhost:3200/";
const viewports = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "laptop", width: 1280, height: 800 },
  { name: "desktop", width: 1920, height: 1080 },
];

const browser = await chromium.launch();
const report = {};

for (const viewport of viewports) {
  const context = await browser.newContext({
    viewport: { width: viewport.width, height: viewport.height },
    deviceScaleFactor: 1,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  const consoleErrors = [];
  const pageErrors = [];

  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto(url, { waitUntil: "networkidle" });

  const scrollHeight = await page.evaluate(
    () => document.documentElement.scrollHeight,
  );
  for (let y = 0; y < scrollHeight; y += viewport.height) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(120);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);

  const audit = await page.evaluate(() => {
    const root = document.documentElement;
    const body = document.body;
    const overflow = root.scrollWidth > root.clientWidth + 1;
    const offenders = [];
    const all = document.querySelectorAll("*");
    for (const el of all) {
      const style = getComputedStyle(el);
      if (style.display === "none" || style.visibility === "hidden") continue;
      if (el.closest("[aria-hidden='true']")) continue;
      if (el.scrollWidth > el.clientWidth + 2) {
        const isOverflowHidden =
          style.overflowX === "hidden" ||
          style.overflowX === "clip" ||
          style.overflow === "hidden" ||
          style.overflow === "clip";
        if (!isOverflowHidden) {
          offenders.push({
            tag: el.tagName,
            className:
              typeof el.className === "string"
                ? el.className.slice(0, 120)
                : "",
            scrollWidth: el.scrollWidth,
            clientWidth: el.clientWidth,
          });
        }
      }
    }

    const images = [...document.images].map((img) => ({
      src: img.currentSrc || img.src,
      alt: img.alt,
      loaded: img.complete && img.naturalWidth > 0,
      width: img.naturalWidth,
      height: img.naturalHeight,
    }));

    const anchors = [...document.querySelectorAll("a[href]")].map((a) => ({
      href: a.getAttribute("href"),
      text: a.textContent?.trim().slice(0, 80),
      target: a.getAttribute("target"),
    }));

    const badInternalAnchors = anchors
      .filter((a) => a.href?.startsWith("#") && a.href !== "#")
      .filter((a) => !document.querySelector(a.href))
      .map((a) => a.href);

    const headings = [...document.querySelectorAll("h1,h2,h3,h4")].map((h) => ({
      level: h.tagName,
      text: h.textContent?.trim().replace(/\s+/g, " ").slice(0, 90),
    }));

    const sections = [...document.querySelectorAll("section, footer, header")].map(
      (section) => {
        const rect = section.getBoundingClientRect();
        return {
          tag: section.tagName,
          id: section.id,
          top: Math.round(rect.top + window.scrollY),
          height: Math.round(rect.height),
        };
      },
    );

    const form = document.querySelector("form");
    const formControls = form
      ? [...form.querySelectorAll("input, select, textarea")].map((el) => ({
          tag: el.tagName,
          id: el.id,
          type: el.getAttribute("type"),
          labelled:
            Boolean(el.id && document.querySelector(`label[for="${el.id}"]`)) ||
            Boolean(el.getAttribute("aria-label")),
        }))
      : [];

    return {
      viewport: { width: window.innerWidth, height: window.innerHeight },
      document: {
        scrollWidth: root.scrollWidth,
        clientWidth: root.clientWidth,
        scrollHeight: root.scrollHeight,
        bodyScrollWidth: body.scrollWidth,
      },
      overflow,
      offenders: offenders.slice(0, 20),
      images,
      anchors,
      badInternalAnchors,
      headings,
      sections,
      formControls,
      title: document.title,
      description: document
        .querySelector('meta[name="description"]')
        ?.getAttribute("content"),
      h1Count: document.querySelectorAll("h1").length,
      navCount: document.querySelectorAll("nav").length,
      lang: document.documentElement.lang,
    };
  });

  await page.addScriptTag({ content: axe.source });
  const axeResults = await page.evaluate(async () => {
    // @ts-expect-error axe is injected at runtime
    return await window.axe.run(document, {
      runOnly: { type: "tag", values: ["wcag2a", "wcag2aa"] },
      rules: {
        "color-contrast": { enabled: true },
      },
    });
  });

  const serious = axeResults.violations.filter((v) =>
    ["critical", "serious"].includes(v.impact),
  );

  await page.screenshot({
    path: `/tmp/qa-${viewport.name}.png`,
    fullPage: true,
  });

  report[viewport.name] = {
    ...audit,
    consoleErrors,
    pageErrors,
    axe: {
      serious: serious.map((v) => ({
        id: v.id,
        impact: v.impact,
        help: v.help,
        nodes: v.nodes.length,
        targets: v.nodes.slice(0, 5).map((n) => n.target),
      })),
      moderate: axeResults.violations
        .filter((v) => v.impact === "moderate")
        .map((v) => ({ id: v.id, nodes: v.nodes.length })),
      passes: axeResults.passes.length,
    },
  };

  await context.close();
}

await browser.close();
console.log(JSON.stringify(report, null, 2));
