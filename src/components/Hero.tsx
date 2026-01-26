// Seção Hero com headline impactante, CTAs e trust line
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Award, CheckCircle2, Scale } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const phoneNumber = "+5569999449223";
  const whatsappNumber = "+5569999449223";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[\s\(\)\-\+]/g, "")}?text=${encodeURIComponent(
    "Olá, gostaria de uma avaliação gratuita do meu caso."
  )}`;

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background com overlay profissional */}
      <div 
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundPosition: 'center 20%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90"></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            A excelência como cultura e{" "}
            <span className="text-white">foco permanente na sua satisfação</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Advocacia com estrutura dinâmica e abrangente. Equipe em contínuo processo de capacitação, 
            primando pela cautela e pela conduta absolutamente ética.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base text-white/90 mb-12">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span>OAB/RO 9607</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>6 Áreas de Especialização</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5" />
              <span>Atendimento Humanizado</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="gap-2 text-base px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-strong hover:shadow-elevated transition-all"
            >
              Avaliar meu caso
              <ArrowRight className="w-5 h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="gap-2 text-base px-8 py-6 bg-[#25D366] hover:bg-[#20BA5A] border-0 text-white shadow-strong hover:shadow-elevated transition-all"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Falar via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
