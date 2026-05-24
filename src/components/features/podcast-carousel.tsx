import Link from "next/link";
import Image from "next/image";
import { Play, Mic } from "lucide-react";

import type { Podcast } from "@/types";
import { SectionHeader } from "@/components/features/section-header";

interface PodcastCarouselProps {
  items: Podcast[];
}

export function PodcastCarousel({ items }: PodcastCarouselProps) {
  return (
    <section aria-labelledby="podcasts-heading">
      <SectionHeader
        title="بودكاست النبراس"
        href="/podcasts"
        icon={<Mic className="h-5 w-5 text-primary" />}
      />
      <div className="-mx-4 sm:mx-0 overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 sm:px-0">
          {items.map((p) => (
            <article
              key={p.id}
              className="group flex-none w-56 sm:w-60"
            >
              <Link
                href={`/podcasts`}
                className="block aspect-square relative overflow-hidden rounded-md bg-muted"
              >
                <Image
                  src={p.coverImage}
                  alt=""
                  fill
                  sizes="240px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                    <Play className="h-6 w-6 ms-0.5" fill="currentColor" />
                  </span>
                </div>
                <span className="absolute bottom-2 end-2 rounded-sm bg-black/70 text-white text-[10px] font-semibold px-1.5 py-0.5">
                  {p.duration}
                </span>
              </Link>
              <div className="pt-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                  حلقة {p.episodeNumber} · {p.category.name}
                </span>
                <h3 className="mt-1 text-sm font-bold leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  {p.host.name}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
