import { Shield, Layers, Blocks, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Shield,
    title: "Segurança Avançada",
    description: "Implementação de criptografia AES-GCM e práticas de segurança de ponta para proteger seus dados e transações.",
    gradient: "from-primary to-accent"
  },
  {
    icon: Layers,
    title: "Arquiteturas Modernas",
    description: "Desenvolvimento com Django e React, criando sistemas escaláveis e de alta performance para o futuro digital.",
    gradient: "from-accent to-secondary"
  },
  {
    icon: Blocks,
    title: "Web3 & Blockchain",
    description: "Integração com tecnologias descentralizadas para soluções inovadoras no ecossistema blockchain.",
    gradient: "from-secondary to-primary"
  },
  {
    icon: Zap,
    title: "Performance & Confiabilidade",
    description: "Sistemas otimizados que unem velocidade, estabilidade e inovação para impulsionar seu crescimento.",
    gradient: "from-primary to-primary-glow"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden" aria-label="Nossas especialidades e serviços">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Nossas Especialidades
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transformamos desafios complexos em soluções digitais elegantes e seguras
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
