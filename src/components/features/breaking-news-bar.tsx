import Link from "next/link";
import { Zap } from "lucide-react";

import { mockBreakingHeadlines } from "@/lib/mock-data";

export function BreakingNewsBar() {
  const headlines = [...mockBreakingHeadlines, ...mockBreakingHeadlines];
  return (
    <div
      className="bg-breaking text-breaking-foreground border-y border-black/10 marquee-container overflow-hidden"
      aria-label="عاجل: أحدث الأخبار"
    >
      <div className="flex items-center">
        <div className="flex-none flex items-center gap-2 bg-black/30 px-4 py-2 text-xs font-bold uppercase tracking-wider">
          <Zap className="h-3.5 w-3.5" />
          <span>عاجل</span>
        </div>
        <div className="flex-1 overflow-hidden relative">
          <div className="marquee-track py-2 text-sm">
            {headlines.map((h, i) => (
              <Link
                key={`${h.id}-${i}`}
                href={h.href}
                className="inline-flex items-center gap-3 hover:underline"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                <span>{h.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
