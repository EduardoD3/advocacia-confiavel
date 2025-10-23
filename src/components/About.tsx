// Seção "Sobre Maria José França" com foto e mini-bio
import { Mail, Phone, Award, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/maria-jose-profile.jpg";

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Imagem */}
            <div className="order-2 md:order-1">
              <img
                src={profileImage}
                alt="Dra. Maria José França - Advogada especialista em Direito Previdenciário"
                className="w-full rounded-2xl shadow-elevated object-cover aspect-square"
              />
            </div>

            {/* Conteúdo */}
            <div className="order-1 md:order-2 space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Sobre Maria José França
                </h2>
                <p className="text-lg text-muted-foreground">
                  OAB/RO 9607
                </p>
              </div>

              <p className="text-foreground leading-relaxed">
                Advogada com sólida experiência em Direito Previdenciário, Trabalhista, 
                Eleitoral, Cível, Imobiliário e de Família. Atuação pautada pela ética, 
                dedicação e comprometimento com a defesa dos direitos de cada cliente.
              </p>

              <p className="text-foreground leading-relaxed">
                Atendimento humanizado com foco em soluções jurídicas eficientes e resultados concretos. 
                Cada caso é tratado com máxima dedicação e respeito às necessidades individuais dos clientes.
              </p>

              {/* Especializações */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Formação</p>
                    <p className="text-sm text-muted-foreground">
                      Graduação em Direito • Especializações em múltiplas áreas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Áreas de Atuação</p>
                    <p className="text-sm text-muted-foreground">
                      Previdenciário • Trabalhista • Eleitoral • Cível • Imobiliário • Família
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-2xl font-bold text-primary mb-1">5+</p>
                  <p className="text-sm text-muted-foreground">Áreas de atuação</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-2xl font-bold text-primary mb-1">100%</p>
                  <p className="text-sm text-muted-foreground">Dedicação aos casos</p>
                </div>
              </div>

              {/* Contato */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button variant="default" size="sm" className="gap-2" asChild>
                  <a href="tel:+556999449223">
                    <Phone className="w-4 h-4" />
                    (69) 99944-9223
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href="mailto:contato@mjfranca.adv.br">
                    <Mail className="w-4 h-4" />
                    Enviar e-mail
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
