"use client";

import { useMemo, useState } from "react";
import { Filter, Search as SearchIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Input } from "@/components/ui/input";
import { ContentCard } from "@/components/features/content-card";
import { PageHeader } from "@/components/features/page-header";
import { getAllContent, mockCategories } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);

  const all = useMemo(() => getAllContent(), []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return all.filter((c) => {
      if (q && !c.title.toLowerCase().includes(q) && !c.summary.toLowerCase().includes(q)) {
        return false;
      }
      if (category && c.category.slug !== category) return false;
      if (type && c.type !== type) return false;
      return true;
    });
  }, [query, category, type, all]);

  return (
    <main id="main-content" className="flex-1">
      <Container>
        <PageHeader
          eyebrow="بحث"
          title="ابحث في أرشيف النبراس"
          description="ابحث في آلاف المقالات والأخبار والمدوّنات والحلقات الصوتية."
        />
      </Container>
      <Container className="py-8">
        <div className="relative max-w-2xl mx-auto">
          <SearchIcon className="absolute end-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث عن مقال، خبر، أو موضوع…"
            className="h-14 pe-12 text-base"
          />
        </div>

        {/* Filters */}
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <div className="inline-flex items-center gap-2 text-sm font-semibold">
            <Filter className="h-4 w-4" />
            تصفية:
          </div>

          <div className="flex flex-wrap gap-2">
            <FilterPill
              active={type === null}
              onClick={() => setType(null)}
              label="جميع الأنواع"
            />
            <FilterPill
              active={type === "news"}
              onClick={() => setType("news")}
              label="أخبار"
            />
            <FilterPill
              active={type === "article"}
              onClick={() => setType("article")}
              label="مقالات"
            />
            <FilterPill
              active={type === "blog"}
              onClick={() => setType("blog")}
              label="مدوّنات"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <FilterPill
              active={category === null}
              onClick={() => setCategory(null)}
              label="جميع الأقسام"
            />
            {mockCategories.map((c) => (
              <FilterPill
                key={c.id}
                active={category === c.slug}
                onClick={() => setCategory(c.slug)}
                label={c.name}
              />
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mt-10">
          <p className="text-sm text-muted-foreground mb-6">
            عُثر على <span className="font-bold text-foreground">{results.length}</span> نتيجة
          </p>
          {results.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg font-semibold mb-2">
                لا توجد نتائج مطابقة
              </p>
              <p className="text-sm text-muted-foreground">
                جرّب كلمات مفتاحية مختلفة أو غيّر الفلاتر أعلاه.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {results.map((r) => (
                <ContentCard key={r.id} item={r} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </main>
  );
}

function FilterPill({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
        active
          ? "bg-primary text-primary-foreground border-primary"
          : "border-border text-muted-foreground hover:border-primary hover:text-primary",
      )}
    >
      {label}
    </button>
  );
}
