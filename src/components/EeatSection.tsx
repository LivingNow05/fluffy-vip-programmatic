import React from 'react';
import { Award, ShieldAlert, Heart, Dna } from 'lucide-react';
import { motion } from 'framer-motion';

export const EeatSection: React.FC = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="eeat-garantia" className="section-light">
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
          <motion.div variants={fadeUpVariant} className="inline-block px-4 py-2 bg-lavender-mist dark:bg-carbon border border-obsidian/10 dark:border-canvas/10 rounded-pill text-[11px] font-bold text-obsidian dark:text-lavender-mist uppercase tracking-widest mb-6">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Criadero de Autoridad & Excelencia</span>
            </div>
          </motion.div>
          <motion.h2 variants={fadeUpVariant} className="editorial-display text-4xl sm:text-5xl mb-4">
            Respaldo <span className="text-ember-orange">Genético</span> & Compromiso Veterinario
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="text-lg text-obsidian/70 dark:text-canvas/70 font-light max-w-xl mx-auto">
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
          <motion.div variants={fadeUpVariant} className="editorial-card-light dark:bg-obsidian dark:border-canvas/10 h-full flex flex-col items-center text-center p-8">
            <div className="w-14 h-14 rounded-full bg-obsidian text-canvas dark:bg-canvas dark:text-obsidian flex items-center justify-center mb-6">
              <Dna className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-obsidian dark:text-canvas mb-4">
              Certificación Genética L4/L1
            </h3>
            <p className="text-sm text-obsidian/70 dark:text-canvas/70 leading-[1.6]">
              Cada ejemplar cuenta con su panel de pruebas genéticas de ADN emitido por laboratorio certificado internacional, acreditando la portación real del gen de pelaje largo sin cruces híbridos no deseados.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={fadeUpVariant} className="editorial-card-lavender dark:bg-carbon dark:text-canvas h-full flex flex-col items-center text-center p-8">
            <div className="w-14 h-14 rounded-full bg-obsidian text-canvas dark:bg-obsidian dark:text-lavender-mist flex items-center justify-center mb-6 border border-obsidian/10">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-obsidian dark:text-canvas mb-4">
              Garantía Sanitaria 12 Meses
            </h3>
            <p className="text-sm text-obsidian/70 dark:text-canvas/70 leading-[1.6]">
              Respaldamos la salud de tu cachorro mediante contrato legal por escrito frente a enfermedades virales, genéticas o hereditarias, acompañado de esquema completo de vacunas y desparasitaciones.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={fadeUpVariant} className="editorial-card-light dark:bg-obsidian dark:border-canvas/10 h-full flex flex-col items-center text-center p-8">
            <div className="w-14 h-14 rounded-full bg-electric-yellow text-obsidian dark:bg-electric-yellow dark:text-obsidian flex items-center justify-center mb-6 border border-obsidian/10">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-obsidian dark:text-canvas mb-4">
              Asesoría Canina de Por Vida
            </h3>
            <p className="text-sm text-obsidian/70 dark:text-canvas/70 leading-[1.6]">
              Nuestro equipo de especialistas en etología y medicina veterinaria te brindará acompañamiento continuo en nutrición, cepillado de manto y desarrollo durante toda la vida de tu mascota.
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};
