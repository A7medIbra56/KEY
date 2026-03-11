import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import OurServices from '@/components/OurServices';
import AboutUs from '@/components/AboutUs';
import Testimonials from '@/components/Testimonials';
import SafetyBanner from '@/components/SafetyBanner';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <OurServices />
      <AboutUs />
      <Testimonials />
      <SafetyBanner />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
