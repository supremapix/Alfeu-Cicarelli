export interface Category {
  id: string;
  name: string;
  slug: string;
}

export const categories: Category[] = [
  { id: "negativa-cobertura", name: "Negativa de Cobertura", slug: "negativa-cobertura" },
  { id: "carencia", name: "Carência", slug: "carencia" },
  { id: "reembolso", name: "Reembolso", slug: "reembolso" },
  { id: "direitos-paciente", name: "Direitos do Paciente", slug: "direitos-paciente" },
  { id: "curitiba", name: "Direito em Curitiba", slug: "curitiba" }
];
