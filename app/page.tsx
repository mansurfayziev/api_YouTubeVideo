"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";

const stats = [
  { labelKey: "analyticsActive", value: "1 284" },
  { labelKey: "analyticsOnline", value: "3 512" },
  { labelKey: "analyticsAvg", value: "$32" }
] as const;

const growth = [
  { month: "Q1", value: 42 },
  { month: "Q2", value: 58 },
  { month: "Q3", value: 74 },
  { month: "Q4", value: 92 }
];

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-b from-white via-white to-surface">
      <section className="container grid gap-10 py-16 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <motion.h1
            className="text-4xl font-semibold text-primary md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t("heroTitle")}
          </motion.h1>
          <motion.p
            className="text-lg text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {t("heroSubtitle")}
          </motion.p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/dashboard/jobs">{t("heroPrimary")}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/dashboard/create-job">{t("heroSecondary")}</Link>
            </Button>
          </div>
        </div>
        <motion.div
          className="rounded-3xl border border-white/70 bg-white p-6 shadow-soft"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            {stats.map((item) => (
              <div
                key={item.labelKey}
                className="rounded-2xl bg-surface p-4"
              >
                <p className="text-2xl font-semibold text-primary">
                  {item.value}
                </p>
                <p className="text-sm text-slate-500">
                  {t(item.labelKey)}
                </p>
              </div>
            ))}
            <div className="rounded-2xl bg-primary p-4 text-white">
              <p className="text-sm uppercase tracking-wide">
                {t("trustedLabel")}
              </p>
              <p className="mt-2 text-2xl font-semibold">4.9 ★</p>
              <p className="text-sm text-white/70">{t("reviewsCount")}</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
            <span>{t("escrowLabel")}</span>
            <span>{t("supportLabel")}</span>
            <span>{t("payoutsLabel")}</span>
          </div>
        </motion.div>
      </section>

      <section className="container py-12">
        <div className="grid gap-6 md:grid-cols-4">
          {(["step1", "step2", "step3", "step4"] as const).map(
            (step, index) => (
            <Card key={step} className="bg-white/90">
              <CardHeader className="pb-2">
                <p className="text-sm text-slate-400">0{index + 1}</p>
                <h3 className="text-lg font-semibold text-primary">
                  {t(step)}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  {t(`step${index + 1}Desc` as const)}
                </p>
              </CardContent>
            </Card>
          )
          )}
        </div>
      </section>

      <section className="container py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <h2 className="section-title">{t("trustTitle")}</h2>
              <p className="text-slate-500">{t("trustSubtitle")}</p>
            </CardHeader>
            <CardContent className="grid gap-4">
              {(["trustItem1", "trustItem2", "trustItem3"] as const).map(
                (item) => (
                <div key={item} className="rounded-2xl bg-surface p-4">
                  <p className="text-sm text-slate-600">{t(item)}</p>
                </div>
                )
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h2 className="section-title">{t("analyticsTitle")}</h2>
              <p className="text-slate-500">
                KPI для инвесторов и партнёров
              </p>
            </CardHeader>
            <CardContent className="grid gap-4">
              {stats.map((item) => (
                <div
                  key={item.labelKey}
                  className="flex items-center justify-between rounded-2xl bg-surface p-4"
                >
                  <span className="text-sm text-slate-500">
                    {t(item.labelKey)}
                  </span>
                  <span className="text-lg font-semibold text-primary">
                    {item.value}
                  </span>
                </div>
              ))}
              <div className="h-2 w-full rounded-full bg-muted">
                <div className="h-2 w-2/3 rounded-full bg-accent" />
              </div>
              <p className="text-xs text-slate-400">{t("kpiNote")}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container py-12">
        <Card>
          <CardHeader>
            <h2 className="section-title">{t("growthTitle")}</h2>
            <p className="text-slate-500">{t("growthSubtitle")}</p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              {growth.map((item) => (
                <div
                  key={item.month}
                  className="rounded-2xl bg-surface p-4"
                >
                  <p className="text-sm text-slate-500">{item.month}</p>
                  <div className="mt-2 h-2 w-full rounded-full bg-muted">
                    <div
                      className="h-2 rounded-full bg-primary"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                  <p className="mt-2 text-sm font-semibold text-primary">
                    {item.value}%
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="container py-10 text-sm text-slate-500">
        {t("footerTagline")}
      </footer>
    </div>
  );
}
