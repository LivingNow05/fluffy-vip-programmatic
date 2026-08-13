import React, { useState } from 'react';
import { X, MessageCircle, Home, Building2, Baby, Users, ArrowRight, ShieldCheck, Star, Zap, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  city?: string;
  manto?: string;
}

export const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose, city, manto }) => {
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState({
    housing: '',
    kids: '',
    experience: '',
    gender: ''
  });

  if (!isOpen) return null;

  const phoneNumber = "573164822477";

  const handleAnswer = (key: string, value: string) => {
    const finalAnswers = { ...answers, [key]: value };
    setAnswers(finalAnswers);
    
    if (step < 4) {
      setStep(prev => prev + 1);
    } else {
      // Build WhatsApp message
      const mantoText = manto ? ` variedad ${manto}` : '';
      const cityText = city ? ` con envío a ${city}` : '';
      const text = `¡Hola! Me interesa un cachorro Fluffy VIP${mantoText}${cityText}.
      
*Mi perfil:*
🏠 Vivienda: ${finalAnswers.housing === 'casa' ? 'Casa' : 'Apartamento'}
👶 Niños: ${finalAnswers.kids === 'si' ? 'Sí' : 'No'}
⭐ Experiencia: ${finalAnswers.experience}
🐾 Preferencia: ${finalAnswers.gender}

Quisiera ver fotos y conocer disponibilidad.`;
      
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
      
      // Reset after tiny delay
      setTimeout(() => {
        onClose();
        setStep(1);
        setAnswers({ housing: '', kids: '', experience: '', gender: '' });
      }, 500);
    }
  };

  const handleModalClick = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian/60 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-canvas dark:bg-carbon rounded-[2rem] w-full max-w-md overflow-hidden shadow-2xl relative border border-obsidian/10 dark:border-canvas/10"
          onClick={handleModalClick}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-cornflower to-blue-600 p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-3 mb-3 relative z-10">
              <div className="bg-white/20 p-2.5 rounded-2xl backdrop-blur-md border border-white/20">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-header font-black text-2xl text-white leading-tight">
                Asesoría VIP
              </h3>
            </div>
            <p className="text-sm text-blue-100 font-medium opacity-90 relative z-10">
              4 preguntas rápidas para que un especialista te envíe opciones exactas al instante.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 relative overflow-hidden">
            <div 
              className="bg-cornflower h-full transition-all duration-500 ease-out absolute left-0 top-0" 
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            
            {/* STEP 1: HOUSING */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Paso 1 de 4</span>
                <h4 className="font-header font-bold text-2xl text-obsidian dark:text-canvas mb-6">
                  ¿Dónde vivirá el cachorro?
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => handleAnswer('housing', 'apartamento')}
                    className="flex flex-col items-center justify-center gap-4 p-6 border-2 border-gray-100 dark:border-gray-700 rounded-3xl hover:border-cornflower hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all group"
                  >
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-full group-hover:scale-110 transition-transform group-hover:bg-white dark:group-hover:bg-gray-700 shadow-sm">
                      <Building2 className="w-8 h-8 text-gray-400 group-hover:text-cornflower transition-colors" />
                    </div>
                    <span className="font-bold text-gray-700 dark:text-gray-200 group-hover:text-cornflower">Apartamento</span>
                  </button>
                  <button 
                    onClick={() => handleAnswer('housing', 'casa')}
                    className="flex flex-col items-center justify-center gap-4 p-6 border-2 border-gray-100 dark:border-gray-700 rounded-3xl hover:border-cornflower hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all group"
                  >
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-full group-hover:scale-110 transition-transform group-hover:bg-white dark:group-hover:bg-gray-700 shadow-sm">
                      <Home className="w-8 h-8 text-gray-400 group-hover:text-cornflower transition-colors" />
                    </div>
                    <span className="font-bold text-gray-700 dark:text-gray-200 group-hover:text-cornflower">Casa / Finca</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: KIDS */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Paso 2 de 4</span>
                <h4 className="font-header font-bold text-2xl text-obsidian dark:text-canvas mb-6">
                  ¿Hay niños pequeños en casa?
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => handleAnswer('kids', 'si')}
                    className="flex flex-col items-center justify-center gap-4 p-6 border-2 border-gray-100 dark:border-gray-700 rounded-3xl hover:border-cornflower hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all group"
                  >
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-full group-hover:scale-110 transition-transform group-hover:bg-white dark:group-hover:bg-gray-700 shadow-sm">
                      <Baby className="w-8 h-8 text-gray-400 group-hover:text-cornflower transition-colors" />
                    </div>
                    <span className="font-bold text-gray-700 dark:text-gray-200 group-hover:text-cornflower">Sí, hay niños</span>
                  </button>
                  <button 
                    onClick={() => handleAnswer('kids', 'no')}
                    className="flex flex-col items-center justify-center gap-4 p-6 border-2 border-gray-100 dark:border-gray-700 rounded-3xl hover:border-cornflower hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all group"
                  >
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-full group-hover:scale-110 transition-transform group-hover:bg-white dark:group-hover:bg-gray-700 shadow-sm">
                      <Users className="w-8 h-8 text-gray-400 group-hover:text-cornflower transition-colors" />
                    </div>
                    <span className="font-bold text-gray-700 dark:text-gray-200 group-hover:text-cornflower">Solo adultos</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: EXPERIENCE */}
            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Paso 3 de 4</span>
                <h4 className="font-header font-bold text-2xl text-obsidian dark:text-canvas mb-6">
                  Tu experiencia con perros
                </h4>
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => handleAnswer('experience', 'principiante')}
                    className="flex items-center justify-between p-5 border-2 border-gray-100 dark:border-gray-700 rounded-2xl hover:border-cornflower hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all group text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-gray-50 dark:bg-gray-800 p-2.5 rounded-xl group-hover:bg-white dark:group-hover:bg-gray-700"><Sparkles className="w-5 h-5 text-gray-400 group-hover:text-cornflower" /></div>
                      <div>
                        <span className="block font-bold text-obsidian dark:text-canvas group-hover:text-cornflower">Será mi primer perro</span>
                        <span className="text-xs text-gray-500">Principiante</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-cornflower transition-transform group-hover:translate-x-1" />
                  </button>
                  
                  <button 
                    onClick={() => handleAnswer('experience', 'intermedio')}
                    className="flex items-center justify-between p-5 border-2 border-gray-100 dark:border-gray-700 rounded-2xl hover:border-cornflower hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all group text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-gray-50 dark:bg-gray-800 p-2.5 rounded-xl group-hover:bg-white dark:group-hover:bg-gray-700"><ShieldCheck className="w-5 h-5 text-gray-400 group-hover:text-cornflower" /></div>
                      <div>
                        <span className="block font-bold text-obsidian dark:text-canvas group-hover:text-cornflower">Ya he tenido perros</span>
                        <span className="text-xs text-gray-500">Experiencia media</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-cornflower transition-transform group-hover:translate-x-1" />
                  </button>

                  <button 
                    onClick={() => handleAnswer('experience', 'avanzado')}
                    className="flex items-center justify-between p-5 border-2 border-gray-100 dark:border-gray-700 rounded-2xl hover:border-cornflower hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all group text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-gray-50 dark:bg-gray-800 p-2.5 rounded-xl group-hover:bg-white dark:group-hover:bg-gray-700"><Star className="w-5 h-5 text-gray-400 group-hover:text-cornflower" /></div>
                      <div>
                        <span className="block font-bold text-obsidian dark:text-canvas group-hover:text-cornflower">Mucha experiencia</span>
                        <span className="text-xs text-gray-500">Avanzado</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-cornflower transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 4: GENDER */}
            {step === 4 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Paso Final</span>
                <h4 className="font-header font-bold text-2xl text-obsidian dark:text-canvas mb-6">
                  ¿Macho o Hembra?
                </h4>
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => handleAnswer('gender', 'Macho')}
                    className="flex items-center justify-between p-5 border-2 border-gray-100 dark:border-gray-700 rounded-2xl hover:border-[#25D366] hover:bg-green-50/50 dark:hover:bg-green-900/10 transition-all group text-left"
                  >
                    <span className="font-bold text-obsidian dark:text-canvas group-hover:text-[#25D366]">Macho ♂️</span>
                    <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-xl group-hover:bg-[#25D366]">
                      <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-white" />
                    </div>
                  </button>
                  
                  <button 
                    onClick={() => handleAnswer('gender', 'Hembra')}
                    className="flex items-center justify-between p-5 border-2 border-gray-100 dark:border-gray-700 rounded-2xl hover:border-[#25D366] hover:bg-green-50/50 dark:hover:bg-green-900/10 transition-all group text-left"
                  >
                    <span className="font-bold text-obsidian dark:text-canvas group-hover:text-[#25D366]">Hembra ♀️</span>
                    <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-xl group-hover:bg-[#25D366]">
                      <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-white" />
                    </div>
                  </button>

                  <button 
                    onClick={() => handleAnswer('gender', 'Indiferente')}
                    className="flex items-center justify-between p-5 border-2 border-gray-100 dark:border-gray-700 rounded-2xl hover:border-[#25D366] hover:bg-green-50/50 dark:hover:bg-green-900/10 transition-all group text-left"
                  >
                    <span className="font-bold text-obsidian dark:text-canvas group-hover:text-[#25D366]">Me es indiferente 🐾</span>
                    <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-xl group-hover:bg-[#25D366]">
                      <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-white" />
                    </div>
                  </button>
                </div>
              </motion.div>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
