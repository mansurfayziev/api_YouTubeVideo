"use client";

import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-2 rounded-2xl border border-primary/10 bg-white/70 p-1">
      <Button
        variant={locale === "ru" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLocale("ru")}
      >
        RU
      </Button>
      <Button
        variant={locale === "tj" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLocale("tj")}
      >
        TJ
      </Button>
    </div>
  );
}
