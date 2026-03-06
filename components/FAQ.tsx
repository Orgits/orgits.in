'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './FAQ.module.css';

const faqs = [
  { q: 'What makes Orgits different from other technology consultancies?', a: 'We combine full-stack development expertise with deep business process knowledge. Unlike agencies that specialize in one area, we provide end-to-end solutions from strategy to implementation to ongoing optimization. OurZoho Authorized Partner status and multi-platform certifications mean we can architect complete ecosystems, not just point solutions.' },
  { q: 'How long does a typical CRM implementation take?', a: 'Most Zoho CRM implementations are completed in 6–12 weeks, including discovery, data migration, customization, integration, testing, and training. We provide detailed project timelines during our initial consultation.' },
  { q: 'Do you provide ongoing support after implementation?', a: 'Yes. We offer flexible support packages including managed services, on-demand support, and retained consulting hours. Most clients choose our ongoing optimization program where we continuously improve your systems as your business grows.' },
  { q: 'What is your pricing model?', a: 'We offer both project-based and retainer-based pricing. Each engagement begins with a discovery phase where we provide detailed scope and fixed-price quotes. We\'re fully transparent about costs—no hidden fees.' },
  { q: 'Can you work with our existing systems and tools?', a: 'Absolutely. We specialize in integration and rarely recommend "rip and replace." We\'ll assess your current tech stack and build solutions that enhance what\'s working while replacing what isn\'t.' },
  { q: 'Do you work with startups or only enterprises?', a: 'We work with businesses of all sizes—from early-stage startups to Fortune 500 companies. Our solutions are scalable, and we tailor our approach to your budget and growth stage.' },
  { q: 'How do you ensure data security and compliance?', a: 'Security is foundational to everything we build. We maintain ISO 27001 certification and ensure HIPAA, PCI-DSS, SOC 2, and GDPR compliance where applicable. All developers are trained in secure coding practices.' },
  { q: 'Can you help us migrate from our current CRM to Zoho?', a: 'Yes. We\'ve migrated clients from Salesforce, HubSpot, Pipedrive, and custom databases to Zoho with zero data loss and minimal business disruption.' },
];

export default function FAQ() {
  useScrollReveal();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className={styles.section} id="faq">
      <div className="section-inner">
        <div className={styles.inner}>
          <div style={{ textAlign: 'center' }} className="reveal">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>FAQ</span>
            <h2 className="s-title" style={{ maxWidth: '480px', margin: '0 auto 8px' }}>Frequently Asked Questions</h2>
            <p className="s-body" style={{ margin: '0 auto', textAlign: 'center' }}>Quick answers to common questions. Don&apos;t see yours? Contact us directly.</p>
          </div>
          <div className={`${styles.list} reveal`}>
            {faqs.map((faq, i) => (
              <div key={i} className={`${styles.item} ${open === i ? styles.open : ''}`}>
                <button className={styles.question} onClick={() => setOpen(open === i ? null : i)}>
                  {faq.q}
                  <span className={styles.icon}>+</span>
                </button>
                {open === i && <div className={styles.answer}>{faq.a}</div>}
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }} className="reveal">
            <Link href="#" className="btn-tonal">View All FAQs <span className="arr">→</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
