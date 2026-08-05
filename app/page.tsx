import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import WhyChooseUs from '@/components/WhyChooseUs';
import Gallery from '@/components/Gallery';
import Manufacturing from '@/components/Manufacturing';
import Dealers from '@/components/Dealers';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyChooseUs />
        <Manufacturing />
        <Gallery />
        <Dealers />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
