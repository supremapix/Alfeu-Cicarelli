import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { allSPLocations } from '@/data/sp-locations';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Scale, 
  MessageCircle, 
  MapPin, 
  Stethoscope, 
  Gavel, 
  FileText, 
  Clock, 
  ChevronRight,
  TrendingUp,
  Award,
  CheckCircle2,
  HeartPulse,
  UserCheck,
  Zap,
  Search
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const SPLocationPage: React.FC = () => {
  const { slug } = useParams();
  const location = allSPLocations.find(l => l.slug === slug);

  if (!location) return (
    <div className="py-40 text-center">
      <h1 className="text-2xl font-serif">Página não encontrada</h1>
      <Link to="/" className="text-accent underline">Voltar para a Home</Link>
    </div>
  );

  const locName = location.name;
  const locType = location.type === 'city' ? 'da cidade' : 'do bairro';
  const prepName = location.type === 'city' ? `em ${locName}` : `na ${locName}`;

  // JSON-LD Local Business & FAQ
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": `Cicarelli Advogados ${locName}`,
    "description": `Escritório de advocacia especializado em Direito da Saúde ${prepName}. Especialista em negativas de planos de saúde, liminares e reembolso médico. Atendimento humanizado e ágil.`,
    "url": `https://cicarelli.adv.br/${location.slug}`,
    "telephone": "+551130130001",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.type === 'city' ? locName : "São Paulo",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-23.5505",
      "longitude": "-46.6333"
    },
    "hasMap": `https://www.google.com/maps/search/Cicarelli+Advogados+${locName}`,
    "openingHours": "Mo-Fr 09:00-18:00"
  };

  return (
    <>
      <SEO 
        title={`${location.primaryKeyword} ${prepName} | Cicarelli Advogados`}
        description={`Procurando ${location.primaryKeyword} ${prepName}? Especialista em Plano de Saúde: Negativa de Cirurgia, Reembolso e Liminares. Atendimento urgente em ${locName}. Experiência e autoridade jurídica.`}
        keywords={[location.primaryKeyword, "advogado plano de saude", locName, "direitos do paciente SP", "liminar medica SP", "advogado erro médico SP"]}
        jsonLd={jsonLd}
      />

      {/* Hero Section - Optimized for Conversion */}
      <section className="relative pt-32 pb-40 overflow-hidden bg-primary flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-block bg-accent rounded-full mb-8 px-8 py-3 text-white text-xs font-black uppercase tracking-[0.3em] shadow-lg">
                    Direito da Saúde • Atendimento {locName}
                  </div>
                  <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-8 leading-[0.95] tracking-tighter">
                    {location.primaryKeyword} <br />
                    <span className="text-accent italic font-light">{prepName}</span>
                  </h1>
                  <p className="text-2xl md:text-3xl text-white font-light mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    O <strong>Cicarelli Advogados</strong> é especialista em <span className="text-accent font-black underline decoration-accent/30 underline-offset-8">liminares contra planos de saúde</span>. Protegemos pacientes da <strong>{locName}</strong> com agilidade e autoridade jurídica reconhecida.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
                    <Button asChild size="lg" className="h-20 px-12 text-2xl bg-accent hover:bg-accent/90 text-accent-foreground font-black shadow-[0_20px_50px_-15px_rgba(var(--accent),0.4)] transition-all hover:scale-105 active:scale-95">
                      <a href="https://wa.me/5541999580015">
                        <MessageCircle className="mr-3 h-8 w-8" />
                        Consulta Gratuita
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" className="h-20 px-12 text-2xl border-white/40 text-white hover:bg-white/10 font-bold transition-all">
                      Saiba Mais
                    </Button>
                  </div>
                </motion.div>
              </div>
              <div className="hidden lg:block w-80">
                <Card className="bg-white/5 border-white/20 backdrop-blur-md p-8 text-white text-center rounded-[3rem] shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full -mr-12 -mt-12 blur-2xl" />
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex p-4 bg-accent rounded-2xl shadow-glow">
                      <UserCheck className="h-10 w-10 text-accent-foreground" />
                    </div>
                  <h4 className="font-serif text-2xl mb-3 text-white">Especialistas em SP</h4>
                    <p className="text-sm text-white/70 leading-relaxed font-medium">Atendimento 24h na Capital e em toda {locName} e adjacências.</p>
                    <div className="mt-8 pt-8 border-t border-white/10">
                      <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-accent">Referência Jurídica</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-muted py-10 border-y border-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 transition-all">
            <span className="font-serif font-bold text-primary text-lg flex items-center gap-3 drop-shadow-sm"><Zap className="h-6 w-6 text-accent" /> Agilidade Processual</span>
            <span className="font-serif font-bold text-primary text-lg flex items-center gap-3 drop-shadow-sm"><Award className="h-6 w-6 text-accent" /> Autoridade Jurídica</span>
            <span className="font-serif font-bold text-primary text-lg flex items-center gap-3 drop-shadow-sm"><HeartPulse className="h-6 w-6 text-accent" /> Foco no Paciente</span>
          </div>
        </div>
      </div>

      {/* Main Semantic Content section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-2/3 space-y-16">
            
            <article className="prose prose-lg prose-amber max-w-none text-foreground leading-relaxed">
              <h2 className="text-3xl font-serif text-primary mb-6">Advogados em {locName} Especialistas em Direito da Saúde</h2>
              <p className="font-medium text-primary/80">
                Se você está buscando um <strong>{location.primaryKeyword} {prepName}</strong>, sabe que as disputas contra planos de saúde exigem não apenas conhecimento jurídico, mas uma estratégia processual agressiva e rápida. O escritório <em>Cicarelli Advogados</em> se consolidou no cenário jurídico de São Paulo como uma banca boutique altamente especializada em garantir o acesso imediato de pacientes aos seus tratamentos.
              </p>
              <p>
                A <strong>{locName}</strong> possui uma das redes hospitalares mais robustas do Brasil, mas também é palco de inúmeras negativas injustificadas por parte de grandes operadoras. Nosso papel é ser a voz do paciente diante de gigantes corporativos, utilizando o Direito como ferramenta de justiça e vida.
              </p>
            </article>

            {/* Pillar Sections - 1500 words architecture */}
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-primary flex items-center gap-2">
                    <ShieldCheck className="h-6 w-6 text-accent" /> Negativas de Tratamento
                  </h3>
                  <p className="text-sm">
                    Muitos moradores de <strong>{locName}</strong> são surpreendidos com a negativa de quimioterapia, cirurgias reparadoras pós-bariátrica ou mesmo tratamentos oncológicos modernos. Atuamos com liminares médicas para reverter essas decisões em até 48 horas.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-primary flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-accent" /> Reajustes de Mensalidade
                  </h3>
                  <p className="text-sm">
                    O reajuste por faixa etária ou sinistralidade abusiva é uma realidade em condomínios e empresas de <strong>{locName}</strong>. Analisamos seu contrato e buscamos a redução imediata dos valores através de teses jurídicas consolidadas no STJ.
                  </p>
                </div>
              </div>

              {/* LSI Rich Content Block */}
              <div className="bg-primary/5 p-12 rounded-[2.5rem] border border-primary/10">
                <h3 className="text-2xl font-serif text-primary mb-6">Por que o Cicarelli Advogados é a escolha certa {prepName}?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-serif text-accent mb-2">+1000</div>
                    <p className="text-xs font-bold uppercase tracking-tighter">Liminares Deferidas</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-serif text-accent mb-2">15 Anos</div>
                    <p className="text-xs font-bold uppercase tracking-tighter">Experiência Jurídica</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-serif text-accent mb-2">SP/Capital</div>
                    <p className="text-xs font-bold uppercase tracking-tighter">Sede Própria em SP</p>
                  </div>
                </div>
              </div>

              <article className="prose prose-lg prose-amber max-w-none text-muted-foreground leading-relaxed">
                <h3 className="text-2xl font-serif text-primary">SEO Semântico: O que buscar em um advogado de saúde em {locName}</h3>
                <p>
                  Ao pesquisar por <em>"{location.trendSearch}"</em>, os buscadores priorizam conteúdos que demonstrem autoridade. No Direito da Saúde, isso significa entender as nuances do <strong>Rol da ANS</strong>, as diretrizes de utilização (DUT) e os contratos de adesão.
                </p>
                <p>
                  Atuamos em clínicas e hospitais de referência {prepName}, como o Hospital Santa Joana, Beneficência Portuguesa e redes credenciadas do Bradesco Saúde, SulAmérica, Amil e Unimed. Nossa proximidade com o Tribunal de Justiça de São Paulo (TJSP) nos permite um acompanhamento minucioso de cada agravo ou apelação.
                </p>
                
                <h4 className="text-xl font-serif text-primary">Atendimento Online e Presencial</h4>
                <p>
                  Sabemos que em cidades como <strong>Guarulhos</strong>, <strong>São Bernardo do Campo</strong> e <strong>Osasco</strong>, o deslocamento pode ser um obstáculo. Por isso, oferecemos uma consultoria jurídica digital avançada, permitindo que você inicie seu processo do conforto de sua casa {prepName}, com total validade jurídica e segurança de dados.
                </p>
              </article>
            </div>

            {/* Topic Authority Cluster / Related Queries */}
            <div className="border-t pt-12">
              <h3 className="text-2xl font-serif text-primary mb-8">Outras áreas de atuação {prepName}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Erro Médico",
                  "Medicamentos de Alto Custo",
                  "Cirurgia Plástica Reparadora",
                  "Autismo e Método ABA",
                  "Home Care",
                  "Internação Psiquiátrica",
                  "Manutenção de Plano em Demissão",
                  "Reembolso de Consultas"
                ].map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium bg-muted p-3 rounded-lg hover:bg-accent/10 transition-colors cursor-default">
                    <ChevronRight className="h-3 w-3 text-accent" /> {area}
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section - Search Intent Optimized */}
            <div className="pt-12 border-t">
              <h2 className="text-3xl font-serif text-primary mb-8 text-center">FAQ - Dúvidas Comuns em {locName}</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="faq-1" className="border-b last:border-0 px-4">
                  <AccordionTrigger className="text-left font-serif text-lg py-6">
                    Moro em {locName}, o meu plano é obrigado a me atender em hospitais da Capital?
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 text-muted-foreground leading-relaxed">
                    Tudo depende da abrangência geográfica do seu contrato (Regional, Estadual ou Nacional). Se o seu contrato é Regional-Grande São Paulo, você tem direito ao atendimento na capital dentro da rede credenciada. Se houver negativa, um <strong>advogado especialista em planos de saúde {prepName}</strong> pode conseguir a liberação via liminar.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-2" className="border-b last:border-0 px-4">
                  <AccordionTrigger className="text-left font-serif text-lg py-6">
                    A Cicarelli Advogados atende causas de erro médico em {locName}?
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 text-muted-foreground leading-relaxed">
                    Sim. Casos de erro médico ocorridos em hospitais e clínicas de <strong>{locName}</strong> exigem perícia técnica e análise de prontuário detalhada. Atuamos na esfera indenizatória para danos morais e estéticos.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-3" className="border-b last:border-0 px-4">
                  <AccordionTrigger className="text-left font-serif text-lg py-6">
                    Quanto tempo leva para ingressar com a ação em {locName}?
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 text-muted-foreground leading-relaxed">
                    Estando com a documentação em mãos (documentos pessoais, contrato do plano e o laudo médico fundamentado), nossa equipe protocola a ação no mesmo dia útil. A agilidade é a nossa marca registrada em toda a Grande São Paulo.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Optimized Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-28 space-y-10">
              
              {/* Main Conversion Point */}
              <Card className="bg-primary text-primary-foreground border-none shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden relative group">
                <CardContent className="p-10 relative z-10">
                  <div className="h-16 w-16 bg-accent rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-6 transition-transform">
                    <Gavel className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-serif mb-4 text-accent leading-tight">Urgência com Plano de Saúde {prepName}?</h3>
                  <p className="text-sm text-white/70 mb-8 leading-relaxed">
                    Negativa de internação, cirurgia ou medicamento? Fale agora com um especialista de plantão.
                  </p>
                  <Button asChild className="w-full h-14 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg">
                    <a href="https://wa.me/5541999580015">
                      <MessageCircle className="mr-2 h-5 w-5" /> Iniciar Chat WhatsApp
                    </a>
                  </Button>
                  <div className="mt-8 pt-8 border-t border-white/10 text-center">
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Disponível em</p>
                    <p className="text-xs text-white/60 font-medium">{locName} • Grande SP • Capital • ABC</p>
                  </div>
                </CardContent>
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-10 rounded-full -mr-16 -mt-16 blur-3xl" />
              </Card>

              {/* Local SEO Interlinking Cluster */}
              <Card className="border-none bg-muted/40 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h4 className="font-serif text-lg mb-6 flex items-center gap-2">
                    <Search className="h-5 w-5 text-accent" /> Outros Locais Atendidos
                  </h4>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-3">
                    {allSPLocations.slice(0, 14).map(item => (
                      <Link 
                        key={item.slug} 
                        to={`/${item.slug}`}
                        className="text-[10px] uppercase font-bold tracking-tight px-3 py-2 bg-white hover:bg-accent hover:text-white rounded border border-primary/5 transition-all text-muted-foreground block text-center"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <Link to="/cidades" className="mt-6 text-accent text-xs font-bold flex items-center justify-center group">
                    Ver todos os bairros e cidades <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>

              {/* GEO SEO / Google Maps Trigger */}
              <div className="p-8 bg-accent/5 rounded-3xl border border-accent/10 text-center">
                <MapPin className="h-10 w-10 text-accent mx-auto mb-4" />
                <h4 className="font-serif text-lg mb-3">Atendemos {prepName}</h4>
                <p className="text-xs text-muted-foreground mb-6">
                  Nossa sede física em São Paulo capital atende presencialmente todos os moradores de {locName}, Barueri, Santo André e região.
                </p>
                <Button variant="link" className="text-accent p-0 h-auto font-bold">
                  Ver Localização no Mapa
                </Button>
              </div>

            </div>
          </aside>

        </div>
      </section>

      {/* Extreme Footer Semantic Block */}
      <section className="bg-primary pt-24 pb-12 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-white mb-4">Estratégia de Atendimento em Toda Grande São Paulo</h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Compromisso com o Direito da Saúde em escala metropolitana. Expertise jurídica a serviço da vida.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center text-white/40 mb-20">
            <div>
              <h5 className="font-serif text-white text-lg mb-4">Autoridade</h5>
              <p className="text-xs leading-relaxed text-white/30">Membro da comissão de Direito da Saúde da OAB/SP, trazendo representatividade técnica para sua causa {prepName}.</p>
            </div>
            <div>
              <h5 className="font-serif text-white text-lg mb-4">Confiança</h5>
              <p className="text-xs leading-relaxed text-white/30">Escritório regularmente inscrito na OAB, com milhares de casos ativos nos tribunais paulistas e federais.</p>
            </div>
            <div>
              <h5 className="font-serif text-white text-lg mb-4">Tecnologia</h5>
              <p className="text-xs leading-relaxed text-white/30">Peticionamento eletrônico e sistema de gestão jurídica de ponta para acompanhamento em tempo real.</p>
            </div>
            <div>
              <h5 className="font-serif text-white text-lg mb-4">Humanização</h5>
              <p className="text-xs leading-relaxed text-white/30">Entendemos que por trás de cada processo contra plano de saúde {prepName}, existe uma vida que não pode esperar.</p>
            </div>
          </div>

          <div className="border-t border-white/5 pt-12 text-center">
            <p className="text-white/20 text-[10px] uppercase tracking-[0.2em] mb-6">Semantic Keywords Cluster - {locName}</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-white/30 text-[9px]">
              <span>Advogado Direito da Saúde {locName}</span>
              <span>Especialista em Negativas de Cirurgia {prepName}</span>
              <span>Ação Judicial contra Plano de Saúde SP</span>
              <span>Liminar para Home Care {locName}</span>
              <span>Advogado para Reembolso Médico {prepName}</span>
              <span>Direito do Paciente Oncológico São Paulo</span>
              <span>Aumento Abusivo Mensalidade Plano de Saúde {locName}</span>
              <span>Advogado Civil {locName}</span>
              <span>Defesa do Consumidor {locName}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
