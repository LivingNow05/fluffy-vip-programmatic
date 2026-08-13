import React, { useState } from 'react';
import { MapPin, Search, Globe, ChevronRight } from 'lucide-react';
import { FluffyStoryRow } from '../types/fluffy';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Props {
  cities: FluffyStoryRow[];
  selectedCity: FluffyStoryRow | null;
  onSelectCityBySlug: (slug: string) => void;
}

export const GeoHubGrid: React.FC<Props> = ({ cities, selectedCity }) => {
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
    <section id="ciudades-hub" className="py-20 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 text-indigo-500 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Globe className="w-4 h-4" />
              <span>Cobertura Nacional (102 Ciudades)</span>
            </div>
            <h2 className="font-header font-extrabold text-4xl sm:text-5xl text-gray-800 dark:text-gray-100">
              Disponibilidad & Envíos
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-medium mt-4 leading-relaxed">
              Selecciona tu ciudad para consultar historias locales, aeropuertos y precios de envío garantizado.
            </p>
          </div>

          {/* Search Bar & Country Filter */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            <div className="relative flex-1 sm:w-72">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar ciudad o país..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-bold text-gray-800 dark:text-gray-100 focus:outline-none focus:border-cornflower focus:ring-2 focus:ring-cornflower/20 transition-all shadow-sm"
              />
            </div>

            <select
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-6 py-4 text-sm font-bold text-gray-800 dark:text-gray-100 focus:outline-none focus:border-cornflower transition-all shadow-sm appearance-none cursor-pointer"
            >
              <option value="todos">Todos los Países</option>
              {countries.map(c => (
                <option key={c} value={c}>{c}</option>
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
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
                }}
                key={c.slug}
              >
                <Link
                  to={`/${c.slug}`}
                  className={`block p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer h-[100px] group ${
                    isSelected
                      ? 'bg-cornflower text-white border-cornflower shadow-lg transform -translate-y-1'
                      : 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 text-gray-800 dark:text-gray-100 hover:shadow-md hover:border-cornflower/50 hover:-translate-y-1'
                  }`}
                >
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between w-full">
                      <span className={`text-[10px] uppercase font-bold tracking-wider ${isSelected ? 'text-white/90' : 'text-gray-400'}`}>
                        {c.pais}
                      </span>
                      <MapPin className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-cornflower/60'}`} />
                    </div>
                    
                    <div className="flex items-center justify-between w-full mt-2">
                      <span className="text-sm font-bold truncate">
                        {ciudadNombre}
                      </span>
                      <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'opacity-100' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-cornflower'}`} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {filteredCities.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">
              No se encontraron ciudades con la búsqueda "{searchTerm}".
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
