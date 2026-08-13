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
    <section className="py-20 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="playful-card border-none bg-cornflower/10 dark:bg-gray-800 p-8 sm:p-12 shadow-inner"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            <div className="md:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-[11px] font-bold text-cornflower uppercase tracking-widest shadow-sm">
                <Clock className="w-4 h-4" />
                <span>Etapas de Desarrollo Fluffy</span>
              </div>
              
              <h3 className="font-header font-extrabold text-3xl sm:text-4xl text-gray-800 dark:text-gray-100">
                Calculadora de Edad Canina
              </h3>

              <p className="text-lg font-medium text-gray-600 dark:text-gray-400 leading-relaxed">
                El desarrollo biológico del Bulldog Francés Fluffy pasa por fases clave durante sus primeros 24 meses, donde consolida su estructura ósea compacta y la densidad final de su pelaje exótico.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <label className="block text-[11px] font-bold mb-2 uppercase tracking-widest text-gray-500 dark:text-gray-400">Años Cronológicos</label>
                  <select
                    value={anios}
                    onChange={(e) => setAnios(parseInt(e.target.value))}
                    className="w-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full px-5 py-4 text-sm font-bold text-gray-800 dark:text-gray-100 appearance-none cursor-pointer focus:outline-none focus:border-cornflower transition-colors shadow-sm"
                  >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <option key={n} value={n}>{n} años</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold mb-2 uppercase tracking-widest text-gray-500 dark:text-gray-400">Meses Adicionales</label>
                  <select
                    value={meses}
                    onChange={(e) => setMeses(parseInt(e.target.value))}
                    className="w-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full px-5 py-4 text-sm font-bold text-gray-800 dark:text-gray-100 appearance-none cursor-pointer focus:outline-none focus:border-cornflower transition-colors shadow-sm"
                  >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((n) => (
                      <option key={n} value={n}>{n} meses</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 bg-white dark:bg-gray-700 p-10 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-600 flex flex-col justify-center items-center text-center h-full">
              <span className="text-[11px] uppercase tracking-widest font-bold text-gray-500 dark:text-gray-300 block mb-4">
                Edad Humana Equivalente
              </span>
              <span className="text-6xl font-header font-extrabold text-cornflower block mb-6">
                ~{edadHumana} <span className="text-3xl text-gray-400 dark:text-gray-400">Años</span>
              </span>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300 leading-relaxed">
                {edadHumana < 18 && 'Cachorro en formación ósea y capilar.'}
                {edadHumana >= 18 && edadHumana < 40 && 'Joven/Adulto en plenitud física con manto denso.'}
                {edadHumana >= 40 && 'Adulto consolidado y equilibrado.'}
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
