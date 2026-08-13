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
import { ShieldCheck, Plane, DollarSign, Sparkles, Phone, ArrowRight, Dna, CheckCircle2, X } from 'lucide-react';
import { motion } from 'framer-motion';

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [cities, setCities] = useState<FluffyStoryRow[]>([]);
  const [selectedCity, setSelectedCity] = useState<FluffyStoryRow | null>(null);
  const [quizOpen, setQuizOpen] = useState<boolean>(false);
  const [selectedMantoModal, setSelectedMantoModal] = useState<FluffyManto | null>(null);

  // Sync Dark Mode Class to Root HTML
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Load CSV Data on Mount
  useEffect(() => {
    parseFluffyCSV().then((data) => {
      setCities(data);
      if (data.length > 0) {
        setSelectedCity(data[0]); // Default to Bogotá
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

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-canvas dark:bg-obsidian text-obsidian dark:text-canvas transition-colors duration-300 font-sans">
      
      {/* Header */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        cities={cities}
        selectedCity={selectedCity}
        onSelectCityBySlug={handleSelectCityBySlug}
        onOpenQuiz={() => setQuizOpen(true)}
      />

      {/* Hero Section VIP Programática */}
      <section className="relative w-full bg-blue-50 dark:bg-gray-900 py-20 px-4 md:px-0 border-b border-blue-100 dark:border-gray-800 overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          
          {/* Left Content Column */}
          <motion.div 
            className="md:w-1/2 flex flex-col items-start gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            {/* Ping Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-gray-800 rounded-full shadow-sm text-xs font-bold text-cornflower border border-blue-100 dark:border-gray-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cornflower opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cornflower"></span>
              </span>
              Genética Exclusiva {selectedCity ? selectedCity.aeropuerto : 'VIP'}
            </div>

            {/* Gradient Title */}
            <h1 className="display-title">
              {selectedCity ? selectedCity.tituloH1.split('Fluffy')[0] : 'Bulldog Francés '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cornflower to-blue-400 block sm:inline">
                Fluffy
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed font-medium">
              {selectedCity ? selectedCity.metaDescripcion : 'Criadero especializado en ejemplares de Bulldog Francés Fluffy con pedigree internacional y entrega coordinada.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
              <a
                href={`https://wa.me/573164822477?text=Hola,%20quisiera%20informaci%C3%B3n%20VIP%20sobre%20los%20cachorros%20en%20${encodeURIComponent(selectedCity?.tituloH1 || 'mi ciudad')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                <Phone className="w-4 h-4" />
                <span>Consultar Disponibilidad</span>
              </a>
              <button
                onClick={() => setQuizOpen(true)}
                className="btn-ghost w-full sm:w-auto"
              >
                Hacer Quiz
              </button>
            </div>
          </motion.div>

          {/* Right Hero Image Card */}
          <motion.div 
            className="md:w-1/2 relative w-full h-full min-h-[350px] md:min-h-[450px] mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-blue-200 dark:bg-cornflower/20 rounded-full blur-3xl opacity-50 transform translate-y-10 translate-x-10"></div>
            <img
              src="/images/fluffy-showcase-hero.jpg"
              alt="Fluffy VIP Showcase"
              className="absolute inset-0 w-full h-full object-cover z-10 rounded-3xl shadow-2xl border-4 border-white dark:border-gray-800 transform -rotate-2 hover:rotate-0 transition-transform duration-500"
            />
            {/* Flotante de Garantía */}
            <div className="absolute bottom-4 -left-2 sm:-left-6 right-2 sm:right-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 sm:p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3 sm:gap-4 z-20 animate-fade-in-up max-w-[calc(100%-1rem)]">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 sm:p-3 rounded-full text-cornflower shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase">Garantía Genética</p>
                <p className="text-sm font-bold text-gray-800 dark:text-gray-100">L4/L1 100% Puros</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Logo Strip */}
      <section className="py-10 border-y border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center opacity-50 grayscale gap-8 overflow-hidden">
          <span className="font-header text-xl sm:text-2xl font-extrabold text-gray-400">Dinastía</span>
          <span className="font-header text-xl sm:text-2xl font-extrabold text-gray-400">AKC</span>
          <span className="font-header text-xl sm:text-2xl font-extrabold text-gray-400">FCI</span>
          <span className="font-header text-xl sm:text-2xl font-extrabold text-gray-400 hidden sm:block">PetTravel</span>
          <span className="font-header text-xl sm:text-2xl font-extrabold text-gray-400 hidden md:block">VetCare</span>
        </div>
      </section>

      {/* Dynamic Local Story Block */}
      {selectedCity && (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="text-center mb-12"
            >
              <div className="inline-block px-4 py-2 bg-cornflower/10 text-cornflower rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                Historia Local
              </div>
              <h2 className="font-header font-bold text-3xl sm:text-4xl text-gray-800 dark:text-gray-100">
                La historia en <span className="text-transparent bg-clip-text bg-gradient-to-r from-cornflower to-blue-400">{selectedCity.tituloH1.split('Fluffy')[1] || selectedCity.pais}</span>
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="playful-card text-center">
                <p className="text-lg sm:text-xl font-medium leading-relaxed text-gray-600 dark:text-gray-300">
                  {selectedCity.historiaLocal}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Scroll Horizontal de Mantos Aceternity Style */}
      <HorizontalMantoScroll onSelectManto={(m) => setSelectedMantoModal(m)} />

      {/* Calculadora de Nutrición Diaria */}
      <CalculadoraComida />

      {/* Calculadora de Edad Canina */}
      <CalculadoraEdad />

      {/* Acordeón de Envíos por Aeropuerto */}
      <ShippingAccordion currentCity={selectedCity} />

      {/* Seccion EEAT & Autoridad Criadero */}
      <EeatSection />

      {/* Geo Hub Grid con 102 Ciudades Programáticas */}
      <GeoHubGrid
        cities={cities}
        selectedCity={selectedCity}
        onSelectCityBySlug={handleSelectCityBySlug}
      />

      {/* Footer */}
      <Footer />

      {/* Modal Quiz */}
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
              className="pill-button-primary w-full bg-[#25D366] text-white dark:bg-[#25D366] dark:text-white"
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
