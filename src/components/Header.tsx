// Header com logo, OAB e contato rápido (telefone + WhatsApp)
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/logo.jpg";

const Header = () => {
  const phoneNumber = "+556999449223";
  const whatsappNumber = "+554898462142";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-card/98 backdrop-blur-md shadow-soft border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={logoImg} 
              alt="Maria José França - Advocacia" 
              className="h-12 w-12 md:h-14 md:w-14 object-contain"
            />
            <div className="flex flex-col">
              <h1 className="text-lg md:text-xl font-bold text-primary leading-tight">
                Maria José França
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground">
                Advocacia & Consultoria | OAB/RO 9607
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <a
              href={`tel:${phoneNumber}`}
              className="hidden lg:flex items-center gap-2 text-sm text-foreground hover:text-primary transition-smooth"
            >
              <Phone className="w-4 h-4" />
              <span>(69) 99944-9223</span>
            </a>

            <Button
              size="sm"
              asChild
              className="gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contato via WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden md:inline">WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
