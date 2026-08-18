import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Home, Building2, Baby, Users, ArrowRight, ShieldCheck, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  city?: string;
  manto?: string;
  country?: string;
}

export const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose, city, manto, country }) => {
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [answers, setAnswers] = useState({
    cityPref: '',
    mantoPref: '',
    housing: '',
    kids: '',
    experience: '',
    gender: ''
  });
  const [cityInput, setCityInput] = useState('');

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStepIndex(0);
      setCityInput(city || '');
      setAnswers({
        cityPref: city || '',
        mantoPref: manto || '',
        housing: '',
        kids: '',
        experience: '',
        gender: ''
      });
    }
  }, [isOpen, city, manto]);

  if (!isOpen) return null;

  const phoneNumber = "573128375043";

  const stepsConfig = ['city'];
  if (!manto) {
    stepsConfig.push('manto');
  }
  stepsConfig.push('housing', 'kids', 'experience', 'gender');

  const currentStepId = stepsConfig[stepIndex];
  const totalSteps = stepsConfig.length;

  const handleAnswer = (key: string, value: string) => {
    const finalAnswers = { ...answers, [key]: value };
    setAnswers(finalAnswers);
    
    if (stepIndex < totalSteps - 1) {
      setStepIndex(prev => prev + 1);
    } else {
      // Build WhatsApp message
      const mantoText = finalAnswers.mantoPref ? ` variedad ${finalAnswers.mantoPref}` : '';
      const cityText = finalAnswers.cityPref ? ` con envío a ${finalAnswers.cityPref}` : '';
      const text = `¡Hola! Me interesa un cachorro Fluffy VIP${mantoText}${cityText}.
      
*Mi perfil:*
🏠 Vivienda: ${finalAnswers.housing === 'casa' ? 'Casa' : 'Apartamento'}
👶 Niños: ${finalAnswers.kids === 'si' ? 'Sí' : 'No'}
⭐ Experiencia: ${finalAnswers.experience}
🐾 Preferencia: ${finalAnswers.gender}

Quisiera ver fotos y conocer disponibilidad.`;
      
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
      
      setTimeout(() => {
        onClose();
      }, 500);
    }
  };

  const handleCitySubmit = () => {
    if (cityInput.trim()) {
      handleAnswer('cityPref', cityInput.trim());
    } else {
      handleAnswer('cityPref', 'No indicada');
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
          className="bg-canvas dark:bg-obsidian rounded-[2rem] w-full max-w-md overflow-hidden shadow-2xl relative border border-obsidian/10 dark:border-canvas/10 flex flex-col max-h-[90vh]"
          onClick={handleModalClick}
        >
          {/* Header */}
          <div className="bg-cornflower p-6 relative overflow-hidden shrink-0">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-3 mb-2 relative z-10">
              <div className="bg-white/20 p-2.5 rounded-2xl backdrop-blur-md border border-white/20">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-header font-black text-2xl text-white leading-tight">
                Asesoría VIP
              </h3>
            </div>
            <p className="text-sm text-blue-100 font-medium opacity-90 relative z-10">
              Unos pasos para enviarte opciones exactas.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 relative overflow-hidden shrink-0">
            <div 
              className="bg-cornflower h-full transition-all duration-500 ease-out absolute left-0 top-0" 
              style={{ width: `${((stepIndex + 1) / totalSteps) * 100}%` }}
            ></div>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 overflow-y-auto">

            {/* STEP: CITY & SHIPPING INFO */}
            {currentStepId === 'city' && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} key="city">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Paso {stepIndex + 1} de {totalSteps}</span>
                <h4 className="font-header font-bold text-2xl text-obsidian dark:text-canvas mb-2">
                  ¿A dónde viajaría el cachorro?
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">Para conectarte con el asesor de logística adecuado.</p>
                
                <div className="text-[13px] text-center text-gray-500 dark:text-gray-400 mb-6 leading-snug">
                  Hacemos entregas personales a nivel nacional e internacional.<br/>
                  <div className="bg-blue-50/50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg mt-3 border border-indigo-500/20 inline-block text-left text-xs">
                    {country === "Colombia" ? (
                      <>🚚 <b>Nota de logística:</b> El precio de envío VIP aproximado oscila entre <b>$60.000 COP y $500.000 COP</b> dependiendo de la ciudad de destino.</>
                    ) : (
                      <>✈️ <b>Nota de logística:</b> El envío internacional VIP (traslado en cabina + trámites aduaneros) tiene un valor aproximado de <b>$1,000 USD</b>.</>
                    )}
                  </div>
                </div>

                <input 
                  type="text" 
                  placeholder="Ej: Bogotá, Miami, Madrid..." 
                  value={cityInput}
                  onChange={(e) => setCityInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleCitySubmit(); }}
                  className="w-full border-2 border-gray-200 dark:border-gray-700 rounded-2xl px-5 py-3 text-obsidian dark:text-canvas bg-white dark:bg-gray-800 text-base focus:border-cornflower focus:outline-none mb-4 transition-colors"
                />
                
                <button 
                  onClick={handleCitySubmit}
                  className="w-full bg-cornflower hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-md shadow-cornflower/20"
                >
                  Siguiente
                </button>
              </motion.div>
            )}

            {/* STEP: MANTO */}
            {currentStepId === 'manto' && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} key="manto">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Paso {stepIndex + 1} de {totalSteps}</span>
                <h4 className="font-header font-bold text-2xl text-obsidian dark:text-canvas mb-4">
                  ¿Qué variedad de manto prefieres?
                </h4>
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => handleAnswer('mantoPref', 'Signature (Fawn/Black)')}
                    className="flex flex-col text-left p-4 border-2 border-gray-100 dark:border-gray-700 rounded-2xl hover:border-cornflower hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-obsidian dark:text-canvas group-hover:text-indigo-500">Signature</span>
                      <span className="text-xs font-bold text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Desde $4,500 USD</span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Colores sólidos (Fawn, Black, Pied)</span>
                  </button>

                  <button 
                    onClick={() => handleAnswer('mantoPref', 'Exotic VIP (Blue/Lilac)')}
                    className="flex flex-col text-left p-4 border-2 border-gray-100 dark:border-gray-700 rounded-2xl hover:border-cornflower hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-500/10 rounded-full blur-xl"></div>
                    <div className="flex items-center justify-between mb-1 relative z-10">
                      <span className="font-bold text-obsidian dark:text-canvas group-hover:text-indigo-500">Exotic VIP <span className="text-[10px] bg-cornflower text-white px-1.5 py-0.5 rounded ml-1 uppercase">Popular</span></span>
                      <span className="text-xs font-bold text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Desde $6,000 USD</span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 relative z-10">Colores exóticos con dilución (Blue, Lilac, Merle)</span>
                  </button>

                  <button 
                    onClick={() => handleAnswer('mantoPref', 'Ultra Rare (Isabella/Rojo)')}
                    className="flex flex-col text-left p-4 border-2 border-gray-100 dark:border-gray-700 rounded-2xl hover:border-yellow-400 hover:bg-yellow-50/50 dark:hover:bg-yellow-900/10 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-obsidian dark:text-canvas group-hover:text-yellow-600 dark:group-hover:text-yellow-400 flex items-center gap-1">
                        Ultra Rare <Star className="w-3 h-3 text-yellow-400" />
                      </span>
                      <span className="text-xs font-bold text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Desde $8,500 USD</span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Isabella, Rojo Intenso y New Shade</span>
                  </button>
                </div>
              </motion.div>
            )}
            
            {/* STEP: HOUSING */}
            {currentStepId === 'housing' && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} key="housing">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Paso {stepIndex + 1} de {totalSteps}</span>
                <h4 className="font-header font-bold text-2xl text-obsidian dark:text-canvas mb-6">
                  ¿Dónde vivirá el cachorro?
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => handleAnswer('housing', 'apartamento')}
                    className="flex flex-col items-center justify-center gap-4 p-6 border-2 border-gray-100 dark:border-gray-700 rounded-3xl hover:border-cornflower hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all group"
                  >
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-full group-hover:scale-110 transition-transform group-hover:bg-white dark:group-hover:bg-gray-700 shadow-sm">
                      <Building2 className="w-8 h-8 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                    </div>
                    <span className="font-bold text-gray-700 dark:text-gray-200 group-hover:text-indigo-500">Apartamento</span>
                  </button>
                  <button 
                    onClick={() => handleAnswer('housing', 'casa')}
                    className="flex flex-col items-center justify-center gap-4 p-6 border-2 border-gray-100 dark:border-gray-700 rounded-3xl hover:border-cornflower hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all group"
                  >
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-full group-hover:scale-110 transition-transform group-hover:bg-white dark:group-hover:bg-gray-700 shadow-sm">
                      <Home className="w-8 h-8 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                    </div>
                    <span className="font-bold text-gray-700 dark:text-gray-200 group-hover:text-indigo-500">Casa / Finca</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP: KIDS */}
            {currentStepId === 'kids' && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} key="kids">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Paso {stepIndex + 1} de {totalSteps}</span>
                <h4 className="font-header font-bold text-2xl text-obsidian dark:text-canvas mb-6">
                  ¿Hay niños pequeños en casa?
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => handleAnswer('kids', 'si')}
                    className="flex flex-col items-center justify-center gap-4 p-6 border-2 border-gray-100 dark:border-gray-700 rounded-3xl hover:border-cornflower hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all group"
                  >
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-full group-hover:scale-110 transition-transform group-hover:bg-white dark:group-hover:bg-gray-700 shadow-sm">
                      <Baby className="w-8 h-8 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                    </div>
                    <span className="font-bold text-gray-700 dark:text-gray-200 group-hover:text-indigo-500">Sí, hay niños</span>
                  </button>
                  <button 
                    onClick={() => handleAnswer('kids', 'no')}
                    className="flex flex-col items-center justify-center gap-4 p-6 border-2 border-gray-100 dark:border-gray-700 rounded-3xl hover:border-cornflower hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all group"
                  >
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-full group-hover:scale-110 transition-transform group-hover:bg-white dark:group-hover:bg-gray-700 shadow-sm">
                      <Users className="w-8 h-8 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                    </div>
                    <span className="font-bold text-gray-700 dark:text-gray-200 group-hover:text-indigo-500">Solo adultos</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP: EXPERIENCE */}
            {currentStepId === 'experience' && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} key="experience">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Paso {stepIndex + 1} de {totalSteps}</span>
                <h4 className="font-header font-bold text-2xl text-obsidian dark:text-canvas mb-6">
                  Tu experiencia con perros
                </h4>
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => handleAnswer('experience', 'principiante')}
                    className="flex items-center justify-between p-5 border-2 border-gray-100 dark:border-gray-700 rounded-2xl hover:border-cornflower hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all group text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-gray-50 dark:bg-gray-800 p-2.5 rounded-xl group-hover:bg-white dark:group-hover:bg-gray-700"><Sparkles className="w-5 h-5 text-gray-400 group-hover:text-indigo-500" /></div>
                      <div>
                        <span className="block font-bold text-obsidian dark:text-canvas group-hover:text-indigo-500">Será mi primer perro</span>
                        <span className="text-xs text-gray-500">Principiante</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-indigo-500 transition-transform group-hover:translate-x-1" />
                  </button>
                  
                  <button 
                    onClick={() => handleAnswer('experience', 'intermedio')}
                    className="flex items-center justify-between p-5 border-2 border-gray-100 dark:border-gray-700 rounded-2xl hover:border-cornflower hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all group text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-gray-50 dark:bg-gray-800 p-2.5 rounded-xl group-hover:bg-white dark:group-hover:bg-gray-700"><ShieldCheck className="w-5 h-5 text-gray-400 group-hover:text-indigo-500" /></div>
                      <div>
                        <span className="block font-bold text-obsidian dark:text-canvas group-hover:text-indigo-500">Ya he tenido perros</span>
                        <span className="text-xs text-gray-500">Experiencia media</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-indigo-500 transition-transform group-hover:translate-x-1" />
                  </button>

                  <button 
                    onClick={() => handleAnswer('experience', 'avanzado')}
                    className="flex items-center justify-between p-5 border-2 border-gray-100 dark:border-gray-700 rounded-2xl hover:border-cornflower hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all group text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-gray-50 dark:bg-gray-800 p-2.5 rounded-xl group-hover:bg-white dark:group-hover:bg-gray-700"><Star className="w-5 h-5 text-gray-400 group-hover:text-indigo-500" /></div>
                      <div>
                        <span className="block font-bold text-obsidian dark:text-canvas group-hover:text-indigo-500">Mucha experiencia</span>
                        <span className="text-xs text-gray-500">Avanzado</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-indigo-500 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP: GENDER */}
            {currentStepId === 'gender' && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} key="gender">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Paso Final</span>
                <h4 className="font-header font-bold text-2xl text-obsidian dark:text-canvas mb-6">
                  ¿Macho o Hembra?
                </h4>
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => handleAnswer('gender', 'Macho')}
                    className="flex items-center justify-between p-5 border-2 border-gray-100 dark:border-gray-700 rounded-2xl hover:border-violet-500 hover:bg-violet-50/50 dark:hover:bg-violet-900/10 transition-all group text-left"
                  >
                    <span className="font-bold text-obsidian dark:text-canvas group-hover:text-violet-500">Macho ♂️</span>
                    <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-xl group-hover:bg-violet-500">
                      <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-white" />
                    </div>
                  </button>
                  
                  <button 
                    onClick={() => handleAnswer('gender', 'Hembra')}
                    className="flex items-center justify-between p-5 border-2 border-gray-100 dark:border-gray-700 rounded-2xl hover:border-violet-500 hover:bg-violet-50/50 dark:hover:bg-violet-900/10 transition-all group text-left"
                  >
                    <span className="font-bold text-obsidian dark:text-canvas group-hover:text-violet-500">Hembra ♀️</span>
                    <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-xl group-hover:bg-violet-500">
                      <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-white" />
                    </div>
                  </button>

                  <button 
                    onClick={() => handleAnswer('gender', 'Indiferente')}
                    className="flex items-center justify-between p-5 border-2 border-gray-100 dark:border-gray-700 rounded-2xl hover:border-violet-500 hover:bg-violet-50/50 dark:hover:bg-violet-900/10 transition-all group text-left"
                  >
                    <span className="font-bold text-obsidian dark:text-canvas group-hover:text-violet-500">Me es indiferente 🐾</span>
                    <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-xl group-hover:bg-violet-500">
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
