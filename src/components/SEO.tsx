import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  image?: string;
  keywords?: string[];
  jsonLd?: any;
}

export const SEO: React.FC<SEOProps> = ({
  title = "Cicarelli Advogados | Direito da Saúde em São Paulo",
  description = "Especialista em Planos de Saúde em São Paulo e Grande SP. Negativa de cirurgia, medicamentos de alto custo, home care e reembolso. Atendimento 24h.",
  canonical = "https://www.sp.cicarelli.adv.br",
  type = "website",
  image = "/og-image.jpg",
  keywords = ["advogado plano de saúde sp", "direito da saúde", "são paulo", "negativa de cobertura", "liminar médica"],
  jsonLd
}) => {
  const fullTitle = title.includes("Cicarelli") ? title : `${title} | Cicarelli Advogados`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};
