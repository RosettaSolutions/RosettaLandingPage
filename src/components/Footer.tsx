import rosettaLogo from "../assets/LogoRosettaWithName.svg";

const Footer = () => {
  const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL;
  const githubUrl = import.meta.env.VITE_GITHUB_URL;
  const emailContact = import.meta.env.VITE_EMAIL_CONTACT;

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          <img
            src={rosettaLogo}
            alt="Rosetta Logo"
            className="h-16 w-auto opacity-80"
          />

          <p className="text-muted-foreground text-center max-w-2xl">
            Software é a ponte entre ideias e impacto real. Transformando o
            futuro digital com segurança e inovação.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a
              href="https://www.linkedin.com/company/rosetta-technological-solutions"
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/RosettaSolutions"
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:kvsgpro@outlook.com"
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>

          <div className="pt-6 border-t border-border w-full text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Rosetta. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
