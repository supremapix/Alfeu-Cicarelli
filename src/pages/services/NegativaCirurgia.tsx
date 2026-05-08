import React from 'react';
import { ServiceTemplate } from '@/components/ServiceTemplate';

export const NegativaCirurgia: React.FC = () => {
  return (
    <ServiceTemplate 
      title="Negativa de Cirurgia"
      subtitle="Obtenha a liberação imediata de cirurgias eletivas ou de urgência negadas pelo seu plano de saúde."
      description="A negativa de cirurgia é uma das práticas mais comuns e abusivas das operadoras de saúde. Seja por falta de cobertura no rol da ANS, alegação de carência ou exclusão contratual, existem fundamentos jurídicos sólidos para garantir o seu procedimento através de liminares rápidas."
      features={[
        "Liberação de Cirurgias Robóticas e Minimamente Invasivas",
        "Garantia de Próteses, Órteses e Stents Citados em Relatório",
        "Combate a negativas por doenças pré-existentes",
        "Acesso a hospitais fora da rede credenciada em casos específicos",
        "Liminares expedidas em poucas horas para casos de urgência"
      ]}
      image="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop"
    />
  );
};
