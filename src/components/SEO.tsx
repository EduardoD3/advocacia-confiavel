// Componente SEO com meta tags e JSON-LD para schema.org
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

const SEO = ({
  title = "Advogada Maria José França — Recursos INSS Negado | Acompanhamento jurídico especializado",
  description = "Pedido do INSS negado? Atendimento especializado para recorrer e reverter decisões. Avaliação gratuita — suporte em todo o processo. Contato via WhatsApp.",
  canonical = "https://www.mjfranca.adv.br", // Placeholder
  ogImage = "https://www.mjfranca.adv.br/og-image.jpg", // Placeholder
}: SEOProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": `${canonical}/#legalservice`,
        name: "Maria José França - Advocacia",
        description:
          "Escritório especializado em Direito Previdenciário e Cível, com foco em recursos de benefícios negados pelo INSS",
        url: canonical,
        telephone: "+5569999999999", // Placeholder
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua Exemplo, 123 - Centro",
          addressLocality: "Porto Velho",
          addressRegion: "RO",
          postalCode: "76800-000",
          addressCountry: "BR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -8.7619, // Placeholder - Porto Velho
          longitude: -63.9039,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "08:00",
            closes: "12:00",
          },
        ],
        areaServed: {
          "@type": "Country",
          name: "Brasil",
        },
        priceRange: "$$",
      },
      {
        "@type": "Person",
        "@id": `${canonical}/#person`,
        name: "Maria José França",
        jobTitle: "Advogada",
        worksFor: {
          "@id": `${canonical}/#legalservice`,
        },
        telephone: "+5569999999999", // Placeholder
        email: "contato@mjfranca.adv.br", // Placeholder
        address: {
          "@type": "PostalAddress",
          addressLocality: "Porto Velho",
          addressRegion: "RO",
          addressCountry: "BR",
        },
        knowsAbout: [
          "Direito Previdenciário",
          "Recursos INSS",
          "Direito Cível",
          "Revisão de Benefícios",
        ],
      },
    ],
  };

  return (
    <Helmet>
      {/* Meta tags básicas */}
      <html lang="pt-BR" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      {/* Fontes */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default SEO;
