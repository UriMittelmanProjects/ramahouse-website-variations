import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { ORDER_URL } from './SiteHeader';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <p className="footer-wordmark">Lorem Ipsum</p>
          <p>Dolor sit amet, consectetur adipiscing elit.</p>
          <a className="button button-small" href={ORDER_URL} target="_blank" rel="noreferrer">
            Lorem ipsum <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div>
          <p className="footer-label">Lorem ipsum</p>
          <Link href="/menu">Dolor sit amet</Link>
          <Link href="/gallery">Consectetur</Link>
          <Link href="/about">Adipiscing elit</Link>
          <Link href="/contact">Sed do eiusmod</Link>
        </div>
        <div>
          <p className="footer-label">Lorem ipsum dolor</p>
          <a href="https://maps.google.com/?q=Rama+House+Bothell" target="_blank" rel="noreferrer"><MapPin aria-hidden="true" />Sit amet consectetur<br />Adipiscing elit</a>
          <a href="tel:+14254817262"><Phone aria-hidden="true" />Sed do eiusmod</a>
          <a href="mailto:eat@ramahousebothell.com"><Mail aria-hidden="true" />Tempor incididunt</a>
        </div>
        <div>
          <p className="footer-label">Lorem ipsum</p>
          <p className="footer-hours"><Clock3 aria-hidden="true" /><span>Dolor sit amet<br />Consectetur elit</span></p>
          <p className="footer-note">Sed do eiusmod<br />Tempor incididunt</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Lorem ipsum dolor sit amet</span>
        <span>Consectetur adipiscing elit, sed do eiusmod tempor</span>
      </div>
    </footer>
  );
}
