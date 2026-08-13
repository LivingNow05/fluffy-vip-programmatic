import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, HeartHandshake, Dna, MapPin, ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import { FluffyStoryRow } from '../types/fluffy';

interface Props {
  cities: FluffyStoryRow[];
  onOpenQuiz: () => void;
}

export const HomePage: React.FC<Props> = ({ cities, onOpenQuiz }) => {
  return (
    <main className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-8 mb-20 animate-fade-in">
      {/* HERO PRINCIPAL GENERAL */}
      <section className="relative rounded-3xl bg-gradient-to-br from-blue-50/80 via-white to-cornflower/10 dark:from-gray-800 dark:via-gray-900 dark:to-blue-950/40 p-8 sm:p-12 md:p-16 border border-blue-100 dark:border-gray-800 mb-16 overflow-hidden shadow-xl">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-12 relative z-10">
          
          {/* Columna Izquierda */}
          <div className="w-full md:w-7/12 lg:w-7/12 text-left pr-0 lg:pr-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cornflower/10 text-cornflower rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-cornflower/20">
              <Sparkles className="w-4 h-4 text-cornflower" />
              <span>Criadero VIP Especializado</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-header mb-6 leading-[1.1] text-obsidian dark:text-canvas text-balance">
              Bulldog Francés <span className="text-cornflower">Fluffy</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-8 max-w-xl">
              Ejemplares puros de alta gama con genética de pelo largo (gen L4/L1), pedigree internacional de pureza y logística de transporte VIP a más de 100 ciudades.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="#ciudades-hub"
                className="btn-primary bg-cornflower hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-cornflower/30 hover:shadow-cornflower/50 transition-all duration-300 text-center flex items-center justify-center gap-2 hover:-translate-y-1 whitespace-nowrap"
              >
                <span>Explorar por Ciudad</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenQuiz}
                className="group px-8 py-4 rounded-full border-2 border-gray-200 dark:border-gray-700 font-bold text-gray-700 dark:text-gray-200 hover:border-cornflower hover:text-cornflower dark:hover:border-cornflower dark:hover:text-cornflower transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 bg-transparent hover:bg-blue-50/50 dark:hover:bg-blue-900/10 whitespace-nowrap"
              >
                Realizar Quiz Match 🐾
              </button>
            </div>

            {/* Badges E-E-A-T */}
            <div className="flex gap-3 flex-wrap mt-12 pt-8 border-t border-gray-200/60 dark:border-gray-700/60">
              <div className="flex items-center gap-2.5 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50 dark:border-gray-700 text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm">
                <Dna className="w-4 h-4 text-cornflower" />
                <span>Gen L4/L1 Verificado</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50 dark:border-gray-700 text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-cornflower" />
                <span>Garantía de Salud Escrita</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50 dark:border-gray-700 text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm">
                <HeartHandshake className="w-4 h-4 text-cornflower" />
                <span>Asesoría VIP 24/7</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha (Visual Showcase) */}
          <div className="w-full md:w-5/12 lg:w-5/12 flex-shrink-0 relative md:-mt-12 lg:-mt-16 lg:-mr-8 z-10">
            <div className="relative aspect-[3/2] w-full rounded-3xl overflow-hidden shadow-2xl group border-4 border-white dark:border-gray-800">
              <img
                src="/images/fluffy-showcase-hero-light.jpg"
                alt="Bulldog Francés Fluffy VIP"
                className="dark:hidden absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <img
                src="/images/fluffy-showcase-hero.jpg"
                alt="Bulldog Francés Fluffy VIP"
                className="hidden dark:block absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};
