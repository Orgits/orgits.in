'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Testimonials.module.css';

const testimonials = [
  { text: '"Orgits transformed our chaotic sales process into a well-oiled machine. The Zoho implementation was flawless, and our close rate has doubled in six months."', name: 'Michael Chen', role: 'CEO — DataMetrics Analytics' },
  { text: '"We needed a complex custom application with multiple integrations. Orgits not only delivered on time but exceeded our expectations in every measure."', name: 'Jennifer Rodriguez', role: 'CTO — CloudSecure Systems' },
  { text: '"The RevOps strategy Orgits designed aligned our teams for the first time. We now have complete pipeline visibility and 85% better forecasting accuracy."', name: 'David Thompson', role: 'VP Revenue Ops — GrowthScale Partners' },
  { text: '"Working with Orgits felt like having an extension of our own team. They understood our challenges and provided solutions that were both innovative and practical."', name: 'Amanda Foster', role: 'Director of Operations — Precision Mfg.' },
  { text: '"From consultation to deployment, Orgits demonstrated professionalism at every step. They didn\'t just build what we asked for—they delivered something better."', name: 'Robert Williams', role: 'Managing Partner — Sterling Financial' },
];

export default function Testimonials() {
  useScrollReveal();
  return (
    <section className={styles.section}>
      <div className="section-inner">
        <div style={{ textAlign: 'center' }} className="reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Client Testimonials</span>
          <h2 className="s-title" style={{ maxWidth: '480px', margin: '0 auto' }}>What Our Clients Say</h2>
        </div>
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={`${styles.card} reveal`}>
              <div className={styles.stars}>★★★★★</div>
              <div className={styles.text}>{t.text}</div>
              <div className={styles.author}>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.role}>{t.role}</div>
              </div>
            </div>
          ))}
          <div className={`${styles.ratingCard} reveal`}>
            <div className={styles.bigNum}>4.9/5</div>
            <div className={styles.ratingStars}>★★★★★</div>
            <div className={styles.ratingSub}>Based on 150+ verified reviews</div>
            <Link href="#" className="btn-outlined" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', padding: '9px 20px' }}>
              Read All Reviews <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
