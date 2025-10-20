// Header com logo, OAB e contato rápido (telefone + WhatsApp)
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const phoneNumber = "+5569999999999"; // Placeholder
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold text-primary">
              Maria José França
            </h1>
            <p className="text-xs md:text-sm text-muted-foreground">
              Advocacia | OAB/RO 0000 {/* Placeholder */}
            </p>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <a
              href={`tel:${phoneNumber}`}
              className="hidden md:flex items-center gap-2 text-sm text-foreground hover:text-primary transition-smooth"
            >
              <Phone className="w-4 h-4" />
              <span>(69) 9 9999-9999</span> {/* Placeholder */}
            </a>

            <Button
              variant="secondary"
              size="sm"
              asChild
              className="gap-2"
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
