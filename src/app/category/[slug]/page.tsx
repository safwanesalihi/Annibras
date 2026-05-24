import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { CategoryPills } from "@/components/features/category-pills";
import { ContentCard } from "@/components/features/content-card";
import { PageHeader } from "@/components/features/page-header";
import { findContentByCategory, mockCategories } from "@/lib/mock-data";

export function generateStaticParams() {
  return mockCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = mockCategories.find((c) => c.slug === slug);
  if (!cat) return { title: "قسم — النبراس" };
  return {
    title: `${cat.name} — النبراس`,
    description: `أحدث ما نُشر في قسم ${cat.name}.`,
  };
}

const CATEGORY_TAGLINES: Record<string, string> = {
  politics:
    "تحليلات وأخبار سياسية إقليمية ودولية، من غرفة الأخبار وكتّاب المنصة.",
  economy:
    "تغطية الأسواق والشركات والاقتصاد الكلي، مع قراءات تحليلية معمّقة.",
  culture: "ملف الثقافة والفنون والأدب والسينما والمعارض.",
  sports: "تغطية البطولات وأخبار الأندية والرياضيين على المستويين العربي والعالمي.",
  tech: "آخر مستجدات التكنولوجيا والابتكار والذكاء الاصطناعي.",
  health: "موضوعات الصحة العامة والطب والصحة النفسية.",
  science: "أبرز الاكتشافات والأخبار العلمية في مختلف المجالات.",
  opinion: "آراء ومدوّنات وأصوات حرّة من كتّاب المنصة.",
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = mockCategories.find((c) => c.slug === slug);
  if (!cat) notFound();

  const items = findContentByCategory(slug);

  return (
    <main id="main-content" className="flex-1">
      <Container>
        <PageHeader
          eyebrow="قسم"
          title={cat.name}
          description={CATEGORY_TAGLINES[slug] ?? "أحدث المنشورات في هذا القسم."}
        />
      </Container>
      <Container className="py-4">
        <CategoryPills activeSlug={slug} includeAll={false} />
      </Container>
      <Container className="py-8 md:py-10">
        {items.length === 0 ? (
          <p className="text-center py-20 text-muted-foreground">
            لا توجد منشورات بعد في هذا القسم.
          </p>
        ) : (
          <>
            <div className="mb-10">
              <ContentCard item={items[0]} variant="feature" />
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {items.slice(1).map((item) => (
                <ContentCard key={item.id} item={item} />
              ))}
            </div>
          </>
        )}
      </Container>
    </main>
  );
}
