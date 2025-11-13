// Seção "Como Funciona" com 3 passos simples
import { FileText, Clock, Scale } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "1. Envie seus documentos",
    description:
      "Compartilhe a carta de negativa do INSS e documentos relacionados ao seu caso de forma simples e segura.",
  },
  {
    icon: Clock,
    title: "2. Avaliação gratuita em 24-48h",
    description:
      "Nossa equipe analisa seu caso sem custo e identifica as melhores estratégias para reverter a decisão.",
  },
  {
    icon: Scale,
    title: "3. Recurso e acompanhamento",
    description:
      "Elaboramos e protocolamos o recurso administrativo, mantendo você informado em cada etapa do processo.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Como Funciona
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Processo transparente e eficiente para garantir seus direitos com excelência
        </p>
      </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-smooth"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
