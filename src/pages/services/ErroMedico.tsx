import React from 'react';
import { ServiceTemplate } from '@/components/ServiceTemplate';

export const ErroMedico: React.FC = () => {
  return (
    <ServiceTemplate 
      title="Erro Médico e Hospitalar"
      subtitle="Justiça e reparação para vítimas de falhas em procedimentos cirúrgicos, diagnósticos ou omissão de socorro."
      description="A responsabilidade civil médica exige uma análise técnica profunda. Atuamos na busca por indenizações por danos morais, estéticos e materiais decorrentes de negligência, imprudência ou imperícia em hospitais e clínicas."
      features={[
        "Indenização por danos estéticos e sequelas permanentes",
        "Responsabilidade por esquecimento de material cirúrgico",
        "Falhas graves em diagnósticos laboratoriais",
        "Omissão de socorro ou alta hospitalar precoce",
        "Pensões vitalícias em casos de incapacidade laboral"
      ]}
      image="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=1200&auto=format&fit=crop"
    />
  );
};
