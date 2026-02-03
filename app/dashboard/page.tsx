"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";
import { demoJobs } from "@/lib/demo-data";

export default function DashboardPage() {
  const { t } = useLanguage();

  return (
    <div className="container py-12">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-primary">
          {t("dashboardTitle")}
        </h1>
        <p className="text-slate-500">{t("dashboardSubtitle")}</p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-primary">
              {t("jobStatusNew")}
            </h2>
          </CardHeader>
          <CardContent className="space-y-3">
            {demoJobs
              .filter((job) => job.status === "new")
              .map((job) => (
                <div key={job.id} className="rounded-2xl bg-surface p-4">
                  <p className="font-medium text-slate-700">{job.title}</p>
                  <p className="text-sm text-slate-500">{job.location}</p>
                </div>
              ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-primary">
              {t("jobStatusInProgress")}
            </h2>
          </CardHeader>
          <CardContent className="space-y-3">
            {demoJobs
              .filter((job) => job.status === "in_progress")
              .map((job) => (
                <div key={job.id} className="rounded-2xl bg-surface p-4">
                  <p className="font-medium text-slate-700">{job.title}</p>
                  <p className="text-sm text-slate-500">{job.payment}</p>
                </div>
              ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-primary">
              {t("jobStatusDone")}
            </h2>
          </CardHeader>
          <CardContent className="space-y-3">
            {demoJobs
              .filter((job) => job.status === "done")
              .map((job) => (
                <div key={job.id} className="rounded-2xl bg-surface p-4">
                  <p className="font-medium text-slate-700">{job.title}</p>
                  <p className="text-sm text-slate-500">{job.payment}</p>
                </div>
              ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
