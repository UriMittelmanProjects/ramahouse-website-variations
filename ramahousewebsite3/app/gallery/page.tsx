import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Food & Restaurant Gallery',
  description: 'See Thai dishes and the warm dining room at Rama House Thai Kitchenette in Bothell, Washington.',
  alternates: { canonical: '/gallery' },
};

const gallery = [
  { src: '/images/IMG_5350.jpg', alt: 'Rama House dining room with warm pendant lighting', kind: 'wide' },
  { src: '/images/v1.__712x534_no-stretch-2b2b2b_DajxY.jpg', alt: 'Pad Thai with lime, vegetables, and bean sprouts', kind: 'standard' },
  { src: '/images/IMG_5171.jpg', alt: 'Rama House dining room and wood tables', kind: 'tall' },
  { src: '/images/v1.__712x534_no-stretch-2b2b2b_UMa4H.jpg', alt: 'Panang curry with vegetables and peanuts', kind: 'standard' },
  { src: '/images/IMG_5194.jpg', alt: 'Tables set for guests at Rama House', kind: 'standard' },
  { src: '/images/v1.__712x534_no-stretch-2b2b2b_vV4nq.jpg', alt: 'Golden Thai spring rolls and dipping sauce', kind: 'wide' },
  { src: '/images/IMG_5208.jpg', alt: 'Rama House lunch menu on a wood table', kind: 'standard' },
  { src: '/images/v1.__712x534_no-stretch-2b2b2b_2PVt4.jpg', alt: 'Fresh watermelon drink', kind: 'tall' },
  { src: '/images/IMG_5226.jpg', alt: 'Interior details at Rama House in Bothell', kind: 'standard' },
  { src: '/images/IMG_5262.jpg', alt: 'The welcoming Rama House dining space', kind: 'wide' },
  { src: '/images/v1.__712x534_no-stretch-2b2b2b_BSLSv.jpg', alt: 'Fresh citrus drink served at Rama House', kind: 'standard' },
  { src: '/images/IMG_5348.jpg', alt: 'Warm wood tables in the Rama House dining room', kind: 'standard' },
];

export default function GalleryPage() {
  return (
    <main id="main-content">
      <section className="page-title content-wrap"><p className="eyebrow dark">Inside Rama House</p><h1>Food, space, and a seat for you.</h1><p>Real dishes and moments from our family-owned Thai restaurant in Bothell.</p></section>
      <section className="gallery-grid content-wrap" aria-label="Rama House photo gallery">
        {gallery.map((image) => <figure className={`gallery-${image.kind}`} key={image.src}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 700px) 100vw, 50vw" /></figure>)}
      </section>
    </main>
  );
}
