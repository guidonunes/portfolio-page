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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Use Head to inject metadata into the document head */}
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </Head>
        <I18nextProvider i18n={i18next}>
          {children}
        </I18nextProvider>
      </body>
    </html>
  );
}
