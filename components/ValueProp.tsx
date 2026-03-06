'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './ValueProp.module.css';

const diffs = [
  { num: '01', title: 'Full-Stack Expertise', body: 'From frontend interfaces to backend architecture, we own the entire technology stack end-to-end.' },
  { num: '02', title: 'Zoho Ecosystem Mastery', body: 'Certified specialists in the complete Zoho suite with 200+ successful implementations.' },
  { num: '03', title: 'Business-First Approach', body: 'Technology serves strategy. Every decision is tied to measurable ROI and business outcomes.' },
];

export default function ValueProp() {
  useScrollReveal();
  return (
    <section className={styles.section}>
      <div className="section-inner">
        <div className={styles.grid}>
          <div className="reveal">
            <span className="eyebrow">The Integration Challenge</span>
            <h2 className="s-title">Why Most Digital Transformations Fail</h2>
            <div className={styles.bigPct}>70%</div>
            <div className={styles.bigSub}>of digital transformation initiatives fail to meet their objectives</div>
            <p className="s-body">Fragmented systems, disconnected data, and technology that doesn&apos;t talk to each other. Orgits creates unified ecosystems where your CRM, ERP, marketing automation, and custom applications work as one intelligent system.</p>
            <div className={styles.diffList}>
              {diffs.map((d) => (
                <div key={d.num} className={styles.diffRow}>
                  <span className={styles.diffIdx}>{d.num}</span>
                  <div>
                    <div className={styles.diffTitle}>{d.title}</div>
                    <div className={styles.diffBody}>{d.body}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '28px' }}>
              <Link href="#" className="btn-tonal">Discover Our Methodology <span className="arr">→</span></Link>
            </div>
          </div>

          <div className={`${styles.valueCard} reveal`}>
            <div className={styles.vcTop}>
              <div className={styles.vcLabel}>Pipeline Performance — Q4 2024</div>
              <div className={styles.vcBars}>
                {[45, 60, 40, 75, 55, 90, 78, 100].map((h, i) => (
                  <div key={i} className={styles.vcBar} style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
            </div>
            <div className={styles.vcStatRow}>
              <div className={styles.vcStat}><div className={`${styles.vcStatVal} ${styles.green}`}>↑ 40%</div><div className={styles.vcStatLbl}>Conversion Rate</div></div>
              <div className={styles.vcStat}><div className={`${styles.vcStatVal} ${styles.blue}`}>$2.1M</div><div className={styles.vcStatLbl}>Revenue Added</div></div>
            </div>
            <div className={styles.vcList}>
              {[
                { color: styles.dotBlue, label: 'CRM Automation', val: '47 flows active' },
                { color: styles.dotTeal, label: 'Lead Intelligence', val: '243 qualified/day' },
                { color: styles.dotOrange, label: 'Revenue Forecasting', val: '85% accuracy' },
              ].map((r) => (
                <div key={r.label} className={styles.vcRow}>
                  <div className={`${styles.vcDot} ${r.color}`} />
                  <div className={styles.vcRowText}>{r.label}</div>
                  <div className={styles.vcRowPct}>{r.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
