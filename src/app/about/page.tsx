import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/features/page-header";

export const metadata = {
  title: "عن المنصة — النبراس",
  description: "تعرّف على رسالة منصة النبراس وفريق التحرير وقيمنا المهنية.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="flex-1">
      <Container>
        <PageHeader
          eyebrow="عن المنصة"
          title="منصّة النبراس"
          description="منصّة إعلامية رقمية مستقلة تعمل باللغة العربية، تنشر الأخبار والتحليلات والمقالات الرصينة."
        />
      </Container>
      <Container className="py-10 md:py-14">
        <div className="prose prose-lg max-w-3xl">
          <h2>رسالتنا</h2>
          <p>
            نُؤمن بأن للقارئ العربي الحقّ في إعلام مستقل ومتأنٍّ يُقدم له الأخبار
            في سياقها، ويَفتح أمامه نوافذ على التحليلات العميقة، ويَستضيف أصواتاً
            متعددة دون انحياز إلى طرف على حساب آخر.
          </p>

          <h2>قيمنا</h2>
          <ul>
            <li>
              <strong>الدقّة قبل السرعة:</strong> نُفضّل التأنّي ونتحقّق من
              مصادرنا قبل النشر.
            </li>
            <li>
              <strong>الاستقلالية التحريرية:</strong> قرارات النشر تُتّخذ داخل
              غرفة التحرير ولا تتدخّل فيها أي جهة خارجية.
            </li>
            <li>
              <strong>التعدّدية:</strong> نَستضيف وجهات نظر مختلفة، ونُفسح
              المجال للحوار الراقي.
            </li>
            <li>
              <strong>الشفافية:</strong> نُشير إلى مصادرنا، ونُعلن عن أيّ تصحيحات
              أو إضافات لاحقة على المحتوى المنشور.
            </li>
          </ul>

          <h2>فريقنا</h2>
          <p>
            يَقف خلف منصّة النبراس فريقٌ من المحرّرين والصحفيين والكتّاب من مختلف
            الدول العربية، يَجمعهم الالتزام بأخلاقيات المهنة وحبّ اللغة العربية.
          </p>
        </div>
      </Container>
    </main>
  );
}
