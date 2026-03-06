'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Services.module.css';

const services = [
  { icon: '⌨️', title: 'Custom Software Development', desc: 'Scalable web applications, mobile apps, and SaaS platforms built with modern frameworks that grow with your business.', chips: ['React', 'Node.js', 'Python', 'AWS', 'MongoDB'], color: 'ic-blue' },
  { icon: '🔗', title: 'Zoho CRM Implementation', desc: 'As a Certified Advanced Zoho Partner, we transform Zoho CRM into your complete business operating system with custom modules and workflows.', chips: ['CRM', 'Creator', 'Books', 'Analytics'], color: 'ic-teal' },
  { icon: '📈', title: 'Revenue Operations (RevOps)', desc: 'Align sales, marketing, and customer success with unified data, automated workflows, and predictive analytics to accelerate growth.', chips: ['Pipeline', 'Forecasting', 'Automation'], color: 'ic-purple' },
  { icon: '🎯', title: 'Marketing Operations', desc: 'Build marketing infrastructure that scales. Lead scoring, attribution modeling, and campaign orchestration across all channels.', chips: ['HubSpot', 'Marketo', 'Mailchimp'], color: 'ic-orange' },
  { icon: '☁️', title: 'Cloud Infrastructure & DevOps', desc: 'Secure, scalable cloud on AWS, Azure, or GCP. CI/CD pipelines, containerization, monitoring, and disaster recovery strategies.', chips: ['AWS', 'Kubernetes', 'Docker', 'Terraform'], color: 'ic-green' },
  { icon: '🧠', title: 'AI & Machine Learning', desc: 'Practical AI that solves real business problems. Predictive analytics, NLP, computer vision, and intelligent automation at scale.', chips: ['Predictive', 'NLP', 'Computer Vision'], color: 'ic-blue' },
  { icon: '📊', title: 'Data Analytics & BI', desc: 'Transform data into actionable insights. Custom dashboards, ETL pipelines, and visualization solutions that inform strategic decisions.', chips: ['Power BI', 'Tableau', 'Zoho Analytics'], color: 'ic-teal' },
  { icon: '📣', title: 'Digital Marketing & Growth', desc: 'Data-driven digital marketing strategies that deliver ROI. SEO, SEM, social media, content strategy, and CRO backed by analytics.', chips: ['SEO', 'PPC', 'Social', 'Analytics'], color: 'ic-orange' },
  { icon: '💡', title: 'Business Process Consulting', desc: 'Optimize before automating. We analyze workflows, identify bottlenecks, and design efficient processes for maximum operational impact.', chips: ['Process Mapping', 'Workflow', 'Change Mgmt'], color: 'ic-purple' },
];

export default function Services() {
  useScrollReveal();
  return (
    <section className={styles.section} id="services">
      <div className="section-inner">
        <div className={styles.top}>
          <div className="reveal">
            <span className="eyebrow">What We Build</span>
            <h2 className="s-title">End-to-End Solutions for<br />Modern Enterprises</h2>
            <p className="s-body">Complete technology partner experience from initial consultation to ongoing optimization.</p>
          </div>
          <Link href="#" className="btn-outlined reveal">View All Services <span className="arr">→</span></Link>
        </div>
        <div className={`${styles.grid} reveal`}>
          {services.map((s) => (
            <div key={s.title} className={styles.card}>
              <div className={`${styles.iconWrap} ${s.color}`}>{s.icon}</div>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.desc}</p>
              <div className={styles.chips}>
                {s.chips.map((c) => <span key={c} className="chip">{c}</span>)}
              </div>
              <Link href="#" className={styles.link}>Explore <span className="arr">→</span></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
