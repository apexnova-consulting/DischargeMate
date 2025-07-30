'use client';

import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'DischargeMate - Intelligent Patient Discharge Management',
  description: 'AI-powered discharge management platform that reduces readmissions, improves outcomes, and integrates seamlessly with your existing workflow.',
  keywords: 'patient discharge, healthcare software, AI healthcare, readmission reduction',
  openGraph: {
    title: 'DischargeMate - Intelligent Patient Discharge Management',
    description: 'AI-powered discharge management platform that reduces readmissions, improves outcomes, and integrates seamlessly with your existing workflow.',
    type: 'website',
    locale: 'en_US',
    url: 'https://dischargemate.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
