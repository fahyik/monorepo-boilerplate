import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";

import "./styles.css";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
