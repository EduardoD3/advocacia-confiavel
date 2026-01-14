// Página específica sobre Direito Imobiliário
import { Helmet } from "react-helmet-async";
import { Home, FileText, Clock, CheckCircle, MessageCircle, Shield, Key, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import casaImage from "@/assets/casa-imobiliario.jpg";

const DireitoImobiliario = () => {
  const whatsappNumber = "+554898462142";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre Direito Imobiliário.");
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${whatsappMessage}`;

  return (
    <>
      <Helmet>
        <title>Direito Imobiliário - Maria José França Advocacia</title>
        <meta name="description" content="Assessoria completa em Direito Imobiliário: compra e venda, locação, usucapião, regularização de imóveis e ações possessórias." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section com Imagem */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={casaImage} 
              alt="Casa moderna - Direito Imobiliário" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 py-20">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-smooth group">
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              <span className="ml-2">Voltar para a página inicial</span>
            </Link>
            
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Home className="w-5 h-5 text-white" />
                <span className="text-sm font-semibold text-white">Proteção Patrimonial</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Direito Imobiliário
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                Assessoria jurídica completa em questões imobiliárias. Proteja seu patrimônio 
                com segurança jurídica em todas as transações.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Consultar Especialista
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                  <a href="tel:+556999449223">
                    (69) 99944-9223
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Estatísticas */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Building, value: "200+", label: "Contratos Elaborados" },
                { icon: Shield, value: "100%", label: "Segurança Jurídica" },
                { icon: Key, value: "50+", label: "Usucapiões Deferidas" },
                { icon: Home, value: "10+", label: "Anos de Experiência" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Serviços Oferecidos */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Serviços Oferecidos</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Atuação completa em todas as questões imobiliárias para proteger seu patrimônio
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Compra e Venda",
                  items: ["Elaboração de contratos", "Análise de documentação", "Due diligence imobiliária", "Negociação de cláusulas", "Registro de imóveis"]
                },
                {
                  title: "Locação de Imóveis",
                  items: ["Contratos de locação", "Revisão de aluguel", "Ação de despejo", "Cobrança de aluguéis", "Rescisão contratual"]
                },
                {
                  title: "Usucapião",
                  items: ["Usucapião ordinária", "Usucapião extraordinária", "Usucapião especial urbana", "Usucapião familiar", "Documentação e registro"]
                },
                {
                  title: "Regularização Fundiária",
                  items: ["Regularização de imóveis", "Retificação de área", "Averbação de construção", "Desdobro de lotes", "Unificação de matrículas"]
                },
                {
                  title: "Ações Possessórias",
                  items: ["Reintegração de posse", "Manutenção de posse", "Interdito proibitório", "Imissão de posse", "Embargos de terceiro"]
                },
                {
                  title: "Questões Condominiais",
                  items: ["Incorporação imobiliária", "Convenção de condomínio", "Cobranças de taxas", "Direito de vizinhança", "Assembleias"]
                }
              ].map((service, index) => (
                <div key={index} className="group bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-elevated hover:border-primary/20 transition-all duration-300">
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona o Processo</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Processo transparente para garantir a segurança jurídica do seu imóvel
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { icon: FileText, title: "1. Análise Documental", desc: "Avaliação completa da documentação do imóvel" },
                { icon: Home, title: "2. Consultoria Jurídica", desc: "Orientação sobre a melhor estratégia para seu caso" },
                { icon: Clock, title: "3. Execução", desc: "Elaboração de contratos e ações necessárias" },
                { icon: CheckCircle, title: "4. Regularização", desc: "Registro e regularização completa do imóvel" }
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mx-auto mb-4 transition-colors">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Precisa de Assessoria Imobiliária?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Entre em contato e proteja seu patrimônio com segurança jurídica. 
              Atendimento presencial e remoto em todo o Brasil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Falar com Especialista
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <a href="tel:+556999449223">
                  Ligar Agora
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default DireitoImobiliario;
