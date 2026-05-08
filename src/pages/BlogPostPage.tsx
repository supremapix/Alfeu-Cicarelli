import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogArticles } from '@/data/blogArticles';
import { authors } from '@/data/authors';
import { categories } from '@/data/categories';
import { SEO } from '@/components/SEO';
import { OABComplianceChecker } from '@/components/blog/OABComplianceChecker';
import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowLeft, Clock, Calendar, User, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams();
  const article = blogArticles.find(a => a.slug === slug);

  if (!article) return <div className="py-40 text-center">Artigo não encontrado</div>;

  const author = authors.find(a => a.id === article.authorId);
  const category = categories.find(c => c.id === article.categoryId);

  return (
    <>
      <SEO 
        title={article.seo.metaTitle} 
        description={article.seo.metaDescription} 
        keywords={article.seo.keywords}
        type="article"
      />
      
      <div className="bg-background py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to="/blog" className="hover:text-accent">Blog</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="truncate">{article.title}</span>
          </nav>

          <header className="mb-12">
            <Link to="/blog">
              <Badge variant="secondary" className="mb-6 hover:bg-accent hover:text-white transition-colors cursor-pointer">
                {category?.name}
              </Badge>
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">{article.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-y py-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                  <img src={author?.image} alt={author?.name} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{author?.name}</p>
                  <p className="text-xs uppercase group-hover:text-amber-500 transition-colors uppercase tracking-widest">{author?.oab}</p>
                </div>
              </div>
              <div className="flex items-center"><Calendar className="h-4 w-4 mr-2" /> {new Date(article.publishedAt).toLocaleDateString('pt-BR')}</div>
              <div className="flex items-center"><Clock className="h-4 w-4 mr-2" /> {article.readingTime} de leitura</div>
            </div>
          </header>

          <div className="aspect-[21/9] rounded-2xl overflow-hidden mb-12 shadow-elegant">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <article className="lg:w-2/3">
              <div className="prose prose-lg prose-amber max-w-none prose-headings:font-serif">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>

              <OABComplianceChecker content={article.content} />

              <div className="mt-16 p-8 bg-muted/50 rounded-2xl flex flex-col md:flex-row items-center gap-6">
                <div className="h-24 w-24 rounded-full overflow-hidden shrink-0 shadow-lg">
                  <img src={author?.image} alt={author?.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-2">Sobre o Autor: {author?.name}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{author?.bio}</p>
                  <p className="text-accent text-[10px] uppercase font-bold mt-2 tracking-widest">{author?.oab}</p>
                </div>
              </div>
            </article>

            {/* Sidebar CTA */}
            <aside className="lg:w-1/3">
              <div className="sticky top-28 space-y-6">
                <div className="p-8 bg-primary text-primary-foreground rounded-2xl shadow-xl overflow-hidden relative group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <MessageCircle className="h-20 w-20 rotate-12" />
                  </div>
                  <h3 className="text-2xl font-serif mb-4 text-accent">Problema com seu plano de saúde?</h3>
                  <p className="text-sm text-white/80 mb-8 leading-relaxed">
                    Fale agora mesmo com nossa equipe e garanta seus direitos de forma rápida e segura.
                  </p>
                  <Button asChild className="w-full h-14 bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                    <a href="https://wa.me/5541999580015">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Consulta Gratuita
                    </a>
                  </Button>
                </div>

                <div className="p-8 border rounded-2xl">
                  <h4 className="font-serif text-lg mb-4">Compartilhe</h4>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" className="rounded-full h-10 w-10 hover:text-accent"><i className="ri-facebook-fill text-xl"></i></Button>
                    <Button variant="outline" size="icon" className="rounded-full h-10 w-10 hover:text-accent"><i className="ri-whatsapp-line text-xl"></i></Button>
                    <Button variant="outline" size="icon" className="rounded-full h-10 w-10 hover:text-accent"><i className="ri-linkedin-fill text-xl"></i></Button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};
