"use client";  // This file is client-side

import { I18nextProvider } from 'react-i18next';
import i18next from './config/i18';
import { Geist, Geist_Mono } from 'next/font/google';
import { metadata } from './metadata'; // Import metadata here
import Head from 'next/head'; // Import Head from next/head
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark z-99"> {/* Add "dark" class if the user has dark mode enabled */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #63e 100%)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        {/* Use Head to inject metadata into the document head */}
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </Head>
        <I18nextProvider i18n={i18next}>
          {children}
        </I18nextProvider>
      </body>

      {/* Apply dark mode background styles */}
      <style jsx global>{`
        .dark body {
          background: radial-gradient(125% 125% at 50% 10%, #000 40%, #5f5f5f 100%);
          background-attachment: fixed;
          background-size: cover;
        }
        /* Ensures light mode retains original background */
        body {
          background: radial-gradient(125% 125% at 50% 10%, #fff 40%, #63e 100%);
          background-attachment: fixed;
          background-size: cover;
        }
      `}</style>
    </html>
  );
}
