import React from "react";
import { MANTOS_FLUFFY } from "../data/mantos";
import { Sparkles } from "lucide-react";
import { FluffyManto } from "../types/fluffy";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatedHeading } from "./AnimatedHeading";

interface Props {
  onSelectManto: (manto: FluffyManto) => void;
}

export const HorizontalMantoScroll: React.FC<Props> = ({ onSelectManto }) => {
  // Array 3 veces para asegurar que el marquee siempre cubra toda la pantalla sin cortes
  const marqueeItems = [...MANTOS_FLUFFY, ...MANTOS_FLUFFY, ...MANTOS_FLUFFY];

  return (
    <section id="variedades" className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Header de la Sección */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 text-violet-500 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Colección Exclusiva por Color</span>
            </div>
            <div>
              <AnimatedHeading
                text="Mantos & Variedades"
                as="h2"
                className="font-header font-extrabold text-4xl sm:text-5xl text-gray-800 dark:text-gray-100"
                accentWords={['Variedades']}
              />
            </div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 font-medium max-w-2xl leading-relaxed">
              Explora nuestra selección. Haz clic en cualquier variedad para ver su ficha genética y disponibilidad.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Infinite Horizontal Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full relative flex group overflow-hidden"
      >
        {/* Primer bloque */}
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] shrink-0">
          {marqueeItems.map((manto, idx) => (
            <div key={`${manto.id}-${idx}`} className="px-3 shrink-0 w-[280px] sm:w-[320px]">
              <Link
                to={"/color/" + manto.id}
                className="cursor-pointer group/card block"
              >
                {/* Photo Showcase Container */}
                <div className="aspect-[4/5] sm:aspect-square rounded-3xl overflow-hidden mb-4 relative shadow-md">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover/card:scale-110"
                    style={{ backgroundImage: `url(${manto.imagen})` }}
                  ></div>
                  <div className="absolute inset-0 bg-black/10 group-hover/card:bg-transparent transition-colors"></div>
                  
                  {/* Floating tags */}
                  <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold text-gray-800 dark:text-gray-100 shadow-sm">
                    {manto.genetica}
                  </div>
                  <div className="absolute top-3 right-3 bg-cornflower text-white px-3 py-1 rounded-full text-[9px] sm:text-[10px] uppercase font-bold tracking-widest shadow-sm">
                    {manto.popularidad}
                  </div>
                </div>

                {/* Card Meta */}
                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 group-hover/card:text-indigo-500 transition-colors">
                  {manto.nombre}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Desde ${manto.precioEstimadoUSD} USD</p>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Segundo bloque idéntico para loop perfecto */}
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] shrink-0" aria-hidden="true">
          {marqueeItems.map((manto, idx) => (
            <div key={`dup-${manto.id}-${idx}`} className="px-3 shrink-0 w-[280px] sm:w-[320px]">
              <Link
                to={"/color/" + manto.id}
                className="cursor-pointer group/card block"
              >
                <div className="aspect-[4/5] sm:aspect-square rounded-3xl overflow-hidden mb-4 relative shadow-md">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover/card:scale-110"
                    style={{ backgroundImage: `url(${manto.imagen})` }}
                  ></div>
                  <div className="absolute inset-0 bg-black/10 group-hover/card:bg-transparent transition-colors"></div>
                  
                  <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold text-gray-800 dark:text-gray-100 shadow-sm">
                    {manto.genetica}
                  </div>
                  <div className="absolute top-3 right-3 bg-cornflower text-white px-3 py-1 rounded-full text-[9px] sm:text-[10px] uppercase font-bold tracking-widest shadow-sm">
                    {manto.popularidad}
                  </div>
                </div>

                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 group-hover/card:text-indigo-500 transition-colors">
                  {manto.nombre}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Desde ${manto.precioEstimadoUSD} USD</p>
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
