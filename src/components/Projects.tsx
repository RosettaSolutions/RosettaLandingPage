import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SafeNumber from "../assets/SafeNumber.png";
import SafeNumberAdmin from "../assets/SafeNumberAdmin.png";
import CryotoVault from "../assets/CryptoVault.png";

const projects = [
  {
    title: "SafeNumber",
    description:
      "Plataforma desenvolvida para validação e verificação de números de telefone, voltada à prevenção de fraudes em ambientes corporativos. O sistema foi projetado de forma modular, permitindo integração rápida com outros serviços e fácil adaptação para uso em múltiplas organizações, mantendo alto desempenho e segurança nos processos de validação.",
    image: SafeNumber,
    tags: [
      "Django REST Framework",
      "React",
      "Tailwind",
      "PostgreSQL",
      "Python",
      "Typescript",
    ],
    category: "Verificação e Segurança",
    link: "https://safe-number.com/amadeus-santos-advogados/",
  },
  {
    title: "SafeNumber Administration",
    description:
      "Painel administrativo do ecossistema SafeNumber, responsável pela gestão de usuários, logs, configurações e organizações. Conta com autenticação JWT, criptografia e integração com APIs externas para validação de números impostores, oferecendo informações adicionais aos casos fraudulentos.",
    image: SafeNumberAdmin,
    tags: ["Django", "Git", "Postman", "JWT", "Gunicorn", "APIs Externas"],
    category: "Painel Administrativo",
    link: "https://api.safe-number.com/admin/",
  },
  {
    title: "CryptoVault",
    description:
      "Aplicação voltada ao armazenamento seguro de arquivos utilizando blockchain e criptografia avançada. Cada arquivo é registrado em uma rede descentralizada, garantindo imutabilidade e autenticidade. A solução permite validação instantânea de integridade e pode ser integrada a sistemas externos de gestão documental e compliance.",
    image: CryotoVault,
    tags: [
      "Django REST Framework",
      "PostgreSQL",
      "React",
      "HeadlessUI",
      "Web3",
      "Solidity",
      "AES-GCM",
    ],
    category: "Blockchain",
    link: "https://cryptovault.rosetta-solutions.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-linear-to-b from-card to-background relative overflow-hidden" aria-label="Projetos realizados pela Rosetta Solutions">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-20" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-primary to-accent">
            Projetos Realizados
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça algumas das soluções que desenvolvemos para nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group hover:shadow-xl hover:shadow-primary/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={`Screenshot do projeto ${project.title} — ${project.category}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Category Badge */}
                <Badge className="absolute top-4 right-4 bg-primary/90 text-primary-foreground">
                  {project.category}
                </Badge>
              </div>

              <CardContent className="p-6 space-y-4">
                {/* Title */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-center mt-16 animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <p className="text-muted-foreground text-lg mb-6">
            Interessado em desenvolver um projeto conosco?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors"
          >
            Iniciar Projeto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
