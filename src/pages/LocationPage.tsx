import React from 'react';
import { useParams } from 'react-router-dom';
import { locations } from '@/data/locations';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { MessageCircle, MapPin, Shield, Gavel, FileText } from 'lucide-react';

export const LocationPage: React.FC = () => {
  const { slug } = useParams();
  const location = locations.find(l => l.slug === slug);

  if (!location) return <div>Localização não encontrada</div>;

  return (
    <>
      <SEO 
        title={`Advogado Plano de Saúde em ${location.name} Curitiba | Cicarelli`} 
        description={`Especialista em Direito da Saúde no ${location.name}. Atendimento personalizado para negativas de cirurgia e medicamentos.`} 
      />
      <div className="py-20">
        <section className="bg-primary text-primary-foreground py-32 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 blur-sm pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--accent)_0%,_transparent_70%)] opacity-20" />
          </div>
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <div className="inline-block px-6 py-2 rounded-full bg-accent text-white text-xs font-black uppercase tracking-[0.4em] mb-8 shadow-xl">
              Atendimento Regional {location.name}
            </div>
            <h1 className="text-6xl md:text-8xl font-serif mb-8 text-white tracking-tighter leading-[0.95] text-white">
              Advogado de Plano de Saúde em <br />
              <span className="text-accent italic font-light">{location.name}</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
              Atendemos toda a região de <strong>{location.name}</strong> com foco total em garantir o seu tratamento médico imediato.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-6">
               <Button asChild size="lg" className="bg-accent text-accent-foreground font-black hover:bg-accent/90 h-20 px-12 text-xl shadow-glow transition-all hover:scale-105 active:scale-95">
                 <a href="https://wa.me/5541999580015" className="flex items-center gap-2">
                   <MessageCircle className="h-6 w-6" />
                   Falar com Especialista Agora
                 </a>
               </Button>
            </div>
          </div>
        </section>

        <section className="py-32">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               <div className="text-center p-10 bg-muted/40 rounded-3xl border border-muted/50 hover:border-accent/30 transition-all group">
                 <Shield className="h-14 w-14 text-accent mx-auto mb-8 group-hover:scale-110 transition-transform" />
                 <h3 className="font-serif text-2xl mb-4 text-primary">Defesa de Direitos</h3>
                 <p className="text-primary/70 text-lg font-medium">Protegemos seu direito à vida e à saúde em {location.name}.</p>
               </div>
               <div className="text-center p-10 bg-muted/40 rounded-3xl border border-muted/50 hover:border-accent/30 transition-all group">
                 <Gavel className="h-14 w-14 text-accent mx-auto mb-8 group-hover:scale-110 transition-transform" />
                 <h3 className="font-serif text-2xl mb-4 text-primary">Ações Judiciais</h3>
                 <p className="text-primary/70 text-lg font-medium">Liminares urgentes para procedimentos em hospitais da região.</p>
               </div>
               <div className="text-center p-10 bg-muted/40 rounded-3xl border border-muted/50 hover:border-accent/30 transition-all group">
                 <FileText className="h-14 w-14 text-accent mx-auto mb-8 group-hover:scale-110 transition-transform" />
                 <h3 className="font-serif text-2xl mb-4 text-primary">Reembolsos</h3>
                 <p className="text-primary/70 text-lg font-medium">Recuperação de valores médicos para moradores do {location.name}.</p>
               </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-24">
           <div className="container mx-auto px-4 max-w-4xl flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                 <h2 className="text-3xl font-serif mb-6">Atendimento Próximo a Você</h2>
                 <p className="text-muted-foreground mb-8 leading-relaxed">
                   Se você reside no bairro {location.name} ou nas redondezas, oferecemos atendimento presencial em nosso escritório no Centro ou consultas por vídeo para sua maior comodidade.
                 </p>
                 <div className="flex items-center text-accent font-bold">
                    <MapPin className="mr-2 h-5 w-5" /> Curitiba - Paraná
                 </div>
              </div>
              <div className="flex-1 w-full aspect-video bg-gray-200 rounded-2xl shadow-lg flex items-center justify-center grayscale">
                 <span className="text-muted-foreground">Mapa do Bairro {location.name}</span>
              </div>
           </div>
        </section>
      </div>
    </>
  );
};
