import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Services from "../components/Services";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Projects />
      <Services />
      <ContactForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
