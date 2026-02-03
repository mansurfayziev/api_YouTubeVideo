"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";
import { demoApplicants } from "@/lib/demo-data";

export default function CreateJobPage() {
  const { t } = useLanguage();

  return (
    <div className="container py-12">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardHeader>
            <h1 className="text-3xl font-semibold text-primary">
              {t("createJobTitle")}
            </h1>
            <p className="text-slate-500">{t("createJobSubtitle")}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: t("labelTitle"), placeholder: t("placeholderTitle") },
              {
                label: t("labelDescription"),
                placeholder: t("placeholderDescription")
              },
              { label: t("labelPayment"), placeholder: "200 сомони" },
              { label: t("labelTime"), placeholder: "15:00" },
              { label: t("labelLocation"), placeholder: "Душанбе" }
            ].map((field) => (
              <div key={field.label}>
                <label className="text-sm text-slate-500">{field.label}</label>
                <input
                  className="mt-2 w-full rounded-2xl border border-primary/10 bg-white p-3"
                  placeholder={field.placeholder}
                />
              </div>
            ))}
            <Button size="lg" className="w-full" variant="accent">
              {t("createJobButton")}
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold text-primary">
              {t("applicationsTitle")}
            </h2>
          </CardHeader>
          <CardContent className="space-y-4">
            {demoApplicants.map((applicant) => (
              <div key={applicant.id} className="rounded-2xl bg-surface p-4">
                <p className="font-semibold text-slate-700">
                  {applicant.name}
                </p>
                <p className="text-sm text-slate-500">
                  ★ {applicant.rating} · {applicant.completed} {t("jobsDone")}
                </p>
                <Button size="sm" className="mt-3" variant="outline">
                  {t("selectWorker")}
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
