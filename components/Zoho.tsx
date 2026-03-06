'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Zoho.module.css';

const products = [
  { icon: '👤', name: 'CRM' }, { icon: '📚', name: 'Books' }, { icon: '🏗️', name: 'Creator' },
  { icon: '📊', name: 'Analytics' }, { icon: '📧', name: 'Campaigns' }, { icon: '🎫', name: 'Desk' },
  { icon: '📋', name: 'Projects' }, { icon: '✍️', name: 'Sign' }, { icon: '📝', name: 'Forms' },
  { icon: '💬', name: 'SalesIQ' },
];

const features = [
  { icon: '🏗️', color: 'ic-blue', title: 'Complete Ecosystem Expertise', body: 'CRM, Books, Creator, Analytics, Campaigns, Desk, Projects and more—unified into one platform.' },
  { icon: '⚙️', color: 'ic-teal', title: 'Custom Development with Zoho Creator', body: 'Our Deluge scripting expertise lets us build custom applications that live inside your Zoho ecosystem.' },
  { icon: '🔄', color: 'ic-orange', title: 'Migration & Integration Services', body: 'Moving from Salesforce or HubSpot? We handle full data migration with zero business disruption.' },
];

export default function Zoho() {
  useScrollReveal();
  return (
    <section className={styles.section} id="zoho">
      <div className="section-inner">
        <div className={styles.inner}>
          <div className="reveal">
            <div className={styles.badge}>⭐Zoho Authorized Partner — 200+ Implementations</div>
            <span className="eyebrow">Zoho Ecosystem</span>
            <h2 className="s-title">Your Complete Zoho Transformation Partner</h2>
            <p className="s-body">Zoho&apos;s 45+ integrated applications can replace dozens of disconnected tools—but only when implemented correctly. We make it actually work.</p>
            <div className={styles.feats}>
              {features.map((f) => (
                <div key={f.title} className={styles.feat}>
                  <div className={`${styles.featIcon} ${f.color}`}>{f.icon}</div>
                  <div>
                    <div className={styles.featTitle}>{f.title}</div>
                    <div className={styles.featBody}>{f.body}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.ctas}>
              <Link href="#contact" className="btn-filled">Schedule a Zoho Assessment</Link>
              <Link href="#cases" className="btn-tonal">View Case Studies <span className="arr">→</span></Link>
            </div>
          </div>

          <div className="reveal">
            <div className={styles.card}>
              <div className={styles.cardTitle}>Zoho Products We Master</div>
              <div className={styles.productGrid}>
                {products.map((p) => (
                  <div key={p.name} className={styles.prod}>
                    <span className={styles.prodIcon}>{p.icon}</span>
                    {p.name}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.bigNum}>200+</div>
              <div className={styles.checks}>
                {['Industry-specific templates', 'Zero downtime migration', 'Custom Deluge scripting', 'Ongoing optimization'].map((c) => (
                  <div key={c} className={styles.checkItem}>{c}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
