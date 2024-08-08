import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/header/Header";

const shabnamFont = localFont({
  src: [
    {
      path: "../fonts/shabnam/Shabnam.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/shabnam/Shabnam-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/shabnam/Shabnam-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/shabnam/Shabnam-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/shabnam/Shabnam-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Gajino clone",
  description: "for educational purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${shabnamFont.className} bg-gray-150 text-primary-600`}>
        <div className="mx-auto max-w-[120rem]">
          <Header />
          <main className="mx-auto mt-32 flex h-screen w-10/12 flex-col sm:mt-64 md:mt-[22rem] lg:mt-[24rem] xl:mt-[30rem]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
