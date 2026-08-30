'use client';

import { useEffect, useRef, useState } from 'react';

const scenes = [
  { id: 'home', label: 'Welcome' },
  { id: 'welcome', label: 'The experience' },
  { id: 'kitchen', label: 'Our kitchen' },
  { id: 'favorites', label: 'Favorites' },
  { id: 'story', label: 'Our story' },
  { id: 'visit', label: 'Visit' },
];

export function ScrollExperience() {
  const [active, setActive] = useState('home');
  const progress = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('motion-ready');

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.18 });

    const sceneObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActive(visible.target.id);
    }, { threshold: [0.3, 0.55, 0.75] });

    document.querySelectorAll('[data-reveal]').forEach((node) => revealObserver.observe(node));
    document.querySelectorAll('[data-scene]').forEach((node) => sceneObserver.observe(node));

    const updateProgress = () => {
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      const amount = distance > 0 ? window.scrollY / distance : 0;
      if (progress.current) progress.current.style.transform = `scaleX(${amount})`;
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });

    return () => {
      root.classList.remove('motion-ready');
      revealObserver.disconnect();
      sceneObserver.disconnect();
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true"><span ref={progress} /></div>
      <nav className="experience-rail" aria-label="Homepage sections">
        {scenes.map((scene, index) => (
          <a className={active === scene.id ? 'active' : ''} href={`#${scene.id}`} key={scene.id} aria-label={scene.label}>
            <span>{String(index + 1).padStart(2, '0')}</span>
          </a>
        ))}
      </nav>
    </>
  );
}
