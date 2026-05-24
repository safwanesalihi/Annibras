import type { NewsItem } from "@/types";
import { ContentCard } from "@/components/features/content-card";
import { SectionHeader } from "@/components/features/section-header";

interface LatestNewsGridProps {
  items: NewsItem[];
  title?: string;
  href?: string;
}

export function LatestNewsGrid({
  items,
  title = "أحدث الأخبار",
  href = "/news",
}: LatestNewsGridProps) {
  return (
    <section aria-labelledby="latest-news-heading">
      <SectionHeader title={title} href={href} />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.slice(0, 6).map((item) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
