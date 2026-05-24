"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { mockCategories } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

interface CategoryPillsProps {
  activeSlug?: string;
  includeAll?: boolean;
  baseHref?: string;
}

export function CategoryPills({
  activeSlug,
  includeAll = true,
  baseHref = "/category",
}: CategoryPillsProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="تصفية بالأقسام"
      className="-mx-4 sm:mx-0 overflow-x-auto scrollbar-hide border-y border-border"
    >
      <ul className="flex gap-2 px-4 sm:px-0 py-3 w-max sm:w-auto sm:flex-wrap">
        {includeAll && (
          <li>
            <Link
              href="/news"
              className={cn(
                "inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-medium whitespace-nowrap transition-colors",
                pathname === "/news"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary",
              )}
            >
              الكل
            </Link>
          </li>
        )}
        {mockCategories.map((c) => {
          const active = c.slug === activeSlug;
          return (
            <li key={c.id}>
              <Link
                href={`${baseHref}/${c.slug}`}
                className={cn(
                  "inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-medium whitespace-nowrap transition-colors",
                  active
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary",
                )}
              >
                {c.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
