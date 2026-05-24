"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Search } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/ui/social-icons";
import { useSyncExternalStore } from "react";

import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { SearchModal } from "@/components/features/search-modal";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Logo } from "@/components/ui/logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatArabicLongDate } from "@/lib/utils";
import { mockCategories } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const PRIMARY_NAV = [
  { label: "الرئيسية", href: "/" },
  { label: "أخبار", href: "/news" },
  { label: "مقالات", href: "/articles" },
  { label: "بودكاست", href: "/podcasts" },
  { label: "مدونات", href: "/blogs" },
  { label: "الجغرافيا", href: "/category/politics" },
];

const SOCIAL_LINKS = [
  { label: "فيسبوك", href: "#", Icon: FacebookIcon },
  { label: "تويتر", href: "#", Icon: TwitterIcon },
  { label: "إنستغرام", href: "#", Icon: InstagramIcon },
  { label: "يوتيوب", href: "#", Icon: YoutubeIcon },
];

const subscribe = () => () => {};
const getClientDate = () => formatArabicLongDate(new Date());
const getServerDate = () => "";

export function MainNav() {
  const pathname = usePathname();
  const today = useSyncExternalStore(subscribe, getClientDate, getServerDate);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Tier 1 — Utility bar */}
      <div className="bg-nav-bg text-nav-foreground">
        <Container className="flex h-10 items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-nav-foreground/80">
              {today || " "}
            </span>
            <div className="flex items-center gap-1">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full text-nav-foreground/80 hover:bg-white/10 hover:text-nav-foreground transition-colors"
                >
                  <Icon className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <SearchModal
              trigger={
                <span className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-nav-foreground/70 hover:text-nav-foreground hover:bg-white/10 transition-colors">
                  <Search className="h-3.5 w-3.5" />
                  <span>بحث</span>
                  <kbd className="font-mono text-[10px] rounded bg-white/10 px-1.5 py-0.5">
                    ⌘K
                  </kbd>
                </span>
              }
            />
            <SearchModal
              trigger={
                <span
                  className="inline-flex sm:hidden h-7 w-7 items-center justify-center rounded-md text-nav-foreground/80 hover:bg-white/10"
                  aria-label="بحث"
                >
                  <Search className="h-4 w-4" />
                </span>
              }
            />
            <ThemeToggle />
            <Link
              href="#"
              className="hidden sm:inline-flex h-8 items-center px-3 text-xs font-medium text-nav-foreground/90 hover:text-nav-foreground rounded-md hover:bg-white/10 transition-colors"
            >
              دخول
            </Link>
            <Link
              href="#"
              className="inline-flex h-8 items-center px-3 text-xs font-semibold bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              اشترك
            </Link>
          </div>
        </Container>
      </div>

      {/* Tier 2 — Logo bar */}
      <div className="bg-background border-b border-border">
        <Container className="flex h-20 md:h-24 items-center justify-between gap-4">
          <MobileNav />
          <div className="flex-1 flex justify-center">
            <Link
              href="/"
              aria-label="النبراس — الصفحة الرئيسية"
              className="inline-flex flex-col items-center text-primary"
            >
              <Logo className="h-9 md:h-12 w-auto" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1.5 hidden sm:inline">
                AN-NIBRAS · منصة الأخبار والمقالات
              </span>
            </Link>
          </div>
          <div className="w-10 md:w-32" aria-hidden="true" />
        </Container>
      </div>

      {/* Tier 3 — Category nav */}
      <div className="bg-background border-b border-border hidden md:block">
        <Container>
          <nav
            aria-label="التنقل الرئيسي"
            className="flex items-center justify-center gap-1 h-12"
          >
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative inline-flex items-center px-4 py-3 text-sm font-semibold transition-colors hover:text-primary",
                  isActive(item.href)
                    ? "text-primary"
                    : "text-foreground/80",
                )}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute inset-x-3 bottom-0 h-0.5 bg-primary" />
                )}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center gap-1 px-4 py-3 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors">
                الأقسام
                <ChevronDown className="h-3.5 w-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {mockCategories.map((c) => (
                  <DropdownMenuItem key={c.id} asChild>
                    <Link
                      href={`/category/${c.slug}`}
                      className="cursor-pointer"
                    >
                      {c.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </Container>
      </div>
    </header>
  );
}
