import Link from "next/link";
import { CalendarDays, Phone } from "lucide-react";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-paper/92 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-xl lg:hidden">
      <div className="flex items-center gap-2">
        <a
          href="tel:+17012846131"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-ink/15 bg-cream/70 text-[0.8rem] font-semibold text-ink transition-colors active:bg-ink/[0.04]"
        >
          <Phone className="size-4 text-brand" strokeWidth={1.8} />
          Call the office
        </a>
        <Link
          href="#appointment"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-brand text-[0.8rem] font-semibold text-cream shadow-[0_10px_30px_-14px_rgba(47,43,125,0.9)] active:bg-royal"
        >
          <CalendarDays className="size-4" strokeWidth={1.8} />
          Request appointment
        </Link>
      </div>
    </div>
  );
}
