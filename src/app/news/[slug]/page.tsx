import { notFound } from "next/navigation";

import { ArticleDetail } from "@/components/features/article-detail";
import { mockNews } from "@/lib/mock-data";

export function generateStaticParams() {
  return mockNews.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = mockNews.find((n) => n.slug === slug);
  if (!item) return { title: "غير موجود — النبراس" };
  return {
    title: `${item.title} — النبراس`,
    description: item.summary,
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = mockNews.find((n) => n.slug === slug);
  if (!item) notFound();
  return <ArticleDetail item={item} />;
}
