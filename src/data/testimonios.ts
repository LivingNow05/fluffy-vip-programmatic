export interface TestimonioItem {
  id: string;
  nombre: string;
  ciudad: string;
  pais: string;
  foto: string;
  manto: string;
  comentario: string;
  rating: number;
  fecha: string;
}

export const TESTIMONIOS_DATA: TestimonioItem[] = [
  {
    id: "t-01",
    nombre: "Familia Restrepo",
    ciudad: "Bogotá",
    pais: "Colombia",
    foto: "/testimonios/IMG_2489.webp",
    manto: "Bulldog Fluffy Merle",
    comentario: "Una experiencia inigualable. Nuestro cachorro llegó al aeropuerto El Dorado en cabina climatizada con su nanny. Su pelaje largo y sedoso es impresionante y su salud perfecta.",
    rating: 5,
    fecha: "Hace 2 semanas"
  },
  {
    id: "t-02",
    nombre: "Carlos & Mariana",
    ciudad: "Ciudad de México (Polanco)",
    pais: "México",
    foto: "/testimonios/IMG_2629.webp",
    manto: "Bulldog Fluffy Isabella",
    comentario: "La pureza genética y el certificado DNA L4/L1 nos dieron total tranquilidad. Es súper cariñoso, noble con los niños y en CDMX todo el mundo nos pregunta por él.",
    rating: 5,
    fecha: "Hace 1 mes"
  },
  {
    id: "t-03",
    nombre: "Alejandro V.",
    ciudad: "Miami, FL",
    pais: "Estados Unidos",
    foto: "/testimonios/IMG_9458.webp",
    manto: "Bulldog Fluffy Lilac",
    comentario: "El servicio de Flight Nanny a Miami fue impecable. Nos mantuvieron informados con videos en cada escala. La calidad de la raza es superior a cualquier criadero en USA.",
    rating: 5,
    fecha: "Hace 3 semanas"
  },
  {
    id: "t-04",
    nombre: "Dra. Natalia Gómez",
    ciudad: "Medellín (El Poblado)",
    pais: "Colombia",
    foto: "/testimonios/IMG_0682.webp",
    manto: "Bulldog Fluffy Blue Solid",
    comentario: "Como médica veterinaria, revisé exhaustivamente sus exámenes y vacunas. Estructura ósea compacta, vías respiratorias perfectas y temperamento equilibrado.",
    rating: 5,
    fecha: "Hace 1 mes"
  },
  {
    id: "t-05",
    nombre: "Sofía & Roberto",
    ciudad: "Ciudad de Panamá",
    pais: "Panamá",
    foto: "/testimonios/IMG_2612.webp",
    manto: "Bulldog Fluffy Chocolate",
    comentario: "Llegó al Aeropuerto Tocumen puntual y alegre. Su pelaje de terciopelo es hermoso y la asesoría 24/7 de Dinastía Fluffy ha sido invaluable para sus cuidados.",
    rating: 5,
    fecha: "Hace 2 meses"
  },
  {
    id: "t-06",
    nombre: "Sebastián M.",
    ciudad: "Santiago (Las Condes)",
    pais: "Chile",
    foto: "/testimonios/IMG_2628.webp",
    manto: "Bulldog Fluffy Merle",
    comentario: "El proceso de exportación a Chile fue 100% transparente con todos los permisos sanitarios al día. Es el rey de la casa, juguetón y súper inteligente.",
    rating: 5,
    fecha: "Hace 1 mes"
  },
  {
    id: "t-07",
    nombre: "Valeria & Juan Pablo",
    ciudad: "Monterrey (San Pedro)",
    pais: "México",
    foto: "/testimonios/IMG_9431.webp",
    manto: "Bulldog Fluffy Isabella",
    comentario: "Buscábamos exclusividad y encontramos la mejor genética. El pelaje esponjoso y los ojos claros son de revista. Superó todas nuestras expectativas.",
    rating: 5,
    fecha: "Hace 3 semanas"
  },
  {
    id: "t-08",
    nombre: "Familia Mendoza",
    ciudad: "Cali (Ciudad Jardín)",
    pais: "Colombia",
    foto: "/testimonios/IMG_9461.webp",
    manto: "Bulldog Fluffy Lilac",
    comentario: "El kit de bienvenida, el contrato de salud garantizada y el microchip nos dieron muchísima confianza. Es el compañero ideal para nuestros hijos.",
    rating: 5,
    fecha: "Hace 2 meses"
  },
  {
    id: "t-09",
    nombre: "Fernando R.",
    ciudad: "Guadalajara (Puerta de Hierro)",
    pais: "México",
    foto: "/testimonios/157b2d52-2501-4167-aed3-2103df96ab53.webp",
    manto: "Bulldog Fluffy Blue Solid",
    comentario: "Excelente criadero. Puntualidad en la entrega, cachorro muy bien socializado y listo para convivir en familia sin estrés.",
    rating: 5,
    fecha: "Hace 1 mes"
  },
  {
    id: "t-10",
    nombre: "Camila & David",
    ciudad: "Barranquilla (Alto Prado)",
    pais: "Colombia",
    foto: "/testimonios/16abd20c-52df-4617-b0a1-9350387a650f.webp",
    manto: "Bulldog Fluffy Chocolate",
    comentario: "Nos asesoraron en todo momento sobre la adaptación al clima y su nutrición. La atención VIP marca una diferencia enorme frente a otros criaderos.",
    rating: 5,
    fecha: "Hace 3 semanas"
  },
  {
    id: "t-11",
    nombre: "Ignacio K.",
    ciudad: "Lima (San Isidro)",
    pais: "Perú",
    foto: "/testimonios/6c8af69d-9af8-40e0-8764-6e0ad438b331.webp",
    manto: "Bulldog Fluffy Merle",
    comentario: "Llegó al Aeropuerto Jorge Chávez con su Flight Nanny en perfectas condiciones. Salud de 10, pelaje abundante y un amor total de perrito.",
    rating: 5,
    fecha: "Hace 1 mes"
  },
  {
    id: "t-12",
    nombre: "Lorena & Andrés",
    ciudad: "San José (Escazú)",
    pais: "Costa Rica",
    foto: "/testimonios/653fac00-f401-41e5-b920-9d1e8fde4a73.webp",
    manto: "Bulldog Fluffy Isabella",
    comentario: "Desde el primer contacto por WhatsApp nos mostraron videos y certificados reales. Cumplieron cada promesa y el cachorro es hermoso y sano.",
    rating: 5,
    fecha: "Hace 2 meses"
  },
  {
    id: "t-13",
    nombre: "Martín E.",
    ciudad: "Buenos Aires (Recoleta)",
    pais: "Argentina",
    foto: "/testimonios/291c54bf-e360-445d-9d6c-915fca05480d.webp",
    manto: "Bulldog Fluffy Blue Solid",
    comentario: "La calidad cinológica es de nivel mundial. En Argentina no se consiguen Fluffies con esta densidad de pelo y pedigree internacional.",
    rating: 5,
    fecha: "Hace 1 mes"
  },
  {
    id: "t-14",
    nombre: "Daniela T.",
    ciudad: "Santo Domingo (Piantini)",
    pais: "Rep. Dominicana",
    foto: "/testimonios/d92ebb46-f77c-449e-978d-d9590c635656.webp",
    manto: "Bulldog Fluffy Lilac",
    comentario: "Entrega aérea VIP directa en Las Américas. Llegó limpio, alegre y con todo su protocolo de vacunas al día. 100% recomendados.",
    rating: 5,
    fecha: "Hace 3 semanas"
  },
  {
    id: "t-15",
    nombre: "Esteban & Paula",
    ciudad: "Quito (Cumbayá)",
    pais: "Ecuador",
    foto: "/testimonios/_DSC8131.webp",
    manto: "Bulldog Fluffy Chocolate",
    comentario: "Nos encantó la transparencia y dedicación. Cada cachorro recibe una crianza ética en familia y se nota en su dulzura y serenidad.",
    rating: 5,
    fecha: "Hace 1 mes"
  },
  {
    id: "t-16",
    nombre: "Mateo S.",
    ciudad: "Madrid",
    pais: "España",
    foto: "/testimonios/_DSC8142.webp",
    manto: "Bulldog Fluffy Merle",
    comentario: "Vuelo transatlántico con niñera privada en cabina. Llegó a Madrid descansado y en perfecto estado. Calidad de colección.",
    rating: 5,
    fecha: "Hace 2 meses"
  },
  {
    id: "t-17",
    nombre: "Gabriela F.",
    ciudad: "Puebla (Angelópolis)",
    pais: "México",
    foto: "/testimonios/_DSC8159.webp",
    manto: "Bulldog Fluffy Isabella",
    comentario: "Su pelaje es increíblemente suave y denso. El seguimiento que nos dan después de la entrega demuestra su compromiso genuino con los cachorros.",
    rating: 5,
    fecha: "Hace 3 semanas"
  },
  {
    id: "t-18",
    nombre: "Santiago R.",
    ciudad: "Bucaramanga (Cabecera)",
    pais: "Colombia",
    foto: "/testimonios/IMG_2393.webp",
    manto: "Bulldog Fluffy Blue Solid",
    comentario: "Todo el proceso fue rápido y seguro. Excelente atención, contrato claro y un perrito que nos alegra la vida todos los días.",
    rating: 5,
    fecha: "Hace 1 mes"
  },
  {
    id: "t-19",
    nombre: "Claudia & Felipe",
    ciudad: "Cartagena (Bocagrande)",
    pais: "Colombia",
    foto: "/testimonios/IMG_2624.webp",
    manto: "Bulldog Fluffy Lilac",
    comentario: "La mejor decisión que pudimos tomar. Muy bien socializado, se adaptó de inmediato y es un espectáculo de cachorro.",
    rating: 5,
    fecha: "Hace 2 semanas"
  }
];
