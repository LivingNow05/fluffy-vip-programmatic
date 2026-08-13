import React, { useState } from 'react';
import { Utensils, CheckCircle2, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

export const CalculadoraComida: React.FC = () => {
  const [peso, setPeso] = useState<number>(8);
  const [edadMeses, setEdadMeses] = useState<number>(5);
  const [tipoDieta, setTipoDieta] = useState<'superpremium' | 'barf'>('superpremium');

  // Multiplicadores nutricionales para raza Fluffy
  const calcularGramos = () => {
    let porcentaje = 0.035; // base 3.5%
    if (edadMeses <= 4) porcentaje = 0.06; // 6% peso corporal en cachorros
    else if (edadMeses <= 8) porcentaje = 0.045; // 4.5%
    else if (edadMeses <= 12) porcentaje = 0.035; // 3.5%
    else porcentaje = 0.028; // 2.8% en adultos

    if (tipoDieta === 'barf') porcentaje += 0.01;

    const gramosDiarios = Math.round(peso * 1000 * porcentaje);
    const tomas = edadMeses <= 6 ? 3 : 2;
    const gramosPorToma = Math.round(gramosDiarios / tomas);

    return { gramosDiarios, tomas, gramosPorToma };
  };

  const res = calcularGramos();

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="calculadora-nutricion" className="py-20 bg-blue-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="lg:col-span-6 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-[11px] font-bold text-indigo-500 uppercase tracking-widest shadow-sm">
              <Utensils className="w-4 h-4" />
              <span>Nutrición Especializada Fluffy</span>
            </motion.div>
            
            <motion.h2 variants={fadeUpVariant} className="font-header font-extrabold text-4xl sm:text-5xl text-gray-800 dark:text-gray-100">
              Calculadora de Nutrición
            </motion.h2>
            
            <motion.p variants={fadeUpVariant} className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
              El pelaje abundante del Bulldog Francés Fluffy (gen L4/L1) requiere una densidad nutricional óptima rica en Omega-3, ácidos grasos esenciales y proteínas de alta digestibilidad.
            </motion.p>

            <motion.div variants={fadeUpVariant} className="space-y-4 pt-4">
              <div className="flex items-start gap-4 p-5 playful-card">
                <CheckCircle2 className="w-6 h-6 text-indigo-500 shrink-0" />
                <div className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  <strong className="block text-gray-800 dark:text-gray-100 font-bold mb-1">Refuerzo Capilar:</strong> Ración rica en salmón y aceite de coco para estimular el crecimiento sano del folículo L4.
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 playful-card">
                <CheckCircle2 className="w-6 h-6 text-indigo-500 shrink-0" />
                <div className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  <strong className="block text-gray-800 dark:text-gray-100 font-bold mb-1">Control Digestivo:</strong> Croqueta hidráulica o Dieta BARF adaptada a la mandíbula braquiocefálica.
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Calculator Card */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="playful-card p-8 sm:p-10">
              <h3 className="font-header text-2xl font-bold mb-8 flex items-center gap-3 text-gray-800 dark:text-gray-100">
                <Scale className="w-6 h-6 text-indigo-500" />
                Calcula la Ración Diaria
              </h3>

              <div className="space-y-8">
                {/* Peso Input Slider */}
                <div>
                  <div className="flex justify-between text-sm font-bold mb-4 uppercase tracking-wider">
                    <span className="text-gray-500 dark:text-gray-400">Peso del Fluffy</span>
                    <span className="text-indigo-500 dark:text-indigo-500">{peso} kg</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="16"
                    step="0.5"
                    value={peso}
                    onChange={(e) => setPeso(parseFloat(e.target.value))}
                    className="w-full accent-cornflower cursor-pointer h-2 bg-gray-200 dark:bg-gray-700 rounded-full appearance-none"
                  />
                </div>

                {/* Edad Meses Slider */}
                <div>
                  <div className="flex justify-between text-sm font-bold mb-4 uppercase tracking-wider">
                    <span className="text-gray-500 dark:text-gray-400">Edad del Cachorro/Adulto</span>
                    <span className="text-indigo-500 dark:text-indigo-500">{edadMeses} meses</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="24"
                    step="1"
                    value={edadMeses}
                    onChange={(e) => setEdadMeses(parseInt(e.target.value))}
                    className="w-full accent-cornflower cursor-pointer h-2 bg-gray-200 dark:bg-gray-700 rounded-full appearance-none"
                  />
                </div>

                {/* Tipo de Dieta Selection */}
                <div>
                  <label className="block text-sm font-bold mb-4 uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Tipo de Alimentación
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setTipoDieta('superpremium')}
                      className={`py-4 px-4 rounded-full text-xs font-bold transition-all duration-300 shadow-sm ${
                        tipoDieta === 'superpremium'
                          ? 'bg-cornflower text-white'
                          : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-cornflower'
                      }`}
                    >
                      Súper Premium
                    </button>
                    <button
                      type="button"
                      onClick={() => setTipoDieta('barf')}
                      className={`py-4 px-4 rounded-full text-xs font-bold transition-all duration-300 shadow-sm ${
                        tipoDieta === 'barf'
                          ? 'bg-cornflower text-white'
                          : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-cornflower'
                      }`}
                    >
                      Natural (BARF)
                    </button>
                  </div>
                </div>

                {/* Calculated Results Block */}
                <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-3xl border border-blue-100 dark:border-gray-700 mt-8 shadow-inner">
                  <div className="grid grid-cols-2 gap-6 text-center divide-x divide-blue-200 dark:divide-gray-600">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400 font-bold block mb-2">
                        Total Diaria
                      </span>
                      <span className="text-3xl font-header font-extrabold text-gray-800 dark:text-gray-100">
                        {res.gramosDiarios}<span className="text-lg font-sans ml-1 text-gray-400">g</span>
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400 font-bold block mb-2">
                        Por Toma ({res.tomas}x)
                      </span>
                      <span className="text-3xl font-header font-extrabold text-gray-800 dark:text-gray-100">
                        {res.gramosPorToma}<span className="text-lg font-sans ml-1 text-gray-400">g</span>
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
