'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Industries.module.css';

const industries = [
  { icon: '🏦', name: 'Financial Services', count: '25+', desc: 'SOC 2, PCI-DSS, risk management, client portals' },
  { icon: '🏢', name: 'Real Estate', count: '40+', desc: 'Listing management, CRM for brokers, MLS integrations' },
  { icon: '🏥', name: 'Healthcare', count: '18+', desc: 'HIPAA-compliant systems, patient management, telemedicine' },
  { icon: '🛒', name: 'E-commerce', count: '35+', desc: 'Custom platforms, omnichannel, payment processing' },
  { icon: '💼', name: 'Professional Services', count: '50+', desc: 'Project mgmt, billing automation, client portals' },
  { icon: '🏭', name: 'Manufacturing', count: '22+', desc: 'Supply chain, inventory optimization, B2B portals' },
  { icon: '🎓', name: 'Education', count: '15+', desc: 'LMS, student info systems, virtual classrooms' },
  { icon: '💻', name: 'Technology & SaaS', count: '45+', desc: 'Product development, scaling infrastructure, DevOps' },
  { icon: '🚛', name: 'Logistics', count: '12+', desc: 'Fleet management, route optimization, TMS platforms' },
  { icon: '🤝', name: 'Non-Profit', count: '20+', desc: 'Donation management, member portals, grant tracking' },
];

export default function Industries() {
  useScrollReveal();
  return (
    <section className={styles.section} id="industries">
      <div className="section-inner">
        <div className="reveal">
          <span className="eyebrow">Industry Expertise</span>
          <h2 className="s-title">Deep Expertise Across<br />Multiple Sectors</h2>
          <p className="s-body">Specialized knowledge and pre-built solutions tailored to your industry&apos;s unique challenges and compliance requirements.</p>
        </div>
        <div className={`${styles.grid} reveal`}>
          {industries.map((ind) => (
            <div key={ind.name} className={styles.card}>
              <span className={styles.icon}>{ind.icon}</span>
              <div className={styles.name}>{ind.name}</div>
              <div className={styles.count}>{ind.count} projects</div>
              <div className={styles.desc}>{ind.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
