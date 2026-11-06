import { cn } from "@/lib/utils";

export function RiverLines({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 900 700"
      fill="none"
      className={cn("pointer-events-none", className)}
    >
      <g stroke="currentColor" strokeWidth="1" opacity="0.55">
        <path d="M-40 130C120 84 210 210 355 178C500 146 570 44 740 84C842 108 902 168 960 154" />
        <path d="M-40 176C120 130 210 256 355 224C500 192 570 90 740 130C842 154 902 214 960 200" />
        <path d="M-40 222C120 176 210 302 355 270C500 238 570 136 740 176C842 200 902 260 960 246" />
        <path d="M-40 268C120 222 210 348 355 316C500 284 570 182 740 222C842 246 902 306 960 292" />
        <path d="M-40 314C120 268 210 394 355 362C500 330 570 228 740 268C842 292 902 352 960 338" />
      </g>
      <g stroke="currentColor" strokeWidth="1" opacity="0.24">
        <path d="M-40 420C130 360 214 512 386 470C558 428 620 310 780 356C868 382 920 436 980 420" />
        <path d="M-40 474C130 414 214 566 386 524C558 482 620 364 780 410C868 436 920 490 980 474" />
        <path d="M-40 528C130 468 214 620 386 578C558 536 620 418 780 464C868 490 920 544 980 528" />
        <path d="M-40 582C130 522 214 674 386 632C558 590 620 472 780 518C868 544 920 598 980 582" />
      </g>
    </svg>
  );
}

export function DotGrid({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      className={cn("pointer-events-none", className)}
    >
      <defs>
        <pattern id="dot-grid" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1.2" cy="1.2" r="1.2" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#dot-grid)" />
    </svg>
  );
}
