import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, HeartHandshake, Dna, ArrowRight, Phone } from 'lucide-react';
import { FluffyStoryRow } from '../types/fluffy';
import { AnimatedHeading } from '../components/AnimatedHeading';

interface Props {
  cities: FluffyStoryRow[];
  onOpenQuiz: () => void;
}

export const HomePage: React.FC<Props> = ({ onOpenQuiz }) => {
  return (
    <>
      <Helmet>
        <title>Bulldog Francés Fluffy VIP | Criadero Exclusivo con Pedigree y Envíos en Cabina</title>
        <meta name="description" content="Criadero exclusivo de cachorros Bulldog Francés Fluffy (pelo largo L4/L1). Genética certificada, pedigree internacional, garantía veterinaria y traslados VIP en cabina." />
        <link rel="canonical" href="https://frenchbulldogfluffy.com/" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://frenchbulldogfluffy.com/" />
        <meta property="og:title" content="Bulldog Francés Fluffy VIP | Criadero Exclusivo" />
        <meta property="og:description" content="Criadero exclusivo de cachorros Bulldog Francés Fluffy (pelo largo L4/L1). Genética certificada, pedigree internacional y traslados VIP en cabina." />
        <meta property="og:image" content="https://frenchbulldogfluffy.com/images/fluffy-showcase-hero.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bulldog Francés Fluffy VIP | Criadero Exclusivo" />
        <meta name="twitter:description" content="Criadero exclusivo de cachorros Bulldog Francés Fluffy con entrega VIP en cabina." />
        <meta name="twitter:image" content="https://frenchbulldogfluffy.com/images/fluffy-showcase-hero.jpg" />
      </Helmet>

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-8 mb-20 animate-fade-in">
        {/* HERO PRINCIPAL GENERAL */}
        <section className="relative rounded-3xl bg-gray-50 dark:bg-gray-800/50 p-6 sm:p-12 md:p-16 border border-gray-100 dark:border-gray-800 mb-16 overflow-hidden shadow-xl">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-12 relative z-10">
            
            {/* Columna Izquierda */}
            <div className="w-full md:w-7/12 lg:w-7/12 text-left pr-0 lg:pr-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cornflower/10 text-cornflower rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-cornflower/20">
                <Sparkles className="w-4 h-4 text-cornflower" />
                <span>Criadero VIP Especializado</span>
              </div>

              <div className="mb-6">
                <AnimatedHeading
                  text="Bulldog Francés Fluffy"
                  as="h1"
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-header tracking-tight leading-[1.1] text-obsidian dark:text-canvas"
                  accentWords={['Fluffy']}
                />
              </div>

              <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-8 max-w-xl">
                <strong className="font-semibold text-gray-800 dark:text-gray-200">Dinastía Fluffy VIP es un criadero especializado en cachorros Bulldog Francés de pelo largo (Fluffy).</strong> Entregamos ejemplares puros con genética certificada (gen L4/L1), pedigree internacional y logística de transporte VIP a más de 100 ciudades.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 mt-4">
                <a
                  href="https://wa.me/573128375043?text=Hola,%20quisiera%20consultar%20disponibilidad%20inmediata%20de%20cachorros%20Bulldog%20Franc%C3%A9s%20Fluffy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-4 px-7 rounded-full shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 transition-all duration-300 text-center flex items-center justify-center gap-2 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer text-sm sm:text-base border-transparent"
                >
                  <Phone className="w-4 h-4" />
                  <span>Ver Disponibilidad WhatsApp</span>
                </a>

                <button
                  onClick={onOpenQuiz}
                  className="px-6 py-4 rounded-full border-2 border-gray-200 dark:border-gray-700 font-bold text-gray-700 dark:text-gray-200 hover:border-cornflower hover:text-cornflower dark:hover:border-cornflower dark:hover:text-cornflower transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 bg-transparent hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 whitespace-nowrap text-sm sm:text-base"
                >
                  <span>Quiz Match VIP 🐾</span>
                </button>

                <a
                  href="#ciudades-hub"
                  className="px-5 py-4 rounded-full font-medium text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition-colors flex items-center justify-center gap-1.5 text-sm"
                >
                  <span>Ciudades</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Badges E-E-A-T */}
              <div className="flex gap-2.5 sm:gap-3 flex-wrap mt-10 pt-6 border-t border-gray-200/60 dark:border-gray-700/60">
                <div className="flex items-center gap-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-gray-200/50 dark:border-gray-700 text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm">
                  <Dna className="w-3.5 h-3.5 text-cornflower" />
                  <span>Gen L4/L1 Verificado</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-gray-200/50 dark:border-gray-700 text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-cornflower" />
                  <span>Garantía de Salud Escrita</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-gray-200/50 dark:border-gray-700 text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm">
                  <HeartHandshake className="w-3.5 h-3.5 text-cornflower" />
                  <span>Asesoría VIP 24/7</span>
                </div>
              </div>
            </div>

            {/* Columna Derecha (Visual Showcase) */}
            <div className="w-full md:w-5/12 lg:w-5/12 flex-shrink-0 relative md:-mt-8 lg:-mt-12 lg:-mr-6 z-10">
              <div className="relative aspect-[4/3] sm:aspect-[3/2] w-full rounded-3xl overflow-hidden shadow-2xl group border-4 border-white dark:border-gray-800">
                <img
                  src="/images/fluffy-showcase-hero-light.jpg"
                  alt="Bulldog Francés Fluffy VIP"
                  width={600}
                  height={450}
                  fetchPriority="high"
                  className="dark:hidden absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <img
                  src="/images/fluffy-showcase-hero.jpg"
                  alt="Bulldog Francés Fluffy VIP"
                  width={600}
                  height={450}
                  fetchPriority="high"
                  className="hidden dark:block absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
};
