import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from './SEO';
import { Button } from './ui/button';
import { MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServiceTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
}

export const ServiceTemplate: React.FC<ServiceTemplateProps> = ({ title, subtitle, description, features, image }) => {
  const whatsappUrl = `https://wa.me/5541999580015?text=Olá,%20gostaria%20de%20falar%20sobre%20${encodeURIComponent(title)}`;

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title={`${title} | Advogado Especialista`} 
        description={`${title} - Cicarelli Advogados. Atendimento especializado em São Paulo para garantir seus direitos contra abusos de planos de saúde.`}
      />
      
      {/* Hero Section */}
      <section className="relative py-28 bg-primary overflow-hidden items-center justify-center flex">
        <div className="absolute inset-0">
          <img src={image} alt={title} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl text-white"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white font-black text-xs uppercase tracking-[0.2em] mb-8 shadow-lg">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              Direito da Saúde • Atendimento 24h
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold mb-8 leading-tight tracking-tight text-white drop-shadow-2xl">
              {title}
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 font-light mb-12 leading-relaxed max-w-3xl">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-black h-20 px-10 text-xl shadow-2xl transition-all hover:scale-105 active:scale-95 focus:ring-4 focus:ring-accent/20">
                <a href={whatsappUrl} className="flex items-center gap-3">
                  <MessageCircle size={28} />
                  Falar com Especialista
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-8 text-primary font-bold">Entenda Seus Direitos</h2>
              <div className="prose prose-xl text-primary/80 mb-10 leading-relaxed font-medium">
                <p>{description}</p>
              </div>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-muted/30 rounded-2xl border border-muted"
                  >
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={24} />
                    <span className="text-primary font-bold text-lg leading-snug">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl skew-y-2">
                <img src={image} alt={title} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <p className="text-primary font-bold text-lg mb-2 italic">"Atuação ágil e focada em resultados imediatos"</p>
                <p className="text-muted-foreground text-sm">- Dr. Alfeu Cicarelli</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 max-w-2xl mx-auto">
            Não permita que o seu plano de saúde negue o tratamento que você precisa.
          </h2>
          <Button asChild size="lg" variant="outline" className="h-16 px-12 text-xl border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold rounded-full">
            <a href={whatsappUrl} className="flex items-center gap-2">
              Análise Gratuita do Caso
              <ArrowRight size={20} />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};
