import React from 'react';
import { ServiceTemplate } from '@/components/ServiceTemplate';

export const ReajustesAbusivos: React.FC = () => {
  return (
    <ServiceTemplate 
      title="Reajustes Abusivos"
      subtitle="Recupere valores e reduza a mensalidade do seu plano de saúde contra reajustes anuais ou por faixa etária acima da lei."
      description="Muitos planos de saúde aplicam reajustes que superam em muito os índices permitidos pela ANS, especialmente em contratos coletivos ou quando o beneficiário completa 59 anos. Analisamos seu contrato para identificar abusividade e reduzir o custo fixo do seu benefício."
      features={[
        "Revisão de reajustes por mudança de faixa etária (59 anos)",
        "Combate a índices de sinistralidade sem transparência",
        "Recuperação de valores pagos a maior nos últimos 3 anos",
        "Manutenção da qualidade do plano com preço justo",
        "Blindagem contra cancelamentos unilaterais"
      ]}
      image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop"
    />
  );
};
