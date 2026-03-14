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
            alt="Logotipo da Rosetta Solutions"
            className="h-16 w-auto opacity-80"
          />

          <p className="text-muted-foreground text-center max-w-2xl">
            Software é a ponte entre ideias e impacto real. Transformando o
            futuro digital com segurança e inovação.
          </p>

          <address className="not-italic flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar perfil da Rosetta no LinkedIn"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar perfil da Rosetta no GitHub"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href={`mailto:${emailContact}`}
              rel="noopener noreferrer"
              aria-label="Enviar email para a Rosetta Solutions"
              className="hover:text-primary transition-colors"
            >
              Email
            </a>
          </address>

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
