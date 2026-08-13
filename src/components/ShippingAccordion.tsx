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
    <section className="py-20 bg-cornflower/10 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-full text-[11px] font-bold text-indigo-500 uppercase tracking-widest mb-6 shadow-sm">
            <Plane className="w-4 h-4" />
            <span>Protocolo de Entrega VIP</span>
          </div>
          <h2 className="font-header font-extrabold text-4xl sm:text-5xl text-gray-800 dark:text-gray-100">
            Logística & Garantías de Traslado
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-medium mt-4">
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
                className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between font-header text-xl font-bold text-gray-800 dark:text-gray-100 hover:text-indigo-500 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-4">
                    <Check className={`w-5 h-5 transition-colors ${isOpen ? 'text-cornflower' : 'text-gray-300 dark:text-gray-600'}`} />
                    {item.title}
                  </span>
                  <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cornflower' : 'text-gray-400'}`} />
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
                      <div className="px-6 pb-6 pt-2 text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed pl-14">
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
