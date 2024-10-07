import "@packagename/ui/styles.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Head from "next/head";

import "./globals.css";

const montserrat = localFont({
  src: "./fonts/montserrat.ttf",
  variable: "--font-montserrat",
});

const lora = localFont({
  src: "./fonts/lora.ttf",
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "miu6",
  description: "created by the miusters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <body
        className={`${montserrat.variable} ${lora.variable} antialiased flex flex-col min-h-screen`}
      >
        <div className="flex flex-grow flex-col font-[family-name:var(--font-lora)]">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
