import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { allSPLocations } from '@/data/sp-locations';
import { ChevronRight, MapPin, Scale, BookText, HelpCircle, PhoneCall } from 'lucide-react';

export const Sitemap: React.FC = () => {
  const cities = allSPLocations.filter(l => l.type === 'city');
  const neighborhoods = allSPLocations.filter(l => l.type === 'neighborhood');

  const mainLinks = [
    { name: 'Início', path: '/', icon: Scale },
    { name: 'Áreas de Atuação', path: '/areas-atuacao', icon: BookText },
    { name: 'Profissionais', path: '/profissionais', icon: Scale },
    { name: 'Blog Jurídico', path: '/blog', icon: BookText },
    { name: 'Perguntas Frequentes (FAQ)', path: '/faq', icon: HelpCircle },
    { name: 'Contato', path: '/contato', icon: PhoneCall },
  ];

  const serviceLinks = [
    { name: 'Negativa de Cirurgia', path: '/negativa-de-cirurgia' },
    { name: 'Reajustes Abusivos', path: '/reajustes-abusivos' },
    { name: 'Medicamentos de Alto Custo', path: '/medicamentos-alto-custo' },
    { name: 'Home Care (Atendimento Domiciliar)', path: '/home-care' },
    { name: 'Erro Médico e Hospitalar', path: '/erro-medico' },
    { name: 'Terapias para Autismo (ABA)', path: '/autismo-aba' },
  ];

  return (
    <>
      <SEO title="Mapa do Site | Cicarelli Advogados" description="Navegue por todas as páginas do nosso site. Encontre serviços jurídicos em Direito da Saúde em todas as regiões de São Paulo." />
      <div className="py-20 bg-muted/30 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-serif mb-12 border-b pb-4">Mapa do Site</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Institution and Services */}
              <div className="space-y-12">
                <section>
                  <h2 className="text-xl font-bold text-accent mb-6 flex items-center gap-2">
                    <Scale size={20} /> Navegação Principal
                  </h2>
                  <div className="grid gap-3">
                    {mainLinks.map(link => (
                      <Link key={link.path} to={link.path} className="flex items-center gap-2 text-primary hover:text-accent font-medium group">
                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-accent mb-6 flex items-center gap-2">
                    <BookText size={20} /> Especialidades Jurídicas
                  </h2>
                  <div className="grid gap-3">
                    {serviceLinks.map(link => (
                      <Link key={link.path} to={link.path} className="flex items-center gap-2 text-primary hover:text-accent font-medium group">
                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </section>
              </div>

              {/* Locations */}
              <div className="space-y-12">
                <section>
                  <h2 className="text-xl font-bold text-accent mb-6 flex items-center gap-2">
                    <MapPin size={20} /> Atendimento por Cidade (Grande SP)
                  </h2>
                  <div className="grid grid-cols-2 gap-3">
                    {cities.map(city => (
                      <Link key={city.slug} to={`/${city.slug}`} className="text-sm text-muted-foreground hover:text-accent">
                        {city.name}
                      </Link>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-accent mb-6 flex items-center gap-2">
                    <MapPin size={20} /> Atendimento por Bairro (Capital)
                  </h2>
                  <div className="grid grid-cols-2 gap-3">
                    {neighborhoods.map(nb => (
                      <Link key={nb.slug} to={`/${nb.slug}`} className="text-sm text-muted-foreground hover:text-accent">
                        {nb.name}
                      </Link>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
