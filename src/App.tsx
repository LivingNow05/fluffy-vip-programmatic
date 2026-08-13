import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { parseFluffyCSV } from "./utils/csvParser";
import { FluffyStoryRow, FluffyManto } from "./types/fluffy";
import { Header } from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import { HorizontalMantoScroll } from "./components/HorizontalMantoScroll";
import { CalculadoraComida } from "./components/CalculadoraComida";
import { CalculadoraEdad } from "./components/CalculadoraEdad";
import { QuizModal } from "./components/QuizModal";
import { EeatSection } from "./components/EeatSection";
import { GeoHubGrid } from "./components/GeoHubGrid";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { FluffyCityPage } from "./pages/FluffyCityPage";
import { MantoDetailPage } from "./pages/MantoDetailPage";
import { motion } from "framer-motion";
import { Phone, CheckCircle2, X } from "lucide-react";


const ConditionalMantoScroll = ({ onSelectManto }: { onSelectManto: (m: FluffyManto) => void }) => {
  const location = useLocation();
  if (location.pathname.startsWith("/manto/")) {
    return null;
  }
  return <HorizontalMantoScroll onSelectManto={onSelectManto} />;
};

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [cities, setCities] = useState<FluffyStoryRow[]>([]);
  const [quizOpen, setQuizOpen] = useState<boolean>(false);
  const [selectedMantoModal, setSelectedMantoModal] = useState<FluffyManto | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    parseFluffyCSV().then((data) => {
      setCities(data);
    });
  }, []);

  return (
    <BrowserRouter>
        <ScrollToTop />
      <div className="min-h-screen bg-canvas dark:bg-obsidian text-obsidian dark:text-canvas transition-colors duration-300 font-sans">
        
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          cities={cities}
          selectedCity={cities[0] || null}
          onSelectCityBySlug={() => {}}
          onOpenQuiz={() => setQuizOpen(true)}
        />

        <Routes>
          <Route path="/" element={<HomePage cities={cities} onOpenQuiz={() => setQuizOpen(true)} />} />
          <Route path="/manto/:id" element={<MantoDetailPage cities={cities} />} />
          <Route path="/:slug" element={<FluffyCityPage cities={cities} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <ConditionalMantoScroll onSelectManto={(m) => setSelectedMantoModal(m)} />
        <CalculadoraComida />
        <CalculadoraEdad />
        <EeatSection />
        
        <GeoHubGrid
          cities={cities}
          selectedCity={null}
          onSelectCityBySlug={() => {}}
        />

        <Footer />

        <QuizModal
          isOpen={quizOpen}
          onClose={() => setQuizOpen(false)}
          onSelectManto={(m) => setSelectedMantoModal(m)}
        />

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
                href={"https://wa.me/573164822477?text=Hola,%20me%20interesa%20la%20variedad%20" + encodeURIComponent(selectedMantoModal.nombre)}
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
    </BrowserRouter>
  );
};
