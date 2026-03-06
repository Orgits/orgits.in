import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CredentialBar from '@/components/CredentialBar';
import ValueProp from '@/components/ValueProp';
import Services from '@/components/Services';
import Methodology from '@/components/Methodology';
import Zoho from '@/components/Zoho';
import CaseStudies from '@/components/CaseStudies';
import Industries from '@/components/Industries';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CredentialBar />
        <ValueProp />
        <Services />
        <Methodology />
        <Zoho />
        <CaseStudies />
        <Industries />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
