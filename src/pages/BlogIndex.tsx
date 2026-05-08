import React from 'react';
import { SEO } from '@/components/SEO';
import { blogArticles } from '@/data/blogArticles';
import { categories } from '@/data/categories';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, User, ArrowRight } from 'lucide-react';

export const BlogIndex: React.FC = () => {
  return (
    <>
      <SEO title="Blog Jurídico — Direito da Saúde | Cicarelli Advogados" />
      <div className="bg-muted/30 py-20 pb-40">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Blog Jurídico</h1>
            <p className="text-muted-foreground text-lg">Informação de qualidade sobre os seus direitos no sistema de saúde.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article) => {
              const category = categories.find(c => c.id === article.categoryId);
              return (
                <Link key={article.id} to={`/blog/${article.slug}`} className="group">
                  <Card className="h-full overflow-hidden border-none hover:shadow-elegant transition-all">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="outline" className="text-accent border-accent/30">{category?.name}</Badge>
                        <span className="text-xs text-muted-foreground flex items-center"><Clock className="h-3 w-3 mr-1" /> {article.readingTime}</span>
                      </div>
                      <h2 className="text-2xl font-serif mb-4 group-hover:text-accent transition-colors leading-tight">
                        {article.title}
                      </h2>
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-accent pt-4 border-t">
                        <span className="flex items-center"><User className="h-3 w-3 mr-1" /> Dr. Alfeu Cicarelli</span>
                        <span className="flex items-center">Ler Artigo <ArrowRight className="ml-1 h-3 w-3" /></span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
