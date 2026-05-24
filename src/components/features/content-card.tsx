import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";

import type { Article, BlogPost, NewsItem } from "@/types";
import { RelativeTime } from "@/components/features/relative-time";
import { cn } from "@/lib/utils";

type Content = Article | NewsItem | BlogPost;

interface ContentCardProps {
  item: Content;
  variant?: "default" | "compact" | "feature" | "row";
  className?: string;
}

function hrefFor(item: Content) {
  if (item.type === "news") return `/news/${item.slug}`;
  if (item.type === "blog") return `/blogs/${item.slug}`;
  return `/articles/${item.slug}`;
}

export function ContentCard({
  item,
  variant = "default",
  className,
}: ContentCardProps) {
  const href = hrefFor(item);

  if (variant === "row") {
    return (
      <article
        className={cn(
          "group flex gap-4 py-4 border-b border-border last:border-b-0",
          className,
        )}
      >
        <Link
          href={href}
          className="block flex-none w-32 h-24 relative overflow-hidden rounded-md bg-muted"
          aria-label={item.title}
        >
          <Image
            src={item.coverImage}
            alt=""
            fill
            sizes="128px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="flex-1 min-w-0">
          <Link
            href={`/category/${item.category.slug}`}
            className="text-[10px] font-bold uppercase tracking-wider text-primary"
          >
            {item.category.name}
          </Link>
          <h3 className="mt-1 text-base font-bold leading-snug line-clamp-2 group-hover:text-primary transition-colors">
            <Link href={href}>{item.title}</Link>
          </h3>
          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <RelativeTime date={item.publishedAt} />
          </p>
        </div>
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <article className={cn("group", className)}>
        <Link
          href={href}
          className="block aspect-[16/10] relative overflow-hidden rounded-md bg-muted"
          aria-label={item.title}
        >
          <Image
            src={item.coverImage}
            alt=""
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="pt-3">
          <Link
            href={`/category/${item.category.slug}`}
            className="text-[10px] font-bold uppercase tracking-wider text-primary"
          >
            {item.category.name}
          </Link>
          <h3 className="mt-1.5 text-sm font-bold leading-snug line-clamp-2 group-hover:text-primary transition-colors">
            <Link href={href}>{item.title}</Link>
          </h3>
          <p className="mt-1.5 text-[11px] text-muted-foreground">
            <RelativeTime date={item.publishedAt} />
          </p>
        </div>
      </article>
    );
  }

  if (variant === "feature") {
    return (
      <article className={cn("group relative overflow-hidden", className)}>
        <Link
          href={href}
          className="absolute inset-0 z-10"
          aria-label={item.title}
        />
        <div className="relative aspect-[16/10] md:aspect-[4/5] lg:aspect-[4/3] bg-muted overflow-hidden">
          <Image
            src={item.coverImage}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-8 text-white">
            <span className="inline-flex w-fit text-[10px] font-bold uppercase tracking-wider bg-primary text-primary-foreground px-2 py-1 rounded-sm">
              {item.category.name}
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight serif text-balance">
              {item.title}
            </h2>
            <p className="mt-3 text-sm md:text-base text-white/85 max-w-2xl line-clamp-2">
              {item.summary}
            </p>
            <div className="mt-4 flex items-center gap-3 text-xs text-white/75">
              <span>{item.author.name}</span>
              <span className="h-0.5 w-0.5 rounded-full bg-white/50" />
              <RelativeTime date={item.publishedAt} />
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={cn("group", className)}>
      <Link
        href={href}
        className="block aspect-[16/10] relative overflow-hidden rounded-md bg-muted"
        aria-label={item.title}
      >
        <Image
          src={item.coverImage}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="pt-4">
        <Link
          href={`/category/${item.category.slug}`}
          className="text-[11px] font-bold uppercase tracking-wider text-primary"
        >
          {item.category.name}
        </Link>
        <h3 className="mt-2 text-lg font-bold leading-snug line-clamp-2 group-hover:text-primary transition-colors serif">
          <Link href={href}>{item.title}</Link>
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {item.summary}
        </p>
        <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <RelativeTime date={item.publishedAt} />
        </p>
      </div>
    </article>
  );
}
