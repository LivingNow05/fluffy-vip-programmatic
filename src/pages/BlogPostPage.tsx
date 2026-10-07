import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Clock, Calendar, User, ArrowLeft, Share2, Sparkles, MessageCircle, ShieldCheck } from 'lucide-react';
import { AnimatedHeading } from '../components/AnimatedHeading';
import articlesData from '../data/blog_articles.json';

interface BlogArticle {
  id: number;
  cat: string;
  title: string;
  desc: string;
  author: string;
  date: string;
  slug: string;
  img: string;
  readTime: string;
  content: string;
}

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const articles: BlogArticle[] = articlesData as BlogArticle[];
  const article = articles.find(a => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <main className="max-w-[800px] mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-header font-black mb-4">Artículo no encontrado</h1>
        <p className="text-gray-500 mb-8">El artículo que estás buscando no existe o fue reubicado.</p>
        <Link to="/blog" className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Blog</span>
        </Link>
      </main>
    );
  }

  const currentUrl = `https://frenchbulldogfluffy.com/blog/${article.slug}`;
  const ogImage = `https://frenchbulldogfluffy.com${article.img}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.desc,
    "image": ogImage,
    "author": {
      "@type": "Organization",
      "name": article.author,
      "url": "https://frenchbulldogfluffy.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dinastía Bulldog Fluffy VIP",
      "logo": {
        "@type": "ImageObject",
        "url": "https://frenchbulldogfluffy.com/favicon-192x192.png"
      }
    },
    "datePublished": article.date,
    "dateModified": article.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": currentUrl
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${article.title} | Blog Fluffy VIP`}</title>
        <meta name="description" content={article.desc} />
        <link rel="canonical" href={currentUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.desc} />
        <meta property="og:image" content={ogImage} />
        <meta property="article:published_time" content={article.date} />
        <meta property="article:author" content={article.author} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.desc} />
        <meta name="twitter:image" content={ogImage} />

        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <main className="max-w-[900px] mx-auto px-4 sm:px-6 mt-8 mb-24 animate-fade-in">
        {/* Breadcrumb */}
        <nav className="py-3 text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-2">
          <Link to="/" className="hover:text-cornflower transition-colors">Inicio</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-cornflower transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-gray-800 dark:text-gray-200 truncate max-w-[250px] sm:max-w-none">{article.title}</span>
        </nav>

        {/* Article Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cornflower/10 text-cornflower rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{article.cat}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-header text-obsidian dark:text-canvas tracking-tight leading-[1.15] mb-6">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400 pb-6 border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-cornflower" />
              <span className="font-semibold text-gray-700 dark:text-gray-300">{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readTime} de lectura</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-[3/2] w-full rounded-3xl overflow-hidden shadow-2xl mb-12 border border-gray-100 dark:border-gray-800 bg-gray-100 dark:bg-gray-800">
          <img 
            src={article.img} 
            alt={article.title}
            width={900}
            height={600}
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body Content */}
        <article 
          className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed font-normal
            prose-headings:font-header prose-headings:font-black prose-headings:text-obsidian dark:prose-headings:text-canvas
            prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-100 dark:prose-h2:border-gray-800 prose-h2:pb-3
            prose-p:mb-5 prose-p:leading-relaxed
            prose-strong:font-bold prose-strong:text-obsidian dark:prose-strong:text-canvas"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-200 dark:border-gray-700 font-bold text-sm text-gray-700 dark:text-gray-300 hover:border-cornflower hover:text-cornflower transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Ver más artículos del Blog</span>
          </Link>

          <a
            href="https://wa.me/573170911033?text=Hola,%20quisiera%20asesor%C3%ADa%20personalizada%20sobre%20cachorros%20Bulldog%20Fluffy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-3 px-6 rounded-full text-sm inline-flex items-center gap-2 shadow-lg shadow-[#25D366]/20 border-transparent"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </main>
    </>
  );
};
