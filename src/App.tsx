import React, { useState, useEffect } from 'react';
import { parseFluffyCSV } from './utils/csvParser';
import { FluffyStoryRow, FluffyManto } from './types/fluffy';
import { Header } from './components/Header';
import { HorizontalMantoScroll } from './components/HorizontalMantoScroll';
import { CalculadoraComida } from './components/CalculadoraComida';
import { CalculadoraEdad } from './components/CalculadoraEdad';
import { QuizModal } from './components/QuizModal';
import { ShippingAccordion } from './components/ShippingAccordion';
import { EeatSection } from './components/EeatSection';
import { GeoHubGrid } from './components/GeoHubGrid';
import { Footer } from './components/Footer';
import { 
  ShieldCheck, Plane, DollarSign, Sparkles, Phone, ArrowRight, Dna, CheckCircle2, X,
  FileText, Truck, HeartHandshake, Sun, Home, AlertTriangle, Shield, Syringe, Stethoscope, Lock
} from 'lucide-react';
import { motion } from 'framer-motion';

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [cities, setCities] = useState<FluffyStoryRow[]>([]);
  const [selectedCity, setSelectedCity] = useState<FluffyStoryRow | null>(null);
  const [quizOpen, setQuizOpen] = useState<boolean>(false);
  const [selectedMantoModal, setSelectedMantoModal] = useState<FluffyManto | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    parseFluffyCSV().then((data) => {
      setCities(data);
      if (data.length > 0) {
        setSelectedCity(data[0]);
      }
    });
  }, []);

  const handleSelectCityBySlug = (slug: string) => {
    const found = cities.find(c => c.slug === slug);
    if (found) {
      setSelectedCity(found);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const cityName = selectedCity ? selectedCity.tituloH1.split('Fluffy')[1]?.trim() || selectedCity.pais : 'VIP';
  const whatsappText = `Hola, quisiera información VIP sobre los cachorros Fluffy en ${cityName}`;

  return (
    <div className="min-h-screen bg-canvas dark:bg-obsidian text-obsidian dark:text-canvas transition-colors duration-300 font-sans">
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        cities={cities}
        selectedCity={selectedCity}
        onSelectCityBySlug={handleSelectCityBySlug}
        onOpenQuiz={() => setQuizOpen(true)}
      />

      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 mt-8 mb-20">
        
        {/* Breadcrumbs */}
        <div className="py-3 text-sm font-medium border-t border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 mb-4 flex gap-2">
          <span className="hover:text-cornflower cursor-pointer transition-colors">Inicio</span>
          <span>/</span>
          <span className="hover:text-cornflower cursor-pointer transition-colors">{selectedCity?.pais || 'País'}</span>
          <span>/</span>
          <span className="text-cornflower font-bold">Bulldog Francés Fluffy</span>
        </div>

        {/* HERO SECTION - EDITORIAL STYLE */}
        <article className="mt-8 animate-fade-in duration-700 mb-16">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-16">
            
            {/* Left Column: Typography & Content */}
            <div className="flex-1 w-full flex flex-col justify-center">
              <div className="mb-6">
                <span className="bg-[#FFB800] text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5 inline-block shadow-sm">
                  Disponible en {cityName}
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-black font-header mb-5 leading-[1.1] tracking-tight">
                  {selectedCity?.tituloH1 || 'Cachorros Bulldog Francés Fluffy'}
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light leading-relaxed max-w-2xl">
                  {selectedCity?.metaDescripcion || 'Criadero especializado en ejemplares de Bulldog Francés Fluffy con pedigree.'}
                </p>
              </div>

              {/* Review / Trust Badge */}
              <div className="flex items-center gap-6 mt-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center text-cornflower">
                    <Sparkles className="w-8 h-8" fill="currentColor" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 font-bold text-2xl">
                      <span>4.9</span>
                      <span className="text-gray-400 font-medium text-base">/ 5.0</span>
                    </div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                      Familias Satisfechas
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Pills */}
              <div className="flex gap-3 flex-wrap mt-8">
                <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-5 py-2.5">
                  <Dna className="w-4 h-4 text-cornflower" />
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-200">Pureza 100%</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-5 py-2.5">
                  <HeartHandshake className="w-4 h-4 text-cornflower" />
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-200">Ideal para Niños</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-5 py-2.5">
                  <ShieldCheck className="w-4 h-4 text-cornflower" />
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-200">Garantía Escrita</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual */}
            <div className="w-full md:w-5/12 flex-shrink-0 relative mt-4 md:mt-0">
              <div className="relative aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group">
                <img 
                  src="/images/fluffy-showcase-hero.jpg" 
                  alt="Bulldog Fluffy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700 hidden md:block z-10">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 text-[#25D366] p-3 rounded-full">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase">Criador</p>
                    <p className="text-base font-bold">Verificado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TAXONOMY / DATA - Bento Grid */}
          <div className="mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <FileText className="w-8 h-8 text-gray-300 dark:text-gray-600 mb-3" />
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Registro</p>
              <p className="text-lg font-bold mt-1">Pedigree</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <DollarSign className="w-8 h-8 text-gray-300 dark:text-gray-600 mb-3" />
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Moneda</p>
              <p className="text-lg font-bold mt-1">Local / USD</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <Plane className="w-8 h-8 text-gray-300 dark:text-gray-600 mb-3" />
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Envío a {cityName}</p>
              <p className="text-lg font-bold mt-1">Aéreo / VIP</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <HeartHandshake className="w-8 h-8 text-gray-300 dark:text-gray-600 mb-3" />
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Entrega</p>
              <p className="text-lg font-bold mt-1">Personal</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow col-span-2 sm:col-span-1 md:col-span-1">
              <Shield className="w-8 h-8 text-gray-300 dark:text-gray-600 mb-3" />
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Garantía</p>
              <p className="text-lg font-bold mt-1">Genética L4</p>
            </div>
          </div>
        </article>

        <hr className="border-gray-200 dark:border-gray-800 my-12" />

        {/* 2-COLUMN MAIN CONTENT */}
        <div className="grid md:grid-cols-[2fr_1fr] gap-10">
          
          {/* LEFT COLUMN */}
          <div>
            <h2 className="font-header font-bold text-3xl mb-6">
              Encuentra el mejor Fluffy VIP en {cityName}
            </h2>
            <div className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg flex flex-col gap-6">
              <p>
                Buscar un cachorro <strong>Bulldog Francés Fluffy</strong> es una decisión importante que requiere considerar el bienestar, la genética y la garantía de salud. Hemos preparado una logística exclusiva para que recibas a tu nuevo miembro de la familia en {cityName} cumpliendo con los estándares más altos.
              </p>

              {/* HISTORIA LOCAL (Dinámica) */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl p-6 mt-4 playful-card">
                <div className="inline-block px-4 py-1.5 bg-cornflower/10 text-cornflower rounded-full text-xs font-bold uppercase tracking-widest mb-3">
                  Historia Local
                </div>
                <p className="text-base font-medium text-gray-600 dark:text-gray-300 italic">
                  "{selectedCity?.historiaLocal}"
                </p>
              </div>

              {/* ADAPTABILIDAD */}
              <div className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-3xl p-6 mt-4">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="text-4xl bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-sm"><Sun className="w-8 h-8 text-yellow-500" /></div>
                  <div>
                    <h3 className="font-header font-bold text-2xl mb-2">Clima y Adaptabilidad</h3>
                    <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                      El Bulldog Francés Fluffy se adapta perfectamente a la vida en interiores y al clima de {cityName}. Su pelaje largo (Gen L4) requiere cepillado regular, pero los mantiene cómodos. Es crucial mantenerlos frescos en días calurosos.
                    </p>
                  </div>
                </div>
              </div>

              {/* ESTILO DE VIDA */}
              <div className="mt-4 flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex-1">
                  <h3 className="font-header font-bold text-2xl mb-4">Estilo de Vida y Espacios</h3>
                  <p className="text-base text-gray-600 dark:text-gray-400">
                    Son perros de compañía por excelencia. No necesitan grandes patios ni ejercicio extremo. Con paseos cortos diarios y mucho amor dentro de casa, tu Fluffy será inmensamente feliz.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 min-w-[200px] text-center shadow-sm">
                  <div className="flex justify-center mb-2"><Home className="w-8 h-8 text-cornflower" /></div>
                  <span className="block font-bold">Apto para Apartamento</span>
                </div>
              </div>

              {/* GUIA DE COMPRA */}
              <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-6 mt-8">
                <h3 className="font-header font-bold text-2xl mb-4">Guía de Compra Segura</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Exige Siempre:</h4>
                    <ul className="list-none space-y-2 text-base text-gray-600 dark:text-gray-400">
                      <li className="flex gap-2 items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0" />
                        <span>Pruebas de ADN (Gen L4/L1)</span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0" />
                        <span>Pedigree Internacional</span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0" />
                        <span>Contrato con Garantía Congénita</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border border-red-100 dark:border-red-900/30">
                    <div className="flex gap-2 text-red-500 font-bold mb-2 items-center">
                      <AlertTriangle className="w-5 h-5" />
                      <span>Evita Estafas</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Desconfía de precios excesivamente bajos o criadores que no muestran a los padres ni ofrecen pruebas genéticas.
                    </p>
                  </div>
                </div>
              </div>

              {/* HEALTH PANEL */}
              <div className="mt-8">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <span className="text-cornflower font-bold text-sm tracking-widest uppercase mb-1 block">Sanidad Garantizada</span>
                    <h3 className="font-header font-bold text-2xl">Panel de Salud y Vacunas</h3>
                  </div>
                  <div className="hidden sm:block">
                    <span className="bg-green-100 dark:bg-green-900/30 text-[#25D366] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Verificado</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 hover:shadow-lg transition-all group">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl group-hover:scale-110 transition-transform"><Syringe className="text-cornflower" /></div>
                      <div>
                        <h4 className="font-bold text-sm">Vacunación</h4>
                        <p className="text-xs text-gray-400">Esquema Completo</p>
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 text-[#25D366] text-xs font-bold px-3 py-1 rounded-full inline-block">✓ AL DÍA</div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 hover:shadow-lg transition-all group">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl group-hover:scale-110 transition-transform"><Stethoscope className="text-cornflower" /></div>
                      <div>
                        <h4 className="font-bold text-sm">Examen Físico</h4>
                        <p className="text-xs text-gray-400">Veterinario Avalado</p>
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 text-[#25D366] text-xs font-bold px-3 py-1 rounded-full inline-block">✓ APROBADO</div>
                  </div>
                </div>
              </div>

              {/* LOGISTICS (ShippingAccordion) */}
              <div className="mt-8">
                <h3 className="font-header font-bold text-2xl mb-6">Logística de Entrega a {cityName}</h3>
                <ShippingAccordion currentCity={selectedCity} />
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN (Sidebar) */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 sticky top-[100px] shadow-xl">
              <h3 className="font-header font-bold text-2xl mb-2">
                ¿Buscas un Fluffy VIP?
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">
                Escríbenos por WhatsApp y un especialista te enviará al instante fotos y precios de los cachorros disponibles para entrega en {cityName}.
              </p>
              
              <a
                href={`https://wa.me/573164822477?text=${encodeURIComponent(whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold py-4 rounded-xl transition-colors shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                <span>Contactar por WhatsApp</span>
              </a>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-xs font-bold text-gray-400 dark:text-gray-500">
                <Lock className="w-4 h-4" />
                <span>Asesoría 100% Personalizada</span>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* GLOBAL COMPONENTS BELOW MAIN */}
      
      {/* Scroll Horizontal de Mantos Aceternity Style */}
      <HorizontalMantoScroll onSelectManto={(m) => setSelectedMantoModal(m)} />

      <CalculadoraComida />
      <CalculadoraEdad />

      <EeatSection />

      <GeoHubGrid
        cities={cities}
        selectedCity={selectedCity}
        onSelectCityBySlug={handleSelectCityBySlug}
      />

      <Footer />

      <QuizModal
        isOpen={quizOpen}
        onClose={() => setQuizOpen(false)}
        onSelectManto={(m) => setSelectedMantoModal(m)}
      />

      {/* Manto Detail Modal */}
      {selectedMantoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/80 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-lg bg-canvas dark:bg-carbon border border-obsidian/10 dark:border-canvas/10 rounded-card-lg p-8 relative"
          >
            <button
              onClick={() => setSelectedMantoModal(null)}
              className="absolute top-6 right-6 p-2 text-obsidian/50 hover:text-obsidian dark:text-canvas/50 dark:hover:text-canvas transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="w-full h-64 overflow-hidden rounded-card mb-6 bg-mint-cream dark:bg-obsidian border border-obsidian/5">
              <img
                src={selectedMantoModal.imagen}
                alt={selectedMantoModal.nombre}
                className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
              />
            </div>

            <h3 className="font-serif text-3xl font-bold text-obsidian dark:text-canvas mb-2">
              {selectedMantoModal.nombre}
            </h3>
            <div className="inline-block px-3 py-1 bg-lavender-mist dark:bg-carbon text-obsidian dark:text-lavender-mist rounded-pill text-[10px] font-bold uppercase tracking-widest mb-4 border border-obsidian/10">
              {selectedMantoModal.genetica}
            </div>
            
            <p className="text-sm text-obsidian/70 dark:text-canvas/70 leading-[1.6] mb-6">
              {selectedMantoModal.descripcion}
            </p>

            <div className="space-y-3 mb-8">
              {selectedMantoModal.caracteristicas.map((c, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm font-medium text-obsidian dark:text-canvas">
                  <CheckCircle2 className="w-5 h-5 text-ember-orange" />
                  <span>{c}</span>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/573164822477?text=Hola,%20me%20interesa%20la%20variedad%20${encodeURIComponent(selectedMantoModal.nombre)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full bg-[#25D366] hover:bg-[#1DA851] border-none text-white text-center justify-center"
            >
              <Phone className="w-4 h-4" />
              <span>Consultar Disponibilidad</span>
            </a>
          </motion.div>
        </div>
      )}

    </div>
  );
};
