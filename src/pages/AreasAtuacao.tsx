import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, Clock, Gavel, Home as HomeIcon, Pill, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';

const areas = [
  { icon: Shield, title: 'Negativa de Cobertura', desc: 'Ações imediatas para liberação de cirurgias, exames complexos, próteses e stents negados abusivamente.' },
  { icon: FileText, title: 'Reembolso de Despesas', desc: 'Recuperação integral de gastos com honorários médicos e hospitais particulares em casos de urgência ou falta de rede credenciada.' },
  { icon: Clock, title: 'Quebra de Carência', desc: 'Acesso imediato ao tratamento em situações de urgência e emergência, independente do prazo contratual.' },
  { icon: Gavel, title: 'Liminares Contra Planos', desc: 'Pedidos judiciais de urgência para garantir internamentos e procedimentos que não podem esperar o fim de um processo.' },
  { icon: Pill, title: 'Medicamentos Especiais', desc: 'Obtenção de medicamentos quimioterápicos, imunobiológicos e de alto custo não fornecidos administrativamente.' },
  { icon: HomeIcon, title: 'Atendimento Home Care', desc: 'Garantia de internação domiciliar com toda infraestrutura necessária paga pela operadora de saúde.' },
];

export const AreasAtuacao: React.FC = () => {
  return (
    <>
      <SEO title="Áreas de Atuação | Cicarelli Advogados" description="Conheça nossas áreas de especialização em Direito da Saúde." />
      <div className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif mb-4 text-primary font-bold">Nossas Áreas de Atuação</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Especialidade técnica focada exclusivamente nos direitos fundamentais dos pacientes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {areas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                 <Card className="h-full border-none shadow-sm hover:shadow-elegant transition-all bg-white rounded-3xl overflow-hidden group">
                   <CardContent className="p-10 flex flex-col md:flex-row gap-8">
                      <div className="h-20 w-20 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:rotate-3 transition-all duration-300">
                        <area.icon className="h-10 w-10 text-accent group-hover:text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-serif mb-4 leading-tight font-bold text-primary">{area.title}</h3>
                        <p className="text-primary/70 text-lg leading-relaxed mb-8 font-medium">
                          {area.desc}
                        </p>
                        <Button asChild variant="link" className="p-0 h-auto text-accent font-black text-lg uppercase tracking-tight hover:no-underline group-hover:translate-x-2 transition-transform">
                          <Link to="/contato" className="flex items-center gap-2">
                             Consultar Especialista
                             <ArrowRight size={20} />
                          </Link>
                        </Button>
                      </div>
                   </CardContent>
                 </Card>
              </motion.div>
            ))}
          </div>

          <div className="bg-primary text-primary-foreground rounded-3xl p-12 text-center">
             <h2 className="text-2xl md:text-3xl font-serif mb-8 max-w-xl mx-auto text-accent">Teve algum outro problema com seu plano de saúde?</h2>
             <Button asChild size="lg" className="bg-accent text-accent-foreground font-bold hover:bg-accent/90 h-16 px-10 text-lg">
               <a href="https://wa.me/5541999580015">
                 <MessageCircle className="mr-2 h-6 w-6" />
                 Fale Agora com nossa Equipe
               </a>
             </Button>
          </div>
        </div>
      </div>
    </>
  );
};
