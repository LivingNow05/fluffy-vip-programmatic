import React, { useState } from 'react';
import { MapPin, Search, Globe, ChevronRight } from 'lucide-react';
import { FluffyStoryRow } from '../types/fluffy';
import { motion } from 'framer-motion';

interface Props {
  cities: FluffyStoryRow[];
  selectedCity: FluffyStoryRow | null;
  onSelectCityBySlug: (slug: string) => void;
}

export const GeoHubGrid: React.FC<Props> = ({ cities, selectedCity, onSelectCityBySlug }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countryFilter, setCountryFilter] = useState('todos');

  // Filter logic
  const filteredCities = cities.filter(c => {
    const matchesSearch = c.tituloH1.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.pais.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.slug.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = countryFilter === 'todos' || c.pais === countryFilter;
    return matchesSearch && matchesCountry;
  });

  const countries = Array.from(new Set(cities.map(c => c.pais))).filter(Boolean);

  return (
    <section id="ciudades-hub" className="section-light">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hub */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lavender-mist dark:bg-carbon border border-obsidian/10 dark:border-canvas/10 rounded-pill text-[11px] font-bold text-obsidian dark:text-lavender-mist uppercase tracking-widest mb-6">
              <Globe className="w-4 h-4" />
              <span>Cobertura Programática SEO GEO (102 Ciudades)</span>
            </div>
            <h2 className="editorial-display text-4xl sm:text-5xl text-obsidian dark:text-canvas">
              Disponibilidad & Envíos por Destino
            </h2>
            <p className="text-lg text-obsidian/70 dark:text-canvas/70 font-light mt-4 leading-[1.5]">
              Selecciona tu ciudad para consultar historias locales, aeropuertos y precios en tu moneda local.
            </p>
          </div>

          {/* Search Bar & Country Filter */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            <div className="relative flex-1 sm:w-72">
              <Search className="w-5 h-5 text-obsidian/50 dark:text-canvas/50 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar ciudad o país..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-transparent border border-obsidian/20 dark:border-canvas/20 rounded-pill text-sm font-medium text-obsidian dark:text-canvas focus:outline-none focus:border-obsidian dark:focus:border-canvas transition-colors placeholder-obsidian/40 dark:placeholder-canvas/40"
              />
            </div>

            <select
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
              className="bg-transparent border border-obsidian/20 dark:border-canvas/20 rounded-pill px-6 py-4 text-sm font-bold text-obsidian dark:text-canvas focus:outline-none focus:border-obsidian dark:focus:border-canvas transition-colors appearance-none cursor-pointer"
            >
              <option value="todos" className="text-obsidian">Todos los Países</option>
              {countries.map(c => (
                <option key={c} value={c} className="text-obsidian">{c}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Cities Grid - Flat Colors */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
          }}
        >
          {filteredCities.map((c) => {
            const isSelected = selectedCity?.slug === c.slug;
            const ciudadNombre = c.tituloH1.replace('Bulldog Francés Fluffy en ', '');

            return (
              <motion.button
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
                }}
                key={c.slug}
                onClick={() => onSelectCityBySlug(c.slug)}
                className={`p-5 rounded-card border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between h-[100px] group ${
                  isSelected
                    ? 'bg-obsidian text-canvas border-obsidian dark:bg-canvas dark:text-obsidian dark:border-canvas shadow-none'
                    : 'bg-transparent border-obsidian/10 text-obsidian dark:border-canvas/10 dark:text-canvas hover:border-obsidian/30 dark:hover:border-canvas/30'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`text-[9px] uppercase font-bold tracking-widest ${isSelected ? 'opacity-80' : 'opacity-50 group-hover:opacity-80'}`}>
                    {c.pais}
                  </span>
                  <MapPin className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'opacity-100 text-electric-yellow' : 'opacity-40'}`} />
                </div>
                
                <div className="flex items-center justify-between w-full mt-2">
                  <span className="text-sm font-serif font-bold truncate">
                    {ciudadNombre}
                  </span>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'opacity-100' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {filteredCities.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg text-obsidian/50 dark:text-canvas/50 font-serif italic">
              No se encontraron ciudades con la búsqueda "{searchTerm}".
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
