'use client';

import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.inner}>
        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.tag}>
            <span className={styles.tagDot} />
            Enterprise Technology Consultancy
          </div>
          <h1 className={styles.h1}>
            Transform<br />
            <span className={styles.hl}>Operations.</span><br />
            Accelerate <span className={styles.hl2}>Growth.</span>
          </h1>
          <p className={styles.sub}>
            Orgits delivers enterprise-grade technology solutions that unify your
            business operations—from custom software development to intelligent CRM
            automation. We architect ecosystems that drive measurable results.
          </p>
          <div className={styles.actions}>
            <Link href="#contact" className="btn-filled">
              Schedule a Consultation <span className="arr">→</span>
            </Link>
            <Link href="#services" className="btn-outlined">
              Explore Solutions <span className="arr">→</span>
            </Link>
          </div>
          <div className={styles.stats}>
            <div>
              <div className={styles.statNum}>150<span>+</span></div>
              <div className={styles.statLabel}>Organizations Served</div>
            </div>
            <div>
              <div className={styles.statNum}>200<span>+</span></div>
              <div className={styles.statLabel}>Zoho Implementations</div>
            </div>
            <div>
              <div className={styles.statNum}>98<span>%</span></div>
              <div className={styles.statLabel}>Client Retention</div>
            </div>
          </div>
        </div>

        {/* RIGHT — Dashboard Card */}
        <div className={styles.right}>
          <div className={`${styles.floatCard} ${styles.floatCard1}`}>
            <div className={styles.floatVal}>+40%</div>
            <div className={styles.floatLbl}>Lead Conversion</div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHead}>
              <span className={styles.cardTitle}>Operations Dashboard</span>
              <span className={styles.livePill}>
                <span className={styles.liveDot} />LIVE
              </span>
            </div>

            <div className={styles.metricRow}>
              {[
                { val: '$2.1M', lbl: 'Revenue Added' },
                { val: '92%', lbl: 'Adoption Rate' },
                { val: '15h', lbl: 'Saved/Week' },
              ].map((m) => (
                <div key={m.lbl} className={styles.metricChip}>
                  <div className={styles.metricVal}>{m.val}</div>
                  <div className={styles.metricLbl}>{m.lbl}</div>
                </div>
              ))}
            </div>

            <div className={styles.miniChart}>
              {[45, 62, 42, 80, 55, 90, 70, 100].map((h, i) => (
                <div
                  key={i}
                  className={styles.chartBar}
                  style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>

            <div className={styles.actRows}>
              {[
                { icon: '⚡', title: 'Pipeline Automation Active', sub: '47 workflows running', badge: 'AUTO', cls: styles.badgeBlue, iconCls: 'ic-blue' },
                { icon: '🎯', title: 'Lead Scoring Engine', sub: '243 leads qualified today', badge: 'AI', cls: styles.badgeGreen, iconCls: 'ic-teal' },
                { icon: '📊', title: 'Revenue Forecast Q4', sub: '85% accuracy confirmed', badge: 'NEW', cls: styles.badgeOrange, iconCls: 'ic-orange' },
              ].map((row) => (
                <div key={row.title} className={styles.actRow}>
                  <div className={`${styles.actIcon} ${row.iconCls}`}>{row.icon}</div>
                  <div className={styles.actBody}>
                    <div className={styles.actTitle}>{row.title}</div>
                    <div className={styles.actSub}>{row.sub}</div>
                  </div>
                  <span className={`${styles.actBadge} ${row.cls}`}>{row.badge}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.floatCard} ${styles.floatCard2}`}>
            <div className={styles.floatVal}>3mo ROI</div>
            <div className={styles.floatLbl}>Payback Period</div>
          </div>
        </div>
      </div>
    </section>
  );
}
