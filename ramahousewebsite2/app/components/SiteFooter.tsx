import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ORDER_URL } from './SiteHeader';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Image src="/images/rama-house-logo-4.png" alt="Rama House" width={150} height={108} />
          <p>Family-owned Thai cooking in Bothell, Washington.</p>
          <a className="button button-small" href={ORDER_URL} target="_blank" rel="noreferrer">
            Order online <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          <Link href="/menu">Lunch & dinner menu</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/about">Our story</Link>
          <Link href="/contact">Contact & directions</Link>
        </div>
        <div>
          <p className="footer-label">Visit Rama House</p>
          <a href="https://maps.google.com/?q=Rama+House+Bothell" target="_blank" rel="noreferrer"><MapPin aria-hidden="true" />22010 17th Ave SE, Suite C<br />Bothell, WA 98021</a>
          <a href="tel:+14254817262"><Phone aria-hidden="true" />(425) 481-7262</a>
          <a href="mailto:eat@ramahousebothell.com"><Mail aria-hidden="true" />eat@ramahousebothell.com</a>
        </div>
        <div>
          <p className="footer-label">Hours</p>
          <p className="footer-hours"><Clock3 aria-hidden="true" /><span>Mon–Sat&nbsp; 11am–9pm<br />Sunday&nbsp; 12pm–9pm</span></p>
          <p className="footer-note">Lunch 11am–3pm<br />Dinner 4pm–9pm</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Rama House Thai Kitchenette</span>
        <span>Thai restaurant serving Bothell, Canyon Park, Mill Creek & Lynnwood</span>
      </div>
    </footer>
  );
}
