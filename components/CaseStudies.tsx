'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './CaseStudies.module.css';

const miniCases = [
  { tag: 'Real Estate', title: 'Urban Realty Group — Portfolio Management', result: '↑ 60% faster deal closing' },
  { tag: 'Healthcare', title: 'Regional Medical Center — Patient Engagement', result: '↑ 35% patient satisfaction increase' },
  { tag: 'Manufacturing', title: 'Precision Components — ERP Implementation', result: '↓ 50% reduction in inventory costs' },
];

const stats = [
  { val: '40%', lbl: 'Lead Conversion' },
  { val: '$2.1M', lbl: 'Added Revenue' },
  { val: '15h', lbl: 'Saved/Week/Rep' },
  { val: '92%', lbl: 'Adoption in 30d' },
  { val: '3mo', lbl: 'ROI Payback' },
];

export default function CaseStudies() {
  useScrollReveal();
  return (
    <section className={styles.section} id="cases">
      <div className="section-inner">
        <div className="reveal" style={{ marginBottom: '40px' }}>
          <span className="eyebrow">Proven Results</span>
          <h2 className="s-title">Real Businesses. Real Results. Real ROI.</h2>
        </div>
        <div className={`${styles.featured} reveal`}>
          <span className={styles.caseTag}>B2B SaaS | Technology</span>
          <h3 className={styles.caseTitle}>CA Nexus — Eliminating 40% Pipeline Leakage</h3>
          <p className={styles.caseBody}>CA Nexus was operating across 7 disconnected tools for their sales and marketing operations. Data lived in silos, leads fell through the cracks, and their sales team was losing 15 hours every week to manual data entry. We stepped in with a unified Zoho ecosystem — automating lead routing, building real-time dashboards, and designing custom workflows that cut manual workload by 80%.</p>
          <div className={styles.statsRow}>
            {stats.map((s) => (
              <div key={s.lbl} className={styles.cstat}>
                <div className={styles.cstatVal}>{s.val}</div>
                <div className={styles.cstatLbl}>{s.lbl}</div>
              </div>
            ))}
          </div>
          <div className={styles.quote}>&ldquo;Orgits didn&apos;t just implement Zoho, they reimagined our entire revenue process. The ROI was measurable within weeks.&rdquo; — <strong>CMO of, CA Nexus</strong></div>
          <div style={{ marginTop: '20px' }}>
            <Link href="#" className="btn-tonal">Read Full Case Study <span className="arr">→</span></Link>
          </div>
        </div>
        <div className={`${styles.miniGrid} reveal`}>
          {miniCases.map((c) => (
            <div key={c.title} className={styles.miniCase}>
              <div className={styles.mcTag}>{c.tag}</div>
              <div className={styles.mcTitle}>{c.title}</div>
              <div className={styles.mcResult}>{c.result}</div>
              <Link href="#" className={styles.mcLink}>View Case Study <span className="arr">→</span></Link>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '36px' }} className="reveal">
          <Link href="#" className="btn-outlined">Explore All Success Stories <span className="arr">→</span></Link>
        </div>
      </div>
    </section>
  );
}