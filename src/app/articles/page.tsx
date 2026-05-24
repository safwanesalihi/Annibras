import { Container } from "@/components/layout/container";
import { CategoryPills } from "@/components/features/category-pills";
import { ContentCard } from "@/components/features/content-card";
import { PageHeader } from "@/components/features/page-header";
import { TrendingSection } from "@/components/features/trending-section";
import { mockArticles, mockNews } from "@/lib/mock-data";

export const metadata = {
  title: "مقالات وتحليلات — النبراس",
  description: "مقالات تحليلية معمّقة، تغطي السياسة والاقتصاد والثقافة والتكنولوجيا.",
};

export default function ArticlesPage() {
  return (
    <main id="main-content" className="flex-1">
      <Container>
        <PageHeader
          eyebrow="مقالات وتحليلات"
          title="قراءات معمّقة وآراء وتحليلات"
          description="ملف أسبوعي من المقالات الرصينة من كتّاب وباحثين، نتأمل فيها أبرز ما يجري في المنطقة والعالم."
        />
      </Container>
      <Container className="py-4">
        <CategoryPills baseHref="/category" />
      </Container>
      <Container className="py-8 md:py-10">
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="grid gap-8 sm:grid-cols-2">
              {mockArticles.map((item) => (
                <ContentCard key={item.id} item={item} />
              ))}
            </div>
          </div>
          <aside className="space-y-10">
            <TrendingSection items={mockNews.slice(0, 5)} />
          </aside>
        </div>
      </Container>
    </main>
  );
}
