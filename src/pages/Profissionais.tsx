import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { authors } from '@/data/authors';
import { SEO } from '@/components/SEO';
import { Instagram, Linkedin, Mail } from 'lucide-react';

export const Profissionais: React.FC = () => {
  const drAlfeu = authors.find(a => a.id === 'alfeu-cicarelli')!;

  return (
    <>
      <SEO title="Nossa Equipe | Dr. Alfeu Cicarelli" description="Conheça Dr. Alfeu Cicarelli e nossa equipe jurídica especializada em Direito da Saúde." />
      <div className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              {/* Photo Column */}
              <div className="md:col-span-1 space-y-6">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant bg-white p-2">
                  <img src={drAlfeu.image} alt={drAlfeu.name} className="w-full h-full object-cover rounded-xl" />
                </div>
                <Card>
                  <CardContent className="p-6 text-center space-y-4">
                    <p className="text-accent font-bold uppercase tracking-widest text-xs">{drAlfeu.oab}</p>
                    <div className="flex justify-center space-x-4">
                      <a href="https://wa.me/5541999580015?text=Olá,%20vim%20pelo%20Instagram%20do%20Dr.%20Alfeu" className="p-2 bg-muted rounded-full hover:bg-accent hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
                      <a href="https://wa.me/5541999580015?text=Olá,%20vim%20pelo%20LinkedIn%20do%20Dr.%20Alfeu" className="p-2 bg-muted rounded-full hover:bg-accent hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
                      <a href="mailto:contato@cicarelli.adv.br" className="p-2 bg-muted rounded-full hover:bg-accent hover:text-white transition-colors"><Mail className="h-5 w-5" /></a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Info Column */}
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-serif mb-2">{drAlfeu.name}</h1>
                  <p className="text-xl text-accent font-black mb-6 uppercase tracking-tight">{drAlfeu.role}</p>
                  <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
                    <p className="font-bold text-primary/90 text-xl mb-6">
                      Dr. Alfeu Cicarelli de Melo é um dos principais especialistas em Direito Médico e Hospitalar, com mais de 20 anos de experiência jurídica. Sócio-fundador da Cicarelli Sociedade de Advogados, sua atuação é pautada pela excelência técnica e agilidade na proteção dos direitos de pacientes e beneficiários de planos de saúde.
                    </p>
                    <p>
                      O escritório é uma referência histórica em Curitiba e Região Metropolitana, estendendo agora sua expertise técnica e autoridade jurídica para todo o estado de São Paulo, focando em garantir liminares para autorização de procedimentos complexos e reembolso célere de despesas médicas.
                    </p>
                    <p className="font-black text-red-700 italic text-sm p-4 bg-red-50 rounded-xl border border-red-100">
                      * Nota de Transparência: A Cicarelli Sociedade de Advogados (e a estrutura Cicarelli & Melo) é uma entidade jurídica independente e não possui vínculo com a sociedade "Ferraz, Cicarelli & Passold".
                    </p>
                    <h3 className="text-primary font-serif font-bold text-2xl mt-12 pb-2 border-b-2 border-accent/20">Foco de Atuação</h3>
                    <ul className="list-disc pl-5 space-y-3 mt-6 text-primary/80">
                      <li><strong>Direito à Saúde:</strong> Defesa intransigente de beneficiários contra negativas de cobertura, exames e cirurgias.</li>
                      <li><strong>Liminares Médicas:</strong> Atuação estratégica para garantir pronto atendimento em casos de urgência e emergência.</li>
                      <li><strong>Reembolso Médico:</strong> Recuperação de valores pagos por tratamentos que deveriam ser cobertos pelas operadoras.</li>
                      <li><strong>Defesa de Profissionais:</strong> Consultoria preventiva e defesa ética para médicos, clínicas e hospitais.</li>
                    </ul>
                    <h3 className="text-primary font-serif font-bold text-2xl mt-12 pb-2 border-b-2 border-accent/20">Registro Profissional</h3>
                    <ul className="list-disc pl-5 space-y-3 mt-6 text-primary/80">
                      <li>OAB/PR 49.213 (Inscrição Principal)</li>
                      <li>OAB/SP 331.673 (Inscrição Suplementar)</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-8 border-t">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold h-14 px-10">
                    <a href="https://wa.me/5541999580015?text=Olá,%20vim%20da%20Página%20de%20Profissionais%20do%20site">Agendar Consulta com Dr. Alfeu</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
