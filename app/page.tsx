import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const versions = [
  { href: '/version-one', number: '01', title: 'Warm editorial', detail: 'A clear restaurant homepage with familiar navigation and direct menu access.', image: '/images/index-3-copy-1.jpg', alt: 'Thai dishes arranged for Rama House' },
  { href: '/version-two', number: '02', title: 'Scroll story', detail: 'A cinematic one-page story with layered scenes and a richer visual rhythm.', image: '/images/IMG_5350.jpg', alt: 'Rama House dining room' },
  { href: '/version-three', number: '03', title: 'Color in motion', detail: 'A playful food and drink experience with scroll-linked movement and parallax plates.', image: '/images/drink-watermelon-frost.png', alt: 'Watermelon frost drink with a paper umbrella' },
];

export default function Home() {
  return (
    <main id="main-content" className="hub-page">
      <section className="hub-intro" aria-labelledby="hub-title">
        <p className="hub-kicker">Rama House Thai Kitchenette</p>
        <h1 id="hub-title">Choose a Rama House experience.</h1>
        <p>Three directions for a family-owned Thai restaurant in Bothell. Open a version to review the full site.</p>
      </section>
      <section className="hub-grid" aria-label="Website versions">
        {versions.map((version) => (
          <Link className="hub-card" href={version.href} key={version.href}>
            <div className="hub-card-image"><Image src={version.image} alt={version.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /></div>
            <div className="hub-card-copy"><span>{version.number}</span><h2>{version.title}</h2><p>{version.detail}</p><span className="hub-card-link">Open version <ArrowUpRight size={18} aria-hidden="true" /></span></div>
          </Link>
        ))}
      </section>
    </main>
  );
}
