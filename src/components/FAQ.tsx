import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para desenvolver um projeto?",
      answer:
        "O tempo varia conforme a complexidade do projeto. Projetos simples podem levar de 2-4 semanas, enquanto sistemas mais robustos podem levar de 2-6 meses. Fornecemos um cronograma detalhado após a análise inicial dos requisitos.",
    },
    {
      question: "Vocês oferecem suporte após o lançamento?",
      answer:
        "Sim! Oferecemos diferentes planos de suporte e manutenção para garantir que sua aplicação continue funcionando perfeitamente. Isso inclui correção de bugs, atualizações de segurança e melhorias contínuas.",
    },
    {
      question: "Quais tecnologias vocês utilizam?",
      answer:
        "Trabalhamos com tecnologias modernas e confiáveis como React, Node.js, TypeScript, Python, e frameworks blockchain como Solidity. Escolhemos a stack ideal para cada projeto com base nos requisitos específicos.",
    },
    {
      question: "Como funciona o processo de desenvolvimento?",
      answer:
        "Seguimos uma metodologia ágil: começamos com discovery e planejamento, depois passamos para design e prototipagem, desenvolvimento iterativo com entregas frequentes, testes rigorosos, e finalmente deploy e suporte contínuo.",
    },
    {
      question: "Posso solicitar alterações durante o desenvolvimento?",
      answer:
        "Absolutamente! Nossa metodologia ágil permite flexibilidade para ajustes. Mantemos comunicação constante e realizamos reuniões regulares para garantir que o produto final atenda suas expectativas.",
    },
    {
      question: "Vocês trabalham com projetos de diferentes tamanhos?",
      answer:
        "Sim, atendemos desde startups com MVPs até empresas estabelecidas que precisam de sistemas enterprise complexos. Cada projeto recebe a mesma atenção aos detalhes e compromisso com a qualidade.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-card">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-normal">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Respostas para as dúvidas mais comuns sobre nossos serviços
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-gradient-to-br from-card to-muted/20 hover:shadow-lg transition-all duration-300"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary cursor-pointer">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
