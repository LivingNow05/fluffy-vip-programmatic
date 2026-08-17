import React from 'react';
import { ShieldCheck, CheckCircle2, Plane, HeartPulse, Stethoscope, FileText, Gift, Info, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async'; 

interface Props {
  onOpenQuiz: () => void;
}

export const EntregasPage: React.FC<Props> = ({ onOpenQuiz }) => {
  return (
    <>
      <Helmet>
        <title>Entregas y Logística VIP | Dinastía Fluffy VIP</title>
        <meta name="description" content="Conoce nuestro proceso de envíos internacionales y nacionales. Entregas seguras en cabina, garantías genéticas y de salud para tu cachorro Bulldog Fluffy." />
        <link rel="canonical" href="https://frenchbulldogfluffy.com/entregas" />
      </Helmet>

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-8 mb-20 animate-fade-in">
        
        {/* HERO SECTION */}
        <section className="relative rounded-3xl overflow-hidden shadow-2xl mb-16 border border-gray-100 dark:border-gray-800 bg-obsidian text-canvas group">
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/70 to-transparent z-10" />
          
          <img 
            src="/images/fluffy-showcase-hero.jpg" 
            alt="Logística y Entregas de Bulldog Fluffy" 
            className="absolute inset-0 w-full h-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105"
          />

          <div className="relative z-20 p-10 sm:p-16 md:p-20 max-w-3xl">
            <span className="inline-block bg-cornflower/20 text-cornflower border border-cornflower/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
              Logística de Excelencia
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-header font-black leading-tight mb-6 tracking-tight text-balance">
              Entregas Seguras ✈️
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed max-w-xl mb-8">
              Transparencia en procesos, logística VIP en cabina y la tranquilidad de familias que ya tienen a su cachorro Bulldog Francés Fluffy.
            </p>
            <button
              onClick={onOpenQuiz}
              className="btn-primary bg-[#25D366] hover:bg-[#20b858] text-white border-transparent py-4 px-8 shadow-lg shadow-green-500/20"
            >
              <Phone className="w-5 h-5 mr-2" />
              Consulta tu Destino
            </button>
          </div>
          {/* Background pattern (removed as we have image now) */}
        </section>

        {/* LOGISTICS & INFO CARDS */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-cornflower font-bold text-xs tracking-widest uppercase mb-3 block">Todo lo que debes saber</span>
            <h2 className="font-header font-black text-4xl sm:text-5xl text-obsidian dark:text-canvas">
              Información Importante
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1: Logística */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-xl shadow-gray-200/20 dark:shadow-none hover:-translate-y-1 transition-transform relative overflow-hidden group">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                <Plane className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-2xl mb-3 text-obsidian dark:text-canvas">Logística VIP ✈️</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 font-medium">
                Envíos directos y seguros al aeropuerto principal de tu ciudad con personal capacitado.
              </p>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300 font-medium">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>En cabina con Travel Nanny.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>Carga climatizada (según aerolínea).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>Documentación aduanera y sanitaria.</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Moneda */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-xl shadow-gray-200/20 dark:shadow-none hover:-translate-y-1 transition-transform relative overflow-hidden group">
              <div className="w-14 h-14 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl font-bold">$</span>
              </div>
              <h3 className="font-bold text-2xl mb-3 text-obsidian dark:text-canvas">Moneda USD 💵</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 font-medium">
                Manejamos precios transparentes en dólares, variando según la genética y excentricidad del manto.
              </p>
              <div className="bg-green-50 dark:bg-green-900/10 px-5 py-4 rounded-2xl border border-green-100 dark:border-green-800/30">
                <span className="block text-xs text-green-800 dark:text-green-400 font-bold uppercase tracking-wider mb-2">Transparencia:</span>
                <p className="text-sm text-green-700 dark:text-green-300 font-medium leading-snug">
                  No hay costos ocultos. Todos nuestros ejemplares incluyen su kit de inicio y documentos de pureza.
                </p>
              </div>
            </div>

            {/* Card 3: Salud */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-xl shadow-gray-200/20 dark:shadow-none hover:-translate-y-1 transition-transform relative overflow-hidden group">
              <div className="w-14 h-14 bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400 rounded-2xl flex items-center justify-center mb-6">
                <HeartPulse className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-2xl mb-3 text-obsidian dark:text-canvas">Garantía Real 🧬</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 font-medium">
                Tu tranquilidad es nuestra prioridad. Criamos de forma ética bajo estrictos estándares veterinarios.
              </p>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300 font-medium">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
                  <span>Padres Testeados Genéticamente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
                  <span>Garantía viral de 15 días.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
                  <span>Garantía genética de 1 año.</span>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* INCLUDED IN DELIVERY SECTION */}
        <section className="bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-gray-100 dark:border-gray-800 text-center mb-20 shadow-inner">
          <h2 className="font-header font-black text-3xl sm:text-4xl text-obsidian dark:text-canvas mb-4">
            Entregamos cachorros de alta pureza 🧬
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 max-w-2xl mx-auto font-medium">
            Bienvenido al universo Dinastía Fluffy. Criamos bajo estándares de excelencia internacional para que tu mascota sea perfecta.
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-10 border border-gray-100 dark:border-gray-700 shadow-xl max-w-4xl mx-auto">
            <h3 className="font-bold text-xl sm:text-2xl text-cornflower mb-8 flex items-center justify-center gap-3">
              <Gift className="w-6 h-6" /> 
              TODOS NUESTROS CACHORROS SE ENTREGAN CON:
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 text-left">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-900/50">
                <ShieldCheck className="w-6 h-6 text-green-500 shrink-0" />
                <span className="font-bold text-obsidian dark:text-gray-200">Certificado de pureza genotípica</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-900/50">
                <Stethoscope className="w-6 h-6 text-green-500 shrink-0" />
                <span className="font-bold text-obsidian dark:text-gray-200">Ciclo de vacunas al día</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-900/50">
                <FileText className="w-6 h-6 text-green-500 shrink-0" />
                <span className="font-bold text-obsidian dark:text-gray-200">Contrato de garantía y salud</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-900/50">
                <Info className="w-6 h-6 text-green-500 shrink-0" />
                <span className="font-bold text-obsidian dark:text-gray-200">Guía de cuidados especializada</span>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-cornflower font-bold text-xs tracking-widest uppercase mb-3 block">Familias Felices</span>
            <h2 className="font-header font-black text-4xl sm:text-5xl text-obsidian dark:text-canvas">
              Testimonios Reales
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-xl shadow-gray-200/20 dark:shadow-none hover:-translate-y-1 transition-transform relative overflow-hidden group flex flex-col mx-auto w-full max-w-sm">
              <div className="flex items-center gap-4 mb-6">
                <img src="/t-01.webp" alt="Laura M. - Cachorro Fluffy" className="w-16 h-16 rounded-full object-cover border-2 border-cornflower/20" />
                <div>
                  <h4 className="font-bold text-lg text-obsidian dark:text-canvas">Laura M.</h4>
                  <div className="flex gap-1 text-yellow-400">
                    ★ ★ ★ ★ ★
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic font-medium leading-relaxed flex-grow">
                "¡El cachorro llegó sano y con todos sus papeles. El proceso fue clarísimo y muy rápido!"
              </p>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};
