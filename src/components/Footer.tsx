import React from 'react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterProps {
  onOpenQuiz?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuiz }) => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-20 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-gray-200 dark:border-gray-800">
          
          {/* Col 1 */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="font-header text-3xl sm:text-4xl leading-none font-bold">
                Dinastía <br/><span className="text-cornflower">Fluffy</span>
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 leading-relaxed">
              Criadero exótico especializado en raza Bulldog Francés Fluffy de pureza genotípica comprobada (gen L4/L1). Envíos VIP garantizados.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-widest text-gray-500 mb-6">
              Colores & Variedades
            </h4>
            <ul className="space-y-4 text-sm font-medium text-gray-600 dark:text-gray-400">
              <li><Link to="/color/isabella" className="hover:text-cornflower transition-colors">Bulldog Fluffy Isabella</Link></li>
              <li><Link to="/color/blue-solid" className="hover:text-cornflower transition-colors">Bulldog Fluffy Blue Solid</Link></li>
              <li><Link to="/color/chocolate" className="hover:text-cornflower transition-colors">Bulldog Fluffy Chocolate</Link></li>
              <li><Link to="/color/lilac" className="hover:text-cornflower transition-colors">Bulldog Fluffy Lilac</Link></li>
              <li><Link to="/color/merle" className="hover:text-cornflower transition-colors">Bulldog Fluffy Merle</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-widest text-gray-500 mb-6">
              Herramientas & Salud
            </h4>
            <ul className="space-y-4 text-sm font-medium text-gray-600 dark:text-gray-400">
              <li><a href="#calculadora-nutricion" className="hover:text-cornflower transition-colors">Calculadora Nutricional</a></li>
              <li><a href="#eeat-garantia" className="hover:text-cornflower transition-colors">Garantía Veterinaria & ADN</a></li>
              <li><a href="#testimonios-vip" className="hover:text-cornflower transition-colors">Testimonios VIP</a></li>
              <li><a href="#ciudades-hub" className="hover:text-cornflower transition-colors">Destinos & Aeropuertos</a></li>
              <li><Link to="/precios" className="hover:text-cornflower transition-colors">Precios VIP</Link></li>
              <li><Link to="/entregas" className="hover:text-cornflower transition-colors">Logística & Entregas</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-6">
            <h4 className="font-bold text-[10px] uppercase tracking-widest text-gray-500 mb-6">
              Contacto VIP
            </h4>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 leading-relaxed">
              Atención personalizada y reservas directas a través de nuestro equipo oficial.
            </p>
            <button
              onClick={() => onOpenQuiz && onOpenQuiz()}
              className="btn-primary bg-[#25D366] hover:bg-[#20b858] text-white py-4 w-full justify-center shadow-none text-sm border-transparent cursor-pointer flex items-center gap-2 rounded-xl font-bold transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp Directo VIP</span>
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} Dinastía Bulldog Fluffy VIP. Todos los derechos reservados.</p>
          <p className="mt-4 sm:mt-0 font-mono text-[10px] tracking-widest uppercase text-gray-400">Sistema Programático · EEAT & SEO GEO</p>
        </div>

      </div>
    </footer>
  );
};
