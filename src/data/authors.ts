export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  oab?: string;
}

export const authors: Author[] = [
  {
    id: "alfeu-cicarelli",
    name: "Dr. Alfeu Cicarelli de Melo",
    role: "Sócio-Fundador | Especialista em Direito da Saúde",
    bio: "Referência em Direito Médico e Hospitalar com mais de 20 anos de atuação. Especialista na defesa de beneficiários contra negativas de planos de saúde e no Direito à Saúde Suplementar.",
    image: "https://www.cicarelli.adv.br/assets/alfeu-cicarelli-advogados-planos-de-saude-em-curitiba-562x562-D7LACyaF.jpg",
    oab: "OAB/PR 49.213 | OAB/SP 331.673"
  },
  {
    id: "equipe",
    name: "Equipe Cicarelli",
    role: "Corpo Jurídico",
    bio: "Equipe multidisciplinar dedicada a garantir os direitos dos pacientes.",
    image: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=400&h=400&fit=crop"
  }
];
