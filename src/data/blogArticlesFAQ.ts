export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQItem[] = [
  {
    category: "Negativas",
    question: "O plano de saúde pode negar uma cirurgia prescrita pelo médico?",
    answer: "**Não, em regra o plano de saúde não pode negar tratamento prescrito pelo médico assistente.** Se houver justificativa médica e o procedimento for necessário para a saúde do paciente, a negativa pode ser considerada abusiva. *Keywords: negativa de cirurgia, direito do paciente, liminar contra plano de saúde.*"
  },
  {
    category: "Carência",
    question: "O que é prazo de carência para urgência e emergência?",
    answer: "**Em casos de urgência e emergência, o prazo de carência máximo permitido por lei é de 24 horas.** Qualquer negativa baseada em carência superior a este prazo em situações de risco de vida é nula. *Keywords: carência plano de saúde, urgência e emergência.*"
  }
  // Expanded logic in pages/FAQ
];
