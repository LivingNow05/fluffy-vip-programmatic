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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/80 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full max-w-lg bg-canvas dark:bg-carbon border border-obsidian/10 dark:border-canvas/10 rounded-card-lg p-8 relative shadow-none"
        >
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-obsidian/50 hover:text-obsidian dark:text-canvas/50 dark:hover:text-canvas transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lavender-mist dark:bg-carbon border border-obsidian/10 dark:border-canvas/10 rounded-pill text-[10px] font-bold text-obsidian dark:text-lavender-mist uppercase tracking-widest mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Asistente de Selección VIP</span>
            </div>
            <h3 className="font-serif text-3xl font-extrabold text-obsidian dark:text-canvas">
              Encuentra tu Fluffy Ideal
            </h3>
            <p className="text-sm text-obsidian/70 dark:text-canvas/70 mt-2 leading-[1.6]">
              Responde 2 preguntas rápidas para sugerirte la variedad y manto perfecto.
            </p>
          </div>

          {/* Step 1: Tipo de Vivienda */}
          {step === 1 && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <label className="block text-sm font-bold text-obsidian dark:text-canvas uppercase tracking-widest">
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
                    className={`p-5 rounded-card border cursor-pointer transition-all duration-300 ${
                      vivienda === op.id
                        ? 'bg-obsidian text-canvas border-obsidian dark:bg-canvas dark:text-obsidian dark:border-canvas'
                        : 'bg-transparent border-obsidian/20 text-obsidian dark:border-canvas/20 dark:text-canvas'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold">{op.title}</span>
                      {vivienda === op.id && <Check className="w-5 h-5 text-electric-yellow dark:text-ember-orange" />}
                    </div>
                    <p className={`text-xs leading-[1.5] ${vivienda === op.id ? 'opacity-80' : 'opacity-60'}`}>{op.desc}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setStep(2)}
                className="pill-button-primary w-full py-5 text-sm"
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
              <label className="block text-sm font-bold text-obsidian dark:text-canvas uppercase tracking-widest">
                2. ¿Qué tonalidad te fascina más?
              </label>

              <div className="grid grid-cols-2 gap-3">
                {MANTOS_FLUFFY.map((m) => (
                  <div
                    key={m.id}
                    onClick={() => setColorPref(m.id)}
                    className={`p-3 rounded-card border cursor-pointer transition-all duration-300 flex items-center gap-3 ${
                      colorPref === m.id
                        ? 'bg-obsidian border-obsidian text-canvas dark:bg-canvas dark:border-canvas dark:text-obsidian'
                        : 'bg-transparent border-obsidian/20 text-obsidian dark:border-canvas/20 dark:text-canvas'
                    }`}
                  >
                    <img src={m.imagen} alt={m.nombre} className="w-12 h-12 rounded-xl object-cover mix-blend-luminosity hover:mix-blend-normal transition-all" />
                    <div>
                      <span className="text-xs font-bold block leading-tight">{m.nombre}</span>
                      <span className={`text-[10px] font-mono mt-1 block ${colorPref === m.id ? 'text-electric-yellow dark:text-ember-orange' : 'opacity-60'}`}>${m.precioEstimadoUSD}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => setStep(1)}
                  className="pill-button-ghost w-1/3 py-5 text-sm"
                >
                  Atrás
                </button>
                <button
                  onClick={handleFinish}
                  className="pill-button-primary w-2/3 py-5 text-sm"
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
