import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import rosettaLogo from "../assets/LogoRosettaWithNameV2Fit.svg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-card" aria-label="Rosetta Solutions — Página inicial">
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50 animate-gradient-shift"
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          {/* Logo */}
          <div className="mb-4 flex justify-center">
            <img
              src={rosettaLogo}
              alt="Logotipo da Rosetta Solutions"
              className="h-auto w-1/2"
              fetchPriority="high"
              loading="eager"
            />
          </div>

          {/* Heading */}
          <h1
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary-glow animate-gradient-shift"
            style={{ backgroundSize: "200% auto" }}
          >
            Software que une
            <br />
            ideias e impacto real
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
            Soluções digitais seguras e inovadoras, combinando Django, React e
            arquiteturas modernas com criptografia avançada e integração Web3
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground animate-glow-pulse"
              onClick={scrollToContact}
            >
              Fale Conosco
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10"
            >
              Nossos Serviços
            </Button> */}
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap justify-center gap-3 pt-8 max-w-4xl">
            {[
              "Django",
              "React",
              "AES-GCM",
              "Web3",
              "Blockchain",
              "Shadcn",
              "HeadlessUI",
              "Tailwind",
              "PostgreSQL",
              "JWT",
              "Typescript",
              "Python",
              "Gunicorn",
              "Nginx",
              "Docker",
              "Git",
              "Selenium",
              "Playwright",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 text-sm font-medium text-foreground hover:border-primary/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
