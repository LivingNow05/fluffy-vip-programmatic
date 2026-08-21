import React from 'react';
import { ShieldCheck, CheckCircle2, Sparkles, Star, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FluffyStoryRow } from '../types/fluffy';
import { AnimatedHeading } from '../components/AnimatedHeading';

interface Props {
  cities: FluffyStoryRow[];
  onOpenQuiz: (manto?: string) => void;
}

export const PricingPage: React.FC<Props> = ({ onOpenQuiz }) => {
  return (
    <>
      <Helmet>
        <title>Precios y Exclusividad | Dinastía Fluffy VIP</title>
        <meta name="description" content="Conoce los precios y opciones de inversión para tu cachorro Bulldog Francés Fluffy. Linaje genético puro, certificados y garantías VIP." />
        <link rel="canonical" href="https://frenchbulldogfluffy.com/precios" />
      </Helmet>
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-8 mb-20 animate-fade-in">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 pt-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 text-indigo-500 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
          <Sparkles className="w-4 h-4" />
          <span>Inversión Transparente</span>
        </div>
        <div className="mb-6">
          <AnimatedHeading
            text="Valor y Exclusividad Garantizada"
            as="h1"
            className="text-4xl sm:text-5xl lg:text-6xl font-black font-header leading-[1.1] text-obsidian dark:text-canvas"
            accentWords={['Garantizada', 'Exclusividad']}
          />
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-8">
          Adquirir un Fluffy no es solo comprar un perro, es integrar a un miembro VIP a tu familia. Conoce nuestras categorías genéticas.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        
        {/* Tier 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4">
            <Star className="w-6 h-6 text-gray-300 dark:text-gray-600" />
          </div>
          <h3 className="text-2xl font-bold font-header text-obsidian dark:text-canvas mb-2">Signature</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 min-h-[40px]">Genética L4/L1 en mantos sólidos (Fawn, Black).</p>
          <div className="mb-8">
            <span className="text-sm text-gray-500 font-bold uppercase">Desde</span>
            <div className="text-4xl font-black text-obsidian dark:text-canvas my-1">$4,500 <span className="text-xl text-gray-400">USD</span></div>
          </div>
          <ul className="space-y-4 mb-8">
            {['Pedigree de pureza L4/L1', 'Garantía de salud viral (15 días)', 'Esquema de vacunas completo', 'Chip de identificación'].map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{f}</span>
              </li>
            ))}
          </ul>
          <button onClick={() => onOpenQuiz("Signature (Fawn/Black)")} className="w-full py-4 rounded-2xl bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold hover:bg-cornflower hover:text-white transition-colors">
            Consultar Disponibilidad
          </button>
        </motion.div>

        {/* Tier 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-obsidian dark:bg-gray-900 rounded-3xl p-8 border border-obsidian shadow-2xl relative overflow-hidden transform md:-translate-y-4"
        >
          <div className="absolute top-0 right-0 p-4">
            <Award className="w-6 h-6 text-indigo-500" />
          </div>
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl"></div>
          
          <div className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-500 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">Más Solicitado</div>
          <h3 className="text-2xl font-bold font-header text-white mb-2">Exotic VIP</h3>
          <p className="text-sm text-gray-400 mb-6 min-h-[40px]">Colores exóticos con dilución (Blue, Lilac, Merle).</p>
          <div className="mb-8">
            <span className="text-sm text-gray-500 font-bold uppercase">Desde</span>
            <div className="text-4xl font-black text-white my-1">$6,000 <span className="text-xl text-gray-400">USD</span></div>
          </div>
          <ul className="space-y-4 mb-8">
            {['Todo lo del plan Signature', 'Exámenes de ADN estructural', 'Garantía congénita extendida (1 año)', 'Traslado aéreo nacional VIP (Cabina)'].map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-gray-300 font-medium">{f}</span>
              </li>
            ))}
          </ul>
          <button onClick={() => onOpenQuiz("Exotic VIP (Blue/Lilac)")} className="w-full py-4 rounded-2xl bg-cornflower text-white font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-cornflower/30">
            Consultar Disponibilidad
          </button>
        </motion.div>

        {/* Tier 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4">
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>
          <h3 className="text-2xl font-bold font-header text-obsidian dark:text-canvas mb-2">Ultra Rare</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 min-h-[40px]">Isabella, Rojo Intenso y combinaciones únicas.</p>
          <div className="mb-8">
            <span className="text-sm text-gray-500 font-bold uppercase">Desde</span>
            <div className="text-4xl font-black text-obsidian dark:text-canvas my-1">$8,500 <span className="text-xl text-gray-400">USD</span></div>
          </div>
          <ul className="space-y-4 mb-8">
            {['Todo lo del plan Exotic VIP', 'Selección prioritaria de camada', 'Kit de bienvenida Premium', 'Trámite de exportación internacional'].map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{f}</span>
              </li>
            ))}
          </ul>
          <button onClick={() => onOpenQuiz("Ultra Rare (Isabella/Rojo)")} className="w-full py-4 rounded-2xl bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold hover:bg-cornflower hover:text-white transition-colors">
            Consultar Disponibilidad
          </button>
        </motion.div>

      </div>
      
      {/* Footer Trust Banner */}
      <div className="bg-blue-50/50 dark:bg-gray-800/50 border border-indigo-500/20 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <ShieldCheck className="w-12 h-12 text-indigo-500" />
          <div>
            <h4 className="font-bold text-obsidian dark:text-canvas text-lg">Pagos Seguros y Flexibles</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Aceptamos transferencias internacionales, Zelle y tarjetas de crédito.</p>
          </div>
        </div>
        <button onClick={() => onOpenQuiz()} className="px-8 py-3 rounded-full border-2 border-obsidian dark:border-gray-600 text-obsidian dark:text-canvas font-bold hover:bg-obsidian hover:text-white dark:hover:bg-gray-700 transition-colors shrink-0">
          Hablar con Asesor
        </button>
      </div>

    </main>
    </>
  );
};
