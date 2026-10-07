'use client';

import { motion, MotionConfig, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowRight, ArrowUpRight, Clock3, MapPin, Phone } from 'lucide-react';
import { useRef } from 'react';
import { ORDER_URL } from './SiteHeader';

const drinks = [
  { name: 'Lorem Ipsum', note: 'Dolor sit amet', image: '/images/generated/dish-panang-curry.png', alt: 'Panang curry in a square bowl', className: 'panang-curry' },
  { name: 'Dolor Sit', note: 'Amet consectetur', image: '/images/generated/dish-spring-rolls.png', alt: 'Thai spring rolls with dipping sauce', className: 'spring-rolls' },
  { name: 'Consectetur', note: 'Adipiscing elit', image: '/images/generated/dish-chicken-satay.png', alt: 'Chicken satay with dipping sauces', className: 'chicken-satay' },
  { name: 'Adipiscing Elit', note: 'Sed do eiusmod', image: '/images/generated/dish-fried-rice.png', alt: 'Thai fried rice with vegetables', className: 'fried-rice' },
  { name: 'Tempor Incididunt', note: 'Ut labore et dolore', image: '/images/generated/dish-green-curry.png', alt: 'Thai green curry with basil', className: 'green-curry' },
];

export function ExperienceThree() {
  const reducedMotion = useReducedMotion();
  const drinksSection = useRef<HTMLElement>(null);
  const platesSection = useRef<HTMLElement>(null);
  const { scrollY, scrollYProgress } = useScroll();
  const pageProgress = useSpring(scrollYProgress, { stiffness: 130, damping: 28, mass: 0.35 });
  const heroLeftY = useTransform(scrollY, [0, 900], [0, 190]);
  const heroRightY = useTransform(scrollY, [0, 900], [0, 120]);
  const { scrollYProgress: drinksProgress } = useScroll({ target: drinksSection, offset: ['start start', 'end end'] });
  const smoothDrinksProgress = useSpring(drinksProgress, { stiffness: 100, damping: 26, mass: 0.4 });
  const drinksX = useTransform(smoothDrinksProgress, [0, 1], ['0%', '-75%']);
  const { scrollYProgress: platesProgress } = useScroll({ target: platesSection, offset: ['start end', 'end start'] });
  const plateOneY = useTransform(platesProgress, [0, 1], [160, -120]);
  const plateTwoY = useTransform(platesProgress, [0, 1], [220, -170]);
  const plateThreeY = useTransform(platesProgress, [0, 1], [260, -210]);
  const plateOneRotate = useTransform(platesProgress, [0, 1], [-18, 14]);
  const plateTwoRotate = useTransform(platesProgress, [0, 1], [16, -12]);
  const plateThreeRotate = useTransform(platesProgress, [0, 1], [9, -15]);

  const reveal = {
    initial: { opacity: 0, y: reducedMotion ? 0 : 42 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: reducedMotion ? 0 : 0.7 },
  };

  return (
    <MotionConfig reducedMotion="user">
      <motion.div className="v3-progress" style={{ scaleX: pageProgress }} aria-hidden="true" />

      <section id="home" className="v3-hero" aria-labelledby="v3-title">
        <motion.div
          className="v3-hero-drink v3-hero-drink-left"
          style={{ y: reducedMotion ? 0 : heroLeftY }}
          initial={{ opacity: 0, x: -80, rotate: -10 }}
          animate={{ opacity: 1, x: 0, rotate: reducedMotion ? -7 : [-7, -3, -7] }}
          transition={{ opacity: { duration: 0.6 }, x: { duration: 0.8 }, rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
        >
          <Image src="/images/drink-thai-tea-cutout.png" alt="Thai iced tea with milk and ice" fill priority sizes="(max-width: 760px) 62vw, 34vw" />
        </motion.div>

        <motion.div
          className="v3-hero-drink v3-hero-drink-right"
          style={{ y: reducedMotion ? 0 : heroRightY }}
          initial={{ opacity: 0, x: 90, rotate: 12 }}
          animate={{ opacity: 1, x: 0, rotate: reducedMotion ? 8 : [8, 4, 8] }}
          transition={{ opacity: { duration: 0.6, delay: 0.12 }, x: { duration: 0.8, delay: 0.12 }, rotate: { duration: 7, repeat: Infinity, ease: 'easeInOut' } }}
        >
          <Image src="/images/drink-thai-tea-cutout.png" alt="Thai iced tea with milk and ice" fill priority sizes="(max-width: 760px) 60vw, 30vw" />
        </motion.div>

        <motion.div className="v3-hero-copy" initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}>
          <p className="v3-kicker">Lorem ipsum dolor sit amet</p>
          <h1 id="v3-title">Lorem ipsum<br />dolor sit.</h1>
          <p className="v3-hero-intro">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          <div className="v3-actions">
            <Link href="/menu">Lorem ipsum <ArrowUpRight size={17} aria-hidden="true" /></Link>
            <a href={ORDER_URL} target="_blank" rel="noreferrer">Dolor sit amet <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </motion.div>

        <a className="v3-scroll-cue" href="#drinks"><ArrowDown size={17} aria-hidden="true" /> Lorem ipsum</a>
      </section>

      <section id="drinks" ref={drinksSection} className="v3-drinks" aria-labelledby="drinks-title">
        <div className="v3-drinks-sticky">
          <motion.header className="v3-drinks-intro" {...reveal}>
            <p className="v3-section-label">Lorem ipsum</p>
            <h2 id="drinks-title">Dolor sit amet<br />consectetur.</h2>
            <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </motion.header>
          <motion.div className="v3-drinks-track" style={{ x: reducedMotion ? 0 : drinksX }}>
            {drinks.map((drink, index) => (
              <article className={`v3-drink-panel ${drink.className}`} key={drink.name}>
                <span className="v3-drink-index">0{index + 1}</span>
                <div className="v3-drink-image">
                  <Image src={drink.image} alt={drink.alt} fill sizes="(max-width: 760px) 72vw, 36vw" />
                </div>
                <div className="v3-drink-copy"><h3>{drink.name}</h3><p>{drink.note}</p></div>
              </article>
            ))}
          </motion.div>
          <div className="v3-drinks-meter" aria-hidden="true"><motion.span style={{ scaleX: smoothDrinksProgress }} /></div>
        </div>
      </section>

      <section ref={platesSection} className="v3-plates" aria-labelledby="plates-title">
        <motion.div className="v3-plate v3-plate-one" style={{ y: reducedMotion ? 0 : plateOneY, rotate: reducedMotion ? -9 : plateOneRotate }}>
          <Image src="/images/plate-orange-chicken.png" alt="Orange chicken with vegetables" fill sizes="(max-width: 760px) 70vw, 48vw" />
        </motion.div>
        <motion.div className="v3-plate v3-plate-two" style={{ y: reducedMotion ? 0 : plateTwoY, rotate: reducedMotion ? 8 : plateTwoRotate }}>
          <Image src="/images/plate-drunken-noodles.png" alt="Wide noodles with vegetables" fill sizes="(max-width: 760px) 72vw, 45vw" />
        </motion.div>
        <motion.div className="v3-plate v3-plate-three" style={{ y: reducedMotion ? 0 : plateThreeY, rotate: reducedMotion ? 6 : plateThreeRotate }}>
          <Image src="/images/generated/dish-papaya-salad.png" alt="Thai green papaya salad" fill sizes="(max-width: 760px) 58vw, 34vw" />
        </motion.div>
        <motion.div className="v3-plates-copy" {...reveal}>
          <p className="v3-section-label">Lorem ipsum dolor</p>
          <h2 id="plates-title">Sit amet consectetur.</h2>
          <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          <Link href="/menu">Lorem ipsum dolor <ArrowRight size={18} aria-hidden="true" /></Link>
        </motion.div>
      </section>

      <section className="v3-menu-chapter" aria-labelledby="menu-chapter-title">
        <div className="v3-menu-plate v3-menu-plate-left" aria-hidden="true">
          <Image src="/images/generated/dish-mango-sticky-rice.png" alt="" fill sizes="(max-width: 760px) 70vw, 38vw" />
        </div>
        <div className="v3-menu-plate v3-menu-plate-right" aria-hidden="true">
          <Image src="/images/generated/dish-tom-kha-soup.png" alt="" fill sizes="(max-width: 760px) 68vw, 40vw" />
        </div>
        <motion.div className="v3-menu-center" {...reveal}>
          <p className="v3-section-label">Lorem ipsum dolor</p>
          <h2 id="menu-chapter-title">Sit amet<br />consectetur.</h2>
          <nav aria-label="Menu highlights">
            <Link href="/menu#noodles">Lorem ipsum <ArrowUpRight size={18} aria-hidden="true" /></Link>
            <Link href="/menu#curry">Dolor sit <ArrowUpRight size={18} aria-hidden="true" /></Link>
            <Link href="/menu#rice-dishes">Amet consectetur <ArrowUpRight size={18} aria-hidden="true" /></Link>
            <Link href="/menu#appetizers">Adipiscing elit <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </nav>
        </motion.div>
      </section>

      <section className="v3-room" aria-labelledby="room-title">
        <Image src="/images/IMG_5350.jpg" alt="The dining room at Rama House in Bothell" fill sizes="100vw" />
        <div className="v3-room-shade" />
        <motion.div className="v3-room-copy" {...reveal}>
          <p className="v3-section-label">Lorem ipsum dolor</p>
          <h2 id="room-title">Sit amet<br />consectetur.</h2>
          <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Link href="/about">Lorem ipsum dolor <ArrowRight size={18} aria-hidden="true" /></Link>
        </motion.div>
      </section>

      <section className="v3-visit" aria-labelledby="visit-title">
        <motion.div className="v3-visit-heading" {...reveal}>
          <p className="v3-section-label">Lorem ipsum dolor</p>
          <h2 id="visit-title">Sit amet consectetur.</h2>
          <a className="v3-order-button" href={ORDER_URL} target="_blank" rel="noreferrer">Lorem ipsum <ArrowUpRight size={19} aria-hidden="true" /></a>
        </motion.div>
        <div className="v3-visit-details">
          <a href="https://maps.google.com/?q=Rama+House+Bothell" target="_blank" rel="noreferrer"><MapPin aria-hidden="true" /><span>Lorem ipsum dolor sit amet<br />Consectetur adipiscing elit</span></a>
          <div><Clock3 aria-hidden="true" /><span>Sed do eiusmod tempor<br />Incididunt ut labore</span></div>
          <a href="tel:+14254817262"><Phone aria-hidden="true" /><span>Dolor sit amet</span></a>
        </div>
      </section>
    </MotionConfig>
  );
}
