import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "دفتر رهنمای معاملات ملا داد محمد هوتک",
  description:
    "خرید، فروش، رهن و کرایه خانه، زمین و املاک در هرات",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <link
  rel="icon"
  type="image/png"
  href="https://img.icons8.com/?size=100&id=5IT7BzjofRwO&format=png&color=000000"
/>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}