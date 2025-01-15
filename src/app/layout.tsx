"use client";

import { I18nextProvider } from "react-i18next";
import i18next from "./config/i18";
import { Geist, Geist_Mono } from "next/font/google";
import { metadata } from "./metadata";
import Head from "next/head";
import { ThemeProvider } from "./theme-context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </Head>
        <ThemeProvider>
          <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
        </ThemeProvider>
      </body>
      <style jsx global>{`
        .dark body {
          background: radial-gradient(125% 125% at 50% 10%, #000 40%, #5f5f5f 100%);
          background-attachment: fixed;
          background-size: cover;
        }
        body {
          background: radial-gradient(125% 125% at 50% 10%, #fff 40%, #63e 100%);
          background-attachment: fixed;
          background-size: cover;
        }
      `}</style>
    </html>
  );
}
