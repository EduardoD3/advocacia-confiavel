// Página específica sobre Direito Trabalhista
import { Helmet } from "react-helmet-async";
import { Briefcase, FileText, Clock, CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const DireitoTrabalhista = () => {
  const whatsappNumber = "+554898462142";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre Direito Trabalhista.");
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${whatsappMessage}`;

  return (
    <>
      <Helmet>
        <title>Direito Trabalhista - Maria José França Advocacia</title>
        <meta name="description" content="Defesa completa de direitos trabalhistas: rescisões, verbas rescisórias, horas extras, danos morais e materiais." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-smooth">
              ← Voltar para a página inicial
            </Link>
            
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Briefcase className="w-5 h-5" />
                <span className="text-sm font-semibold">Área de Especialidade</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Direito Trabalhista
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Defesa completa dos seus direitos trabalhistas. Atuação em rescisões contratuais, 
                verbas rescisórias, horas extras e muito mais.
              </p>
              
              <Button size="lg" className="gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Consultar Especialista
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Serviços Oferecidos */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Serviços Oferecidos</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Atuação completa em todas as questões trabalhistas
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Rescisões",
                  items: ["Rescisão contratual", "Verbas rescisórias", "Aviso prévio", "13º salário", "Férias proporcionais"]
                },
                {
                  title: "Horas Extras",
                  items: ["Adicional noturno", "Horas extras não pagas", "Intervalos suprimidos", "Banco de horas irregular"]
                },
                {
                  title: "Danos",
                  items: ["Danos morais", "Danos materiais", "Assédio moral", "Acidente de trabalho", "Doença ocupacional"]
                },
                {
                  title: "FGTS",
                  items: ["FGTS não depositado", "Saque do FGTS", "Correção do FGTS", "Multa rescisória"]
                },
                {
                  title: "Desvio de Função",
                  items: ["Equiparação salarial", "Desvio de função", "Acúmulo de função", "Diferenças salariais"]
                },
                {
                  title: "Outros Direitos",
                  items: ["Vale-transporte", "Vale-refeição", "Adicional de insalubridade", "Adicional de periculosidade"]
                }
              ].map((service, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-elevated transition-all duration-300">
                  <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Como Funciona o Processo</h2>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { icon: FileText, title: "1. Análise", desc: "Avaliação da documentação e dos direitos" },
                { icon: Briefcase, title: "2. Estratégia", desc: "Definição da melhor abordagem legal" },
                { icon: Clock, title: "3. Ação", desc: "Protocolo da reclamação trabalhista" },
                { icon: CheckCircle, title: "4. Resultado", desc: "Acompanhamento até o pagamento" }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Seus Direitos Trabalhistas Foram Violados?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Entre em contato e recupere o que é seu por direito.
            </p>
            <Button size="lg" className="gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Falar com Especialista
              </a>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default DireitoTrabalhista;
