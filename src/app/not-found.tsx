import Link from "next/link";

import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <main id="main-content" className="flex-1">
      <Container className="py-24 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">
          خطأ ٤٠٤
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold serif mb-4">
          الصفحة غير موجودة
        </h1>
        <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8">
          ربّما تَمّ نَقل هذه الصفحة أو حَذفها، أو أنّك أَدخلت رابطاً غير صحيح.
        </p>
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          العودة إلى الرئيسية
        </Link>
      </Container>
    </main>
  );
}
