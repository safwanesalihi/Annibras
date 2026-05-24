import Link from "next/link";
import { TrendingUp } from "lucide-react";

import type { Article, NewsItem } from "@/types";
import { RelativeTime } from "@/components/features/relative-time";

interface TrendingSectionProps {
  items: (Article | NewsItem)[];
}

function hrefFor(item: Article | NewsItem) {
  if (item.type === "news") return `/news/${item.slug}`;
  if (item.type === "blog") return `/blogs/${item.slug}`;
  return `/articles/${item.slug}`;
}

export function TrendingSection({ items }: TrendingSectionProps) {
  return (
    <aside aria-labelledby="trending-heading">
      <div className="flex items-center gap-2 border-b-2 border-primary pb-3 mb-2">
        <TrendingUp className="h-5 w-5 text-primary" />
        <h2 id="trending-heading" className="text-lg font-bold serif">
          الأكثر تداولاً
        </h2>
      </div>
      <ol className="divide-y divide-border">
        {items.slice(0, 5).map((item, i) => (
          <li key={item.id} className="py-4 group">
            <Link
              href={hrefFor(item)}
              className="flex items-start gap-4"
            >
              <span className="text-5xl font-extrabold leading-none text-primary/20 group-hover:text-primary/40 transition-colors serif w-12 flex-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                  {item.category.name}
                </span>
                <h3 className="mt-1 text-sm font-bold leading-snug line-clamp-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  <RelativeTime date={item.publishedAt} />
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </aside>
  );
}
