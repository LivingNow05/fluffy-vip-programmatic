import React from 'react';
import { Award, ShieldAlert, Heart, Dna } from 'lucide-react';
import { motion } from 'framer-motion';

export const EeatSection: React.FC = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="eeat-garantia" className="py-20 bg-blue-50 dark:bg-gray-900 border-t border-blue-100 dark:border-gray-800">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.div variants={fadeUpVariant} className="inline-block px-4 py-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-full text-[11px] font-bold text-cornflower uppercase tracking-widest mb-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Criadero de Autoridad & Excelencia</span>
            </div>
          </motion.div>
          <motion.h2 variants={fadeUpVariant} className="font-header font-extrabold text-4xl sm:text-5xl mb-4 text-gray-800 dark:text-gray-100">
            Respaldo <span className="text-cornflower">Genético</span> & Compromiso Veterinario
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="text-lg text-gray-600 dark:text-gray-400 font-medium max-w-xl mx-auto">
            Garantizamos la máxima pureza de raza, crianza ética y bienestar integral para cada ejemplar Bulldog Francés Fluffy.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          
          {/* Card 1 */}
          <motion.div variants={fadeUpVariant} className="playful-card bg-white dark:bg-gray-800 h-full flex flex-col items-center text-center p-8">
            <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-gray-700 text-cornflower flex items-center justify-center mb-6 shadow-sm">
              <Dna className="w-6 h-6" />
            </div>
            <h3 className="font-header text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Certificación Genética
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium leading-[1.6]">
              Cada ejemplar cuenta con su panel de pruebas genéticas de ADN emitido por laboratorio certificado internacional, acreditando la portación real del gen de pelaje largo.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={fadeUpVariant} className="playful-card bg-white dark:bg-gray-800 h-full flex flex-col items-center text-center p-8">
            <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-gray-700 text-cornflower flex items-center justify-center mb-6 shadow-sm">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="font-header text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Garantía Sanitaria
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium leading-[1.6]">
              Respaldamos la salud de tu cachorro mediante contrato legal por escrito frente a enfermedades virales, genéticas o hereditarias, acompañado de esquema completo.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={fadeUpVariant} className="playful-card bg-white dark:bg-gray-800 h-full flex flex-col items-center text-center p-8">
            <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-gray-700 text-cornflower flex items-center justify-center mb-6 shadow-sm">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-header text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Asesoría de Por Vida
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium leading-[1.6]">
              Nuestro equipo de especialistas en etología y medicina veterinaria te brindará acompañamiento continuo en nutrición, cepillado de manto y desarrollo durante toda su vida.
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};
