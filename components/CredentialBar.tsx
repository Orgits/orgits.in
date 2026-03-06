import styles from './CredentialBar.module.css';

const creds = [
  'Trusted by 150+ Organizations',
  'Zoho Advanced Partner',
  'ISO 9001:2015 Certified',
  'ISO 27001 Certified',
  'Microsoft Partner',
  'AWS Consulting Partner',
];

export default function CredentialBar() {
  const doubled = [...creds, ...creds];
  return (
    <div className={styles.bar}>
      <div className={styles.track}>
        {doubled.map((c, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.sep}>✦</span> {c}
          </div>
        ))}
      </div>
    </div>
  );
}
