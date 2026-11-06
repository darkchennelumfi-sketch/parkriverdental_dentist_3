import { chromium } from "playwright";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const axe = require("axe-core");
const url = process.env.QA_URL ?? "http://localhost:3200/";

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  reducedMotion: "reduce",
});
const page = await context.newPage();
await page.goto(url, { waitUntil: "networkidle" });
await page.evaluate(async () => {
  await new Promise((resolve) => {
    let y = 0;
    const step = () => {
      y += 700;
      window.scrollTo(0, y);
      if (y < document.documentElement.scrollHeight) setTimeout(step, 60);
      else {
        window.scrollTo(0, 0);
        setTimeout(resolve, 300);
      }
    };
    step();
  });
});
await page.addScriptTag({ content: axe.source });
const results = await page.evaluate(async () => {
  // @ts-expect-error axe injected
  return await window.axe.run(document, {
    runOnly: { type: "tag", values: ["wcag2a", "wcag2aa"] },
  });
});
const contrast = results.violations.find((v) => v.id === "color-contrast");
if (contrast) {
  for (const node of contrast.nodes) {
    console.log("SELECTOR:", JSON.stringify(node.target));
    console.log("HTML:", node.html.slice(0, 250));
    for (const check of node.any) {
      console.log("  ", check.message);
      if (check.data) {
        console.log(
          "   fg:",
          check.data.fgColor,
          "bg:",
          check.data.bgColor,
          "ratio:",
          check.data.contrastRatio,
          "expected:",
          check.data.expectedContrastRatio,
        );
      }
    }
  }
} else {
  console.log("No color contrast violations");
}
console.log(
  "ALL VIOLATIONS:",
  results.violations.map((v) => `${v.id}:${v.impact}:${v.nodes.length}`),
);
await browser.close();
