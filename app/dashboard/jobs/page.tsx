"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Skeleton from "@/components/ui/skeleton";
import { useLanguage } from "@/components/language-provider";
import { demoJobs } from "@/lib/demo-data";

export default function JobsPage() {
  const { t } = useLanguage();

  return (
    <div className="container py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-primary">
            {t("jobsTitle")}
          </h1>
          <p className="text-slate-500">{t("jobsSubtitle")}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {(["jobsFilterDistance", "jobsFilterPayment", "jobsFilterType"] as const).map(
            (filter) => (
              <Button key={filter} variant="outline" size="sm">
                {t(filter)}
              </Button>
            )
          )}
        </div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {demoJobs.map((job) => (
          <Card key={job.id}>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-primary">
                    {job.title}
                  </h2>
                  <p className="text-sm text-slate-500">{job.location}</p>
                </div>
                <span className="rounded-2xl bg-surface px-3 py-1 text-sm text-slate-500">
                  {job.payment}
                </span>
              </div>
              <p className="text-sm text-slate-600">{job.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">#{job.id}</span>
                <Button size="sm">{t("applyButton")}</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-10">
        <p className="text-sm text-slate-500">{t("loadingPreview")}</p>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <div className="space-y-3 rounded-2xl bg-white p-4 shadow-soft">
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-3 w-3/4" />
            <Skeleton className="h-8 w-full" />
          </div>
          <div className="space-y-3 rounded-2xl bg-white p-4 shadow-soft">
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-3 w-3/4" />
            <Skeleton className="h-8 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
