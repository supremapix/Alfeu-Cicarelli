import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Mail, Plus, X, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export const FloatingButtons: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const actions = [
    { icon: Phone, color: 'bg-orange-500', label: 'Telefone', href: 'tel:1130130001' },
    { icon: MessageCircle, color: 'bg-green-500', label: 'WhatsApp', href: 'https://wa.me/5541999580015?text=Olá,%20vim%20do%20Botão%20Flutuante%20do%20site' },
    { icon: Mail, color: 'bg-blue-500', label: 'E-mail', href: 'mailto:contato@cicarelli.adv.br' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end space-y-4">
      {/* Scroll to Top */}
      <AnimatePresence>
        {showScroll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <Button
              size="icon"
              variant="outline"
              className="rounded-full bg-background shadow-lg hover:bg-accent hover:text-accent-foreground"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <ChevronUp className="h-5 w-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB with Actions */}
      <div className="relative flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <div className="mb-4 flex flex-col items-end space-y-3">
              {actions.map((action, index) => (
                <motion.div
                  key={action.label}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.5, y: 20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href={action.href}
                          className={`${action.color} flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110`}
                        >
                          <action.icon className="h-6 w-6" />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent side="left" className="mr-2">
                        {action.label}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

        <Button
          size="icon"
          className="h-16 w-16 rounded-full bg-accent shadow-xl hover:bg-accent/90 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            className="flex items-center justify-center"
          >
            <Plus className="h-8 w-8 text-accent-foreground" />
          </motion.div>
          {!isOpen && (
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white shadow-sm"
            >
              !
            </motion.div>
          )}
          <div className="absolute inset-0 rounded-full animate-ping bg-accent/20 -z-10" />
        </Button>
      </div>
    </div>
  );
};
