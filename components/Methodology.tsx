'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Methodology.module.css';

const phases = [
  { num: 'PHASE 01', icon: '🔍', color: 'ic-blue', title: 'Discovery & Strategy', time: 'Week 1–2', bullets: ['Stakeholder interviews & requirements', 'Current state analysis & gap assessment', 'Technology stack evaluation', 'Project roadmap & milestones'], deliverable: '📄 Strategic Blueprint Document' },
  { num: 'PHASE 02', icon: '📐', color: 'ic-teal', title: 'Architecture & Design', time: 'Week 2–3', bullets: ['System architecture design', 'Data model creation', 'UI/UX wireframes & prototypes', 'Integration planning'], deliverable: '📐 Technical Spec & Mockups' },
  { num: 'PHASE 03', icon: '⚡', color: 'ic-purple', title: 'Development & Integration', time: 'Week 4–12', bullets: ['Agile sprint-based development', 'Continuous integration & testing', 'Third-party system integration', 'Regular stakeholder demos'], deliverable: '🚀 Fully Functional MVP' },
  { num: 'PHASE 04', icon: '🎯', color: 'ic-green', title: 'Deployment & Optimization', time: 'Week 13+', bullets: ['User acceptance testing', 'Training and documentation', 'Production deployment', 'Ongoing monitoring & support'], deliverable: '✅ Production System + Support' },
];

export default function Methodology() {
  useScrollReveal();
  return (
    <section className={styles.section}>
      <div className="section-inner">
        <div className={styles.top}>
          <div className="reveal">
            <span className="eyebrow">How We Work</span>
            <h2 className="s-title">The Orgits Delivery Framework</h2>
            <p className="s-body">Battle-tested methodology combining strategic planning with agile execution.</p>
          </div>
          <Link href="#" className="btn-outlined reveal">Download Full Guide <span className="arr">→</span></Link>
        </div>
        <div className={`${styles.grid} reveal`}>
          {phases.map((p) => (
            <div key={p.num} className={styles.phase}>
              <div className={styles.phaseNum}>{p.num}</div>
              <div className={`${styles.phaseIcon} ${p.color}`}>{p.icon}</div>
              <div className={styles.phaseTitle}>{p.title}</div>
              <div className={styles.phaseTime}>{p.time}</div>
              <ul className={styles.bullets}>
                {p.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <div className={styles.deliverable}>{p.deliverable}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
