// Header com logo, navbar e contato rápido
import { useState } from "react";
import { Phone, MessageCircle, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import profileLogo from "@/assets/profile-logo.jpg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [areasMenuOpen, setAreasMenuOpen] = useState(false);
  const location = useLocation();
  const phoneNumber = "+556999449223";
  const whatsappNumber = "+554898462142";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços jurídicos.");
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${whatsappMessage}`;

  const areas = [
    { name: "Direito Previdenciário", path: "/direito-previdenciario" },
    { name: "Direito Trabalhista", path: "/direito-trabalhista" },
    { name: "Direito Eleitoral", path: "/direito-eleitoral" },
    { name: "Direito Criminal", path: "/direito-criminal" },
    { name: "Direito Imobiliário", path: "/direito-imobiliario" },
    { name: "Direito de Família", path: "/direito-familia" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/98 backdrop-blur-md shadow-soft border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img 
              src={profileLogo} 
              alt="Maria José França - Advocacia" 
              className="h-12 w-12 md:h-14 md:w-14 object-cover rounded-full ring-2 ring-primary/20"
            />
            <div className="flex flex-col">
              <h1 className="text-base md:text-lg font-bold text-primary leading-tight">
                Maria José França
              </h1>
              <p className="text-xs text-muted-foreground">
                OAB/RO 9607
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Início
            </Link>
            
            {/* Áreas Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
                onMouseEnter={() => setAreasMenuOpen(true)}
                onMouseLeave={() => setAreasMenuOpen(false)}
              >
                Áreas de Atuação
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {areasMenuOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-card rounded-lg shadow-elevated border border-border py-2 animate-fade-in"
                  onMouseEnter={() => setAreasMenuOpen(true)}
                  onMouseLeave={() => setAreasMenuOpen(false)}
                >
                  {areas.map((area) => (
                    <Link
                      key={area.path}
                      to={area.path}
                      className={`block px-4 py-2 text-sm hover:bg-muted transition-colors ${
                        isActive(area.path) ? 'text-primary font-medium' : 'text-foreground'
                      }`}
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/#contact" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
            >
              Contato
            </Link>
          </nav>

          {/* Desktop Contact Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
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
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <Link 
                to="/" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/') ? 'text-primary' : 'text-foreground'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Início
              </Link>
              
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase">Áreas de Atuação</p>
                {areas.map((area) => (
                  <Link
                    key={area.path}
                    to={area.path}
                    className={`block pl-3 text-sm transition-colors hover:text-primary ${
                      isActive(area.path) ? 'text-primary font-medium' : 'text-foreground'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {area.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/#contact" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </Link>

              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(69) 99944-9223</span>
                </a>

                <Button
                  size="sm"
                  asChild
                  className="gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white w-full"
                >
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contato via WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
