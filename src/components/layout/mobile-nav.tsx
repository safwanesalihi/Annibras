"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { mockCategories } from "@/lib/mock-data";
import { Logo } from "@/components/ui/logo";

const NAV = [
  { label: "الرئيسية", href: "/" },
  { label: "أخبار", href: "/news" },
  { label: "مقالات", href: "/articles" },
  { label: "بودكاست", href: "/podcasts" },
  { label: "مدونات", href: "/blogs" },
  { label: "عن المنصة", href: "/about" },
  { label: "اتصل بنا", href: "/contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="فتح القائمة"
        className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-muted"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity md:hidden",
          open ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      />

      {/* Drawer — slides from the right side (RTL = start side visually) */}
      <aside
        className={cn(
          "fixed inset-y-0 end-0 z-50 w-80 max-w-[85vw] bg-background shadow-2xl md:hidden transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full rtl:-translate-x-full",
        )}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <Link href="/" aria-label="النبراس" className="text-primary">
            <Logo className="h-7 w-auto" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="إغلاق القائمة"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground hover:bg-muted"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="overflow-y-auto h-[calc(100%-65px)]">
          <ul className="p-2">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between rounded-md px-3 py-3 text-sm font-medium",
                      active
                        ? "bg-accent text-primary"
                        : "text-foreground hover:bg-muted",
                    )}
                  >
                    {item.label}
                    {active && (
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    )}
                  </Link>
                </li>
              );
            })}

            <li>
              <button
                type="button"
                onClick={() => setCategoriesOpen((v) => !v)}
                className="w-full flex items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-foreground hover:bg-muted"
              >
                <span>الأقسام</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    categoriesOpen && "rotate-180",
                  )}
                />
              </button>
              {categoriesOpen && (
                <ul className="ps-3 mt-1 mb-2 border-s-2 border-border ms-3">
                  {mockCategories.map((c) => (
                    <li key={c.id}>
                      <Link
                        href={`/category/${c.slug}`}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary"
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          <div className="border-t border-border p-4 space-y-2">
            <Link
              href="#"
              className="block w-full rounded-md border border-border px-4 py-2.5 text-center text-sm font-medium hover:bg-muted"
            >
              دخول
            </Link>
            <Link
              href="#"
              className="block w-full rounded-md bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              اشترك في النشرة
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}
