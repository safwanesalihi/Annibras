import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { MainNav } from "@/components/layout/main-nav";
import { Footer } from "@/components/layout/footer";

const readex = Readex_Pro({
  variable: "--font-readex",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const lyon = localFont({
  variable: "--font-lyon",
  display: "swap",
  src: [
    {
      path: "../../public/fonts/lyon-arabic-display-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/lyon-arabic-display-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/lyon-arabic-display-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/lyon-arabic-display-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/lyon-arabic-display-black.otf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "النبراس — منصة الأخبار والمقالات والبودكاست",
  description:
    "منصة النبراس: مصدرك للأخبار العاجلة والمقالات التحليلية والبودكاست والمدونات باللغة العربية.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${readex.variable} ${lyon.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <a href="#main-content" className="skip-link">
            تخطَّ إلى المحتوى الرئيسي
          </a>
          <MainNav />
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
