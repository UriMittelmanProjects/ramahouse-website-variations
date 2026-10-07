import { ArrowUpRight, Menu } from 'lucide-react';
import Link from 'next/link';

export const ORDER_URL = 'https://ramahousewa.smiledining.com/';

const links = [
  { href: '/menu', label: 'Lorem' },
  { href: '/gallery', label: 'Ipsum' },
  { href: '/about', label: 'Dolor sit' },
  { href: '/contact', label: 'Amet' },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Home">
        <span className="brand-wordmark">Lorem Ipsum</span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
      </nav>
      <a className="button button-small desktop-order" href={ORDER_URL} target="_blank" rel="noreferrer">
        Lorem ipsum <ArrowUpRight size={16} aria-hidden="true" />
      </a>
      <details className="mobile-nav">
        <summary aria-label="Open navigation"><Menu aria-hidden="true" /></summary>
        <nav aria-label="Mobile navigation">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          <a href={ORDER_URL} target="_blank" rel="noreferrer">Lorem ipsum <ArrowUpRight size={16} aria-hidden="true" /></a>
        </nav>
      </details>
    </header>
  );
}
