"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/features/page-header";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main id="main-content" className="flex-1">
      <Container>
        <PageHeader
          eyebrow="اتصل بنا"
          title="نَودّ أن نَسمع منك"
          description="آراؤك واقتراحاتك تُساعدنا على تحسين ما نَنشر. تواصل معنا في أيّ وقت."
        />
      </Container>
      <Container className="py-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
              setTimeout(() => setSubmitted(false), 4000);
            }}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  الاسم
                </label>
                <Input placeholder="اسمك الكامل" required />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  البريد الإلكتروني
                </label>
                <Input type="email" placeholder="you@example.com" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                الموضوع
              </label>
              <Input placeholder="موضوع رسالتك" required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                الرسالة
              </label>
              <textarea
                rows={6}
                required
                placeholder="اكتب رسالتك هنا…"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              إرسال
            </button>
            {submitted && (
              <p
                role="status"
                className="text-sm text-primary bg-accent border border-primary/20 rounded-md px-3 py-2"
              >
                تم استلام رسالتك. سنرد عليك في أقرب وقت ممكن.
              </p>
            )}
          </form>

          {/* Info */}
          <aside className="space-y-6">
            <div className="bg-surface border border-border rounded-lg p-6">
              <h2 className="text-lg font-bold mb-4 serif">معلومات التواصل</h2>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground flex-none">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold">البريد الإلكتروني</p>
                    <p className="text-muted-foreground">contact@isdar.example</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground flex-none">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold">الهاتف</p>
                    <p className="text-muted-foreground">+212 5 00 00 00 00</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground flex-none">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold">العنوان</p>
                    <p className="text-muted-foreground">
                      شارع الإعلام، حيّ المعرفة
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}
