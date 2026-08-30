import type { Metadata } from 'next';
import Image from 'next/image';
import { MenuBrowser } from '../components/MenuBrowser';

export const metadata: Metadata = {
  title: 'Thai Lunch & Dinner Menu',
  description: 'Browse Rama House lunch and dinner menus. Search Thai curries, noodles, rice dishes, appetizers, soups, salads, and house specialties in Bothell.',
  alternates: { canonical: '/menu' },
};

export default async function MenuPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const params = await searchParams;
  const initialService = params.service === 'dinner' ? 'dinner' : 'lunch';
  return (
    <main id="main-content">
      <section className="page-hero compact-hero">
        <Image src="/images/noodles.jpg" alt="Thai noodles with fresh vegetables" fill priority sizes="100vw" />
        <div className="page-hero-scrim" />
        <div><p className="eyebrow">Rama House</p><h1>Our menu</h1><p>Lunch 11am–3pm · Dinner 4pm–9pm</p></div>
      </section>
      <section className="menu-intro content-wrap">
        <div><p className="eyebrow dark">Made fresh in Bothell</p><h2>What are you hungry for?</h2></div>
        <p>Switch between lunch and dinner, or search the menu by dish and ingredient. Vegetarian choices are available throughout the menu.</p>
      </section>
      <MenuBrowser initialService={initialService} />
    </main>
  );
}
