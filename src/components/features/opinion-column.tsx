import Link from "next/link";
import Image from "next/image";

import type { BlogPost } from "@/types";
import { SectionHeader } from "@/components/features/section-header";
import { RelativeTime } from "@/components/features/relative-time";

interface OpinionColumnProps {
  items: BlogPost[];
}

export function OpinionColumn({ items }: OpinionColumnProps) {
  return (
    <section aria-labelledby="opinion-heading">
      <SectionHeader title="رأي ومدوّنات" href="/blogs" />
      <div className="grid gap-0 md:grid-cols-3 md:divide-x md:divide-x-reverse md:divide-border">
        {items.slice(0, 3).map((item) => (
          <article key={item.id} className="px-0 md:px-6 first:ps-0 last:pe-0 py-2 md:py-0 border-b border-border md:border-b-0 last:border-b-0">
            <Link href={`/blogs/${item.slug}`} className="group block">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative h-10 w-10 rounded-full overflow-hidden bg-muted flex-none">
                  <Image
                    src={item.author.avatar}
                    alt={item.author.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">{item.author.name}</p>
                  <p className="text-[11px] text-muted-foreground">
                    {item.author.role}
                  </p>
                </div>
              </div>
              <h3 className="text-lg font-bold serif leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                {item.summary}
              </p>
              <p className="mt-3 text-[11px] text-muted-foreground">
                <RelativeTime date={item.publishedAt} />
              </p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
