import { ArrowUpRight, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const ORDER_URL = 'https://ramahousewa.smiledining.com/';

const links = [
  { href: '/menu', label: 'Menu' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'Our story' },
  { href: '/contact', label: 'Visit' },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Rama House home">
        <Image src="/images/rama-house-logo-4.png" alt="Rama House Thai Kitchenette" width={130} height={93} priority />
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
      </nav>
      <a className="button button-small desktop-order" href={ORDER_URL} target="_blank" rel="noreferrer">
        Order online <ArrowUpRight size={16} aria-hidden="true" />
      </a>
      <details className="mobile-nav">
        <summary aria-label="Open navigation"><Menu aria-hidden="true" /></summary>
        <nav aria-label="Mobile navigation">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          <a href={ORDER_URL} target="_blank" rel="noreferrer">Order online <ArrowUpRight size={16} aria-hidden="true" /></a>
        </nav>
      </details>
    </header>
  );
}
