import React, { useRef } from "react";
import { MANTOS_FLUFFY } from "../data/mantos";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { FluffyManto } from "../types/fluffy";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Props {
  onSelectManto: (manto: FluffyManto) => void;
}

export const HorizontalMantoScroll: React.FC<Props> = ({ onSelectManto }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="variedades" className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cornflower/10 text-cornflower rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Colección Exclusiva por Color</span>
            </div>
            <h2 className="font-header font-extrabold text-4xl sm:text-5xl text-gray-800 dark:text-gray-100">
              Mantos & Variedades
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 font-medium max-w-2xl leading-relaxed">
              Haz clic en cualquier variedad para ver su ficha genética detallada, estándar E-E-A-T y disponibilidad.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
            <button
              onClick={() => scroll("left")}
              className="p-4 rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-cornflower text-gray-800 dark:text-gray-100 transition-all shadow-sm hover:shadow-md cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-4 rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-cornflower text-gray-800 dark:text-gray-100 transition-all shadow-sm hover:shadow-md cursor-pointer"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>

        {/* Horizontal Scroll Container */}
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
              <Link
                key={manto.id}
                to={"/manto/" + manto.id}
                className="snap-start shrink-0 w-[260px] sm:w-[300px] cursor-pointer group block"
              >
                {/* Photo Showcase Container (Square) */}
                <div className="aspect-square rounded-3xl overflow-hidden mb-4 relative shadow-md">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${manto.imagen})` }}
                  ></div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  
                  {/* Floating tags */}
                  <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 dark:text-gray-100 shadow-sm">
                    {manto.genetica}
                  </div>
                  <div className="absolute top-3 right-3 bg-cornflower text-white px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest shadow-sm">
                    {manto.popularidad}
                  </div>
                </div>

                {/* Card Meta */}
                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 group-hover:text-cornflower transition-colors">
                  {manto.nombre}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Desde ${manto.precioEstimadoUSD} USD</p>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
