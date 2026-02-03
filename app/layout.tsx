import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/components/language-provider";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "ZudKor TJ - Платформа временной работы",
  description: "Временная работа и исполнители для Таджикистана и СНГ",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
