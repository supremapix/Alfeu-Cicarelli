import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, MapPin, Instagram, Facebook, Linkedin, ExternalLink, Heart, Scale } from 'lucide-react';
import { allSPLocations } from '@/data/sp-locations';

export const Footer: React.FC = () => {
  // Slices for SEO footer links
  const footerCities = allSPLocations.filter(l => l.type === 'city').slice(0, 10);
  const footerNeighborhoods = allSPLocations.filter(l => l.type === 'neighborhood').slice(0, 10);

  return (
    <footer className="bg-primary text-primary-foreground border-t border-white/5">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-accent p-1.5 rounded-lg">
                <Scale className="h-5 w-5 text-accent-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-serif font-bold text-white leading-none">CICARELLI</span>
                <span className="text-[8px] uppercase tracking-[0.3em] text-white/50 font-semibold mt-1">Sociedade de Advogados</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Referência em Direito da Saúde na Grande São Paulo e Capital. Especialistas em garantir o acesso imediato de pacientes aos seus direitos contra abusos de planos de saúde.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://wa.me/5541999580015?text=Olá,%20vim%20pelo%20Instagram%20do%20rodapé" className="text-white/40 hover:text-accent transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="https://wa.me/5541999580015?text=Olá,%20vim%20pelo%20Facebook%20do%20rodapé" className="text-white/40 hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="https://wa.me/5541999580015?text=Olá,%20vim%20pelo%20LinkedIn%20do%20rodapé" className="text-white/40 hover:text-accent transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Specialities */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold border-b border-white/10 pb-2">Especialidades</h4>
            <ul className="space-y-2 text-sm text-white/40">
              <li><Link to="/negativa-de-cirurgia" className="hover:text-accent transition-colors">Negativa de Cirurgia</Link></li>
              <li><Link to="/reajustes-abusivos" className="hover:text-accent transition-colors">Reajustes Abusivos</Link></li>
              <li><Link to="/medicamentos-alto-custo" className="hover:text-accent transition-colors">Medicamentos de Alto Custo</Link></li>
              <li><Link to="/home-care" className="hover:text-accent transition-colors">Home Care (Atendimento Domiciliar)</Link></li>
              <li><Link to="/erro-medico" className="hover:text-accent transition-colors">Erro Médico e Hospitalar</Link></li>
              <li><Link to="/autismo-aba" className="hover:text-accent transition-colors">Terapias para Autismo (ABA)</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold border-b border-white/10 pb-2">Atendimento Urgente</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <div className="p-2 bg-white/5 rounded-lg"><Phone className="h-4 w-4 text-accent" /></div>
                <a href="tel:1130130001" className="hover:text-accent transition-colors font-bold">(11) 3013-0001</a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="p-2 bg-white/5 rounded-lg"><MessageCircle className="h-4 w-4 text-green-400" /></div>
                <a href="https://wa.me/5541999580015?text=Olá,%20vim%20do%20Rodapé%20do%20site" className="hover:text-accent transition-colors font-bold">WhatsApp Plantão 24h</a>
              </li>
              <li className="flex items-start space-x-3 text-white/40">
                <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>São Paulo e Grande SP Capital • Unidade Batel</span>
              </li>
            </ul>
          </div>

          {/* Local Link Cluster */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold border-b border-white/10 pb-2">Atendimento Local</h4>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] uppercase font-bold text-accent mb-2">Principais Cidades</p>
                <div className="flex flex-wrap gap-2">
                  {footerCities.map(city => (
                    <Link key={city.slug} to={`/${city.slug}`} className="text-[11px] text-white/40 hover:text-white transition-colors">{city.name}</Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-accent mb-2">Bairros Prioritários</p>
                <div className="flex flex-wrap gap-2">
                  {footerNeighborhoods.map(nb => (
                    <Link key={nb.slug} to={`/${nb.slug}`} className="text-[11px] text-white/40 hover:text-white transition-colors">{nb.name}</Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-[11px] text-white/30">
          <div className="text-center md:text-left">
            <p>© {new Date().getFullYear()} Cicarelli Advogados | Sociedade de Advogados | OAB/PR 49.213</p>
            <div className="flex justify-center md:justify-start space-x-6 mt-2">
              <Link to="/mapa-do-site" className="hover:text-accent">Mapa do Site</Link>
              <Link to="/politica-privacidade" className="hover:text-accent">Privacidade</Link>
              <Link to="/termos-uso" className="hover:text-accent">Termos Jurídicos</Link>
            </div>
          </div>
          
          <div className="text-primary-foreground/35 text-xs flex items-center gap-1">
            Desenvolvido com <Heart size={11} className="text-red-500 animate-heartbeat" /> por
            <a href="https://supremasite.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition ml-1 inline-flex items-center gap-1">
              Suprema Sites Express
              <img src="https://img.supremamidia.com/suprema-img.png" alt="Suprema" className="h-3.5 inline" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
