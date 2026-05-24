import Image from "next/image";
import Link from "next/link";
import { Headphones, Play } from "lucide-react";

import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/features/page-header";
import { RelativeTime } from "@/components/features/relative-time";
import { mockPodcasts } from "@/lib/mock-data";

export const metadata = {
  title: "بودكاست — النبراس",
  description: "حلقات بودكاست أسبوعية في السياسة والثقافة والتكنولوجيا.",
};

export default function PodcastsPage() {
  const [featured, ...rest] = mockPodcasts;

  return (
    <main id="main-content" className="flex-1">
      <Container>
        <PageHeader
          eyebrow="بودكاست"
          title="حلقات صوتية أسبوعية"
          description="حوارات وتحليلات صوتية مع أبرز الباحثين والكتّاب والصحفيين، تتاح كل أسبوع."
        />
      </Container>

      <Container className="py-10 md:py-14">
        {/* Featured episode */}
        <article className="grid gap-6 md:grid-cols-2 md:items-center bg-surface border border-border rounded-lg overflow-hidden">
          <div className="relative aspect-square md:aspect-auto md:h-full bg-muted">
            <Image
              src={featured.coverImage}
              alt=""
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group">
              <button
                type="button"
                aria-label="تشغيل الحلقة"
                className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl hover:scale-105 transition-transform"
              >
                <Play className="h-8 w-8 ms-1" fill="currentColor" />
              </button>
            </div>
          </div>
          <div className="p-6 md:p-10">
            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
              الحلقة الأحدث · {featured.duration}
            </p>
            <h2 className="text-2xl md:text-4xl font-bold serif leading-tight text-balance">
              {featured.title}
            </h2>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              {featured.description}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-full overflow-hidden bg-muted">
                <Image
                  src={featured.host.avatar}
                  alt={featured.host.name}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold">{featured.host.name}</p>
                <p className="text-xs text-muted-foreground">
                  <RelativeTime date={featured.publishedAt} />
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Episode list */}
        <div className="mt-12">
          <div className="flex items-center gap-3 border-b-2 border-primary pb-3 mb-6">
            <Headphones className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold serif">جميع الحلقات</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <article key={p.id} className="group">
                <Link
                  href={`/podcasts`}
                  className="block relative aspect-square rounded-md overflow-hidden bg-muted"
                >
                  <Image
                    src={p.coverImage}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Play className="h-6 w-6 ms-0.5" fill="currentColor" />
                    </span>
                  </div>
                  <span className="absolute bottom-3 end-3 rounded-sm bg-black/70 text-white text-xs font-semibold px-2 py-1">
                    {p.duration}
                  </span>
                </Link>
                <div className="pt-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-primary">
                    حلقة {p.episodeNumber} · {p.category.name}
                  </p>
                  <h3 className="mt-1.5 text-lg font-bold leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    {p.host.name} ·{" "}
                    <RelativeTime date={p.publishedAt} />
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
