import React from 'react';
import { ServiceTemplate } from '@/components/ServiceTemplate';

export const HomeCare: React.FC = () => {
  return (
    <ServiceTemplate 
      title="Home Care (Atendimento Domiciliar)"
      subtitle="Transforme sua residência em uma extensão hospitalar com cobertura integral do plano de saúde."
      description="O Home Care não é um benefício opcional, mas um direito do paciente que possui indicação médica para internação domiciliar. É uma forma humanizada e segura de tratamento que deve incluir corpo de enfermagem, insumos, cama hospitalar e equipamentos."
      features={[
        "Internação Domiciliar com enfermagem 12h ou 24h",
        "Fornecimento de oxigênio, ventiladores e monitores",
        "Fonoaudiologia, Fisioterapia e Nutrição em domicílio",
        "Suporte de medicamentos e insumos descartáveis",
        "Direito garantido mesmo que não conste no contrato original"
      ]}
      image="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop"
    />
  );
};
