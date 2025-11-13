// Formulário de contato com validação Zod e upload de documento
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, ContactFormValues } from "@/lib/validations/contact";
import { Upload, Loader2 } from "lucide-react";

const problemTypes = [
  "Direito Previdenciário",
  "Direito Trabalhista",
  "Direito Eleitoral",
  "Direito Criminal",
  "Direito Imobiliário",
  "Direito de Família e Sucessões",
  "Outro",
];

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState<string>("");
  const whatsappNumber = "+554898462142";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de mais informações sobre os serviços jurídicos.");
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[\s\(\)\-\+]/g, "")}?text=${whatsappMessage}`;
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      lgpdConsent: false,
    },
  });

  const lgpdConsent = watch("lgpdConsent");

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      // Simulação de envio (substituir por chamada real à API)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Dados do formulário:", data);

      toast({
        title: "Mensagem enviada com sucesso!",
        description:
          "Recebemos seu caso e retornaremos em até 24-48h. Obrigado!",
      });

      reset();
      setFileName("");
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente ou entre em contato via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validação de tamanho (máx 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Arquivo muito grande",
          description: "O arquivo deve ter no máximo 5MB",
          variant: "destructive",
        });
        e.target.value = "";
        return;
      }

      // Validação de tipo
      const allowedTypes = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Tipo de arquivo inválido",
          description: "Envie apenas PDF ou imagens (JPG, PNG)",
          variant: "destructive",
        });
        e.target.value = "";
        return;
      }

      setFileName(file.name);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Entre em Contato
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Solicite uma consulta ou esclareça suas dúvidas. Retornaremos em até 24 horas.
        </p>
      </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-card rounded-2xl p-6 md:p-8 shadow-elevated space-y-6"
          >
            {/* Nome */}
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo *</Label>
              <Input
                id="name"
                placeholder="Seu nome completo"
                {...register("name")}
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            {/* Telefone e E-mail */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(69) 9 9999-9999"
                  {...register("phone")}
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  {...register("email")}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Tipo de problema */}
            <div className="space-y-2">
              <Label htmlFor="problemType">Tipo de problema *</Label>
              <Select
                onValueChange={(value) => setValue("problemType", value)}
              >
                <SelectTrigger id="problemType" aria-invalid={!!errors.problemType}>
                  <SelectValue placeholder="Selecione o tipo de problema" />
                </SelectTrigger>
                <SelectContent>
                  {problemTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.problemType && (
                <p className="text-sm text-destructive">
                  {errors.problemType.message}
                </p>
              )}
            </div>

            {/* Mensagem */}
            <div className="space-y-2">
              <Label htmlFor="message">Descreva seu caso *</Label>
              <Textarea
                id="message"
                placeholder="Descreva brevemente sua situação jurídica..."
                rows={5}
                {...register("message")}
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <p className="text-sm text-destructive">{errors.message.message}</p>
              )}
            </div>

            {/* Upload de documento */}
            <div className="space-y-2">
              <Label htmlFor="document">
                Documento (opcional - PDF ou imagem, máx 5MB)
              </Label>
              <div className="flex items-center gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="relative"
                  asChild
                >
                  <label htmlFor="document" className="cursor-pointer">
                    <Upload className="w-4 h-4 mr-2" />
                    Escolher arquivo
                    <input
                      id="document"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      className="sr-only"
                    />
                  </label>
                </Button>
                {fileName && (
                  <span className="text-sm text-muted-foreground truncate">
                    {fileName}
                  </span>
                )}
              </div>
            </div>

            {/* Consentimento LGPD */}
            <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
              <Checkbox
                id="lgpdConsent"
                checked={lgpdConsent}
                onCheckedChange={(checked) =>
                  setValue("lgpdConsent", checked as boolean)
                }
                aria-invalid={!!errors.lgpdConsent}
              />
              <div className="space-y-1">
                <Label
                  htmlFor="lgpdConsent"
                  className="text-sm leading-relaxed cursor-pointer"
                >
                  Autorizo o uso dos meus dados para análise do caso e contato
                  conforme a LGPD. *
                </Label>
                {errors.lgpdConsent && (
                  <p className="text-sm text-destructive">
                    {errors.lgpdConsent.message}
                  </p>
                )}
              </div>
            </div>

            {/* Botão de envio */}
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Quero minha avaliação gratuita"
              )}
            </Button>

            {/* Disclaimer */}
            <p className="text-xs text-muted-foreground text-center">
              A avaliação inicial não garante resultados — cada caso depende de
              análise documental detalhada.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
