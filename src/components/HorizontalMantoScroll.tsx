import React, { useRef } from 'react';
import { MANTOS_FLUFFY } from '../data/mantos';
import { ChevronLeft, ChevronRight, ShieldCheck, Dna, Sparkles } from 'lucide-react';
import { FluffyManto } from '../types/fluffy';
import { motion } from 'framer-motion';

interface Props {
  onSelectManto: (manto: FluffyManto) => void;
}

export const HorizontalMantoScroll: React.FC<Props> = ({ onSelectManto }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="variedades" className="section-dark overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de la Sección */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-carbon border border-canvas/20 rounded-pill text-[11px] font-bold text-electric-yellow uppercase tracking-widest mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Colección Exclusiva de Mantos</span>
            </div>
            <h2 className="editorial-display text-4xl sm:text-5xl text-canvas">
              Variedades Genéticas Fluffy
            </h2>
            <p className="mt-4 text-lg text-canvas/70 font-light max-w-2xl leading-[1.5]">
              Desliza horizontalmente para explorar las variantes con pelaje sedoso y portación comprobada del gen L4/L1.
            </p>
          </div>

          {/* Buttons Navigation Controlls (Aceternity UI Style) */}
          <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
            <button
              onClick={() => scroll('left')}
              className="p-4 rounded-full bg-transparent border border-canvas/20 hover:border-canvas hover:bg-canvas text-canvas hover:text-obsidian transition-colors cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-4 rounded-full bg-transparent border border-canvas/20 hover:border-canvas hover:bg-canvas text-canvas hover:text-obsidian transition-colors cursor-pointer"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>

        {/* Aceternity Horizontal Scroll Container */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar pb-8 pt-2 snap-x snap-mandatory"
          >
            {MANTOS_FLUFFY.map((manto) => (
              <div
                key={manto.id}
                onClick={() => onSelectManto(manto)}
                className="snap-start shrink-0 w-[300px] sm:w-[380px] bg-carbon border border-canvas/10 rounded-card overflow-hidden cursor-pointer hover:border-canvas/40 transition-all duration-300 transform hover:-translate-y-2 group"
              >
                {/* Photo Showcase Container */}
                <div className="relative h-72 bg-obsidian overflow-hidden">
                  <img
                    src={manto.imagen}
                    alt={manto.nombre}
                    className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-obsidian text-canvas text-[10px] font-bold px-4 py-1.5 rounded-pill uppercase tracking-widest border border-canvas/20">
                    {manto.popularidad}
                  </div>
                </div>

                {/* Card Body - Colors Planos */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif text-2xl font-bold text-canvas">
                      {manto.nombre}
                    </h3>
                  </div>
                  
                  <span className="text-[11px] font-mono font-bold text-electric-yellow mb-4 block">
                    Desde ${manto.precioEstimadoUSD} USD
                  </span>

                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-canvas/50 mb-6 font-mono bg-obsidian/50 w-fit px-3 py-1.5 rounded-pill border border-canvas/5">
                    <Dna className="w-4 h-4 text-canvas/70" />
                    <span>{manto.genetica}</span>
                  </div>

                  <p className="text-sm text-canvas/70 line-clamp-2 leading-[1.6] mb-8 font-light">
                    {manto.descripcion}
                  </p>

                  <div className="pt-5 border-t border-canvas/10 flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-widest font-bold text-canvas flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-ember-orange" />
                      Pureza Certificada
                    </span>
                    <span className="text-sm font-bold text-canvas/50 group-hover:text-canvas transition-colors">
                      Ver →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
