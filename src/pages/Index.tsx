// Página principal com todos os componentes da landing page
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <SEO />
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <HowItWorks />
          <Services />
          <ContactForm />
          <Testimonials />
          <FAQ />
          <About />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
