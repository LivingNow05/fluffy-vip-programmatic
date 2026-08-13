import React from 'react';
import { Dog, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-20 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-gray-200 dark:border-gray-800">
          
          {/* Col 1 */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-cornflower text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
                <Dog className="w-6 h-6" />
              </div>
              <span className="font-header text-xl sm:text-2xl leading-none font-bold">
                Dinastía <br/><span className="text-indigo-500">Fluffy</span>
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 leading-relaxed">
              Criadero exótico especializado en raza Bulldog Francés Fluffy de pureza genotípica comprobada (gen L4/L1). Envíos VIP garantizados.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-widest text-gray-500 mb-6">
              Variedades Exóticas
            </h4>
            <ul className="space-y-4 text-sm font-medium text-gray-600 dark:text-gray-400">
              <li><a href="#variedades" className="hover:text-indigo-500 transition-colors">Isabella Fluffy</a></li>
              <li><a href="#variedades" className="hover:text-indigo-500 transition-colors">Blue Fluffy Signature</a></li>
              <li><a href="#variedades" className="hover:text-indigo-500 transition-colors">Fluffy Cocoa Velvet</a></li>
              <li><a href="#variedades" className="hover:text-indigo-500 transition-colors">Lilac Fluffy Imperial</a></li>
              <li><a href="#variedades" className="hover:text-indigo-500 transition-colors">Fluffy Merle Exotic</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-widest text-gray-500 mb-6">
              Herramientas & Salud
            </h4>
            <ul className="space-y-4 text-sm font-medium text-gray-600 dark:text-gray-400">
              <li><a href="#calculadora-nutricion" className="hover:text-indigo-500 transition-colors">Calculadora Nutricional</a></li>
              <li><a href="#eeat-garantia" className="hover:text-indigo-500 transition-colors">Garantía Veterinaria & ADN</a></li>
              <li><a href="#ciudades-hub" className="hover:text-indigo-500 transition-colors">Destinos & Aeropuertos</a></li>
              <li><a href="#precios" className="hover:text-indigo-500 transition-colors">Precios VIP</a></li>
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
            <a
              href="https://wa.me/573164822477?text=Hola,%20quisiera%20informaci%C3%B3n%20VIP"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-[#25D366] hover:bg-[#20b858] text-white py-4 w-full justify-center shadow-none text-sm border-transparent"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp Directo VIP</span>
            </a>
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
