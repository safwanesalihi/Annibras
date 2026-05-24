import { Container } from "@/components/layout/container";
import { CategoryPills } from "@/components/features/category-pills";
import { ContentCard } from "@/components/features/content-card";
import { PageHeader } from "@/components/features/page-header";
import { mockNews } from "@/lib/mock-data";

export const metadata = {
  title: "أخبار — النبراس",
  description: "أحدث الأخبار المحلية والدولية من فريق تحرير منصة النبراس.",
};

export default function NewsPage() {
  const [featured, ...rest] = mockNews;
  return (
    <main id="main-content" className="flex-1">
      <Container>
        <PageHeader
          eyebrow="غرفة الأخبار"
          title="أحدث الأخبار"
          description="تابع مستجدات الأحداث المحلية والدولية لحظة بلحظة، مع تغطية شاملة وتحقق من المصادر."
        />
      </Container>
      <Container className="py-4">
        <CategoryPills baseHref="/category" />
      </Container>
      <Container className="py-8 md:py-10">
        <div className="mb-10">
          <ContentCard item={featured} variant="feature" />
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </main>
  );
}
