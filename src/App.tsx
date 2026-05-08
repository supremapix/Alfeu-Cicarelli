/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from './components/ui/tooltip';
import { Toaster } from './components/ui/sonner';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';

import { HomePage } from './pages/Home';
import { AreasAtuacao } from './pages/AreasAtuacao';
import { Profissionais } from './pages/Profissionais';
import { Contato } from './pages/Contato';
import { FAQ } from './pages/FAQ';
import { BlogIndex } from './pages/BlogIndex';
import { BlogPostPage } from './pages/BlogPostPage';
import { LocationPage } from './pages/LocationPage';
import { SPLocationPage } from './pages/SPLocationPage';
import { LocalSEOStrategy } from './pages/LocalSEOStrategy';
import { Sitemap } from './pages/Sitemap';
import { NotFound } from './pages/NotFound';

// Service Pages
import { NegativaCirurgia } from './pages/services/NegativaCirurgia';
import { ReajustesAbusivos } from './pages/services/ReajustesAbusivos';
import { MedicamentosAltoCusto } from './pages/services/MedicamentosAltoCusto';
import { HomeCare } from './pages/services/HomeCare';
import { ErroMedico } from './pages/services/ErroMedico';
import { AutismoABA } from './pages/services/AutismoABA';

const queryClient = new QueryClient();

// Helper to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Router>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow overflow-hidden">
                <AppRoutes />
              </main>
              <Footer />
              <FloatingButtons />
            </div>
            <Toaster />
          </Router>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/areas-atuacao" element={<AreasAtuacao />} />
          <Route path="/profissionais" element={<Profissionais />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          
          {/* Specific Service Pages for SEO */}
          <Route path="/negativa-de-cirurgia" element={<NegativaCirurgia />} />
          <Route path="/reajustes-abusivos" element={<ReajustesAbusivos />} />
          <Route path="/medicamentos-alto-custo" element={<MedicamentosAltoCusto />} />
          <Route path="/home-care" element={<HomeCare />} />
          <Route path="/erro-medico" element={<ErroMedico />} />
          <Route path="/autismo-aba" element={<AutismoABA />} />
          
          <Route path="/mapa-do-site" element={<Sitemap />} />
          <Route path="/seo-local" element={<LocalSEOStrategy />} />
          <Route path="/bairros/:slug" element={<LocationPage />} />
          <Route path="/cidades/:slug" element={<LocationPage />} />
          <Route path="/:slug" element={<SPLocationPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

