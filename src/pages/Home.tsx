import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, Clock, Gavel, Home as HomeIcon, Pill, ArrowRight, MessageCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTypewriter } from '@/hooks/use-typewriter';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/Marquee';
import { spCities, spNeighborhoods } from '@/data/sp-locations';

const areas = [
  { icon: Shield, title: 'Negativa de Cobertura', desc: 'Ações para liberação de cirurgias, exames e procedimentos negados.' },
  { icon: FileText, title: 'Reembolso Médico', desc: 'Recuperação de valores gastos com médicos e hospitais particulares.' },
  { icon: Clock, title: 'Prazos de Carência', desc: 'Defesa contra carências abusivas em casos de urgência e emergência.' },
  { icon: Gavel, title: 'Liminares Médicas', desc: 'Atuação rápida para decisões judiciais urgentes (Home Care e Internação).' },
  { icon: Pill, title: 'Medicamentos de Alto Custo', desc: 'Acesso a fármacos essenciais não fornecidos pelo plano ou SUS.' },
  { icon: HomeIcon, title: 'Home Care', desc: 'Garantia de atendimento domiciliar multidisciplinar para pacientes graves.' },
];

export const HomePage: React.FC = () => {
  const typewriterText = useTypewriter([
    'Plano negou sua cirurgia?',
    'Negativa de medicamento?',
    'Problemas com carência?',
    'Atraso no reembolso?',
  ]);

  return (
    <>
      <SEO />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000&auto=format&fit=crop" 
            alt="Law Firm Background" 
            className="w-full h-full object-cover object-center brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6 backdrop-blur-sm border border-accent/30">
              Especialista em Direito da Saúde em São Paulo e Grande SP
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.05] mb-8 tracking-tighter">
              Sua saúde não pode <br />
              <span className="text-accent italic font-light">esperar a burocracia.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white font-medium h-12 mb-12">
              {typewriterText} <span className="animate-pulse text-accent">|</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button asChild size="lg" className="h-20 px-10 text-2xl bg-accent hover:bg-accent/90 text-accent-foreground font-black shadow-[0_20px_50px_-15px_rgba(var(--accent),0.5)] transition-all hover:scale-105 active:scale-95">
                <a href="https://wa.me/5541999580015">
                  <MessageCircle className="mr-3 h-8 w-8" />
                  Consulta Gratuita
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-20 px-10 text-2xl border-white/40 text-white hover:bg-white/10 font-bold transition-all">
                <Link to="/areas-atuacao">Nossas Áreas</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local SEO - Infinite Marquee Section */}
      <section className="py-16 bg-muted/30 overflow-hidden border-y border-accent/5">
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-accent text-center mb-2">Atendimento Local Avançado</h2>
          <p className="text-xs text-muted-foreground text-center">Unidades digitais e presenciais em toda a Grande SP</p>
        </div>

        {/* Capital Neighborhoods Marquee */}
        <div className="mb-6">
          <div className="container mx-auto px-4 mb-2">
            <span className="text-[10px] font-bold uppercase text-primary/40 flex items-center gap-1">
              <MapPin className="h-3 w-3" /> Capital: Nossos Bairros Prioritários
            </span>
          </div>
          <Marquee speed={60}>
            {spNeighborhoods.map((loc) => (
              <Link
                key={loc.slug}
                to={`/${loc.slug}`}
                className="px-6 py-3 bg-white border border-primary/5 rounded-full shadow-sm hover:border-accent hover:text-accent transition-all text-sm font-medium whitespace-nowrap"
              >
                {loc.name}
              </Link>
            ))}
          </Marquee>
        </div>

        {/* Cities Marquee */}
        <div>
          <div className="container mx-auto px-4 mb-2 text-right">
            <span className="text-[10px] font-bold uppercase text-primary/40 flex items-center gap-1 justify-end">
              Grande São Paulo: Cidades Atendidas <MapPin className="h-3 w-3" />
            </span>
          </div>
          <Marquee speed={50} direction="right">
            {spCities.map((loc) => (
              <Link
                key={loc.slug}
                to={`/${loc.slug}`}
                className="px-6 py-3 bg-primary text-white rounded-full shadow-md hover:bg-accent hover:text-accent-foreground transition-all text-sm font-bold whitespace-nowrap"
              >
                {loc.name}
              </Link>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Areas of Action */}
   {/* Areas of Action */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Áreas de Atuação</h2>
            <p className="text-muted-foreground">Especialização técnica para resolver os problemas mais complexos com planos de saúde.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-elegant transition-all group overflow-hidden border-none bg-muted/30">
                  <CardContent className="p-8">
                    <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <area.icon className="h-7 w-7 text-accent group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-serif mb-3">{area.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {area.desc}
                    </p>
                    <Link to="/areas-atuacao" className="text-accent text-sm font-semibold flex items-center hover:underline">
                      Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-accent mb-8">Por que escolher o escritório Cicarelli?</h2>
              <div className="space-y-6">
                {[
                  { q: '15+', a: 'Anos de experiência exclusiva em Direito da Saúde.' },
                  { q: '2000+', a: 'Processos com êxito contra grandes operadoras.' },
                  { q: '24h', a: 'Plantão para casos de urgência e liminares.' },
                  { q: 'Atendimento', a: 'Personalizado e humano para cada paciente.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-6">
                    <span className="text-3xl font-serif font-bold text-accent min-w-[80px]">{item.q}</span>
                    <p className="text-lg text-white/80">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl skew-y-3">
                <img 
                  src="https://www.cicarelli.adv.br/assets/direito-empresarial-828x578-O3ic47TR.jpg" 
                  alt="Escritório Cicarelli" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent p-8 rounded-xl shadow-xl max-w-[200px]">
                <p className="text-accent-foreground font-serif text-xl font-bold leading-tight">Ética e Agilidade no Direito.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl gradient-hero p-12 md:p-20 text-center relative overflow-hidden shadow-glow">
             <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-serif text-primary-foreground mb-6">Fale com um especialista agora</h2>
                <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto font-light">
                  Não deixe o plano de saúde decidir pelo seu tratamento. Estamos prontos para lutar pelos seus direitos.
                </p>
                <Button asChild size="lg" className="h-16 px-10 text-xl bg-white text-primary hover:bg-white/90 font-bold shadow-xl">
                  <a href="https://wa.me/5541999580015">
                    <MessageCircle className="mr-3 h-6 w-6" />
                    Iniciar Conversa no WhatsApp
                  </a>
                </Button>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};
