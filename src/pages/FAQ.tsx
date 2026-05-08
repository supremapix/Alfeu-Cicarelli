import React, { useState } from 'react';
import { SEO } from '@/components/SEO';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqs } from '@/data/blogArticlesFAQ';
import { Button } from '@/components/ui/button';
import { MessageCircle, HelpCircle, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  
  const catNames = ['Todos', 'Negativas', 'Carência', 'Reembolso', 'Direitos', 'São Paulo'];

  const filteredFaqs = faqs.filter(f => {
    const matchesCategory = activeCategory === 'Todos' || f.category === activeCategory;
    const matchesSearch = f.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         f.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO title="Dúvidas Frequentes | Cicarelli Advogados" description="Respostas para as principais dúvidas sobre planos de saúde, negativas de cirurgia e carência." />
      <div className="bg-muted/30 py-16 pb-40 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
             <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="h-8 w-8 text-accent" />
             </div>
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Dúvidas Frequentes</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Tudo o que você precisa saber sobre seus direitos contra os abusos dos planos de saúde.</p>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {catNames.map(cat => (
                  <Button
                    key={cat}
                    variant={activeCategory === cat ? "default" : "outline"}
                    className={activeCategory === cat ? "bg-accent text-accent-foreground border-accent" : "hover:border-accent hover:text-accent"}
                    onClick={() => setActiveCategory(cat)}
                    size="sm"
                  >
                    {cat}
                  </Button>
                ))}
              </div>
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Pesquisar..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <Card className="border-none shadow-elegant overflow-hidden">
              <CardContent className="p-0">
                <Accordion type="single" collapsible className="w-full">
                  {filteredFaqs.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-0 px-6 py-1 group">
                      <AccordionTrigger className="text-left text-lg font-medium hover:text-accent font-serif transition-all py-6 group-aria-expanded:text-accent">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-8 pt-2">
                        <div 
                          className="prose prose-amber max-w-none"
                          dangerouslySetInnerHTML={{ __html: item.answer.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>').replace(/\*(.*?)\*/g, '<em class="text-accent/80 font-medium">$1</em>') }} 
                        />
                        <div className="mt-8 p-4 bg-accent/5 rounded-xl border border-accent/10 flex items-center justify-between gap-4">
                          <p className="text-sm font-medium text-foreground">Ainda restou alguma dúvida sobre este ponto?</p>
                          <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground shrink-0">
                            <a href="https://wa.me/5541999580015">
                              Falar com Especialista
                            </a>
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                {filteredFaqs.length === 0 && (
                  <div className="text-center py-20 bg-white">
                    <p className="text-muted-foreground mb-4">Nenhuma dúvida encontrada para sua busca.</p>
                    <Button variant="outline" onClick={() => { setActiveCategory('Todos'); setSearchTerm(''); }}>Limpar Filtros</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="mt-20 text-center bg-primary p-12 rounded-3xl text-primary-foreground">
             <h2 className="text-2xl font-serif mb-6">Não encontrou o que procurava?</h2>
             <p className="text-white/70 mb-8 max-w-md mx-auto">Nossa equipe jurídica está de plantão para analisar o seu caso de forma personalizada e sem compromisso.</p>
             <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
               <a href="https://wa.me/5541999580015">
                 <MessageCircle className="mr-2 h-5 w-5" />
                 Iniciar Atendimento WhatsApp
               </a>
             </Button>
          </div>
        </div>
      </div>
    </>
  );
};
