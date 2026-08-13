import React from "react";
import { useParams, Link } from "react-router-dom";
import { MANTOS_FLUFFY } from "../data/mantos";
import { FluffyStoryRow } from "../types/fluffy";
import { 
  Dna, ShieldCheck, CheckCircle2, 
  HeartHandshake, Award, Phone, ChevronRight
} from "lucide-react";

interface Props {
  cities: FluffyStoryRow[];
  onOpenQuiz?: (manto: string) => void;
}

export const MantoDetailPage: React.FC<Props> = ({ onOpenQuiz }) => {
  const { id } = useParams<{ id: string }>();
  const manto = MANTOS_FLUFFY.find(m => m.id === id);

  if (!manto) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-header font-bold mb-4">Variedad no encontrada</h1>
        <p className="text-gray-500 mb-8">No pudimos encontrar la variedad o manto seleccionado.</p>
        <Link to="/" className="btn-primary inline-block">Volver al Inicio</Link>
      </div>
    );
  }

  const otrosMantos = MANTOS_FLUFFY.filter(m => m.id !== manto.id);
  const whatsappText = "Hola, quisiera información VIP y disponibilidad sobre la variedad " + manto.nombre + " (" + manto.genetica + ")";

  return (
    <main className="max-w-[1100px] mx-auto px-4 sm:px-6 mt-8 mb-20 animate-fade-in">
      <div className="py-3 text-sm font-medium border-t border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 mb-6 flex gap-2 items-center">
        <Link to="/" className="hover:text-indigo-500 transition-colors">Inicio</Link>
        <span>/</span>
        <span className="text-gray-400">Mantos & Variedades</span>
        <span>/</span>
        <span className="text-indigo-500 font-bold">{manto.nombre}</span>
      </div>

      <article className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center mb-16">
        <div className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 group">
          <img
            src={manto.imagen}
            alt={manto.nombre}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-cornflower text-white px-4 py-1.5 rounded-full text-xs uppercase font-bold tracking-widest shadow-md">
            {manto.popularidad}
          </div>
        </div>

        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 text-indigo-500 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-500/20">
            <Dna className="w-4 h-4" />
            <span>Genética Exótica Certificada</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black font-header mb-4 text-obsidian dark:text-canvas">
            {manto.nombre}
          </h1>

          <div className="inline-block bg-lavender-mist dark:bg-gray-800 text-indigo-500 dark:text-blue-300 font-mono font-bold text-sm px-4 py-2 rounded-xl mb-6 border border-indigo-500/20">
            {manto.genetica}
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-8">
            {manto.descripcion}
          </p>

          <div className="space-y-3 mb-8 bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-700/50">
            <h3 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-4">Especificaciones de la Raza:</h3>
            {manto.caracteristicas.map((c, idx) => (
              <div key={idx} className="flex items-center gap-3 text-base font-bold text-obsidian dark:text-canvas">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span>{c}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => onOpenQuiz && onOpenQuiz(manto.nombre)}
              className="w-full sm:flex-1 flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl text-center"
            >
              <Phone className="w-5 h-5" />
              <span>Consultar Disponibilidad</span>
            </button>
            <div className="text-center sm:text-left">
              <span className="text-xs text-gray-400 font-bold uppercase block">Precio Estimado</span>
              <span className="text-2xl font-black text-obsidian dark:text-canvas">${manto.precioEstimadoUSD} USD</span>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 sm:p-12 mb-16 shadow-sm">
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest block mb-2">Conocimiento de Raza</span>
          <h2 className="text-3xl font-header font-bold text-obsidian dark:text-canvas mb-4">
            Cuidados y Estándar Genético de la variedad {manto.nombre}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Los ejemplares con fenotipo <strong>{manto.nombre}</strong> poseen la variante gen L4/L1. Su manto sedoso requiere un cepillado habitual de 2 a 3 veces por semana con cepillo de cerdas blandas y baños con champú neutro enriquecido con aceites naturales. Todos nuestros cachorros entregan con pruebas genéticas de laboratorio por escrito.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
            <Award className="w-8 h-8 text-indigo-500 mb-3" />
            <h4 className="font-bold text-base mb-1 text-obsidian dark:text-canvas">Pedigree Oficial</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">Registro genealógico de pureza de sangre garantizado.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
            <ShieldCheck className="w-8 h-8 text-indigo-500 mb-3" />
            <h4 className="font-bold text-base mb-1 text-obsidian dark:text-canvas">Salud Certificada</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">Esquema de vacunas completas y prueba libre de patologías congénitas.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
            <HeartHandshake className="w-8 h-8 text-indigo-500 mb-3" />
            <h4 className="font-bold text-base mb-1 text-obsidian dark:text-canvas">Acompañamiento VIP</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">Asesoría continua sobre nutrición y mantenimiento del pelo largo.</p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest block mb-1">Colección Fluffy</span>
            <h3 className="text-3xl font-header font-bold text-obsidian dark:text-canvas">Otras Variedades Populares</h3>
          </div>
          <Link to="/" className="text-indigo-500 font-bold text-sm hover:underline flex items-center gap-1">
            <span>Ver Todo</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {otrosMantos.map((m) => (
            <Link key={m.id} to={"/manto/" + m.id} className="group block">
              <div className="aspect-square rounded-2xl overflow-hidden mb-3 relative shadow-sm border border-gray-200 dark:border-gray-700">
                <img
                  src={m.imagen}
                  alt={m.nombre}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h4 className="font-bold text-base text-obsidian dark:text-canvas group-hover:text-indigo-500 transition-colors">
                {m.nombre}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{m.genetica.split("+")[0]}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};
