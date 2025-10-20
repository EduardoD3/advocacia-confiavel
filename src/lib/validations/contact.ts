// Validação do formulário de contato usando Zod
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Informe seu nome completo" })
    .max(100, { message: "Nome deve ter menos de 100 caracteres" }),
  phone: z
    .string()
    .trim()
    .min(1, { message: "Informe um telefone válido" })
    .regex(
      /^[\d\s\(\)\-\+]+$/,
      "Telefone inválido (use apenas números e símbolos)"
    ),
  email: z
    .string()
    .trim()
    .email({ message: "E-mail inválido" })
    .max(255, { message: "E-mail deve ter menos de 255 caracteres" }),
  problemType: z.string().min(1, { message: "Selecione o tipo de problema" }),
  message: z
    .string()
    .trim()
    .min(1, { message: "Descreva brevemente seu caso" })
    .max(1000, { message: "Mensagem deve ter menos de 1000 caracteres" }),
  lgpdConsent: z
    .boolean()
    .refine((val) => val === true, {
      message: "É necessário concordar para que possamos analisar o seu caso",
    }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
