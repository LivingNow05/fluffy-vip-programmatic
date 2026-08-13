import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export const CalculadoraEdad: React.FC = () => {
  const [anios, setAnios] = useState<number>(1);
  const [meses, setMeses] = useState<number>(6);

  // Fórmula refinada para braquiocéfalos de talla mediana (Bulldog Francés)
  const calcularEdadHumana = () => {
    const totalAnios = anios + meses / 12;
    let equivalente = 0;
    if (totalAnios <= 1) {
      equivalente = totalAnios * 15;
    } else if (totalAnios <= 2) {
      equivalente = 15 + (totalAnios - 1) * 9;
    } else {
      equivalente = 24 + (totalAnios - 2) * 6;
    }
    return Math.round(equivalente);
  };

  const edadHumana = calcularEdadHumana();

  return (
    <section className="section-light">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="editorial-card-light dark:bg-obsidian dark:border-canvas/20 p-8 sm:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            <div className="md:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-lavender-mist dark:bg-carbon border border-obsidian/10 dark:border-canvas/10 rounded-pill text-[11px] font-bold text-obsidian dark:text-lavender-mist uppercase tracking-widest">
                <Clock className="w-4 h-4" />
                <span>Etapas de Desarrollo Fluffy</span>
              </div>
              
              <h3 className="editorial-display text-3xl sm:text-4xl text-obsidian dark:text-canvas">
                Calculadora de Edad Canina Equivalente
              </h3>

              <p className="text-lg font-light text-obsidian/70 dark:text-canvas/70 leading-[1.5]">
                El desarrollo biológico del Bulldog Francés Fluffy pasa por fases clave durante sus primeros 24 meses, donde consolida su estructura ósea compacta y la densidad final de su pelaje exótico.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <label className="block text-[11px] font-bold mb-2 uppercase tracking-widest text-obsidian/70 dark:text-canvas/70">Años Cronológicos</label>
                  <select
                    value={anios}
                    onChange={(e) => setAnios(parseInt(e.target.value))}
                    className="w-full bg-transparent border border-obsidian/20 dark:border-canvas/20 rounded-pill px-5 py-4 text-sm font-bold text-obsidian dark:text-canvas appearance-none cursor-pointer focus:outline-none focus:border-obsidian dark:focus:border-canvas transition-colors"
                  >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <option key={n} value={n} className="text-obsidian">{n} años</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold mb-2 uppercase tracking-widest text-obsidian/70 dark:text-canvas/70">Meses Adicionales</label>
                  <select
                    value={meses}
                    onChange={(e) => setMeses(parseInt(e.target.value))}
                    className="w-full bg-transparent border border-obsidian/20 dark:border-canvas/20 rounded-pill px-5 py-4 text-sm font-bold text-obsidian dark:text-canvas appearance-none cursor-pointer focus:outline-none focus:border-obsidian dark:focus:border-canvas transition-colors"
                  >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((n) => (
                      <option key={n} value={n} className="text-obsidian">{n} meses</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 bg-obsidian dark:bg-carbon p-10 rounded-card flex flex-col justify-center items-center text-center h-full">
              <span className="text-[11px] uppercase tracking-widest font-bold text-canvas/70 block mb-4">
                Edad Humana Equivalente
              </span>
              <span className="text-6xl font-serif font-extrabold text-electric-yellow block mb-6">
                ~{edadHumana} <span className="text-3xl text-canvas">Años</span>
              </span>
              <p className="text-sm text-canvas/70 leading-[1.6]">
                {edadHumana < 18 && 'Cachorro en formación ósea y desarrollo de folículo capilar.'}
                {edadHumana >= 18 && edadHumana < 40 && 'Joven/Adulto en plenitud física con manto sedoso denso.'}
                {edadHumana >= 40 && 'Adulto consolidado con carácter dócil y equilibrado.'}
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
