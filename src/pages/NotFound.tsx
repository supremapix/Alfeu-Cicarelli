import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileQuestion } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="text-center max-w-md">
        <div className="h-24 w-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-8">
          <FileQuestion className="h-12 w-12 text-muted-foreground" />
        </div>
        <h1 className="text-6xl font-serif mb-4">404</h1>
        <h2 className="text-2xl font-serif mb-6">Página não encontrada</h2>
        <p className="text-muted-foreground mb-10">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Button asChild className="bg-accent text-accent-foreground font-bold h-12 px-8">
          <Link to="/">Voltar para a Home</Link>
        </Button>
      </div>
    </div>
  );
};
