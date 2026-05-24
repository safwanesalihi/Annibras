import { Container } from "@/components/layout/container";
import { BreakingNewsBar } from "@/components/features/breaking-news-bar";
import { HeroSection } from "@/components/features/hero-section";
import { CategoryPills } from "@/components/features/category-pills";
import { LatestNewsGrid } from "@/components/features/latest-news-grid";
import { TrendingSection } from "@/components/features/trending-section";
import { OpinionColumn } from "@/components/features/opinion-column";
import { PodcastCarousel } from "@/components/features/podcast-carousel";
import { SectionHeader } from "@/components/features/section-header";
import { ContentCard } from "@/components/features/content-card";
import {
  mockArticles,
  mockBlogs,
  mockNews,
  mockPodcasts,
} from "@/lib/mock-data";

export default function HomePage() {
  const heroItems = mockNews.slice(0, 3);
  const latestNews = mockNews.slice(3, 9);
  const trending = mockArticles.slice(0, 5);
  const articles = mockArticles.slice(0, 4);
  const opinion = mockBlogs.slice(0, 3);

  return (
    <>
      <BreakingNewsBar />
      <main id="main-content" className="flex-1">
        <Container className="py-6 md:py-10">
          <HeroSection items={heroItems} />
        </Container>

        <Container>
          <CategoryPills />
        </Container>

        <Container className="py-10 md:py-14">
          <LatestNewsGrid items={latestNews} />
        </Container>

        <Container className="py-10 md:py-14 border-t border-border">
          <div className="grid gap-10 lg:gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <SectionHeader title="مقالات وتحليلات" href="/articles" />
              <div className="space-y-0">
                {articles.map((a) => (
                  <ContentCard key={a.id} item={a} variant="row" />
                ))}
              </div>
            </div>
            <div>
              <TrendingSection items={trending} />
            </div>
          </div>
        </Container>

        <div className="bg-surface border-y border-border">
          <Container className="py-10 md:py-14">
            <PodcastCarousel items={mockPodcasts} />
          </Container>
        </div>

        <Container className="py-10 md:py-14">
          <OpinionColumn items={opinion} />
        </Container>

        <Container className="py-10 md:py-14 border-t border-border">
          <SectionHeader title="من الأقسام" href="/articles" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {mockArticles.slice(4, 8).map((a) => (
              <ContentCard key={a.id} item={a} variant="compact" />
            ))}
          </div>
        </Container>
      </main>
    </>
  );
}
