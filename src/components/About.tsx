// Seção "Sobre Maria José França" com foto e mini-bio
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import professionalImage from "@/assets/maria-jose-professional.jpg";

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Imagem */}
            <div className="order-2 md:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl -z-10"></div>
              <img
                src={professionalImage}
                alt="Dra. Maria José França - Advogada especialista em Direito Previdenciário"
                className="w-full rounded-2xl shadow-elevated object-cover aspect-[3/4]"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Escritório</p>
                    <p className="text-xs text-muted-foreground">Rua São Pedro, 1070 - Areias</p>
                    <p className="text-xs text-muted-foreground">São José - SC</p>
                  </div>
                </div>
              </div>
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

              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                Advogada com sólida formação acadêmica e vasta experiência prática, 
                comprometida em oferecer soluções jurídicas eficazes e personalizadas. 
                Minha atuação é pautada pela ética profissional, transparência e dedicação integral a cada cliente.
              </p>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-foreground text-sm">
                  Áreas de Especialização
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Direito Previdenciário",
                    "Direito Trabalhista",
                    "Direito Eleitoral",
                    "Direito Criminal",
                    "Direito Imobiliário",
                    "Direito de Família e Sucessões",
                  ].map((spec) => (
                    <span
                      key={spec}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary mb-1">6</p>
                  <p className="text-xs text-muted-foreground">Áreas de Especialização</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary mb-1">100%</p>
                  <p className="text-xs text-muted-foreground">Compromisso com Resultados</p>
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
