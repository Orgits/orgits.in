'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        <span className={styles.logoDot} />
        Orgits
      </Link>
      <ul className={styles.links}>
        <li><Link href="#services">Services</Link></li>
        <li><Link href="#zoho">Zoho</Link></li>
        <li><Link href="#cases">Case Studies</Link></li>
        <li><Link href="#industries">Industries</Link></li>
        <li><Link href="#faq">FAQ</Link></li>
        <li><Link href="#contact" className={styles.navBtn}>Get Started</Link></li>
      </ul>
    </nav>
  );
}
