import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle, Mail, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from '@/components/ui/sheet';

const menuItems = [
  { name: 'Início', path: '/' },
  { name: 'Áreas de Atuação', path: '/areas-atuacao' },
  { name: 'Profissionais', path: '/profissionais' },
  { name: 'Blog', path: '/blog' },
  { name: 'Perguntas Frequentes', path: '/faq' },
  { name: 'Contato', path: '/contato' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const Logo = () => (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="bg-primary p-2 rounded-lg group-hover:bg-accent transition-colors">
        <Scale className="h-6 w-6 text-accent group-hover:text-primary-foreground" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-serif font-bold text-primary leading-none tracking-tight">CICARELLI</span>
        <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-semibold leading-none mt-1">Sociedade de Advogados</span>
      </div>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <Logo />

          {/* Desktop Menu - Senior Friendly (Thicker fonts, better contrast) */}
          <nav className="hidden xl:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base font-bold transition-all hover:text-accent hover:scale-105 whitespace-nowrap ${
                  location.pathname === item.path ? 'text-accent border-b-2 border-accent' : 'text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg shadow-elegant">
              <Link to="/contato">Falar com Advogado</Link>
            </Button>
          </nav>

          {/* Mobile Menu - Accessibility for seniors */}
          <div className="xl:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild nativeButton={true}>
                <Button variant="ghost" size="icon" className="h-12 w-12 border-2 border-muted hover:bg-muted">
                  <Menu className="h-8 w-8 text-primary" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[500px] border-l-8 border-accent p-0">
                <div className="p-6 h-full flex flex-col bg-white">
                  <SheetHeader className="mb-10 text-left">
                    <SheetTitle>
                      <Logo />
                    </SheetTitle>
                  </SheetHeader>
                  
                  <div className="flex flex-col space-y-8 overflow-y-auto pb-10">
                    <div className="grid grid-cols-1 gap-4">
                      <a href="tel:1130130001" className="flex items-center space-x-5 p-5 bg-muted/40 rounded-2xl text-primary border-2 border-transparent hover:border-primary/20 transition-all">
                        <div className="bg-primary p-3 rounded-full shadow-lg"><Phone className="h-7 w-7 text-white" /></div>
                        <div className="flex flex-col">
                          <span className="text-xs uppercase font-bold text-muted-foreground tracking-widest">Ligar Agora</span>
                          <span className="text-2xl font-bold">(11) 3013-0001</span>
                        </div>
                      </a>
                      <a href="https://wa.me/5541999580015?text=Olá,%20vim%20do%20Menu%20Mobile%20do%20site" className="flex items-center space-x-5 p-5 bg-green-50 rounded-2xl text-green-800 border-2 border-green-100 hover:border-green-300 transition-all">
                        <div className="bg-green-600 p-3 rounded-full shadow-lg"><MessageCircle className="h-7 w-7 text-white" /></div>
                        <div className="flex flex-col">
                          <span className="text-xs uppercase font-bold tracking-widest">WhatsApp Urgente</span>
                          <span className="text-2xl font-bold">Plantão 24h</span>
                        </div>
                      </a>
                    </div>

                    <nav className="flex flex-col space-y-3">
                      <p className="text-[10px] uppercase font-black text-muted-foreground tracking-[0.3em] pl-6 mb-2">Navegação</p>
                      {menuItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`text-2xl font-serif py-5 px-8 rounded-2xl transition-all flex justify-between items-center ${
                            location.pathname === item.path 
                              ? 'bg-primary text-white font-bold shadow-xl translate-x-2' 
                              : 'text-primary hover:bg-muted font-medium'
                          }`}
                        >
                          {item.name}
                          <Scale className={`h-5 w-5 ${location.pathname === item.path ? 'opacity-50' : 'opacity-0'}`} />
                        </Link>
                      ))}
                    </nav>

                    <div className="pt-6">
                      <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-24 text-2xl font-black rounded-3xl shadow-glow active:scale-95 transition-all">
                        <Link to="/contato" onClick={() => setIsOpen(false)}>INICIAR CONSULTA GRÁTIS</Link>
                      </Button>
                      <p className="text-center text-muted-foreground text-sm mt-4 font-medium italic">
                        "Justiça rápida para quem tem pressa por saúde."
                      </p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
