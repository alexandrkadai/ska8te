import type { Metadata } from 'next';
import { Bowlby_One_SC, DM_Mono } from 'next/font/google';
import './globals.css';

const bowlby = Bowlby_One_SC({
  variable: '--font-bowlby',
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

const dmMono = DM_Mono({
  variable: '--font-dmmono',
  subsets: ['latin'],
  display: 'swap',
  weight: '500',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bowlby.variable} ${dmMono.variable} antialiased font-dmMono`}>{children}</body>
    </html>
  );
}
