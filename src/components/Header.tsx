import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ChevronDown, Phone, MapPin, Sparkles, Dog } from 'lucide-react';
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
    <header className="sticky top-0 z-50 bg-canvas dark:bg-obsidian border-b border-obsidian/10 dark:border-canvas/10 transition-colors duration-300 font-sans">
      {/* Top VIP Announcement Bar */}
      <div className="bg-obsidian dark:bg-canvas text-canvas dark:text-obsidian py-2 px-4 text-xs font-semibold text-center flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 text-electric-yellow dark:text-ember-orange" />
        <span className="uppercase tracking-widest text-[10px] sm:text-xs">Criadero VIP · Envíos Aéreos a 100+ Ciudades</span>
        <button 
          onClick={onOpenQuiz} 
          className="underline ml-2 hover:text-lavender-mist dark:hover:text-ember-orange transition-colors cursor-pointer"
        >
          Realizar Quiz →
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); onSelectCityBySlug('bulldog-frances-fluffy-bogota'); }}
          className="flex items-center gap-3 group"
        >
          <div className="w-12 h-12 rounded-pill bg-obsidian dark:bg-canvas flex items-center justify-center text-canvas dark:text-obsidian transition-colors">
            <Dog className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-obsidian dark:text-canvas">
              Dinastía <span className="text-ember-orange">Fluffy</span>
            </span>
            <span className="text-[10px] tracking-wider uppercase font-semibold text-ash-gray">
              VIP Exotic Kennel
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-obsidian dark:text-canvas">
          <a href="#precios" className="hover:text-lavender-mist dark:hover:text-ember-orange transition-colors">
            Precios
          </a>
          <a href="#variedades" className="hover:text-lavender-mist dark:hover:text-ember-orange transition-colors">
            Mantos
          </a>

          {/* Megamenu Ciudades */}
          <div 
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button 
              className="flex items-center gap-1 hover:text-lavender-mist dark:hover:text-ember-orange transition-colors py-2 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <MapPin className="w-4 h-4" />
              <span>Ciudades</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-200" />
            </button>

            {/* Megamenu Grid Dropdown */}
            {dropdownOpen && (
              <div className="absolute top-full -left-20 w-[720px] bg-canvas dark:bg-carbon border border-obsidian/10 dark:border-canvas/10 rounded-card p-6 grid grid-cols-4 gap-6 shadow-none mt-2">
                {/* Column 1: Colombia */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-ember-orange mb-3 flex items-center gap-1">
                    🇨🇴 Colombia
                  </h4>
                  <ul className="space-y-3 text-sm font-medium">
                    {colombiaCities.map(c => (
                      <li key={c.slug}>
                         <button
                          onClick={() => { onSelectCityBySlug(c.slug); setDropdownOpen(false); }}
                          className="hover:text-lavender-mist text-obsidian dark:text-canvas block text-left transition-colors cursor-pointer"
                        >
                          {c.tituloH1.replace('Bulldog Francés Fluffy en ', '')}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: México */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-ember-orange mb-3 flex items-center gap-1">
                    🇲🇽 México
                  </h4>
                  <ul className="space-y-3 text-sm font-medium">
                    {mexicoCities.map(c => (
                      <li key={c.slug}>
                        <button
                          onClick={() => { onSelectCityBySlug(c.slug); setDropdownOpen(false); }}
                          className="hover:text-lavender-mist text-obsidian dark:text-canvas block text-left transition-colors cursor-pointer"
                        >
                          {c.tituloH1.replace('Bulldog Francés Fluffy en ', '')}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3: Latam */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-ember-orange mb-3 flex items-center gap-1">
                    🌎 Latam
                  </h4>
                  <ul className="space-y-3 text-sm font-medium">
                    {latamCities.map(c => (
                      <li key={c.slug}>
                        <button
                          onClick={() => { onSelectCityBySlug(c.slug); setDropdownOpen(false); }}
                          className="hover:text-lavender-mist text-obsidian dark:text-canvas block text-left transition-colors cursor-pointer"
                        >
                          {c.tituloH1.replace('Bulldog Francés Fluffy en ', '')}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 4: Cobertura Global */}
                <div className="bg-mint-cream dark:bg-obsidian p-5 rounded-card flex flex-col justify-between border border-obsidian/5 dark:border-canvas/10">
                  <div>
                    <span className="text-xs font-bold text-obsidian dark:text-canvas block mb-2 uppercase tracking-widest">
                      ✈️ Global
                    </span>
                    <p className="text-xs text-obsidian/70 dark:text-canvas/70 leading-relaxed">
                      Envíos en cabina VIP con Travel Nanny.
                    </p>
                  </div>
                  <a
                    href="#ciudades-hub"
                    onClick={() => setDropdownOpen(false)}
                    className="text-xs font-bold text-ember-orange hover:underline mt-4 block"
                  >
                    Ver 100+ Ciudades →
                  </a>
                </div>
              </div>
            )}
          </div>

          <a href="#calculadora-nutricion" className="hover:text-lavender-mist dark:hover:text-ember-orange transition-colors">
            Calculadora
          </a>
          <a href="#eeat-garantia" className="hover:text-lavender-mist dark:hover:text-ember-orange transition-colors">
            Criadero
          </a>
        </nav>

        {/* Action Controls & Theme Toggle */}
        <div className="flex items-center gap-3">
          {/* WhatsApp CTA Button */}
          <a
            href="https://wa.me/573164822477?text=Hola,%20quisiera%20informaci%C3%B3n%20VIP"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex pill-button-primary bg-[#25D366] text-white dark:bg-[#25D366] dark:text-white"
          >
            <Phone className="w-4 h-4" />
            <span>WhatsApp VIP</span>
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Cambiar tema visual"
            className="p-3 rounded-pill bg-mint-cream dark:bg-carbon text-obsidian dark:text-canvas hover:scale-[0.98] transition-transform cursor-pointer"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-electric-yellow" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 rounded-pill bg-mint-cream dark:bg-carbon text-obsidian dark:text-canvas"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-canvas dark:bg-carbon border-t border-obsidian/10 dark:border-canvas/10 px-4 py-6 space-y-4">
          <div className="space-y-2 font-medium text-obsidian dark:text-canvas text-lg">
            <a href="#precios" onClick={() => setMobileMenuOpen(false)} className="block py-2">Precios VIP</a>
            <a href="#variedades" onClick={() => setMobileMenuOpen(false)} className="block py-2">Mantos</a>
            <a href="#ciudades-hub" onClick={() => setMobileMenuOpen(false)} className="block py-2">Ciudades & Cobertura</a>
            <a href="#calculadora-nutricion" onClick={() => setMobileMenuOpen(false)} className="block py-2">Calculadora Nutricional</a>
            <a href="#eeat-garantia" onClick={() => setMobileMenuOpen(false)} className="block py-2">Garantía Criadero</a>
          </div>

          <a
            href="https://wa.me/573164822477"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 pill-button-primary bg-[#25D366] text-white"
          >
            <Phone className="w-4 h-4" />
            <span>Contacto WhatsApp VIP</span>
          </a>
        </div>
      )}
    </header>
  );
};
