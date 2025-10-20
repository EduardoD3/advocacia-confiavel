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
                  OAB/RO 0000 {/* Placeholder */}
                </p>
              </div>

              <p className="text-foreground leading-relaxed">
                Com mais de 10 anos de experiência em Direito Previdenciário,
                atuo com dedicação na defesa dos direitos de segurados do INSS,
                especialmente em casos de benefícios negados injustamente.
              </p>

              <p className="text-foreground leading-relaxed">
                Minha missão é oferecer atendimento humanizado e personalizado,
                garantindo que cada cliente compreenda todas as etapas do
                processo e tenha seus direitos plenamente assegurados.
              </p>

              {/* Especializações */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Formação</p>
                    <p className="text-sm text-muted-foreground">
                      Graduação em Direito • Pós-graduação em Direito
                      Previdenciário
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Especializações</p>
                    <p className="text-sm text-muted-foreground">
                      Recursos Administrativos • Revisão de Benefícios • Ações
                      Previdenciárias
                    </p>
                  </div>
                </div>
              </div>

              {/* Contato */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button variant="default" size="sm" className="gap-2">
                  <Phone className="w-4 h-4" />
                  (69) 9 9999-9999 {/* Placeholder */}
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Mail className="w-4 h-4" />
                  contato@mjfranca.adv.br {/* Placeholder */}
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
