import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { SEO } from '@/components/SEO';
import { 
  FileText, 
  MapPin, 
  Network, 
  Calendar, 
  Search, 
  TrendingUp, 
  Globe, 
  CheckCircle2,
  ListChecks,
  Target
} from 'lucide-react';

export const LocalSEOStrategy: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <SEO 
        title="Estratégia de SEO Local Avançado | Cicarelli Advogados"
        description="Planejamento estratégico de SEO Local para advocacia em São Paulo e Grande SP. Cluster de conteúdo, autoridade tópica e estratégia GEO SEO."
      />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">Plano Mestre de SEO Local</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Estrutura avançada de dominação dos buscadores para Direito da Saúde em São Paulo e região metropolitana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Topical Authority */}
          <Card className="border-accent/10 shadow-lg">
            <CardHeader>
              <Network className="h-10 w-10 text-accent mb-4" />
              <CardTitle>Topical Authority Cluster</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>Foco em dominar o "Seed Keyword": <strong>Direito da Saúde</strong>.</p>
              <ul className="space-y-2">
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Pilar 1: Negativas de Procedimentos</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Pilar 2: Medicamentos de Alto Custo</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Pilar 3: Reajustes Abusivos</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Pilar 4: Erro Médico e Indenizações</li>
              </ul>
            </CardContent>
          </Card>

          {/* GEO SEO Strategy */}
          <Card className="border-accent/10 shadow-lg">
            <CardHeader>
              <MapPin className="h-10 w-10 text-accent mb-4" />
              <CardTitle>Estratégia GEO SEO</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>Mapeamento de 20 cidades e 50+ bairros de SP.</p>
              <p>Utilização de termos LSI locais (ex: "TJSP", "Fórum de Guarulhos", "USP Butantã").</p>
              <p>Páginas de destino únicas por localidade para evitar <em>Thin Content</em>.</p>
            </CardContent>
          </Card>

          {/* AI Overviews Optimization */}
          <Card className="border-accent/10 shadow-lg">
            <CardHeader>
              <Globe className="h-10 w-10 text-accent mb-4" />
              <CardTitle>AI Overviews (SGE) Guard</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>Estrutura FAQ em todas as páginas para capturar Featured Snippets.</p>
              <p>Linguagem direta: "O que é...", "Como funciona...", "Quem tem direito...".</p>
              <p>Dados estruturados JSON-LD avançados em todas as rotas.</p>
            </CardContent>
          </Card>

          {/* Calendário Editorial */}
          <Card className="border-accent/10 shadow-lg md:col-span-2">
            <CardHeader>
              <Calendar className="h-10 w-10 text-accent mb-4" />
              <CardTitle>Calendário Editorial de Autoridade</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-muted-foreground">
              <div>
                <h4 className="font-bold text-primary mb-2">Mês 1: Aquisição Local</h4>
                <ul className="space-y-1">
                  <li>- 20 Landing Pages de Cidades</li>
                  <li>- 10 Artigos de Blog (Problemas Locais)</li>
                  <li>- Otimização do Google Meu Negócio</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">Mês 2: Especialização</h4>
                <ul className="space-y-1">
                  <li>- Deep Dive: Doenças Graves e Direitos</li>
                  <li>- Vídeos: Explicando Liminares em SP</li>
                  <li>- Backlinks em Portais Jurídicos</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Google Meu Negócio */}
          <Card className="border-accent/10 shadow-lg">
            <CardHeader>
              <Target className="h-10 w-10 text-accent mb-4" />
              <CardTitle>Google Meu Negócio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <ul className="space-y-2">
                <li>• Postagens semanais com ofertas</li>
                <li>• Solicitação ativa de reviews</li>
                <li>• Resposta rápida a todas as dúvidas</li>
                <li>• Fotos 360º do escritório físico</li>
              </ul>
            </CardContent>
          </Card>

        </div>

        {/* Internal Linking Suggestion */}
        <div className="mt-20 p-12 bg-muted rounded-[3rem]">
          <h2 className="text-3xl font-serif text-primary mb-8 text-center">Matriz de Interlinkagem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="font-bold text-accent mb-2">Home Page</div>
              <p className="text-xs">Links para as Cidades Top 5 e Serviços Principais</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-accent mb-2">Páginas de Cidades</div>
              <p className="text-xs">Links para Serviços Específicos e FAQ Interno</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-accent mb-2">Artigos de Blog</div>
              <p className="text-xs">Links Contextuais para Páginas de Conversão (Cidades)</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
