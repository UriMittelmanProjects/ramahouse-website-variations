import { ArrowRight, Clock3, MapPin, Phone, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ORDER_URL } from '../components/SiteHeader';

const featured = [
  { name: 'Pad Thai', description: 'Tamarind, peanuts, egg, green onion, and bean sprouts.', image: '/images/v1.__712x534_no-stretch-2b2b2b_DajxY.jpg', alt: 'Pad Thai noodles with lime and fresh vegetables' },
  { name: 'Panang Curry', description: 'A rich coconut curry finished with ground peanuts.', image: '/images/v1.__712x534_no-stretch-2b2b2b_UMa4H.jpg', alt: 'A bowl of creamy Panang curry' },
  { name: 'Spring Rolls', description: 'Crisp vegetable rolls with house plum sauce.', image: '/images/v1.__712x534_no-stretch-2b2b2b_vV4nq.jpg', alt: 'Golden spring rolls with dipping sauce' },
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero">
        <Image className="hero-image" src="/images/index-3-copy-1.jpg" alt="A colorful spread of Rama House Thai dishes" fill priority sizes="100vw" />
        <div className="hero-scrim" />
        <div className="hero-content">
          <p className="eyebrow">Family-owned Thai kitchen in Bothell</p>
          <h1>Rama House</h1>
          <p className="hero-copy">Bright herbs, deep curries, and the dishes our family has loved for years. Made fresh for lunch, dinner, and takeout.</p>
          <div className="hero-actions">
            <Link className="button" href="/menu">Explore the menu <ArrowRight size={18} aria-hidden="true" /></Link>
            <a className="button button-secondary" href={ORDER_URL} target="_blank" rel="noreferrer">Order pickup</a>
          </div>
        </div>
        <a className="hero-location" href="https://maps.google.com/?q=Rama+House+Bothell" target="_blank" rel="noreferrer"><MapPin size={17} aria-hidden="true" /> Bothell, Washington</a>
      </section>

      <section className="quick-info" aria-label="Restaurant details">
        <div><Clock3 aria-hidden="true" /><span><strong>Lunch & dinner</strong> Lunch 11–3 · Dinner 4–9</span></div>
        <a href="https://maps.google.com/?q=Rama+House+Bothell" target="_blank" rel="noreferrer"><MapPin aria-hidden="true" /><span><strong>Visit Rama House</strong> 22010 17th Ave SE, Suite C</span></a>
        <a href="tel:+14254817262"><Phone aria-hidden="true" /><span><strong>Call ahead</strong> (425) 481-7262</span></a>
      </section>

      <section className="intro-band content-wrap">
        <div>
          <p className="eyebrow dark">Welcome to Rama House</p>
          <h2>Thai food made for sharing.</h2>
        </div>
        <div className="intro-copy">
          <p>We bring familiar Thai flavors to the Bothell community with generous plates, fresh vegetables, fragrant herbs, and a welcome that feels easy.</p>
          <p>Join us for a quick lunch, a relaxed family dinner, or take your favorites home.</p>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-heading content-wrap">
          <div><p className="eyebrow dark">A few favorites</p><h2>Start with something delicious.</h2></div>
          <Link className="text-link" href="/menu">See the full menu <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
        <div className="featured-grid content-wrap">
          {featured.map((dish) => (
            <article className="featured-dish" key={dish.name}>
              <div className="featured-image"><Image src={dish.image} alt={dish.alt} fill sizes="(max-width: 800px) 100vw, 33vw" /></div>
              <h3>{dish.name}</h3><p>{dish.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="menu-callout">
        <div className="menu-callout-image"><Image src="/images/entrees.jpg" alt="Fresh Thai ingredients and a colorful entrée" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
        <div className="menu-callout-content">
          <p className="eyebrow">Lunch & dinner</p>
          <h2>Find your usual. Discover a new one.</h2>
          <p>Browse every dish in one clean, searchable menu. Filter lunch or dinner, then search by dish or ingredient.</p>
          <Link className="button" href="/menu">Browse the menu <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="story-band content-wrap">
        <div className="story-images">
          <div><Image src="/images/IMG_5350.jpg" alt="The warm dining room at Rama House" fill sizes="(max-width: 800px) 100vw, 42vw" /></div>
          <div><Image src="/images/IMG_5208.jpg" alt="The Rama House lunch menu on a dining table" fill sizes="(max-width: 800px) 60vw, 24vw" /></div>
        </div>
        <div className="story-copy">
          <p className="eyebrow dark">Our family table</p>
          <h2>Rooted in Thai recipes. At home in Bothell.</h2>
          <p>Rama House is a family-owned restaurant built around the food we know and love. We have spent years in the restaurant business and are proud to share authentic Thai recipes with our neighbors.</p>
          <Link className="text-link" href="/about">Read our story <ArrowRight size={17} aria-hidden="true" /></Link>
          <p className="recommendation"><Star size={17} aria-hidden="true" /> Recommended by Restaurant Guru, 2024</p>
        </div>
      </section>

      <section className="visit-band">
        <div className="content-wrap visit-band-inner">
          <div><p className="eyebrow">Come eat with us</p><h2>Lunch, dinner, or Thai takeout tonight.</h2></div>
          <div className="visit-actions"><Link className="button" href="/contact">Get directions</Link><a className="button button-secondary" href="tel:+14254817262">Call (425) 481-7262</a></div>
        </div>
      </section>
    </main>
  );
}
