import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ChevronDown, Phone, MapPin, Sparkles, Dog } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FluffyStoryRow } from '../types/fluffy';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  cities: FluffyStoryRow[];
  selectedCity: FluffyStoryRow | null;
  onSelectCityBySlug: (slug: string) => void;
  onOpenQuiz: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  setDarkMode,
  cities,
  selectedCity,
  onSelectCityBySlug,
  onOpenQuiz
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Group cities by country
  const colombiaCities = cities.filter(c => c.pais === 'Colombia').slice(0, 5);
  const mexicoCities = cities.filter(c => c.pais === 'México').slice(0, 5);
  const latamCities = cities.filter(c => c.pais !== 'Colombia' && c.pais !== 'México').slice(0, 5);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md dark:bg-gray-900/90 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300 font-sans">
      {/* Top VIP Announcement Bar */}
      <div className="bg-cornflower text-white py-2 px-4 text-xs font-semibold text-center flex items-center justify-center gap-3">
        <Sparkles className="w-4 h-4 text-white animate-pulse" />
        <span className="uppercase tracking-widest text-[10px] sm:text-xs">Criadero VIP · Envíos Aéreos a 100+ Ciudades</span>
        <button 
          onClick={onOpenQuiz} 
          className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-full backdrop-blur-sm transition-all duration-300 text-[10px] sm:text-xs uppercase font-bold tracking-wider shadow-sm flex items-center gap-1 hover:scale-105"
        >
          Realizar Quiz <span className="text-[10px] font-normal">→</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          to="/"
          className="flex items-center gap-3 group"
        >
          <div className="w-12 h-12 rounded-full bg-cornflower flex items-center justify-center text-white transition-colors shadow-sm group-hover:scale-105">
            <Dog className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-header text-xl sm:text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
              Dinastía <span className="text-cornflower">Fluffy</span>
            </span>
            <span className="text-[10px] tracking-wider uppercase font-bold text-gray-500">
              VIP Exotic Kennel
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-gray-700 dark:text-gray-300">
          <Link to="/precios" className="hover:text-cornflower transition-colors">
            Precios
          </Link>
          <a href="#variedades" className="hover:text-cornflower transition-colors">
            Mantos
          </a>

          {/* Megamenu Ciudades */}
          <div 
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button 
              className="flex items-center gap-1 hover:text-cornflower transition-colors py-2 cursor-pointer font-bold"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <MapPin className="w-4 h-4" />
              <span>Ciudades</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-200" />
            </button>

            {/* Megamenu Grid Dropdown */}
            {dropdownOpen && (
              <div className="absolute top-full -left-20 w-[720px] pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl p-6 grid grid-cols-4 gap-6 shadow-2xl">
                {/* Column 1: Colombia */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-cornflower mb-3 flex items-center gap-1">
                    🇨🇴 Colombia
                  </h4>
                  <ul className="space-y-3 text-sm font-medium">
                    {colombiaCities.map(c => (
                      <li key={c.slug}>
                        <Link
                          to={`/${c.slug}`}
                          onClick={() => setDropdownOpen(false)}
                          className="hover:text-cornflower text-gray-700 dark:text-gray-300 block text-left transition-colors cursor-pointer"
                        >
                          {c.tituloH1.replace('Bulldog Francés Fluffy en ', '')}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: México */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-cornflower mb-3 flex items-center gap-1">
                    🇲🇽 México
                  </h4>
                  <ul className="space-y-3 text-sm font-medium">
                    {mexicoCities.map(c => (
                      <li key={c.slug}>
                        <Link
                          to={`/${c.slug}`}
                          onClick={() => setDropdownOpen(false)}
                          className="hover:text-cornflower text-gray-700 dark:text-gray-300 block text-left transition-colors cursor-pointer"
                        >
                          {c.tituloH1.replace('Bulldog Francés Fluffy en ', '')}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3: Latam */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-cornflower mb-3 flex items-center gap-1">
                    🌎 Latam
                  </h4>
                  <ul className="space-y-3 text-sm font-medium">
                    {latamCities.map(c => (
                      <li key={c.slug}>
                        <Link
                          to={`/${c.slug}`}
                          onClick={() => setDropdownOpen(false)}
                          className="hover:text-cornflower text-gray-700 dark:text-gray-300 block text-left transition-colors cursor-pointer"
                        >
                          {c.tituloH1.replace('Bulldog Francés Fluffy en ', '')}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 4: Cobertura Global */}
                <div className="bg-blue-50 dark:bg-gray-700 p-5 rounded-2xl flex flex-col justify-between border border-blue-100 dark:border-gray-600">
                  <div>
                    <span className="text-xs font-bold text-gray-800 dark:text-gray-100 block mb-2 uppercase tracking-widest">
                      ✈️ Global
                    </span>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                      Envíos en cabina VIP con Travel Nanny.
                    </p>
                  </div>
                  <a
                    href="#ciudades-hub"
                    onClick={() => setDropdownOpen(false)}
                    className="text-xs font-bold text-cornflower hover:underline mt-4 block"
                  >
                    Ver 100+ Ciudades →
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

          <a href="#calculadora-nutricion" className="hover:text-cornflower transition-colors">
            Calculadora
          </a>
          <a href="#eeat-garantia" className="hover:text-cornflower transition-colors">
            Criadero
          </a>
        </nav>

        {/* Action Controls & Theme Toggle */}
        <div className="flex items-center gap-3">
          {/* WhatsApp CTA Button */}
          <button
            onClick={onOpenQuiz}
            className="hidden sm:flex btn-primary bg-[#25D366] hover:bg-[#20b858] text-white border-transparent"
          >
            <Phone className="w-4 h-4" />
            <span>WhatsApp VIP</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Cambiar tema visual"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:scale-[0.98] transition-transform cursor-pointer"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-4 py-6 space-y-4">
          <div className="space-y-2 font-medium text-gray-800 dark:text-gray-200 text-lg">
            <Link to="/precios" onClick={() => setMobileMenuOpen(false)} className="block py-2">Precios VIP</Link>
            <a href="#variedades" onClick={() => setMobileMenuOpen(false)} className="block py-2">Mantos</a>
            <a href="#ciudades-hub" onClick={() => setMobileMenuOpen(false)} className="block py-2">Ciudades & Cobertura</a>
            <a href="#calculadora-nutricion" onClick={() => setMobileMenuOpen(false)} className="block py-2">Calculadora Nutricional</a>
            <a href="#eeat-garantia" onClick={() => setMobileMenuOpen(false)} className="block py-2">Garantía Criadero</a>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuiz();
            }}
            className="w-full flex items-center justify-center gap-2 btn-primary bg-[#25D366] hover:bg-[#20b858] text-white border-transparent"
          >
            <Phone className="w-4 h-4" />
            <span>Contacto WhatsApp VIP</span>
          </button>
        </div>
      )}
    </header>
  );
};
