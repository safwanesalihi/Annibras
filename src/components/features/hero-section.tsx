import { ContentCard } from "@/components/features/content-card";
import type { Article, NewsItem } from "@/types";

interface HeroSectionProps {
  items: (Article | NewsItem)[];
}

export function HeroSection({ items }: HeroSectionProps) {
  if (items.length === 0) return null;
  const [main, ...rest] = items;
  const secondary = rest.slice(0, 2);

  return (
    <section className="grid gap-4 lg:gap-6 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <ContentCard item={main} variant="feature" />
      </div>
      <div className="lg:col-span-2 grid gap-4 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
        {secondary.map((item) => (
          <ContentCard key={item.id} item={item} variant="feature" />
        ))}
      </div>
    </section>
  );
}
