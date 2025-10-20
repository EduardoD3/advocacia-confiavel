// Seção Hero com headline impactante, CTAs e trust line
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, CheckCircle } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const whatsappLink = "https://wa.me/+5569999999999"; // Placeholder

  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background com gradiente overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Conteúdo */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Pedido do INSS negado?
            <br />
            Nós ajudamos a reverter.
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Assessoria jurídica especializada em recursos do INSS, revisões e
            benefícios previdenciários — avaliação gratuita do caso.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button
              size="lg"
              variant="secondary"
              onClick={scrollToForm}
              className="text-base md:text-lg gap-2 shadow-elevated"
            >
              Avaliar meu caso
              <ArrowRight className="w-5 h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base md:text-lg gap-2 bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 backdrop-blur"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Falar via WhatsApp
              </a>
            </Button>
          </div>

          {/* Trust line */}
          <div className="flex flex-wrap items-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span className="text-sm md:text-base">+10 anos de atuação</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span className="text-sm md:text-base">
                Atendimento personalizado
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span className="text-sm md:text-base">Avaliação gratuita</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
