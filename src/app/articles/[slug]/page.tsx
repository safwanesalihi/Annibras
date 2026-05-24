import { notFound } from "next/navigation";

import { ArticleDetail } from "@/components/features/article-detail";
import { mockArticles } from "@/lib/mock-data";

export function generateStaticParams() {
  return mockArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = mockArticles.find((a) => a.slug === slug);
  if (!item) return { title: "غير موجود — النبراس" };
  return {
    title: `${item.title} — النبراس`,
    description: item.summary,
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = mockArticles.find((a) => a.slug === slug);
  if (!item) notFound();
  return <ArticleDetail item={item} />;
}
