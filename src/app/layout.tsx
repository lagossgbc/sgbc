import "./globals.scss";
import type { Metadata } from "next";
import { Footer } from "@/components";
// import { montserrat } from "@/fonts";
import { Montserrat } from "next/font/google";

import Header from "../components/header/index";

const montserrat = Montserrat({
  weight: ["200", "300", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "SGBC - Sovereign Grace Bible Church",
  description: "This is a website of Sovereign Grace Bible Church.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`relative min-h-[100vh] flex flex-col mx-auto ${montserrat.className}`}
      >
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
