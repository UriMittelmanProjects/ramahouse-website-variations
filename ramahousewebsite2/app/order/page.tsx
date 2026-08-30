import type { Metadata } from 'next';
import { ArrowUpRight, Phone } from 'lucide-react';
import Image from 'next/image';
import { ORDER_URL } from '../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Order Thai Food Online',
  description: 'Order Rama House Thai food online for pickup in Bothell, or call the restaurant at (425) 481-7262.',
  alternates: { canonical: '/order' },
};

export default function OrderPage() {
  return (
    <main id="main-content">
      <section className="order-layout">
        <div className="order-photo"><Image src="/images/order_online.jpg" alt="A colorful tuk-tuk on a street in Thailand" fill priority sizes="(max-width: 800px) 100vw, 52vw" /></div>
        <div className="order-content"><p className="eyebrow dark">Take Rama House home</p><h1>Order online.</h1><p>Choose your favorites, customize your order, and pick it up fresh from our Bothell kitchen.</p><a className="button" href={ORDER_URL} target="_blank" rel="noreferrer">Start your order <ArrowUpRight size={19} /></a><a className="phone-link" href="tel:+14254817262"><Phone size={18} /> Prefer to call? (425) 481-7262</a></div>
      </section>
    </main>
  );
}
