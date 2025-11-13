// Seção de Perguntas Frequentes (FAQ) focada em INSS
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo tenho para recorrer de uma negativa do INSS?",
    answer:
      "O prazo para recurso administrativo é de 30 dias corridos a partir da ciência da decisão (data em que você toma conhecimento da negativa). É importante não perder esse prazo, pois depois você precisará entrar com ação judicial.",
  },
  {
    question: "Quais documentos preciso para o recurso?",
    answer:
      "Geralmente são necessários: carta de negativa do INSS, documentos pessoais (RG, CPF), comprovantes de contribuição, laudos médicos (para casos de doença/invalidez), exames e histórico médico. Cada caso pode exigir documentação específica que orientaremos durante a avaliação.",
  },
  {
    question: "Qual a chance de reverter uma negativa do INSS?",
    answer:
      "A taxa de sucesso varia conforme o caso, mas estatisticamente cerca de 40-60% dos recursos administrativos bem fundamentados são revertidos. Com análise criteriosa dos documentos e argumentação técnica adequada, as chances aumentam significativamente.",
  },
  {
    question: "Quanto custa para recorrer no INSS?",
    answer:
      "Oferecemos avaliação inicial gratuita do seu caso. Os honorários são discutidos de forma transparente após análise da viabilidade do recurso. Em muitos casos, trabalhamos com honorários de êxito (você só paga se ganhar).",
  },
  {
    question: "Quanto tempo demora o processo de recurso?",
    answer:
      "O recurso administrativo costuma levar de 60 a 180 dias para ser analisado pelo INSS, dependendo da complexidade do caso e da demanda do órgão. Mantemos você informado durante todo o processo.",
  },
  {
    question: "E se o recurso administrativo for negado novamente?",
    answer:
      "Se o recurso administrativo for negado, ainda há a possibilidade de ingressar com ação judicial. Avaliamos as chances de sucesso na justiça e orientamos sobre os próximos passos, sempre com total transparência.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Perguntas Frequentes
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Esclarecemos as principais dúvidas sobre nossos serviços jurídicos
        </p>
      </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 shadow-soft border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
