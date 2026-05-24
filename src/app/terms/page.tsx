import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/features/page-header";

export const metadata = {
  title: "شروط الاستخدام — النبراس",
};

export default function TermsPage() {
  return (
    <main id="main-content" className="flex-1">
      <Container>
        <PageHeader eyebrow="شروط الاستخدام" title="شروط استخدام المنصّة" />
      </Container>
      <Container className="py-10 md:py-14">
        <div className="prose prose-lg max-w-3xl">
          <p>
            باستخدامك منصّة النبراس، فأنت تُوافق على الشروط التالية. نَدعوك إلى
            قراءتها بعناية قبل المتابعة.
          </p>
          <h2>الملكية الفكرية</h2>
          <p>
            جميع المحتويات المنشورة على المنصّة (نصوص، صور، تسجيلات صوتية،
            مقاطع فيديو) هي ملك خاصّ لمنصّة النبراس أو لأصحابها الأصليّين، ولا
            يَجوز إعادة نشرها دون إذن خطّي مسبق.
          </p>
          <h2>التعليقات والمشاركة</h2>
          <p>
            نرحّب بمشاركتك في النقاشات، شريطة الالتزام بآداب الحوار واحترام
            الآراء المخالفة. نَحتفظ بحقّ حذف أيّ تعليق يَخرج عن هذه الآداب.
          </p>
          <h2>إخلاء المسؤولية</h2>
          <p>
            نَسعى لتقديم محتوى دقيق، لكنّنا لا نَتحمّل أيّ مسؤولية عن قرارات
            تَتّخذها بناءً على ما تَقرأه على المنصّة. تَبقى مسؤولية التحقّق من
            المعلومات قبل التصرّف بها على عاتقك.
          </p>
        </div>
      </Container>
    </main>
  );
}
