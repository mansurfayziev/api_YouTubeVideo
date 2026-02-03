"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";
import { demoReviews } from "@/lib/demo-data";

export default function ProfilePage() {
  const { t } = useLanguage();

  return (
    <div className="container py-12">
      <Card>
        <CardHeader>
          <h1 className="text-3xl font-semibold text-primary">
            {t("profileTitle")}
          </h1>
          <p className="text-slate-500">{t("profileSubtitle")}</p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-[1fr_1.5fr]">
            <div className="rounded-2xl bg-surface p-6">
              <p className="text-lg font-semibold text-primary">Азиз Ахмад</p>
              <p className="text-sm text-slate-500">{t("roleWorker")}</p>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <p>★ 4.9 · 132 {t("jobsDone")}</p>
                <p>{t("profileLocation")}: Душанбе</p>
                <p>{t("profileSkills")}: Курьер, Сборка мебели</p>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-primary">
                {t("reviewsTitle")}
              </h2>
              {demoReviews.map((review) => (
                <div key={review.id} className="rounded-2xl bg-white p-4 shadow-soft">
                  <p className="text-sm text-slate-500">
                    {review.from} · ★ {review.rating}
                  </p>
                  <p className="mt-2 text-sm text-slate-700">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
