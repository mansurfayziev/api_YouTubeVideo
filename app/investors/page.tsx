"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

export default function InvestorsPage() {
  const { t } = useLanguage();

  const problemPoints = [
    t("investorsProblemPoint1"),
    t("investorsProblemPoint2"),
    t("investorsProblemPoint3"),
    t("investorsProblemPoint4")
  ];

  const resultPoints = [
    t("investorsProblemResult1"),
    t("investorsProblemResult2"),
    t("investorsProblemResult3")
  ];

  const solutionPoints = [
    t("investorsSolutionPoint1"),
    t("investorsSolutionPoint2"),
    t("investorsSolutionPoint3")
  ];

  const audienceCustomers = [
    t("investorsAudienceCustomer1"),
    t("investorsAudienceCustomer2"),
    t("investorsAudienceCustomer3")
  ];

  const audienceWorkers = [
    t("investorsAudienceWorker1"),
    t("investorsAudienceWorker2"),
    t("investorsAudienceWorker3"),
    t("investorsAudienceWorker4")
  ];

  const uspPoints = [
    t("investorsUspPoint1"),
    t("investorsUspPoint2"),
    t("investorsUspPoint3"),
    t("investorsUspPoint4"),
    t("investorsUspPoint5")
  ];

  const modelRevenue = [
    t("investorsModelRevenue1"),
    t("investorsModelRevenue2"),
    t("investorsModelRevenue3"),
    t("investorsModelRevenue4")
  ];

  const modelResources = [
    t("investorsModelResource1"),
    t("investorsModelResource2"),
    t("investorsModelResource3"),
    t("investorsModelResource4")
  ];

  const modelActivities = [
    t("investorsModelActivity1"),
    t("investorsModelActivity2"),
    t("investorsModelActivity3"),
    t("investorsModelActivity4")
  ];

  const modelPartners = [
    t("investorsModelPartner1"),
    t("investorsModelPartner2"),
    t("investorsModelPartner3"),
    t("investorsModelPartner4")
  ];

  const modelCosts = [
    t("investorsModelCost1"),
    t("investorsModelCost2"),
    t("investorsModelCost3"),
    t("investorsModelCost4")
  ];

  const algorithmSteps = [
    t("investorsAlgorithmStep1"),
    t("investorsAlgorithmStep2"),
    t("investorsAlgorithmStep3"),
    t("investorsAlgorithmStep4"),
    t("investorsAlgorithmStep5"),
    t("investorsAlgorithmStep6")
  ];

  const competitors = [
    t("investorsCompetitionPoint1"),
    t("investorsCompetitionPoint2"),
    t("investorsCompetitionPoint3")
  ];

  const growthStages = [
    {
      title: t("investorsGrowthStage1Title"),
      points: [
        t("investorsGrowthStage1Point1"),
        t("investorsGrowthStage1Point2"),
        t("investorsGrowthStage1Point3")
      ]
    },
    {
      title: t("investorsGrowthStage2Title"),
      points: [
        t("investorsGrowthStage2Point1"),
        t("investorsGrowthStage2Point2"),
        t("investorsGrowthStage2Point3")
      ]
    },
    {
      title: t("investorsGrowthStage3Title"),
      points: [
        t("investorsGrowthStage3Point1"),
        t("investorsGrowthStage3Point2"),
        t("investorsGrowthStage3Point3")
      ]
    }
  ];

  const financialPoints = [
    t("investorsFinancialPoint1"),
    t("investorsFinancialPoint2"),
    t("investorsFinancialPoint3"),
    t("investorsFinancialPoint4")
  ];

  const investmentPoints = [
    t("investorsAskPoint1"),
    t("investorsAskPoint2"),
    t("investorsAskPoint3")
  ];

  return (
    <div className="bg-gradient-to-b from-white via-white to-surface">
      <section className="container py-16">
        <motion.p
          className="text-sm uppercase tracking-[0.2em] text-accent"
          {...fadeUp}
        >
          {t("investorsDeckTitle")}
        </motion.p>
        <motion.h1
          className="mt-4 text-4xl font-semibold text-primary md:text-5xl"
          {...fadeUp}
          transition={{ delay: 0.1 }}
        >
          {t("investorsHeroTitle")}
        </motion.h1>
        <motion.p
          className="mt-4 max-w-3xl text-lg text-slate-600"
          {...fadeUp}
          transition={{ delay: 0.2 }}
        >
          {t("investorsHeroSubtitle")}
        </motion.p>
        <motion.p
          className="mt-6 text-base font-semibold text-primary"
          {...fadeUp}
          transition={{ delay: 0.3 }}
        >
          {t("investorsFounders")}
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap gap-4"
          {...fadeUp}
          transition={{ delay: 0.4 }}
        >
          <Button size="lg" asChild>
            <Link href="/register">{t("investorsCtaPrimary")}</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/dashboard">{t("investorsCtaSecondary")}</Link>
          </Button>
        </motion.div>
      </section>

      <section className="container grid gap-6 pb-12 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardHeader>
            <h2 className="section-title">{t("investorsProblemTitle")}</h2>
            <p className="text-slate-500">{t("investorsProblemSubtitle")}</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {problemPoints.map((item) => (
              <div key={item} className="rounded-2xl bg-surface p-4">
                <p className="text-sm text-slate-600">{item}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-primary">
              {t("investorsProblemResultTitle")}
            </h3>
          </CardHeader>
          <CardContent className="space-y-3">
            {resultPoints.map((item) => (
              <div key={item} className="rounded-2xl bg-white p-4 shadow-soft">
                <p className="text-sm text-slate-600">{item}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="container py-12">
        <Card>
          <CardHeader>
            <h2 className="section-title">{t("investorsSolutionTitle")}</h2>
            <p className="text-slate-500">{t("investorsSolutionSubtitle")}</p>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            {solutionPoints.map((item) => (
              <div key={item} className="rounded-2xl bg-surface p-4">
                <p className="text-sm text-slate-600">{item}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="container grid gap-6 py-12 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <h2 className="section-title">{t("investorsAudienceTitle")}</h2>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-surface p-4">
              <p className="font-semibold text-primary">
                {t("investorsAudienceCustomerTitle")}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {audienceCustomers.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-surface p-4">
              <p className="font-semibold text-primary">
                {t("investorsAudienceWorkerTitle")}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {audienceWorkers.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="section-title">{t("investorsUspTitle")}</h2>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-slate-600">
              {uspPoints.map((item) => (
                <li key={item} className="rounded-2xl bg-white p-4 shadow-soft">
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="container py-12">
        <Card>
          <CardHeader>
            <h2 className="section-title">{t("investorsModelTitle")}</h2>
            <p className="text-slate-500">{t("investorsModelSubtitle")}</p>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-surface p-4">
              <p className="font-semibold text-primary">
                {t("investorsModelRevenueTitle")}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {modelRevenue.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-surface p-4">
              <p className="font-semibold text-primary">
                {t("investorsModelResourcesTitle")}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {modelResources.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-surface p-4">
              <p className="font-semibold text-primary">
                {t("investorsModelActivitiesTitle")}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {modelActivities.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-surface p-4">
              <p className="font-semibold text-primary">
                {t("investorsModelPartnersTitle")}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {modelPartners.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-surface p-4">
              <p className="font-semibold text-primary">
                {t("investorsModelCostsTitle")}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {modelCosts.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="container grid gap-6 py-12 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <h2 className="section-title">{t("investorsAlgorithmTitle")}</h2>
          </CardHeader>
          <CardContent className="space-y-3">
            {algorithmSteps.map((item, index) => (
              <div key={item} className="rounded-2xl bg-surface p-4">
                <p className="text-sm text-slate-600">
                  {index + 1}. {item}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="section-title">{t("investorsCompetitionTitle")}</h2>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500">{t("investorsCompetitionNote")}</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {competitors.map((item) => (
                <li key={item} className="rounded-2xl bg-white p-4 shadow-soft">
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="container py-12">
        <Card>
          <CardHeader>
            <h2 className="section-title">{t("investorsGrowthTitle")}</h2>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            {growthStages.map((stage) => (
              <div key={stage.title} className="rounded-2xl bg-surface p-4">
                <p className="font-semibold text-primary">{stage.title}</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {stage.points.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="container grid gap-6 py-12 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <h2 className="section-title">{t("investorsFinancialTitle")}</h2>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-slate-600">
              {financialPoints.map((item) => (
                <li key={item} className="rounded-2xl bg-surface p-4">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl bg-primary p-5 text-white">
              <p className="text-sm uppercase tracking-wide">
                {t("investorsFinancialGoalTitle")}
              </p>
              <p className="mt-2 text-lg font-semibold">
                {t("investorsFinancialGoal")}
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="section-title">{t("investorsAskTitle")}</h2>
            <p className="text-slate-500">{t("investorsAskSubtitle")}</p>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold text-primary">
              {t("investorsAskAmount")}
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {investmentPoints.map((item) => (
                <li key={item} className="rounded-2xl bg-white p-4 shadow-soft">
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="container grid gap-6 py-12 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <h2 className="section-title">{t("investorsWhyTitle")}</h2>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-slate-600">
              {[
                t("investorsWhyPoint1"),
                t("investorsWhyPoint2"),
                t("investorsWhyPoint3"),
                t("investorsWhyPoint4")
              ].map((item) => (
                <li key={item} className="rounded-2xl bg-surface p-4">
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="section-title">{t("investorsMissionTitle")}</h2>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">{t("investorsMissionText")}</p>
          </CardContent>
        </Card>
      </section>

      <section className="container py-12">
        <Card className="bg-primary text-white">
          <CardHeader>
            <h2 className="text-3xl font-semibold">
              {t("investorsPitchTitle")}
            </h2>
            <p className="text-white/70">{t("investorsPitchSubtitle")}</p>
          </CardHeader>
          <CardContent>
            <p className="text-base text-white/90">{t("investorsPitchText")}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button variant="accent" size="lg" asChild>
                <Link href="/register">{t("investorsPitchCta")}</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link href="/">{t("investorsPitchSecondary")}</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
