import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/features/page-header";

export const metadata = {
  title: "سياسة الخصوصية — النبراس",
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="flex-1">
      <Container>
        <PageHeader eyebrow="سياسة الخصوصية" title="كيف نحمي خصوصيتك" />
      </Container>
      <Container className="py-10 md:py-14">
        <div className="prose prose-lg max-w-3xl">
          <p>
            نَلتزم في منصّة النبراس بحماية خصوصية مستخدمينا، ونتعامل مع بياناتهم
            وفق أعلى المعايير. هذه الوثيقة تَشرح أنواع البيانات التي قد نَجمعها
            وكيف نَستخدمها.
          </p>
          <h2>البيانات التي نَجمعها</h2>
          <p>
            نَجمع البيانات الضرورية فقط لتشغيل خدماتنا: بريدك الإلكتروني عند
            الاشتراك في النشرة، وتفضيلاتك في القراءة، وبيانات إحصائية مُجمَّعة
            عن استخدام الموقع.
          </p>
          <h2>كيف نَستخدم البيانات</h2>
          <p>
            نَستخدم البيانات لتحسين تجربتك وتقديم محتوى ذي صلة باهتماماتك، ولا
            نُشاركها مع أيّ طرف ثالث لأغراض إعلانية.
          </p>
          <h2>حقوقك</h2>
          <p>
            يَحق لك في أي وقت طلب الاطّلاع على بياناتك، أو تصحيحها، أو حذفها
            بشكل كامل من أنظمتنا.
          </p>
        </div>
      </Container>
    </main>
  );
}
