import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import Head from "next/head";

import "@packagename/ui/globals.css";

// const montserrat = localFont({
//   src: "./fonts/montserrat.ttf",
//   variable: "--font-montserrat",
// });

// const lora = localFont({
//   src: "./fonts/lora.ttf",
//   variable: "--font-lora",
// });

export const metadata: Metadata = {
  title: "xxx",
  description: "xxx",
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

      <body className={`antialiased`}>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
