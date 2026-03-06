'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './CTA.module.css';

const cards = [
  { icon: '📅', title: 'Book Free Strategy Session', desc: '45-min consultation with a senior consultant' },
  { icon: '📋', title: 'Request Custom Proposal', desc: 'Get a detailed solution proposal for your needs' },
  { icon: '🔬', title: 'Get a Technology Audit', desc: 'Comprehensive assessment of your tech stack' },
];

export default function CTA() {
  useScrollReveal();
  return (
    <section className={styles.section} id="contact">
      <div className="section-inner">
        <div className={`${styles.inner} reveal`}>
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.6)', justifyContent: 'center', marginBottom: '14px' }}>Get Started Today</span>
          <h2 className="s-title" style={{ color: '#fff' }}>Ready to Transform<br />Your Business Operations?</h2>
          <p className={styles.sub}>Schedule a complimentary 45-minute strategy session. We&apos;ll analyze your current systems, identify opportunities, and provide actionable recommendations—no obligation required.</p>
          <div className={styles.cards}>
            {cards.map((c) => (
              <Link key={c.title} href="#" className={styles.card}>
                <span className={styles.cardIcon}>{c.icon}</span>
                <div className={styles.cardTitle}>{c.title}</div>
                <div className={styles.cardDesc}>{c.desc}</div>
              </Link>
            ))}
          </div>
          <div className={styles.trust}>
            <span className={styles.trustItem}>🔒 Secure &amp; confidential</span>
            <span className={styles.trustItem}>⚡ Response within 4 business hours</span>
            <span className={styles.trustItem}>💼 No-obligation consultation</span>
          </div>
          <div className={styles.email}>
            Or email us at{' '}
            <a href="mailto:Anubhav@orgits.in" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'underline' }}>
              Anubhav@orgits.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
