// Seção de depoimentos de clientes
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "João Silva",
    role: "Aposentadoria por invalidez",
    content:
      "Depois de três negativas do INSS, a Dra. Maria José conseguiu reverter meu caso em apenas 60 dias. Profissional dedicada e muito competente!",
    rating: 5,
  },
  {
    name: "Ana Paula Costa",
    role: "Revisão de benefício",
    content:
      "Recebia valor errado há anos. Com a revisão feita pela advogada, consegui não só corrigir o valor como receber os atrasados. Muito grata!",
    rating: 5,
  },
  {
    name: "Carlos Eduardo",
    role: "Auxílio-doença",
    content:
      "Atendimento humanizado e profissional. A Dra. Maria José explicou cada etapa do processo e me deixou tranquilo durante todo o recurso.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Depoimentos de Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A satisfação de nossos clientes é o reflexo do nosso compromisso com a excelência
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-smooth"
            >
              <Quote className="w-8 h-8 text-secondary mb-4" />
              
              <p className="text-foreground leading-relaxed mb-4">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-2 mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-lg">★</span>
                ))}
              </div>

              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
