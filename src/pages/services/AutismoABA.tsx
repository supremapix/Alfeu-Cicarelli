import React from 'react';
import { ServiceTemplate } from '@/components/ServiceTemplate';

export const AutismoABA: React.FC = () => {
  return (
    <ServiceTemplate 
      title="Terapias para Autismo (Método ABA)"
      subtitle="Garantia de tratamento multidisciplinar ilimitado para crianças e adolescentes com TEA (Transtorno do Espectro Autista)."
      description="O tratamento pelo Método ABA é o padrão ouro para o desenvolvimento de portadores de TEA. Recentemente, a ANS confirmou a obrigatoriedade de cobertura ilimitada, mas muitas operadoras ainda dificultam o acesso a clínicas especializadas e número de horas necessário."
      features={[
        "Cobertura ilimitada de sessões de Fono, TO e Psicologia",
        "Garantia de Aplicadores ABA capacitados e Supervisão",
        "Acesso a clínicas perto da residência do menor",
        "Reembolso integral quando não há rede credenciada apta",
        "Acompanhante terapêutico em ambiente escolar (quando indicado)"
      ]}
      image="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=1200&auto=format&fit=crop"
    />
  );
};
