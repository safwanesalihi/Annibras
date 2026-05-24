import Image from "next/image";
import Link from "next/link";
import { Bookmark, Clock, Share2 } from "lucide-react";
import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/ui/social-icons";

import { Container } from "@/components/layout/container";
import { ContentCard } from "@/components/features/content-card";
import { formatArabicDate } from "@/lib/utils";
import { getRelatedContent } from "@/lib/mock-data";
import type { Article, BlogPost, NewsItem } from "@/types";

interface ArticleDetailProps {
  item: Article | NewsItem | BlogPost;
}

const SHARE = [
  { label: "تويتر", Icon: TwitterIcon },
  { label: "فيسبوك", Icon: FacebookIcon },
  { label: "لينكدإن", Icon: LinkedinIcon },
  { label: "مشاركة", Icon: Share2 },
];

export function ArticleDetail({ item }: ArticleDetailProps) {
  const related = getRelatedContent(item, 4);

  return (
    <main id="main-content" className="flex-1">
      <Container className="py-8 md:py-12">
        <article className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav
            aria-label="مسار التصفّح"
            className="text-xs text-muted-foreground mb-6"
          >
            <Link href="/" className="hover:text-primary">
              الرئيسية
            </Link>
            <span className="mx-2">/</span>
            <Link
              href={`/category/${item.category.slug}`}
              className="hover:text-primary"
            >
              {item.category.name}
            </Link>
          </nav>

          <Link
            href={`/category/${item.category.slug}`}
            className="inline-block text-xs font-bold uppercase tracking-wider text-primary border border-primary/30 bg-accent rounded-sm px-2.5 py-1 mb-5 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {item.category.name}
          </Link>

          <h1 className="text-3xl md:text-5xl font-extrabold serif leading-tight text-balance">
            {item.title}
          </h1>

          <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed">
            {item.summary}
          </p>

          {/* Author + Meta */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 border-y border-border py-5">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 rounded-full overflow-hidden bg-muted flex-none">
                <Image
                  src={item.author.avatar}
                  alt={item.author.name}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold">{item.author.name}</p>
                <p className="text-xs text-muted-foreground">
                  {item.author.role}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>{formatArabicDate(item.publishedAt)}</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {item.readingMinutes} دقائق قراءة
              </span>
            </div>

            <div className="ms-auto flex items-center gap-1">
              {SHARE.map(({ label, Icon }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={`مشاركة عبر ${label}`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-primary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
              <button
                type="button"
                aria-label="حفظ المقال"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-primary transition-colors"
              >
                <Bookmark className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Cover */}
          <figure className="mt-8 -mx-4 sm:mx-0">
            <div className="relative aspect-[16/9] bg-muted sm:rounded-md overflow-hidden">
              <Image
                src={item.coverImage}
                alt=""
                fill
                priority
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 px-4 sm:px-0 text-xs text-muted-foreground">
              صورة تعبيرية · {item.category.name}
            </figcaption>
          </figure>

          {/* Body */}
          <div
            className="prose prose-lg max-w-none mt-10"
            dangerouslySetInnerHTML={{ __html: item.body }}
          />

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="mt-10 pt-6 border-t border-border flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-muted-foreground me-1">
                وسوم:
              </span>
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs rounded-full border border-border px-3 py-1 text-muted-foreground hover:bg-accent hover:text-primary hover:border-primary cursor-pointer transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Author bio */}
          <div className="mt-10 p-6 bg-surface border border-border rounded-lg flex gap-4">
            <div className="relative h-16 w-16 rounded-full overflow-hidden bg-muted flex-none">
              <Image
                src={item.author.avatar}
                alt={item.author.name}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">عن الكاتب</p>
              <p className="text-base font-bold mt-0.5">{item.author.name}</p>
              <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                {item.author.bio}
              </p>
            </div>
          </div>
        </article>
      </Container>

      {/* Related */}
      {related.length > 0 && (
        <div className="bg-surface border-t border-border">
          <Container className="py-12">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 border-b-2 border-primary pb-3 mb-6">
                <span className="inline-block w-1.5 h-7 bg-primary" />
                <h2 className="text-xl font-bold serif">قد يهمّك أيضاً</h2>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {related.map((r) => (
                  <ContentCard key={r.id} item={r} variant="compact" />
                ))}
              </div>
            </div>
          </Container>
        </div>
      )}
    </main>
  );
}
