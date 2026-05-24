import { notFound } from "next/navigation";

import { ArticleDetail } from "@/components/features/article-detail";
import { mockBlogs } from "@/lib/mock-data";

export function generateStaticParams() {
  return mockBlogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = mockBlogs.find((b) => b.slug === slug);
  if (!item) return { title: "غير موجود — النبراس" };
  return {
    title: `${item.title} — النبراس`,
    description: item.summary,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = mockBlogs.find((b) => b.slug === slug);
  if (!item) notFound();
  return <ArticleDetail item={item} />;
}
