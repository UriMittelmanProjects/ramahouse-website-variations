import type { Metadata } from 'next';
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { ORDER_URL } from '../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Contact, Hours & Directions',
  description: 'Visit Rama House at 22010 17th Ave SE, Suite C in Bothell. See restaurant hours, phone, email, directions, and online ordering.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="page-hero contact-hero">
        <Image src="/images/IMG_5435.jpg" alt="The Rama House dining room in Bothell" fill priority sizes="100vw" />
        <div className="page-hero-scrim" /><div><p className="eyebrow">Visit Rama House</p><h1>Come eat with us.</h1></div>
      </section>
      <section className="contact-layout content-wrap">
        <div className="contact-details">
          <p className="eyebrow dark">Contact & directions</p>
          <h2>Bothell’s neighborhood Thai kitchen.</h2>
          <div className="contact-list">
            <a href="https://maps.google.com/?q=Rama+House+Bothell" target="_blank" rel="noreferrer"><MapPin aria-hidden="true" /><span><strong>Rama House Thai Kitchenette</strong>22010 17th Ave SE, Suite C<br />Bothell, WA 98021</span></a>
            <a href="tel:+14254817262"><Phone aria-hidden="true" /><span><strong>Call us</strong>(425) 481-7262</span></a>
            <a href="mailto:eat@ramahousebothell.com"><Mail aria-hidden="true" /><span><strong>Email us</strong>eat@ramahousebothell.com</span></a>
            <div><Clock3 aria-hidden="true" /><span><strong>Restaurant hours</strong>Mon–Sat: 11am–9pm<br />Sunday: 12pm–9pm</span></div>
          </div>
          <div className="contact-actions"><a className="button" href="https://maps.google.com/?q=Rama+House+Bothell" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={17} /></a><a className="button button-ink" href={ORDER_URL} target="_blank" rel="noreferrer">Order online</a></div>
        </div>
        <div className="map-frame">
          <iframe title="Map showing Rama House in Bothell" src="https://www.google.com/maps?q=Rama%20House%2022010%2017th%20Ave%20SE%20Bothell%20WA%2098021&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>
      <section className="hours-band"><div className="content-wrap hours-band-inner"><div><p className="eyebrow dark">Lunch</p><strong>11am–3pm</strong><span>Monday through Saturday</span></div><div><p className="eyebrow dark">Dinner</p><strong>4pm–9pm</strong><span>Monday through Saturday</span></div><div><p className="eyebrow dark">Sunday</p><strong>12pm–9pm</strong><span>Open all afternoon and evening</span></div></div></section>
    </main>
  );
}
