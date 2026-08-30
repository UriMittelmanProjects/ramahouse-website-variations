import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'Meet Rama House, a family-owned Thai restaurant sharing authentic recipes with the Bothell community.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="page-hero about-hero">
        <Image src="/images/cars.jpg" alt="A row of colorful Thai tuk-tuks" fill priority sizes="100vw" />
        <div className="page-hero-scrim" /><div><p className="eyebrow">Our story</p><h1>From our family to yours.</h1></div>
      </section>
      <section className="about-intro content-wrap">
        <div><p className="eyebrow dark">Rama House Thai Kitchenette</p><h2>Authentic recipes, a warm room, and years of restaurant experience.</h2></div>
        <div><p>We are a family-owned Thai restaurant proud to call Bothell home. For many years, our family has worked in restaurants, learning how the right plate of food and a thoughtful welcome can bring people together.</p><p>At Rama House, our goal is simple: serve the Thai dishes we know and love with fresh ingredients, prompt service, and an atmosphere that works just as well for a family dinner as it does for lunch with coworkers.</p></div>
      </section>
      <section className="about-photo-row content-wrap">
        <div><Image src="/images/IMG_5171.jpg" alt="The dining room at Rama House" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
        <div><Image src="/images/IMG_5350.jpg" alt="Warm pendant lights and tables at Rama House" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
      </section>
      <section className="values-band"><div className="content-wrap values-grid"><div><span>01</span><h3>Food with roots</h3><p>Classic Thai flavors, from bright herbs and hot-and-sour broths to slow, rich coconut curries.</p></div><div><span>02</span><h3>A place for everyone</h3><p>Casual enough for a quick lunch and comfortable enough to stay awhile over dinner.</p></div><div><span>03</span><h3>Made with care</h3><p>A friendly, knowledgeable team and dishes prepared fresh for dine-in or takeout.</p></div></div></section>
      <section className="center-cta content-wrap"><p className="eyebrow dark">Come say hello</p><h2>We hope to see you at Rama House.</h2><Link className="button" href="/contact">Plan your visit <ArrowRight size={18} /></Link></section>
    </main>
  );
}
