import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Orgits — Transform Operations. Accelerate Growth.',
  description:
    'Orgits delivers enterprise-grade technology solutions that unify your business operations—from custom software development to intelligent CRM automation.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
