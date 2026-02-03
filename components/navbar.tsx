"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import LanguageToggle from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-white/50 bg-white/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          ZudKor TJ
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <Link href="/dashboard/jobs" className="hover:text-primary">
            {t("navJobs")}
          </Link>
          <Link href="/dashboard" className="hover:text-primary">
            {t("navDashboard")}
          </Link>
          <Link href="/profile" className="hover:text-primary">
            {t("navProfile")}
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">{t("navLogin")}</Link>
          </Button>
          <Button variant="accent" size="sm" asChild>
            <Link href="/register">{t("navRegister")}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
