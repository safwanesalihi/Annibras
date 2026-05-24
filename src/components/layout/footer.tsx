"use client";

import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/ui/social-icons";
import { useState } from "react";

import { Container } from "@/components/layout/container";
import { Logo } from "@/components/ui/logo";
import { mockCategories } from "@/lib/mock-data";

const SECTION_LINKS = mockCategories.slice(0, 6);

const ABOUT_LINKS = [
  { label: "عن المنصة", href: "/about" },
  { label: "اتصل بنا", href: "/contact" },
  { label: "سياسة الخصوصية", href: "/privacy" },
  { label: "شروط الاستخدام", href: "/terms" },
];

const ACCOUNT_LINKS = [
  { label: "تسجيل الدخول", href: "#" },
  { label: "إنشاء حساب", href: "#" },
  { label: "النشرة البريدية", href: "#" },
  { label: "المفضلة", href: "#" },
];

const SOCIAL_LINKS = [
  { label: "فيسبوك", href: "#", Icon: FacebookIcon },
  { label: "تويتر", href: "#", Icon: TwitterIcon },
  { label: "إنستغرام", href: "#", Icon: InstagramIcon },
  { label: "يوتيوب", href: "#", Icon: YoutubeIcon },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer className="mt-16 bg-secondary text-secondary-foreground">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <Container className="py-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold serif mb-2">
                النشرة البريدية الأسبوعية
              </h2>
              <p className="text-sm text-white/70 leading-relaxed">
                احصل على ملخص أبرز ما نشرناه خلال الأسبوع، مباشرة إلى بريدك صباح
                كل يوم سبت. لا رسائل غير مرغوب فيها.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!email.trim()) return;
                setSubmitted(true);
                setEmail("");
                setTimeout(() => setSubmitted(false), 3500);
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="بريدك الإلكتروني"
                className="flex-1 h-12 rounded-md bg-white/5 border border-white/10 px-4 text-sm placeholder:text-white/40 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <button
                type="submit"
                className="h-12 px-6 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                اشترك
              </button>
            </form>
          </div>
          {submitted && (
            <p
              role="status"
              className="mt-3 inline-block rounded-md bg-primary/15 px-3 py-1.5 text-xs text-primary-foreground border border-primary/30"
            >
              تم الاشتراك بنجاح. شكراً لانضمامك إلى نشرتنا.
            </p>
          )}
        </Container>
      </div>

      {/* Columns */}
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              href="/"
              aria-label="النبراس — الصفحة الرئيسية"
              className="inline-block text-white"
            >
              <Logo className="h-9 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-md">
              منصة النبراس: مصدرك للأخبار العاجلة والتحليلات المعمقة والمقالات
              الرصينة في السياسة والاقتصاد والثقافة والتكنولوجيا، باللغة العربية.
            </p>
          </div>

          <FooterColumn title="الأقسام">
            {SECTION_LINKS.map((c) => (
              <FooterLink key={c.id} href={`/category/${c.slug}`}>
                {c.name}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="عن المنصة">
            {ABOUT_LINKS.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="الحساب">
            {ACCOUNT_LINKS.map((l) => (
              <FooterLink key={l.label} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterColumn>
        </div>

        {/* Social */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-white/50 mb-3">
              تابعنا
            </p>
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-primary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-black/30">
        <Container className="py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-white/50">
          <p>© 2026 منصة النبراس. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white">
              الخصوصية
            </Link>
            <Link href="/terms" className="hover:text-white">
              الاستخدام
            </Link>
            <Link href="/contact" className="hover:text-white">
              تواصل
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-sm font-bold mb-4 text-white">{title}</h3>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-white/60 hover:text-white transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
