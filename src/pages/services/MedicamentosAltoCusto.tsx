import React from 'react';
import { ServiceTemplate } from '@/components/ServiceTemplate';

export const MedicamentosAltoCusto: React.FC = () => {
  return (
    <ServiceTemplate 
      title="Medicamentos de Alto Custo"
      subtitle="Garanta o fornecimento de medicamentos oncológicos, imunobiológicos e raros negados pelo plano ou SUS."
      description="Ninguém deve interromper um tratamento vital por causa do preço de um medicamento. A lei brasileira garante que, se o plano de saúde cobre a doença, ele deve cobrir o medicamento prescrito pelo médico Assistente, mesmo que seja de uso domiciliar ou oral."
      features={[
        "Fornecimento de quimioterápicos e imunoterapias",
        "Medicamentos para doenças raras e degenerativas",
        "Tratamentos para Hepatite C, HIV e Esclerose Múltipla",
        "Garantia de continuidade do tratamento sem interrupções",
        "Ação contra exclusão de medicamentos 'Off-Label'"
      ]}
      image="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop"
    />
  );
};
