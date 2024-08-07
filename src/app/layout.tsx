import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
    <html lang="en">
      <body className={shabnamFont.className}>{children}</body>
    </html>
  );
}
