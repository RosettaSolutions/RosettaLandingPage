import { z, ZodError } from "zod";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Nome é obrigatório" })
    .max(100, { message: "Nome deve ter menos de 100 caracteres" })
    .transform((val) => val.replace(/\s+/g, " ")),
  email: z
    .email("E-mail inválido")
    .trim()
    .max(255, "E-mail deve ter menos de 255 caracteres"),
  company: z
    .string()
    .trim()
    .max(100, "Nome da empresa deve ter menos de 100 caracteres")
    .optional(),
  message: z
    .string()
    .trim()
    .min(1, { message: "Mensagem é obrigatória" })
    .max(1000, { message: "Mensagem deve ter menos de 1000 caracteres" }),
});

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      // Validate form data
      contactSchema.parse(formData);

      setIsSubmitting(true);

      if (!formData) return;
      await emailjs.send(serviceID, templateId, formData, publicKey);

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });

      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      if (error instanceof ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.issues.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        console.error("Erro inesperado:", error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-background to-card relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Vamos Conversar?
            </h2>
            <p className="text-xl text-muted-foreground">
              Conte-nos sobre seu projeto e descubra como podemos ajudar
            </p>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Seu nome *"
                    value={formData.name}
                    onChange={handleChange}
                    className={`bg-background/50 border-border focus:border-primary ${
                      errors.name ? "border-destructive" : ""
                    }`}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Seu e-mail *"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-background/50 border-border focus:border-primary ${
                      errors.email ? "border-destructive" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    type="text"
                    name="company"
                    placeholder="Sua empresa (opcional)"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Conte-nos sobre seu projeto *"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`bg-background/50 border-border focus:border-primary resize-none ${
                      errors.message ? "border-destructive" : ""
                    }`}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 hover:animate-glow-pulse"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
