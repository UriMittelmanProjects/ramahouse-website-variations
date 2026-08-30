'use client';

import { Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { dinnerMenu, lunchMenu, type MenuCategory } from '../data/menu';

function PriceTable({ prices }: { prices: NonNullable<MenuCategory['prices']> }) {
  return (
    <div className="price-table" aria-label="Protein pricing">
      {prices.map((option) => (
        <div key={option.label}><span>{option.label}</span><strong>{option.price}</strong></div>
      ))}
    </div>
  );
}

export function MenuBrowser({ initialService = 'lunch' }: { initialService?: 'lunch' | 'dinner' }) {
  const [service, setService] = useState<'lunch' | 'dinner'>(initialService);
  const [query, setQuery] = useState('');
  const source = service === 'lunch' ? lunchMenu : dinnerMenu;
  const categories = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return source;
    return source
      .map((category) => ({
        ...category,
        items: category.items.filter((item) => `${item.name} ${item.description ?? ''}`.toLowerCase().includes(normalized)),
      }))
      .filter((category) => category.items.length > 0);
  }, [query, source]);

  return (
    <div className="menu-browser">
      <div className="menu-controls">
        <div className="segmented-control" aria-label="Choose lunch or dinner menu">
          <button type="button" aria-pressed={service === 'lunch'} onClick={() => setService('lunch')}>Lunch</button>
          <button type="button" aria-pressed={service === 'dinner'} onClick={() => setService('dinner')}>Dinner</button>
        </div>
        <label className="menu-search">
          <Search size={19} aria-hidden="true" />
          <span className="sr-only">Search the menu</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search dishes or ingredients" />
          {query && <button type="button" onClick={() => setQuery('')} aria-label="Clear search"><X size={18} /></button>}
        </label>
      </div>

      {!query && (
        <nav className="category-nav" aria-label={`${service} menu categories`}>
          {source.map((category) => <a key={category.id} href={`#${category.id}`}>{category.name}</a>)}
        </nav>
      )}

      {categories.length === 0 && (
        <div className="empty-menu"><h2>No dishes found</h2><p>Try a shorter search, such as “curry,” “tofu,” or “noodle.”</p></div>
      )}

      <div className="menu-sections">
        {categories.map((category) => (
          <section className="menu-section" id={category.id} key={category.id}>
            <header>
              <p className="eyebrow">{service} menu</p>
              <h2>{category.name}</h2>
              {category.note && <p>{category.note}</p>}
            </header>
            {category.prices && <PriceTable prices={category.prices} />}
            <div className="dish-grid">
              {category.items.map((item) => (
                <article className="dish" key={item.name}>
                  <div className="dish-title"><h3>{item.name}</h3>{item.price && <strong>{item.price}</strong>}</div>
                  {item.description && <p>{item.description}</p>}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
      <p className="menu-disclaimer">Menu prices and availability may change. Please call the restaurant with allergy questions or special requests.</p>
    </div>
  );
}
