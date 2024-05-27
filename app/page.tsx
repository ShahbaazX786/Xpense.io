import FAQ from "./_components/FAQ";
import Features from "./_components/Features";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Newsletter from "./_components/Newsletter";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <main>
      {/* Bismillah */}
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Footer />
    </main>
  );
}
