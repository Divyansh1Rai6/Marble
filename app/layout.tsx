import './globals.css';
import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VitrixStone Ceramics — Crafting Surfaces, Building Trust',
  description:
    'VitrixStone Ceramics manufactures premium vitrified tiles, marble slabs, granito, and ceramic surfaces. 500+ designs, 50+ countries, 25+ years of craftsmanship.',
  keywords: [
    'vitrified tiles',
    'marble slabs',
    'granito tiles',
    'ceramic slabs',
    'GVT PGVT',
    'double charge tiles',
    'tile manufacturer',
  ],
  openGraph: {
    title: 'VitrixStone Ceramics — Crafting Surfaces, Building Trust',
    description:
      'Premium vitrified tiles, marble slabs, granito & ceramic surfaces. 500+ designs across 50+ countries.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
