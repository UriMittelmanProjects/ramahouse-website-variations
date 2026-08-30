import { ArrowDown, ArrowRight, ArrowUpRight, Clock3, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ORDER_URL } from './components/SiteHeader';
import { ScrollExperience } from './components/ScrollExperience';

const favorites = [
  { number: '01', name: 'Pad Thai', detail: 'Tamarind, lime, peanuts, and fresh bean sprouts.', image: '/images/v1.__712x534_no-stretch-2b2b2b_DajxY.jpg', alt: 'Pad Thai noodles with lime and vegetables' },
  { number: '02', name: 'Panang Curry', detail: 'Coconut curry, vegetables, and roasted peanuts.', image: '/images/v1.__712x534_no-stretch-2b2b2b_UMa4H.jpg', alt: 'Panang curry with vegetables and peanuts' },
  { number: '03', name: 'Spring Rolls', detail: 'Golden vegetable rolls with house plum sauce.', image: '/images/v1.__712x534_no-stretch-2b2b2b_vV4nq.jpg', alt: 'Golden spring rolls with dipping sauce' },
];

export default function Home() {
  return (
    <main id="main-content" className="immersive-home">
      <ScrollExperience />

      <section id="home" className="immersive-hero" data-scene aria-labelledby="home-title">
        <Image className="immersive-hero-image" src="/images/IMG_5350.jpg" alt="The warm dining room at Rama House in Bothell" fill priority sizes="100vw" />
        <div className="immersive-hero-shade" />
        <div className="immersive-hero-copy">
          <p className="immersive-kicker">Thai Kitchenette · Bothell, Washington</p>
          <h1 id="home-title" className="immersive-title"><span>Rama</span><span>House</span></h1>
          <p className="immersive-intro">A family table, bright Thai flavors, and a room made for staying awhile.</p>
          <div className="immersive-actions">
            <Link href="/menu">Explore the menu <ArrowUpRight size={17} aria-hidden="true" /></Link>
            <a href={ORDER_URL} target="_blank" rel="noreferrer">Order pickup <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
        <a className="scroll-cue" href="#welcome"><ArrowDown size={17} aria-hidden="true" /> Scroll to discover</a>
      </section>

      <section id="welcome" className="sense-scene" data-scene>
        <div className="scene-heading" data-reveal>
          <p className="scene-number">02 · The experience</p>
          <h2>Thai cooking<br /><em>for every sense.</em></h2>
          <p>Color, fragrance, texture, and heat come together in dishes made fresh for your table.</p>
        </div>
        <div className="sense-collage" aria-label="Rama House dishes">
          <figure className="sense-photo sense-photo-one" data-reveal="left"><Image src="/images/appetizers.jpg" alt="A colorful Thai appetizer" fill sizes="(max-width: 760px) 70vw, 28vw" /></figure>
          <figure className="sense-photo sense-photo-two" data-reveal><Image src="/images/noodles.jpg" alt="Thai noodles with fresh vegetables" fill sizes="(max-width: 760px) 74vw, 32vw" /></figure>
          <figure className="sense-photo sense-photo-three" data-reveal="right"><Image src="/images/greencurrry.jpg" alt="Green curry with Thai basil" fill sizes="(max-width: 760px) 60vw, 24vw" /></figure>
        </div>
        <p className="sense-note" data-reveal>Lunch 11am–3pm · Dinner 4pm–9pm</p>
      </section>

      <section id="kitchen" className="kitchen-scene" data-scene>
        <div className="moving-line" aria-hidden="true"><span>MADE HERE · SHARED HERE · MADE HERE · SHARED HERE ·</span></div>
        <div className="kitchen-grid">
          <div data-reveal="left">
            <p className="scene-number light">03 · Our kitchen</p>
            <h2><span>Fresh.</span><span>Thai.</span><span>Daily.</span></h2>
          </div>
          <div className="kitchen-copy" data-reveal>
            <p>Our family brings years of restaurant experience and the recipes we know best to Bothell.</p>
            <p>Every plate is built around herbs, vegetables, balanced sauces, and the kind of welcome that turns dinner into a tradition.</p>
            <Link href="/about">Meet Rama House <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
          <figure className="kitchen-photo" data-reveal="right"><Image src="/images/IMG_5208.jpg" alt="The Rama House menu on a wooden table" fill sizes="(max-width: 760px) 100vw, 38vw" /></figure>
        </div>
      </section>

      <section id="favorites" className="favorites-scene" data-scene>
        <header data-reveal>
          <p className="scene-number">04 · From the menu</p>
          <h2>Three reasons<br /><em>to stay hungry.</em></h2>
          <Link href="/menu">See lunch & dinner <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </header>
        <div className="immersive-dishes">
          {favorites.map((dish) => (
            <article key={dish.name} data-reveal>
              <figure><Image src={dish.image} alt={dish.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /></figure>
              <div><span>{dish.number}</span><h3>{dish.name}</h3><p>{dish.detail}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section id="story" className="room-scene" data-scene>
        <Image src="/images/IMG_5171.jpg" alt="Wood tables and the dining room at Rama House" fill sizes="100vw" />
        <div className="room-shade" />
        <div className="room-copy" data-reveal>
          <p className="scene-number light">05 · A place at the table</p>
          <h2>A room with<br /><em>a welcome.</em></h2>
          <p>Family-owned, easygoing, and ready for quick lunches, long dinners, and everything in between.</p>
          <Link href="/gallery">Step inside <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>

      <section id="visit" className="visit-scene" data-scene>
        <div className="visit-message" data-reveal="left">
          <p className="scene-number">06 · Come hungry</p>
          <h2>Meet us<br /><em>in Bothell.</em></h2>
          <a className="visit-order" href={ORDER_URL} target="_blank" rel="noreferrer">Order online <ArrowUpRight size={21} aria-hidden="true" /></a>
        </div>
        <div className="visit-details" data-reveal="right">
          <a href="https://maps.google.com/?q=Rama+House+Bothell" target="_blank" rel="noreferrer"><MapPin aria-hidden="true" /><span><strong>Visit</strong>22010 17th Ave SE, Suite C<br />Bothell, WA 98021</span></a>
          <div><Clock3 aria-hidden="true" /><span><strong>Hours</strong>Mon–Sat 11am–9pm<br />Sunday 12pm–9pm</span></div>
          <a href="tel:+14254817262"><Phone aria-hidden="true" /><span><strong>Call</strong>(425) 481-7262</span></a>
          <Link className="directions-link" href="/contact">Directions & details <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
