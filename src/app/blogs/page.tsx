import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/features/page-header";
import { RelativeTime } from "@/components/features/relative-time";
import { mockBlogs } from "@/lib/mock-data";

export const metadata = {
  title: "مدوّنات ورأي — النبراس",
  description: "أصوات حرّة، آراء متنوّعة، ومدوّنات شخصية من كتّاب المنصة.",
};

export default function BlogsPage() {
  return (
    <main id="main-content" className="flex-1">
      <Container>
        <PageHeader
          eyebrow="مدوّنات ورأي"
          title="أصوات حرّة وآراء متنوّعة"
          description="مساحة مفتوحة لكتّابنا للتعبير عن آرائهم الشخصية وقراءاتهم النقدية للأحداث والظواهر."
        />
      </Container>

      <Container className="py-10 md:py-14">
        <div className="grid gap-10 md:grid-cols-2">
          {mockBlogs.map((b) => (
            <article
              key={b.id}
              className="group border-b border-border pb-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden bg-muted flex-none">
                  <Image
                    src={b.author.avatar}
                    alt={b.author.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold">{b.author.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {b.author.role}
                  </p>
                </div>
              </div>
              <Link href={`/blogs/${b.slug}`}>
                <h2 className="text-2xl md:text-3xl font-bold serif leading-snug group-hover:text-primary transition-colors text-balance">
                  {b.title}
                </h2>
              </Link>
              <p className="mt-3 text-base text-muted-foreground line-clamp-3 leading-relaxed">
                {b.summary}
              </p>
              <p className="mt-4 text-xs text-muted-foreground">
                <RelativeTime date={b.publishedAt} />
                <span className="mx-2">·</span>
                <span>{b.readingMinutes} دقائق قراءة</span>
              </p>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
