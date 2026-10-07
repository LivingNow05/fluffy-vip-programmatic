import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, Clock, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
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

export const BlogIndexPage: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('todos');
  const articles: BlogArticle[] = articlesData as BlogArticle[];

  const categories = [
    { id: 'todos', label: 'Todos los Artículos' },
    { id: 'salud', label: 'Salud & Genética' },
    { id: 'cuidados', label: 'Cuidados & Grooming' },
    { id: 'nutricion', label: 'Nutrición' },
    { id: 'curiosidades', label: 'Curiosidades' },
    { id: 'comparar', label: 'Comparativas' },
    { id: 'colores', label: 'Colores & Mantos' },
  ];

  const filteredArticles = selectedCat === 'todos' 
    ? articles 
    : articles.filter(a => a.cat === selectedCat);

  return (
    <>
      <Helmet>
        <title>Blog Fluffy VIP | Artículos, Genética y Cuidados del Bulldog Francés</title>
        <meta name="description" content="Aprende todo sobre el Bulldog Francés Fluffy: genética del gen FGF5, cuidados del pelaje sedoso, nutrición especializada y consejos veterinarios de expertos." />
        <link rel="canonical" href="https://frenchbulldogfluffy.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://frenchbulldogfluffy.com/blog" />
        <meta property="og:title" content="Blog Fluffy VIP | Artículos y Guías Caninas de Élite" />
        <meta property="og:description" content="Guías veterinarias y cinológicas sobre el Bulldog Francés Fluffy (pelo largo)." />
      </Helmet>

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-8 mb-20 animate-fade-in">
        {/* Header Hero */}
        <section className="text-center max-w-3xl mx-auto mb-14 pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cornflower/10 text-cornflower rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-cornflower/20">
            <BookOpen className="w-4 h-4 text-cornflower" />
            <span>Enciclopedia Canina VIP</span>
          </div>

          <div className="mb-6">
            <AnimatedHeading
              text="Guías y Conocimiento Fluffy"
              as="h1"
              className="text-4xl sm:text-5xl lg:text-6xl font-black font-header tracking-tight leading-[1.1] text-obsidian dark:text-canvas"
              accentWords={['Conocimiento', 'Fluffy']}
            />
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 font-light leading-relaxed">
            Artículos respaldados por genetistas y veterinarios especializados en la raza Bulldog Francés de pelaje largo (Fluffy).
          </p>
        </section>

        {/* Category Pills */}
        <div className="flex gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar justify-start sm:justify-center">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedCat === cat.id
                  ? 'bg-cornflower text-white shadow-md shadow-cornflower/20 scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map(art => (
            <article 
              key={art.slug}
              className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700/80 shadow-lg shadow-gray-200/40 dark:shadow-none hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              {/* Image */}
              <Link to={`/blog/${art.slug}`} className="relative aspect-[3/2] w-full overflow-hidden bg-gray-100 dark:bg-gray-700 block">
                <img 
                  src={art.img} 
                  alt={art.title}
                  width={600}
                  height={400}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-obsidian/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
                  {art.cat}
                </div>
              </Link>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-gray-400 font-medium mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                    <span>•</span>
                    <span>{art.date}</span>
                  </div>

                  <h2 className="font-header font-bold text-xl text-obsidian dark:text-canvas mb-3 leading-snug group-hover:text-cornflower transition-colors">
                    <Link to={`/blog/${art.slug}`}>
                      {art.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-6 leading-relaxed">
                    {art.desc}
                  </p>
                </div>

                <Link
                  to={`/blog/${art.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-cornflower hover:text-blue-600 transition-colors pt-4 border-t border-gray-100 dark:border-gray-700/60"
                >
                  <span>Leer Artículo Completo</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
};
