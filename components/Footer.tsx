import Link from 'next/link';
import styles from './Footer.module.css';

const services = ['Software Development', 'Zoho Partner Services', 'Revenue Operations', 'Marketing Operations', 'Digital Marketing', 'Cloud & DevOps', 'AI & Machine Learning', 'Data Analytics'];
const solutions = ['Financial Services', 'Real Estate', 'Healthcare', 'E-commerce', 'Manufacturing', 'CRM Implementation', 'Process Automation', 'System Integration'];
const company = ['About Orgits', 'Our Approach', 'Case Studies', 'Blog & Insights', 'Careers', 'Contact Us', 'Privacy Policy', 'Terms of Service'];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <div className={styles.logo}><span className={styles.logoDot} />Orgits</div>
          <p className={styles.desc}>Transforming businesses through integrated technology and intelligent automation. We build scalable, intelligent systems that drive measurable results.</p>
          <div className={styles.certs}>
            {['Zoho Advanced Partner', 'ISO 9001:2015', 'ISO 27001', 'AWS Partner'].map((c) => (
              <span key={c} className={styles.cert}>{c}</span>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.colTitle}>Services</div>
          <ul className={styles.links}>{services.map((s) => <li key={s}><Link href="#">{s}</Link></li>)}</ul>
        </div>
        <div>
          <div className={styles.colTitle}>Solutions</div>
          <ul className={styles.links}>{solutions.map((s) => <li key={s}><Link href="#">{s}</Link></li>)}</ul>
        </div>
        <div>
          <div className={styles.colTitle}>Company</div>
          <ul className={styles.links}>{company.map((c) => <li key={c}><Link href="#">{c}</Link></li>)}</ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.copy}>© 2024 Orgits Technologies Pvt. Ltd. All rights reserved.</div>
        <div className={styles.socials}>
          {[{ label: 'in', title: 'LinkedIn' }, { label: '𝕏', title: 'Twitter' }, { label: '▶', title: 'YouTube' }, { label: 'f', title: 'Facebook' }].map((s) => (
            <Link key={s.title} href="#" className={styles.social} title={s.title}>{s.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
