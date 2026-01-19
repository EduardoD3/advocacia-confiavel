// Rodapé com endereço, links úteis, redes sociais e horários
import { MapPin, Clock, Mail, Phone, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">Maria José França</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Advocacia especializada em Direito Previdenciário e Cível, com foco
              em resultados e atendimento humanizado.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>(69) 99944-9223</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>advogadamariajose@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Rua São Pedro, 1070 - Areias
                  <br />
                  São José - SC
                </span>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h4 className="font-semibold mb-4">Horário de Atendimento</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>Segunda a Sexta</span>
              </li>
              <li className="pl-6">8h às 18h</li>
              <li className="flex items-center gap-2 mt-3">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>Sábado</span>
              </li>
              <li className="pl-6">8h às 12h</li>
            </ul>
          </div>

          {/* Links e Redes Sociais */}
          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm opacity-90 mb-6">
              <li>
                <a href="#" className="hover:text-secondary transition-smooth">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-smooth">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-smooth">
                  Aviso Legal
                </a>
              </li>
            </ul>

            <h4 className="font-semibold mb-3">Redes Sociais</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 mt-10 pt-8 text-center text-sm opacity-75">
          <p>
            © {currentYear} Maria José França - Advocacia & Consultoria. Todos os direitos
            reservados.
          </p>
          <p className="mt-1">OAB/RO 9607</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
