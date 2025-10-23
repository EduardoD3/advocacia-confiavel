// Seção de Serviços com cards destacando áreas de atuação
import { Scale, Briefcase, Users, Home, Heart, Vote } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Direito Previdenciário",
    description:
      "Aposentadorias, auxílios, pensões, revisões de benefícios, recursos administrativos e judiciais perante o INSS. Garantimos seus direitos previdenciários com máxima dedicação.",
    highlighted: true,
  },
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    description:
      "Defesa de direitos trabalhistas, rescisões contratuais, verbas rescisórias, horas extras, danos morais e materiais. Atuação completa em questões trabalhistas.",
    highlighted: true,
  },
  {
    icon: Vote,
    title: "Direito Eleitoral",
    description:
      "Consultoria em questões eleitorais, registro de candidaturas, prestação de contas, impugnações e recursos eleitorais. Assessoria especializada para campanhas.",
    highlighted: false,
  },
  {
    icon: Home,
    title: "Direito Imobiliário",
    description:
      "Contratos de compra e venda, locação, usucapião, regularização de imóveis, ações possessórias e assessoria completa em questões imobiliárias.",
    highlighted: false,
  },
  {
    icon: Heart,
    title: "Direito de Família e Sucessões",
    description:
      "Divórcios, guarda, pensão alimentícia, inventários, testamentos e partilhas. Atendimento humanizado em momentos delicados da vida familiar.",
    highlighted: false,
  },
];

const Services = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Assessoria jurídica completa e especializada nas principais áreas do direito, 
            com atendimento personalizado e foco em resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group bg-card rounded-xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 ${
                  service.highlighted ? "border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent" : ""
                }`}
              >
                {service.highlighted && (
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground mb-4">
                    Especialidade
                  </span>
                )}
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-5 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
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
