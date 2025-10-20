// Seção de Serviços com cards destacando áreas de atuação
import { ShieldCheck, FileCheck, UserCheck, Building, Briefcase } from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Recurso Administrativo ao INSS",
    description:
      "Recurso administrativo: pedido formal ao INSS solicitando revisão da decisão. Atuamos para reverter negativas de benefícios previdenciários.",
    highlighted: true,
  },
  {
    icon: FileCheck,
    title: "Revisão de Benefício",
    description:
      "Análise e correção de valores de aposentadorias e outros benefícios já concedidos, garantindo o pagamento correto.",
    highlighted: true,
  },
  {
    icon: UserCheck,
    title: "Auxílio-Doença e BPC/LOAS",
    description:
      "Assessoria completa para concessão de auxílio-doença e Benefício de Prestação Continuada (BPC/LOAS) negados injustamente.",
    highlighted: true,
  },
  {
    icon: Building,
    title: "Aposentadoria",
    description:
      "Planejamento e obtenção de aposentadorias por tempo de contribuição, idade ou invalidez. Garantimos seus direitos previdenciários.",
    highlighted: false,
  },
  {
    icon: Briefcase,
    title: "Direito Cível e Trabalhista",
    description:
      "Atuação em causas cíveis (contratos, indenizações) e trabalhistas (rescisões, verbas rescisórias, direitos do trabalhador).",
    highlighted: false,
  },
];

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Áreas de atuação
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Especialização em Direito Previdenciário, com foco em resolver casos
            de negativa do INSS
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-smooth ${
                  service.highlighted ? "border-2 border-secondary" : ""
                }`}
              >
                {service.highlighted && (
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-secondary-foreground mb-4">
                    Destaque
                  </span>
                )}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
