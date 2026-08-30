import type { Metadata } from 'next';
import { DM_Sans, Fraunces } from 'next/font/google';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import './globals.css';

const sans = DM_Sans({ variable: '--font-sans', subsets: ['latin'], display: 'swap' });
const display = Fraunces({ variable: '--font-display', subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://ramahousebothell.com'),
  title: { default: 'Rama House | Thai Restaurant in Bothell, WA', template: '%s | Rama House Bothell' },
  description: 'Family-owned Thai restaurant in Bothell serving lunch, dinner, takeout, curries, noodles, and house specialties.',
  keywords: ['Thai restaurant Bothell', 'Thai food Bothell', 'Thai takeout Bothell', 'Rama House', 'Bothell lunch', 'Bothell dinner'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Rama House Thai Kitchenette',
    title: 'Rama House | Thai Restaurant in Bothell, WA',
    description: 'Family-owned Thai cooking for lunch, dinner, and takeout in Bothell, Washington.',
    url: '/',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Rama House Thai Kitchenette in Bothell, Washington' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rama House | Thai Restaurant in Bothell, WA',
    description: 'Family-owned Thai cooking for lunch, dinner, and takeout in Bothell, Washington.',
    images: ['/og.jpg'],
  },
  icons: { icon: '/images/rama-house-logo-4.png' },
};

const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Rama House Thai Kitchenette',
  image: 'https://ramahousebothell.com/og.jpg',
  url: 'https://ramahousebothell.com/',
  telephone: '+1-425-481-7262',
  email: 'eat@ramahousebothell.com',
  priceRange: '$$',
  servesCuisine: ['Thai', 'Southeast Asian'],
  menu: 'https://ramahousebothell.com/menu',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '22010 17th Ave SE, Suite C',
    addressLocality: 'Bothell',
    addressRegion: 'WA',
    postalCode: '98021',
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '11:00', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '12:00', closes: '21:00' },
  ],
  sameAs: ['https://ramahousewa.smiledining.com/'],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable}`}>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }} />
      </body>
    </html>
  );
}
