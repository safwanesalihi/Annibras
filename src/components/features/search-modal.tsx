"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { getAllContent, mockCategories } from "@/lib/mock-data";

interface SearchModalProps {
  trigger: React.ReactNode;
}

export function SearchModal({ trigger }: SearchModalProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const all = useMemo(() => getAllContent(), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return all.slice(0, 8);
    return all
      .filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.summary.toLowerCase().includes(q) ||
          c.category.name.toLowerCase().includes(q),
      )
      .slice(0, 12);
  }, [query, all]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2"
        aria-label="فتح البحث"
      >
        {trigger}
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="top-[15%] translate-y-0 max-w-2xl p-0 gap-0">
          <DialogTitle className="sr-only">البحث</DialogTitle>
          <div className="flex items-center gap-3 border-b border-border px-4">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ابحث عن مقالات وأخبار…"
              className="border-0 focus-visible:ring-0 h-14 text-base px-0"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground"
              aria-label="إغلاق"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="max-h-[60vh] overflow-y-auto p-2">
            {query.trim() === "" && (
              <div className="px-3 pt-3 pb-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  الأقسام الشائعة
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {mockCategories.slice(0, 6).map((c) => (
                    <Link
                      key={c.id}
                      href={`/category/${c.slug}`}
                      onClick={() => setOpen(false)}
                      className="rounded-full border border-border px-3 py-1 text-xs hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <p className="px-3 pt-2 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {query.trim() === "" ? "أحدث المحتوى" : `نتائج البحث (${filtered.length})`}
            </p>

            {filtered.length === 0 ? (
              <div className="px-4 py-12 text-center text-sm text-muted-foreground">
                لا توجد نتائج مطابقة. حاول بكلمات مفتاحية أخرى.
              </div>
            ) : (
              <ul>
                {filtered.map((c) => (
                  <li key={c.id}>
                    <Link
                      href={`/${c.type === "news" ? "news" : c.type === "blog" ? "blogs" : "articles"}/${c.slug}`}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-start gap-3 rounded-md p-3 hover:bg-muted transition-colors",
                      )}
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-primary mb-1">
                          {c.category.name}
                        </p>
                        <p className="text-sm font-semibold line-clamp-1">
                          {c.title}
                        </p>
                        <p className="text-xs text-muted-foreground line-clamp-1 mt-1">
                          {c.summary}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
