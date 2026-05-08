import { Author, authors } from './authors';
import { Category, categories } from './categories';

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  authorId: string;
  categoryId: string;
  publishedAt: string;
  readingTime: string;
  image: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export const blogArticles: Article[] = [
  {
    id: "1",
    slug: "plano-de-saude-negou-cirurgia-o-que-fazer",
    title: "Plano de Saúde negou cirurgia? Saiba o que fazer imediatamente",
    excerpt: "Descubra os seus direitos quando o plano de saúde recusa a cobertura de um procedimento cirúrgico essencial.",
    content: `
      <h2>A Negativa de Cirurgia e Seus Direitos</h2>
      <p>Muitos pacientes são surpreendidos com a negativa de cobertura para cirurgias, sob alegações de carência, procedimento fora do rol da ANS ou falta de cobertura contratual.</p>
      <div class="box-info">
        <strong>Importante:</strong> O rol da ANS é exemplificativo e não taxativo em muitos casos judiciais.
      </div>
      <p>Se o médico assistente indicou a cirurgia como necessária, o plano não pode interferir no tratamento.</p>
    `,
    authorId: "alfeu-cicarelli",
    categoryId: "negativa-cobertura",
    publishedAt: "2024-05-01",
    readingTime: "5 min",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&h=630&fit=crop",
    seo: {
      metaTitle: "Plano de Saúde negou cirurgia? Saiba o que fazer | Cicarelli Advogados",
      metaDescription: "Saiba como agir diante de uma negativa de cirurgia pelo plano de saúde. Conheça seus direitos e como conseguir a liminar.",
      keywords: ["negativa de cirurgia", "plano de saúde", "liminar médica", "direito da saúde curitiba"]
    }
  }
  // This will be expanded later
];
