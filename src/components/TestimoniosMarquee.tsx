import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, MapPin, Heart } from 'lucide-react';
import { TESTIMONIOS_DATA, TestimonioItem } from '../data/testimonios';
import { AnimatedHeading } from './AnimatedHeading';

interface Props {
  className?: string;
}

export const TestimoniosMarquee: React.FC<Props> = ({ className = '' }) => {
  // Duplicamos el array 3 veces para asegurar un bucle infinito continuo e impecable
  const marqueeList = [...TESTIMONIOS_DATA, ...TESTIMONIOS_DATA, ...TESTIMONIOS_DATA];

  return (
    <section id="testimonios-vip" className={`py-20 bg-gray-50/70 dark:bg-gray-900/60 border-t border-b border-gray-100 dark:border-gray-800 overflow-hidden ${className}`}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-500/20 shadow-sm">
          <Heart className="w-4 h-4 fill-emerald-500 text-emerald-500" />
          <span>Experiencias Reales · 100% Familias Satisfechas</span>
        </div>

        <div className="mb-4">
          <AnimatedHeading
            text="Familias Felices & Testimonios VIP"
            as="h2"
            className="font-header font-black text-4xl sm:text-5xl text-obsidian dark:text-canvas"
            accentWords={['Felices', 'VIP', 'Testimonios']}
          />
        </div>

        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
          Más de 100 familias en Latinoamérica, Estados Unidos y Europa disfrutan de la compañía y pureza genética de nuestros cachorros Fluffy.
        </p>
      </div>

      {/* Infinite Horizontal Marquee Track */}
      <div className="w-full relative flex group overflow-hidden py-4">
        {/* Track 1 */}
        <div className="flex animate-marquee-slow group-hover:[animation-play-state:paused] shrink-0 gap-6">
          {marqueeList.map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="w-[320px] sm:w-[370px] shrink-0 bg-white dark:bg-gray-800 rounded-3xl p-5 border border-gray-100 dark:border-gray-700/80 shadow-lg shadow-gray-200/40 dark:shadow-none hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group/card"
            >
              <div>
                {/* PROTAGONIST IMAGE: High-impact photo showcase */}
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4 shadow-md bg-gray-100 dark:bg-gray-700">
                  <img
                    src={t.foto}
                    alt={`${t.nombre} con su cachorro Fluffy`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                    loading="lazy"
                  />
                  {/* Floating badge top-left */}
                  <div className="absolute top-3 left-3 bg-obsidian/80 dark:bg-obsidian/90 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm border border-white/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Adopción Verificada</span>
                  </div>
                  {/* Floating badge top-right */}
                  <div className="absolute top-3 right-3 bg-cornflower text-white text-[9px] sm:text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full tracking-wider shadow-md">
                    {t.manto.replace('Bulldog ', '')}
                  </div>
                </div>

                {/* Client Info & Rating Header */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h4 className="font-bold text-base text-obsidian dark:text-canvas truncate">
                      {t.nombre}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium flex items-center gap-1 mt-0.5 truncate">
                      <MapPin className="w-3.5 h-3.5 text-cornflower shrink-0" />
                      <span>{t.ciudad}, {t.pais}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-400 text-xs shrink-0 bg-amber-400/10 px-2 py-1 rounded-lg border border-amber-400/20">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-gray-600 dark:text-gray-300 italic font-medium leading-relaxed mb-4">
                  "{t.comentario}"
                </p>
              </div>

              {/* Footer with Variety and Date */}
              <div className="pt-3 border-t border-gray-100 dark:border-gray-700/60 flex items-center justify-between text-[11px] text-gray-400 font-medium">
                <span className="text-cornflower font-semibold truncate mr-2">{t.manto}</span>
                <span className="shrink-0">{t.fecha}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Track 2 (Duplicate for seamless continuous loop) */}
        <div className="flex animate-marquee-slow group-hover:[animation-play-state:paused] shrink-0 gap-6" aria-hidden="true">
          {marqueeList.map((t, idx) => (
            <div
              key={`dup-${t.id}-${idx}`}
              className="w-[320px] sm:w-[370px] shrink-0 bg-white dark:bg-gray-800 rounded-3xl p-5 border border-gray-100 dark:border-gray-700/80 shadow-lg shadow-gray-200/40 dark:shadow-none hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group/card"
            >
              <div>
                {/* PROTAGONIST IMAGE: High-impact photo showcase */}
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4 shadow-md bg-gray-100 dark:bg-gray-700">
                  <img
                    src={t.foto}
                    alt={`${t.nombre} con su cachorro Fluffy`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-obsidian/80 dark:bg-obsidian/90 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm border border-white/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Adopción Verificada</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-cornflower text-white text-[9px] sm:text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full tracking-wider shadow-md">
                    {t.manto.replace('Bulldog ', '')}
                  </div>
                </div>

                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h4 className="font-bold text-base text-obsidian dark:text-canvas truncate">
                      {t.nombre}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium flex items-center gap-1 mt-0.5 truncate">
                      <MapPin className="w-3.5 h-3.5 text-cornflower shrink-0" />
                      <span>{t.ciudad}, {t.pais}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-400 text-xs shrink-0 bg-amber-400/10 px-2 py-1 rounded-lg border border-amber-400/20">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 italic font-medium leading-relaxed mb-4">
                  "{t.comentario}"
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 dark:border-gray-700/60 flex items-center justify-between text-[11px] text-gray-400 font-medium">
                <span className="text-cornflower font-semibold truncate mr-2">{t.manto}</span>
                <span className="shrink-0">{t.fecha}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
