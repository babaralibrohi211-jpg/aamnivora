import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const font = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta-sans' });

export const metadata: Metadata = {
  title: 'Aamnivora | Digital Transformation for Local Businesses',
  description:
    'Aamnivora helps local businesses modernize through premium websites, automation, AI solutions, and scalable digital systems.',
  metadataBase: new URL('https://aamnivora.com'),
  openGraph: {
    title: 'Aamnivora | Digital Transformation for Local Businesses',
    description:
      'Premium digital transformation services for local businesses seeking a stronger online presence and better operational systems.',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${font.variable} font-sans`}>
        <div className="min-h-screen bg-white">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
