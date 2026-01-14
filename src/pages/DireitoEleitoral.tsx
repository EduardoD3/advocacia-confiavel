// Página específica sobre Direito Eleitoral
import { Helmet } from "react-helmet-async";
import { Vote, FileText, Clock, CheckCircle, MessageCircle, Shield, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import urnaImage from "@/assets/urna-eleitoral.jpg";

const DireitoEleitoral = () => {
  const whatsappNumber = "+554898462142";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre Direito Eleitoral.");
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${whatsappMessage}`;

  return (
    <>
      <Helmet>
        <title>Direito Eleitoral - Maria José França Advocacia</title>
        <meta name="description" content="Consultoria especializada em Direito Eleitoral: registro de candidaturas, prestação de contas, recursos eleitorais e assessoria para campanhas." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section com Imagem */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={urnaImage} 
              alt="Urna Eletrônica - Justiça Eleitoral" 
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
                <Vote className="w-5 h-5 text-white" />
                <span className="text-sm font-semibold text-white">Assessoria Especializada</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Direito Eleitoral
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                Consultoria completa em questões eleitorais. Assessoria especializada para 
                candidatos, partidos políticos e campanhas eleitorais.
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
                { icon: Users, value: "50+", label: "Campanhas Assessoradas" },
                { icon: Shield, value: "100%", label: "Contas Aprovadas" },
                { icon: Award, value: "10+", label: "Anos de Experiência" },
                { icon: Vote, value: "3", label: "Eleições Acompanhadas" },
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
                Atuação completa em todas as questões eleitorais, garantindo uma campanha dentro da legalidade
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Registro de Candidatura",
                  items: ["Análise de elegibilidade", "Documentação necessária", "Protocolo de pedido", "Defesa de impugnações"]
                },
                {
                  title: "Prestação de Contas",
                  items: ["Orientação contábil", "Organização de documentos", "Elaboração de relatórios", "Defesa em diligências"]
                },
                {
                  title: "Recursos Eleitorais",
                  items: ["Recursos administrativos", "Recursos judiciais", "Representações", "Direito de resposta"]
                },
                {
                  title: "Propaganda Eleitoral",
                  items: ["Consultoria em propaganda", "Defesa contra representações", "Análise de legalidade", "Orientação de materiais"]
                },
                {
                  title: "Cassação e Inelegibilidade",
                  items: ["Defesa em processos", "Análise de condutas", "Recursos contra cassação", "Regularização de situação"]
                },
                {
                  title: "Consultoria Preventiva",
                  items: ["Orientação para candidatos", "Planejamento eleitoral", "Compliance eleitoral", "Assessoria contínua"]
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
                Assessoria completa do início ao fim da campanha eleitoral
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { icon: FileText, title: "1. Consulta Inicial", desc: "Análise completa da situação eleitoral do candidato" },
                { icon: Vote, title: "2. Planejamento", desc: "Estratégia jurídica personalizada para a campanha" },
                { icon: Clock, title: "3. Acompanhamento", desc: "Monitoramento de todos os prazos eleitorais" },
                { icon: CheckCircle, title: "4. Resultado", desc: "Defesa completa dos direitos políticos" }
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
              Precisa de Assessoria Eleitoral?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Entre em contato e garanta uma campanha dentro da legalidade. 
              Atendimento em todo o Brasil.
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

export default DireitoEleitoral;
