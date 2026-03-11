import type { Metadata } from 'next';
import './globals.css';
import ThemeRegistry from '@/components/ThemeRegistry';

export const metadata: Metadata = {
  title: 'Modern Key — Professional Locksmith Services in Dubai | 800 6557',
  description: 'Modern Key provides 24/7 locksmith services in Dubai — car key duplication, lock repairs, key cutting, home & office unlocking. Fast response, 100% satisfaction. Call 800 6557.',
  keywords: ['locksmith dubai', 'car key duplication dubai', 'lock repair dubai', '24/7 locksmith', 'emergency locksmith uae', 'key cutting dubai', 'modern key dubai'],
  authors: [{ name: 'Modern Key Locksmith Dubai' }],
  openGraph: {
    title: 'Modern Key — 24/7 Locksmith Services Dubai',
    description: 'Budget-friendly, high-security locksmith services in Dubai. We unlock homes, offices & cars. Rated 5.0 on Google.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'Modern Key Dubai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Key Dubai — Locksmith Services',
    description: '24/7 locksmith services in Dubai. Fast response, 100% money back guaranteed.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://modernkey.ae',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Modern Key Locksmith Dubai",
              "telephone": "800-6557",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Al Jafilliya, Satwa",
                "addressLocality": "Dubai",
                "addressCountry": "AE"
              },
              "geo": { "@type": "GeoCoordinates", "latitude": 25.2048, "longitude": 55.2708 },
              "openingHours": "Mo-Su 00:00-24:00",
              "priceRange": "$$",
              "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "482" }
            })
          }}
        />
      </head>
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
