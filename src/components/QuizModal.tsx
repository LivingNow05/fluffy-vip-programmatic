import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight } from 'lucide-react';
import { MANTOS_FLUFFY } from '../data/mantos';
import { FluffyManto } from '../types/fluffy';
import { motion, AnimatePresence } from 'framer-motion';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectManto: (manto: FluffyManto) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose, onSelectManto }) => {
  const [step, setStep] = useState<number>(1);
  const [vivienda, setVivienda] = useState<string>('apartamento');
  const [colorPref, setColorPref] = useState<string>('isabella');

  if (!isOpen) return null;

  const handleFinish = () => {
    const mantoRecomendado = MANTOS_FLUFFY.find(m => m.id === colorPref) || MANTOS_FLUFFY[0];
    onSelectManto(mantoRecomendado);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-3xl p-8 relative shadow-2xl border border-gray-100 dark:border-gray-700"
        >
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors cursor-pointer bg-gray-50 dark:bg-gray-700 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cornflower/10 text-cornflower rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Asistente de Selección</span>
            </div>
            <h3 className="font-header text-3xl font-extrabold text-gray-800 dark:text-gray-100">
              Encuentra tu Fluffy
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-[1.6]">
              Responde 2 preguntas rápidas para sugerirte la variedad perfecta.
            </p>
          </div>

          {/* Step 1: Tipo de Vivienda */}
          {step === 1 && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider">
                1. ¿En qué tipo de hogar vivirá?
              </label>
              <div className="space-y-3">
                {[
                  { id: 'apartamento', title: 'Apartamento Urbano', desc: 'Adaptación rápida a espacios interiores y paseos diarios cortos.' },
                  { id: 'casa', title: 'Casa con Jardín / Patio', desc: 'Espacio de entretenimiento al aire libre y convivencia familiar.' }
                ].map((op) => (
                  <div
                    key={op.id}
                    onClick={() => setVivienda(op.id)}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                      vivienda === op.id
                        ? 'bg-blue-50 dark:bg-gray-700 border-cornflower text-cornflower dark:text-white'
                        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-cornflower/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-gray-800 dark:text-gray-100">{op.title}</span>
                      {vivienda === op.id && <Check className="w-5 h-5 text-cornflower" />}
                    </div>
                    <p className={`text-xs leading-[1.5] ${vivienda === op.id ? 'text-gray-700 dark:text-gray-300' : 'text-gray-500'}`}>{op.desc}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setStep(2)}
                className="btn-primary w-full py-4 text-sm"
              >
                <span>Siguiente Paso</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {/* Step 2: Tono de Manto */}
          {step === 2 && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider">
                2. ¿Qué tonalidad te fascina más?
              </label>

              <div className="grid grid-cols-2 gap-3">
                {MANTOS_FLUFFY.map((m) => (
                  <div
                    key={m.id}
                    onClick={() => setColorPref(m.id)}
                    className={`p-3 rounded-2xl border cursor-pointer transition-all duration-300 flex items-center gap-3 ${
                      colorPref === m.id
                        ? 'bg-blue-50 dark:bg-gray-700 border-cornflower text-gray-800 dark:text-white'
                        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-cornflower/50'
                    }`}
                  >
                    <img src={m.imagen} alt={m.nombre} className="w-12 h-12 rounded-xl object-cover" />
                    <div>
                      <span className="text-xs font-bold block leading-tight text-gray-800 dark:text-gray-100">{m.nombre}</span>
                      <span className={`text-[10px] font-mono mt-1 block ${colorPref === m.id ? 'text-cornflower' : 'text-gray-500'}`}>${m.precioEstimadoUSD}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => setStep(1)}
                  className="btn-ghost w-1/3 py-4 text-sm"
                >
                  Atrás
                </button>
                <button
                  onClick={handleFinish}
                  className="btn-primary w-2/3 py-4 text-sm"
                >
                  <span>Ver Recomendación</span>
                  <Check className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
