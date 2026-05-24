import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  href?: string;
  ctaLabel?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function SectionHeader({
  title,
  href,
  ctaLabel = "عرض الكل",
  icon,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-end justify-between gap-4 mb-6 border-b-2 border-primary pb-3",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <span className="inline-block w-1.5 h-7 bg-primary" />
        {icon}
        <h2 className="text-xl md:text-2xl font-bold serif text-foreground">
          {title}
        </h2>
      </div>
      {href && (
        <Link
          href={href}
          className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
        >
          {ctaLabel}
          <ArrowLeft className="h-3.5 w-3.5" />
        </Link>
      )}
    </div>
  );
}
