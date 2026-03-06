'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Testimonials.module.css';

const testimonials = [
  { text: '"Orgits stands out for its professionalism and commitment to excellence. Their ability to understand client needs and deliver tailored solutions is truly impressive. The team\'s innovative approach and dedication make them a trusted partner for any project."', name: 'Dr. Anwar Hussain', role: 'MD Physician & Member of IMA — Health Tips By Dr. Anwar' },
  { text: '"Working with Orgits has been a seamless experience. Their professionalism and expertise build a strong sense of trust, and their exceptional skills ensure every project is executed with precision and excellence. I highly recommend them for any business needs."', name: 'CA Sahil Goyal', role: 'Partner & ICAI Member — SG Rawat & Co.' },
  { text: '"Great work on Website SEO! You\'ve been able to take the website from a grade of F to A! That\'s fantastic!"', name: 'Mr. Michael Wong', role: 'Executive Director, PPAHS — Ex Director, Public Affairs at Abbott Laboratories' },
];

export default function Testimonials() {
  useScrollReveal();
  return (
    <section className={styles.section}>
      <div className="section-inner">
        <div style={{ textAlign: 'center' }} className="reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Client Testimonials</span>
          <h2 className="s-title" style={{ maxWidth: '480px', margin: '0 auto' }}>What Our Clients Have to Say About Us</h2>
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
            <div className={styles.ratingSub}>Trusted by 65+ enterprises & startups worldwide</div>
            <Link href="#" className="btn-outlined" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', padding: '9px 20px' }}>
              Read All Reviews <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}