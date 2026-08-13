import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { FluffyStoryRow } from '../types/fluffy';
import { ShippingAccordion } from '../components/ShippingAccordion';
import { 
  ShieldCheck, Plane, DollarSign, Sparkles, Phone, Dna, CheckCircle2,
  FileText, HeartHandshake, Sun, Home, AlertTriangle, Shield, Syringe, Stethoscope, Lock, ArrowRight
} from 'lucide-react';

interface Props {
  cities: FluffyStoryRow[];
  onOpenQuiz?: (city: string) => void;
}

export const FluffyCityPage: React.FC<Props> = ({ cities, onOpenQuiz }) => {
  const { slug } = useParams<{ slug: string }>();
  
  if (cities.length === 0) {
    return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
  }

  // If no slug is provided, or we want a default, we could redirect to the first city
  // But here we'll assume the router matched /:slug
  const selectedCity = cities.find(c => c.slug === slug);

  if (!selectedCity && slug) {
    // 404 Not Found
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-header font-bold mb-4">Página no encontrada</h1>
        <p className="text-gray-500 mb-8">No pudimos encontrar la ciudad que buscas.</p>
        <Link to="/" className="btn-primary inline-block">Volver al inicio</Link>
      </div>
    );
  }

  // Fallback to first city if no slug (for home page)
  const city = selectedCity || cities[0];

  if (!city) return null;

  const rawCity = city.tituloH1.split('Fluffy')[1]?.trim() || city.pais;
  const cityName = rawCity.replace(/^en\s+/i, '').trim();
  const whatsappText = `Hola, quisiera información VIP sobre los cachorros Fluffy en ${cityName}`;

  return (
    <main className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-8 mb-20 animate-fade-in">
      
      {/* Breadcrumbs */}
      <div className="py-3 text-sm font-medium border-t border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 mb-4 flex gap-2">
        <Link to="/" className="hover:text-indigo-500 cursor-pointer transition-colors">Inicio</Link>
        <span>/</span>
        <span className="hover:text-indigo-500 cursor-pointer transition-colors">{city.pais}</span>
        <span>/</span>
        <span className="text-indigo-500 font-bold">Bulldog Francés Fluffy</span>
      </div>

      {/* HERO SECTION - EDITORIAL STYLE */}
      <article className="mt-8 mb-16">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Column: Typography & Content */}
          <div className="w-full md:w-7/12 lg:w-7/12 flex flex-col justify-center pr-0 lg:pr-8">
            <div className="mb-6">
              <span className="bg-[#FFB800] text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5 inline-block shadow-sm">
                Disponible en {cityName}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-black font-header mb-5 leading-[1.1] tracking-tight text-obsidian dark:text-canvas">
                {city.tituloH1 || 'Cachorros Bulldog Francés Fluffy'}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light leading-relaxed max-w-2xl">
                {city.metaDescripcion || 'Criadero especializado en ejemplares de Bulldog Francés Fluffy con pedigree.'}
              </p>
            </div>

            {/* Review / Trust Badge */}
            <div className="flex items-center gap-6 mt-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center text-indigo-500">
                  <Sparkles className="w-8 h-8" fill="currentColor" />
                </div>
                <div>
                  <div className="flex items-center gap-2 font-bold text-2xl text-obsidian dark:text-canvas">
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
                <Dna className="w-4 h-4 text-indigo-500" />
                <span className="text-sm font-bold text-gray-700 dark:text-gray-200">Pureza 100%</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-5 py-2.5">
                <HeartHandshake className="w-4 h-4 text-indigo-500" />
                <span className="text-sm font-bold text-gray-700 dark:text-gray-200">Ideal para Niños</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-5 py-2.5">
                <ShieldCheck className="w-4 h-4 text-indigo-500" />
                <span className="text-sm font-bold text-gray-700 dark:text-gray-200">Garantía Escrita</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="w-full md:w-5/12 lg:w-5/12 flex-shrink-0 relative mt-6 md:-mt-12 lg:-mt-16 lg:-mr-8 z-10">
            <div className="relative aspect-[3/2] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group">
              <img 
                src="/images/fluffy-showcase-hero-light.jpg" 
                alt="Bulldog Fluffy"
                className="dark:hidden absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <img 
                src="/images/fluffy-showcase-hero.jpg" 
                alt="Bulldog Fluffy"
                className="hidden dark:block absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700 hidden md:block z-10">
              <div className="flex items-center gap-3">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-500 p-3 rounded-full">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">Criador</p>
                  <p className="text-base font-bold text-obsidian dark:text-canvas">Verificado</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TAXONOMY / DATA - Bento Grid */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-300 group">
            <FileText className="w-8 h-8 text-blue-400 group-hover:text-blue-600 mb-4 transition-colors" />
            <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">Registro</p>
            <p className="text-lg font-black text-obsidian dark:text-canvas">Pedigree</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-emerald-500/30 transition-all duration-300 group">
            <DollarSign className="w-8 h-8 text-emerald-400 group-hover:text-emerald-600 mb-4 transition-colors" />
            <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">Moneda</p>
            <p className="text-lg font-black text-obsidian dark:text-canvas">{city.moneda} / USD</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-500/30 transition-all duration-300 group">
            <Plane className="w-8 h-8 text-indigo-400 group-hover:text-indigo-600 mb-4 transition-colors" />
            <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">Envío a {cityName}</p>
            <p className="text-lg font-black text-obsidian dark:text-canvas">Aéreo VIP</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-rose-500/30 transition-all duration-300 group">
            <HeartHandshake className="w-8 h-8 text-rose-400 group-hover:text-rose-600 mb-4 transition-colors" />
            <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">Entrega</p>
            <p className="text-lg font-black text-obsidian dark:text-canvas">Personal</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-amber-500/30 transition-all duration-300 group col-span-2 sm:col-span-1 md:col-span-1">
            <Shield className="w-8 h-8 text-amber-400 group-hover:text-amber-600 mb-4 transition-colors" />
            <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">Garantía</p>
            <p className="text-lg font-black text-obsidian dark:text-canvas">Genética L4</p>
          </div>
        </div>
      </article>

      <hr className="border-gray-200 dark:border-gray-800 my-12" />

      {/* 2-COLUMN MAIN CONTENT */}
      <div className="grid md:grid-cols-[2fr_1fr] gap-10">
        
        {/* LEFT COLUMN */}
        <div>
          <h2 className="font-header font-bold text-3xl mb-6 text-obsidian dark:text-canvas">
            Encuentra el mejor Fluffy VIP en {cityName}
          </h2>
          <div className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg flex flex-col gap-6">
            <p>
              Buscar un cachorro <strong>Bulldog Francés Fluffy</strong> es una decisión importante que requiere considerar el bienestar, la genética y la garantía de salud. Hemos preparado una logística exclusiva para que recibas a tu nuevo miembro de la familia en {cityName} cumpliendo con los estándares más altos.
            </p>

            {/* HISTORIA LOCAL (Dinámica) */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl p-6 mt-4 playful-card">
              <div className="inline-block px-4 py-1.5 bg-indigo-500/10 text-indigo-500 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
                Historia Local
              </div>
              <p className="text-base font-medium text-gray-600 dark:text-gray-300 italic">
                "{city.historiaLocal}"
              </p>
            </div>

            {/* ADAPTABILIDAD */}
            <div className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-3xl p-6 mt-4">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="text-4xl bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-sm"><Sun className="w-8 h-8 text-yellow-500" /></div>
                <div>
                  <h3 className="font-header font-bold text-2xl mb-2 text-obsidian dark:text-canvas">Clima y Adaptabilidad</h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                    El Bulldog Francés Fluffy se adapta perfectamente a la vida en interiores y al clima de {cityName}. Su pelaje largo (Gen L4) requiere cepillado regular, pero los mantiene cómodos. Es crucial mantenerlos frescos en días calurosos.
                  </p>
                </div>
              </div>
            </div>

            {/* ESTILO DE VIDA */}
            <div className="mt-4 flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-1">
                <h3 className="font-header font-bold text-2xl mb-4 text-obsidian dark:text-canvas">Estilo de Vida y Espacios</h3>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  Son perros de compañía por excelencia. No necesitan grandes patios ni ejercicio extremo. Con paseos cortos diarios y mucho amor dentro de casa, tu Fluffy será inmensamente feliz.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 min-w-[200px] text-center shadow-sm">
                <div className="flex justify-center mb-2"><Home className="w-8 h-8 text-indigo-500" /></div>
                <span className="block font-bold text-obsidian dark:text-canvas">Apto para Apartamento</span>
              </div>
            </div>

            {/* GUIA DE COMPRA */}
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-6 mt-8">
              <h3 className="font-header font-bold text-2xl mb-4 text-obsidian dark:text-canvas">Guía de Compra Segura</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2 text-obsidian dark:text-canvas">Exige Siempre:</h4>
                  <ul className="list-none space-y-2 text-base text-gray-600 dark:text-gray-400">
                    <li className="flex gap-2 items-start">
                      <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                      <span>Pruebas de ADN (Gen L4/L1)</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                      <span>Pedigree Internacional</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
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
                  <span className="text-indigo-500 font-bold text-sm tracking-widest uppercase mb-1 block">Sanidad Garantizada</span>
                  <h3 className="font-header font-bold text-2xl text-obsidian dark:text-canvas">Panel de Salud y Vacunas</h3>
                </div>
                <div className="hidden sm:block">
                  <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">VIP Verificado</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 hover:shadow-lg transition-all group">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl group-hover:scale-110 transition-transform"><Syringe className="text-indigo-500" /></div>
                    <div>
                      <h4 className="font-bold text-sm text-obsidian dark:text-canvas">Vacunación</h4>
                      <p className="text-xs text-gray-400">Esquema Completo</p>
                    </div>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-500 text-xs font-bold px-3 py-1 rounded-full inline-block">✓ AL DÍA</div>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 hover:shadow-lg transition-all group">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl group-hover:scale-110 transition-transform"><Stethoscope className="text-indigo-500" /></div>
                    <div>
                      <h4 className="font-bold text-sm text-obsidian dark:text-canvas">Examen Físico</h4>
                      <p className="text-xs text-gray-400">Veterinario Avalado</p>
                    </div>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-500 text-xs font-bold px-3 py-1 rounded-full inline-block">✓ APROBADO</div>
                </div>
              </div>
            </div>

            {/* LOGISTICS (ShippingAccordion) */}
            <div className="mt-8">
              <h3 className="font-header font-bold text-2xl mb-6 text-obsidian dark:text-canvas">Logística de Entrega a {cityName}</h3>
              <ShippingAccordion currentCity={city} />
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN (Sidebar) */}
        <div className="relative">
          <div className="bg-gradient-to-b from-white to-amber-50/50 dark:from-gray-800 dark:to-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-[2rem] p-8 sticky top-[100px] shadow-xl">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-6">
              <Phone className="w-6 h-6 text-indigo-500" />
            </div>
            <h3 className="font-header font-bold text-2xl mb-3 text-obsidian dark:text-canvas">
              ¿Buscas un Fluffy VIP?
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm leading-relaxed">
              Escríbenos y un especialista te enviará al instante fotos, videos y precios de los cachorros disponibles para entrega en <strong className="text-obsidian dark:text-canvas">{cityName}</strong>.
            </p>

            <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-2xl p-5 mb-8 shadow-sm">
              <span className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider block mb-1">Inversión desde</span>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl font-black font-header text-obsidian dark:text-canvas">$4,500</span>
                <span className="text-sm font-bold text-gray-400">USD</span>
              </div>
              <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-300">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" /> Incluye envío VIP a {cityName}</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" /> Gen L4/L1 + Garantía</li>
              </ul>
              <Link to="/precios" className="block text-center mt-4 text-[10px] font-bold text-indigo-500 hover:text-blue-700 uppercase tracking-widest transition-colors">
                Ver Planes de Precios &rarr;
              </Link>
            </div>
            
            <button
              onClick={() => onOpenQuiz && onOpenQuiz(cityName)}
              className="group w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:-translate-y-1 cursor-pointer"
            >
              <span>Contactar por WhatsApp</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            
            <div className="mt-8 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
              <Lock className="w-3.5 h-3.5" />
              <span>Asesoría 100% Confidencial</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
