import type {
  Article,
  Author,
  BlogPost,
  BreakingHeadline,
  Category,
  NewsItem,
  Podcast,
} from "@/types";

export const mockCategories: Category[] = [
  { id: "1", name: "سياسة", slug: "politics" },
  { id: "2", name: "اقتصاد", slug: "economy" },
  { id: "3", name: "ثقافة", slug: "culture" },
  { id: "4", name: "رياضة", slug: "sports" },
  { id: "5", name: "تكنولوجيا", slug: "tech" },
  { id: "6", name: "صحة", slug: "health" },
  { id: "7", name: "علوم", slug: "science" },
  { id: "8", name: "رأي", slug: "opinion" },
];

const cat = (slug: string) =>
  mockCategories.find((c) => c.slug === slug) ?? mockCategories[0];

export const mockAuthors: Author[] = [
  {
    id: "a1",
    name: "محمد اليامري",
    avatar: "/authors/el-yamri.png",
    role: "رئيس التحرير",
    bio: "صحفي وكاتب، يكتب في السياسة والاقتصاد والثقافة، ويُشرف على غرفة التحرير في منصّة النبراس.",
  },
];

const author = () => mockAuthors[0];

// One unique timestamp per item, served in newest-first order.
// Starts at 2026-05-24 20:00 UTC and steps backward with a deterministic jitter
// so no two pieces share the same publishedAt.
const DATE_ANCHOR_MS = new Date("2026-05-24T20:00:00Z").getTime();
let _dateCursor = 0;
const nextDate = (): string => {
  const i = _dateCursor++;
  const stepMs = 4.5 * 60 * 60 * 1000;
  const jitterMs = ((i * 37) % 73) * 60 * 1000;
  return new Date(DATE_ANCHOR_MS - i * stepMs - jitterMs).toISOString();
};

const longBody = `
<p>تتسارع الأحداث في المنطقة بشكل لافت، ويترقب المراقبون تطورات الساعات المقبلة عن كثب وسط تنامي المخاوف من اتساع رقعة التوتر وامتداده إلى دول الجوار. وأكدت مصادر مطلعة أن مشاورات على أعلى المستويات تجري حالياً بين عواصم القرار بهدف التوصل إلى مخرج دبلوماسي يحفظ ماء الوجه لجميع الأطراف ويضع حداً لمسار التصعيد المتواصل منذ أسابيع.</p>

<p>ومن جهتها، أعربت منظمات حقوقية دولية عن قلقها العميق إزاء الأوضاع الإنسانية المتدهورة، داعيةً المجتمع الدولي إلى التحرك الفوري لتأمين ممرات آمنة للمساعدات الإنسانية وفتح تحقيق مستقل في الانتهاكات المرتكبة بحق المدنيين.</p>

<h2>قراءة في المشهد</h2>

<p>يرى محللون أن المرحلة الحالية تشكل اختباراً حقيقياً لمنظومة الأمن الجماعي الإقليمي، وأن فشل الجهود الجارية قد يُعيد المنطقة إلى مربع الصدامات المفتوحة التي عرفتها خلال العقد الماضي. ويُضيف هؤلاء أن غياب رؤية استراتيجية موحدة بين القوى الكبرى يُعقّد المسار التفاوضي ويُطيل أمد الأزمة.</p>

<blockquote>
<p>"المنطقة على مفترق طرق، وأي خطأ في التقدير قد تكون له تبعات لا تُحمد عقباها على المدى البعيد." — مسؤول دبلوماسي رفيع</p>
</blockquote>

<p>في المقابل، تتمسك الأطراف المعنية بمواقفها التفاوضية المعلنة، وسط رهان بعض القوى على عامل الوقت لفرض وقائع جديدة على الأرض. ويُحذّر خبراء من أن استمرار حالة الجمود السياسي سيُفاقم الكلفة الاقتصادية والاجتماعية للأزمة، ويُؤثر سلباً على استقرار الأسواق وعلى مستوى الثقة بمؤسسات الحوكمة الإقليمية.</p>

<h2>السيناريوهات المحتملة</h2>

<p>يُتوقع أن يَطغى مسار الحلول الوسطى على أيِّ خيارات أخرى، نظراً لتكلفة الخيارات القصوى. ومع ذلك، لا تَستبعد بعض الأوساط احتمال انتقال الأزمة إلى مرحلة أكثر تعقيداً إذا فشل الوسطاء في فرض تفاهمات قابلة للتطبيق خلال الأسابيع المقبلة.</p>

<p>وتُجمع التحليلات على أن المخرج الأمثل يَكمن في إعادة إحياء قنوات الحوار المباشر ومُعالجة جذور الأزمة بدلاً من الاكتفاء بمعالجة أعراضها الظاهرة، مع ضرورة إشراك مكونات المجتمع المدني في صياغة الحلول.</p>
`;

const img = (seed: string, w = 1200, h = 800) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

const newsTitles = [
  "قمة عربية طارئة تبحث المستجدات الإقليمية وسط تصاعد التوترات",
  "أسواق المال تُسجل ارتفاعاً قياسياً بعد إعلان حزمة إصلاحات اقتصادية",
  "افتتاح أكبر معرض للكتاب في المنطقة بمشاركة ٥٠ دولة",
  "إنجاز رياضي تاريخي لمنتخب البلاد في البطولة القارية",
];

const newsSummaries = [
  "تستضيف العاصمة قمة طارئة تجمع زعماء المنطقة لمناقشة آليات التهدئة وإيجاد مخارج دبلوماسية للأزمات المتراكمة.",
  "أنهت الأسواق الإقليمية جلستها على ارتفاع ملحوظ مدفوعةً بحزمة إصلاحات هيكلية أعلنتها السلطات المالية صباح اليوم.",
  "افتُتحت اليوم فعاليات المعرض الدولي للكتاب بمشاركة آلاف الناشرين من خمسين دولة وحضور لافت للقُرّاء.",
  "حقّق المنتخب الوطني فوزاً تاريخياً مُكلِّلاً مشواره ببطولة قارية لأول مرة منذ عقود من المحاولات.",
];

const newsCategories = ["politics", "economy", "culture", "sports"] as const;

export const mockNews: NewsItem[] = newsTitles.map((title, i) => ({
  id: `n${i + 1}`,
  slug: `news-${i + 1}`,
  title,
  summary: newsSummaries[i],
  body: longBody,
  coverImage: img(`news-${i + 1}`, 1200, 750),
  category: cat(newsCategories[i]),
  author: author(),
  publishedAt: nextDate(),
  type: "news",
  readingMinutes: 3 + (i % 5),
  tags: ["تحقيقات", "تحليل"],
}));

const articleTitles = [
  "كيف تُعيد الذكاءات الاصطناعية تشكيل غرف الأخبار حول العالم؟",
  "الصحة النفسية في العالم العربي: حقائق صادمة وأرقام مقلقة",
  "أزمة المياه في الشرق الأوسط: قراءة في الأرقام والحلول",
];

const articleSummaries = [
  "من تحرير النصوص إلى التحقق من المعلومات، تُحدث أدوات الذكاء الاصطناعي تحولاً عميقاً في صناعة الأخبار يستحق التأمل.",
  "بيانات حديثة تُلقي الضوء على حجم انتشار الاضطرابات النفسية وتحديات الوصول إلى خدمات الرعاية المناسبة.",
  "تكشف الأرقام عن واقع مائي حرج في المنطقة يستدعي حلولاً جذرية بدلاً من الاستمرار في إدارة الأزمة.",
];

const articleCategories = ["tech", "health", "science"] as const;

export const mockArticles: Article[] = articleTitles.map((title, i) => ({
  id: `a${i + 1}`,
  slug: `article-${i + 1}`,
  title,
  summary: articleSummaries[i],
  body: longBody,
  coverImage: img(`article-${i + 1}`, 1200, 750),
  category: cat(articleCategories[i]),
  author: author(),
  publishedAt: nextDate(),
  type: "article",
  readingMinutes: 6 + (i % 6),
  tags: ["تحليل", "رأي"],
}));

const blogTitles = [
  "في معنى أن تكتب باللغة العربية اليوم",
];

const blogSummaries = [
  "تأمل شخصي في فعل الكتابة بلغتنا الأم في زمن طغيان اللغات الأخرى على فضاءات النشر والمعرفة.",
];

export const mockBlogs: BlogPost[] = blogTitles.map((title, i) => ({
  id: `b${i + 1}`,
  slug: `blog-${i + 1}`,
  title,
  summary: blogSummaries[i],
  body: longBody,
  coverImage: img(`blog-${i + 1}`, 1200, 750),
  category: cat("opinion"),
  author: author(),
  publishedAt: nextDate(),
  type: "blog",
  readingMinutes: 4 + i,
  tags: ["مدونات", "رأي"],
}));

const podcastTitles = [
  "ضيف الحلقة: حوار مع المؤرخ حول العقد المنصرم",
  "ساعة من الموسيقى: جولة في تراث الأندلس",
  "نشرة الأسبوع: قراءة في أبرز محطات الأخبار",
  "غرفة المحررين: نقاش حول مستقبل الصحافة",
  "ثقافة وفنون: حديث مع روائي عربي بارز",
  "تقنيات اليوم: الذكاء الاصطناعي في حياتنا اليومية",
];

const podcastDescriptions = [
  "ضيفنا في هذه الحلقة مؤرخ بارز يَستعرض معنا أبرز محطات العقد الماضي ويُحاول قراءة المستقبل في ضوء الماضي.",
  "جولة موسيقية شيّقة في تراث الأندلس وتأثيره العميق على الموسيقى المتوسطية الحديثة.",
  "في هذه الحلقة الأسبوعية نُحاول تَلخيص أهم ما جرى من أحداث وقراءتها في سياقها الأشمل.",
  "نقاش مفتوح مع نخبة من المحررين حول التحديات التي تواجه مهنة الصحافة في الزمن الرقمي.",
  "في هذا اللقاء نَلتقي بروائي عربي يُحدثنا عن مشروعه الأدبي ورؤيته للكتابة في العالم العربي.",
  "نَستعرض في هذه الحلقة كيف تَدخل تطبيقات الذكاء الاصطناعي إلى تفاصيل حياتنا اليومية بشكل لا نَنتبه إليه.",
];

export const mockPodcasts: Podcast[] = podcastTitles.map((title, i) => ({
  id: `p${i + 1}`,
  slug: `podcast-${i + 1}`,
  title,
  description: podcastDescriptions[i],
  coverImage: img(`podcast-${i + 1}`, 600, 600),
  host: author(),
  duration: ["48:30", "62:15", "35:00", "55:42", "71:20", "44:08"][i],
  publishedAt: nextDate(),
  episodeNumber: 12 - i,
  category: cat(
    ["culture", "culture", "politics", "culture", "culture", "tech"][i],
  ),
}));

export const mockBreakingHeadlines: BreakingHeadline[] = [
  {
    id: "br1",
    text: "عاجل: قمة عربية طارئة تنعقد غداً لبحث آخر المستجدات في المنطقة",
    href: "/news/news-1",
  },
  {
    id: "br2",
    text: "أسواق المال تُسجل أعلى مستوى لها منذ خمس سنوات بعد إعلان الإصلاحات",
    href: "/news/news-2",
  },
  {
    id: "br3",
    text: "افتتاح معرض الكتاب الدولي بمشاركة خمسين دولة وحضور لافت للقُرّاء",
    href: "/news/news-3",
  },
  {
    id: "br4",
    text: "إنجاز تاريخي للمنتخب الوطني في البطولة القارية لأول مرة منذ عقود",
    href: "/news/news-4",
  },
  {
    id: "br5",
    text: "كيف تُعيد أدوات الذكاء الاصطناعي تشكيل غرف الأخبار حول العالم؟",
    href: "/articles/article-1",
  },
];

export function getAllContent(): (Article | NewsItem | BlogPost)[] {
  return [...mockNews, ...mockArticles, ...mockBlogs];
}

export function findContentBySlug(
  slug: string,
): Article | NewsItem | BlogPost | undefined {
  return getAllContent().find((c) => c.slug === slug);
}

export function findContentByCategory(
  categorySlug: string,
): (Article | NewsItem | BlogPost)[] {
  return getAllContent().filter((c) => c.category.slug === categorySlug);
}

export function getRelatedContent(
  current: BaseContentLike,
  limit = 4,
): (Article | NewsItem | BlogPost)[] {
  return getAllContent()
    .filter(
      (c) => c.id !== current.id && c.category.slug === current.category.slug,
    )
    .slice(0, limit);
}

type BaseContentLike = { id: string; category: { slug: string } };
