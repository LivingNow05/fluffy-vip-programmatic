import React, { useState } from 'react';
import { Plane, Check, ChevronDown } from 'lucide-react';
import { FluffyStoryRow } from '../types/fluffy';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  currentCity: FluffyStoryRow | null;
}

export const ShippingAccordion: React.FC<Props> = ({ currentCity }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const aeropuertoNombre = currentCity?.aeropuerto || 'Aeropuerto Internacional El Dorado (BOG)';
  const paisNombre = currentCity?.pais || 'Colombia / Internacional';

  const items = [
    {
      title: `Traslado Aéreo VIP a ${aeropuertoNombre}`,
      content: `Cada cachorro viaja en cabina a bordo acompañado por nuestra nannny veterinaria dedicada. Se garantiza temperatura controlada, microclima regulado e hidratación continua hasta la entrega en mano en el aeropuerto ${aeropuertoNombre}.`
    },
    {
      title: 'Certificado Genético DNA (L4/L1) & Pedigree Oficial',
      content: 'Entregamos el documento oficial que certifica la pureza genotípica de pelo largo, árbol genealógico de 4 generaciones y certificado médico libre de enfermedades hereditarias braquicefálicas.'
    },
    {
      title: 'Esquema Veterinario & Garantía de Salud',
      content: 'Incluye carnét de vacunación internacional al día, desparasitación completa, microchip de identificación ISO y garantía de salud por escrito por 12 meses.'
    },
    {
      title: 'Aclimatación y Bienestar en Destino',
      content: `Nuestros ejemplares poseen una extraordinaria capacidad de adaptación tanto al clima de ${currentCity?.tituloH1.replace('Bulldog Francés Fluffy en ', '') || 'tu ciudad'} como a la vida en apartamento urbano.`
    }
  ];

  return (
    <section className="section-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-carbon border border-canvas/20 rounded-pill text-[11px] font-bold text-electric-yellow uppercase tracking-widest mb-6">
            <Plane className="w-4 h-4" />
            <span>Protocolo de Entrega VIP</span>
          </div>
          <h2 className="editorial-display text-4xl sm:text-5xl text-canvas">
            Logística & Garantías de Traslado
          </h2>
          <p className="text-lg text-canvas/70 font-light mt-4">
            Envíos personalizados hacia {aeropuertoNombre} ({paisNombre}).
          </p>
        </motion.div>

        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-carbon border border-canvas/10 rounded-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between font-serif text-xl font-bold text-canvas hover:text-ember-orange transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-4">
                    <Check className={`w-5 h-5 transition-colors ${isOpen ? 'text-ember-orange' : 'text-canvas/30'}`} />
                    {item.title}
                  </span>
                  <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180 text-ember-orange' : 'text-canvas/50'}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-canvas/70 leading-[1.6] pl-14">
                        {item.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
