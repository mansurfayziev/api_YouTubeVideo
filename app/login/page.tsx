"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";

export default function LoginPage() {
  const { t } = useLanguage();

  return (
    <div className="container py-12">
      <Card className="mx-auto max-w-md">
        <CardHeader>
          <h1 className="text-2xl font-semibold text-primary">
            {t("loginTitle")}
          </h1>
          <p className="text-slate-500">{t("loginSubtitle")}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm text-slate-500">{t("labelEmail")}</label>
            <input
              className="mt-2 w-full rounded-2xl border border-primary/10 bg-white p-3"
              placeholder="you@email.com"
              type="email"
            />
          </div>
          <div>
            <label className="text-sm text-slate-500">{t("labelPhone")}</label>
            <input
              className="mt-2 w-full rounded-2xl border border-primary/10 bg-white p-3"
              placeholder="+992"
            />
          </div>
          <Button className="w-full" size="lg">
            {t("navLogin")}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
