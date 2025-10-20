// Tipos relacionados ao formulário de contato
export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  problemType: string;
  message: string;
  document?: File;
  lgpdConsent: boolean;
}

export interface ContactFormProps {
  onSubmitSuccess?: () => void;
}
