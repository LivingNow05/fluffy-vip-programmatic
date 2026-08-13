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

      {/* Hero Section VIP Programática (Light Section) */}
      <section className="section-light relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content Column */}
            <motion.div 
              className="lg:col-span-6 space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
            >
              
              {/* Badges Fluffy VIP */}
              <motion.div variants={fadeUpVariant} className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-lavender-mist dark:bg-carbon rounded-pill text-[11px] font-bold text-obsidian dark:text-canvas uppercase tracking-widest border border-obsidian/10 dark:border-canvas/10">
                  <Sparkles className="w-4 h-4 text-obsidian dark:text-electric-yellow" />
                  <span>Genética Exclusiva L4/L1</span>
                </div>
                {selectedCity && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-transparent border border-obsidian dark:border-canvas rounded-pill text-[11px] font-bold text-obsidian dark:text-canvas uppercase tracking-widest">
                    <Plane className="w-4 h-4 text-obsidian dark:text-canvas" />
                    <span>{selectedCity.aeropuerto}</span>
                  </div>
                )}
              </motion.div>

              {/* Dynamic H1 from CSV */}
              <motion.h1 variants={fadeUpVariant} className="editorial-display flex flex-wrap gap-x-4 gap-y-2">
                <span>{selectedCity ? selectedCity.tituloH1.split('Fluffy')[0] : 'Bulldog Francés '}</span>
                <span className="text-ember-orange">Fluffy</span>
              </motion.h1>

              {/* Dynamic Meta Description from CSV */}
              <motion.p variants={fadeUpVariant} className="text-lg sm:text-xl text-obsidian/70 dark:text-canvas/70 font-light leading-[1.4] max-w-xl">
                {selectedCity ? selectedCity.metaDescripcion : 'Criadero de lujo especializado en ejemplares puros de Bulldog Francés Fluffy con pelaje abundante, pedigree internacional y entrega coordinada.'}
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeUpVariant} className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={`https://wa.me/573164822477?text=Hola,%20quisiera%20informaci%C3%B3n%20VIP%20sobre%20los%20cachorros%20en%20${encodeURIComponent(selectedCity?.tituloH1 || 'mi ciudad')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-button-primary bg-obsidian text-canvas dark:bg-canvas dark:text-obsidian text-sm sm:text-base px-8 py-4"
                >
                  <Phone className="w-4 h-4" />
                  <span>Consultar Disponibilidad</span>
                </a>
                <button
                  onClick={() => setQuizOpen(true)}
                  className="pill-button-ghost text-sm sm:text-base px-8 py-4"
                >
                  Hacer Quiz Recomendador
                </button>
              </motion.div>

            </motion.div>

            {/* Right Hero Image Card - Split Card Pair */}
            <motion.div 
              className="lg:col-span-6 grid grid-cols-2 gap-4 h-[500px]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="editorial-card-dark h-full relative overflow-hidden flex flex-col justify-end p-6">
                 <img
                    src="/images/fluffy-showcase-hero.jpg"
                    alt="Fluffy VIP Showcase"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  />
                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 bg-canvas text-obsidian text-[10px] uppercase font-bold tracking-widest rounded-pill mb-2">
                      Exótico
                    </span>
                    <h3 className="text-canvas font-serif text-2xl font-bold">Línea VIP</h3>
                  </div>
              </div>
              
              <div className="editorial-card-lavender h-full relative overflow-hidden flex flex-col justify-end p-6 dark:bg-carbon dark:text-canvas">
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent"></div>
                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 bg-obsidian text-canvas text-[10px] uppercase font-bold tracking-widest rounded-pill mb-2">
                      Garantía
                    </span>
                    <h3 className="text-obsidian dark:text-canvas font-serif text-2xl font-bold">Pureza 100%</h3>
                  </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Brand Logo Strip */}
      <section className="py-10 border-y border-obsidian/10 dark:border-canvas/10 bg-canvas dark:bg-obsidian">
        <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center opacity-60 dark:opacity-40 grayscale gap-8 overflow-hidden">
          <span className="font-serif text-xl sm:text-2xl font-bold">Dinastía</span>
          <span className="font-serif text-xl sm:text-2xl font-bold">AKC</span>
          <span className="font-serif text-xl sm:text-2xl font-bold">FCI</span>
          <span className="font-serif text-xl sm:text-2xl font-bold hidden sm:block">PetTravel</span>
          <span className="font-serif text-xl sm:text-2xl font-bold hidden md:block">VetCare</span>
        </div>
      </section>

      {/* Dynamic Local Story Block (Dark Section) */}
      {selectedCity && (
        <section className="section-dark">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-2 bg-electric-yellow dark:bg-carbon text-obsidian dark:text-electric-yellow rounded-pill text-[11px] font-bold uppercase tracking-widest mb-6 border border-obsidian dark:border-electric-yellow/30">
                Historia Local
              </div>
              <h2 className="editorial-display flex flex-col items-center gap-2">
                <span className="text-canvas">LA HISTORIA</span>
                <span className="text-ember-orange">{selectedCity.tituloH1.split('Fluffy')[1] || selectedCity.pais}</span>
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="editorial-card-light bg-carbon text-canvas border-obsidian dark:bg-obsidian dark:border-canvas/20">
                <p className="text-lg sm:text-2xl font-light leading-[1.5] text-canvas/80">
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
