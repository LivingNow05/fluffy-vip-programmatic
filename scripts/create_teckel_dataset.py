# -*- coding: utf-8 -*-
"""
Generador Maestro del Dataset de Historias Únicas para Teckel (Dachshund / Perro Salchicha)
Genera 100 historias 100% contextualizadas y enriquecidas cinológicamente para Programmatic SEO.
"""

import csv
import json
import os

OUTPUT_CSV = "/Users/anthony/Downloads/Fluffy/dataset_teckel_stories.csv"
DOMAIN = "http://dinastiateckel.com"
CATEGORY = "venta"

# Base de datos de 100 ciudades con metadatos contextuales hiperlocales
CITIES_DATA = [
    # --- COLOMBIA ---
    {
        "city_slug": "bogota", "city_name": "Bogotá", "country": "Colombia", "currency": "USD",
        "airport": "Aeropuerto Internacional El Dorado (BOG)",
        "neighborhoods": "Rosales, Chicó, Santa Ana y el Parque El Virrey",
        "climate_focus": "las frescas mañanas de la sabana y paseos protegidos con suéter ergonómico",
        "variety_focus": "Teckel Miniatura y Kaninchen de pelo largo sedoso y arlequín plata (Silver Dapple)",
        "lifestyle": "apartamentos de lujo con rampas de madera suave para proteger su columna de saltos en camas y sofás"
    },
    {
        "city_slug": "medellin", "city_name": "Medellín", "country": "Colombia", "currency": "USD",
        "airport": "Aeropuerto Internacional José María Córdova (MDE)",
        "neighborhoods": "El Poblado, Laureles, Llanogrande y Envigado",
        "climate_focus": "el clima primaveral y jardines residenciales",
        "variety_focus": "Teckel Kaninchen de pelo corto brillante y elegantes ejemplares Chocolate & Tan",
        "lifestyle": "caminatas en senderos arbolados usando arnés en 'Y' para preservar la alineación dorsolumbar"
    },
    {
        "city_slug": "cali", "city_name": "Cali", "country": "Colombia", "currency": "USD",
        "airport": "Aeropuerto Internacional Alfonso Bonilla Aragón (CLO)",
        "neighborhoods": "Ciudad Jardín, Santa Teresita, Granada y Pance",
        "climate_focus": "ambientes climatizados y paseos al atardecer bajo la brisa del Pacífico",
        "variety_focus": "Teckel Miniatura de pelo duro (Rauhhaar) con expresiva barba y cejas pobladas",
        "lifestyle": "vida familiar en condominios residenciales con hidratación fresca y zonas de descanso acolchadas"
    },
    {
        "city_slug": "barranquilla", "city_name": "Barranquilla", "country": "Colombia", "currency": "USD",
        "airport": "Aeropuerto Internacional Ernesto Cortissoz (BAQ)",
        "neighborhoods": "Alto Prado, Riomar, Villa Santos y el Gran Malecón",
        "climate_focus": "interiores frescos con aire acondicionado y recorridos costeros en horarios crepusculares",
        "variety_focus": "Teckel de pelo corto y exclusivo manto Isabella & Tan de suave tonalidad lila",
        "lifestyle": "adaptación perfecta a pisos residenciales modernos con juguetes de estimulación olfativa"
    },
    {
        "city_slug": "cartagena", "city_name": "Cartagena", "country": "Colombia", "currency": "USD",
        "airport": "Aeropuerto Internacional Rafael Núñez (CTG)",
        "neighborhoods": "Bocagrande, Castillogrande, Manga y la Ciudad Amurallada",
        "climate_focus": "ambientes interiores climatizados y paseos nocturnos con brisa marina",
        "variety_focus": "Teckel Kaninchen en Negro y Fuego (Black & Tan) clásico y de porte aristocrático",
        "lifestyle": "convivencia refinada en penthouses náuticos con supervisión médica y prevención de desniveles"
    },

    # --- MÉXICO ---
    {
        "city_slug": "cdmx", "city_name": "Ciudad de México", "country": "México", "currency": "MXN",
        "airport": "Aeropuerto Internacional Benito Juárez (MEX)",
        "neighborhoods": "Polanco, Condesa, Roma Norte, Lomas de Chapultepec y Santa Fe",
        "climate_focus": "caminatas urbanas en parques arbolados como México y España",
        "variety_focus": "Teckel Miniatura y Kaninchen en mantos Arlequín Chocolate y Pelo Largo con plumas sedosas",
        "lifestyle": "vida cosmopolita en departamentos con rampas anti-impacto y arneses ergonómicos antitirones"
    },
    {
        "city_slug": "guadalajara", "city_name": "Guadalajara", "country": "México", "currency": "MXN",
        "airport": "Aeropuerto Internacional de Guadalajara (GDL)",
        "neighborhoods": "Puerta de Hierro, Providencia, Colinas de San Javier y Chapalita",
        "climate_focus": "el clima cálido templado tapatío y tardes en terrazas residenciales",
        "variety_focus": "Teckel de Pelo Duro con arreglo profesional por técnica Hand-Stripping",
        "lifestyle": "hogares distinguidos donde la compañía afectuosa del salchicha complementa el dinamismo familiar"
    },
    {
        "city_slug": "monterrey", "city_name": "Monterrey", "country": "México", "currency": "MXN",
        "airport": "Aeropuerto Internacional de Monterrey (MTY)",
        "neighborhoods": "San Pedro Garza García, Valle Oriente, Chipinque y Cumbres",
        "climate_focus": "espacios climatizados protegidos del calor extremo y paseos matinales en la montaña",
        "variety_focus": "Teckel Kaninchen en Rojo Ciervo (Shaded Red) y Silver Dapple de estructura compacta",
        "lifestyle": "residencias exclusivas con alfombras olfativas interiores y estricto cuidado osteoarticular"
    },
    {
        "city_slug": "puebla", "city_name": "Puebla", "country": "México", "currency": "MXN",
        "airport": "Aeropuerto Internacional de Puebla (PBC)",
        "neighborhoods": "Angelópolis, La Paz, Lomas de Angelópolis y Zavaleta",
        "climate_focus": "temperaturas templadas con vistas a los volcanes y paseos tranquilos",
        "variety_focus": "Teckel Miniatura Negro & Fuego de líneas alemanas puras con certificación FCI",
        "lifestyle": "ambientes familiares tranquilos con supervisión veterinaria y prevención de escaleras"
    },
    {
        "city_slug": "toluca", "city_name": "Toluca", "country": "México", "currency": "MXN",
        "airport": "Aeropuerto Internacional de Toluca (TLC)",
        "neighborhoods": "Metepec, Providencia, San Carlos y Bellavista",
        "climate_focus": "las frescas temperaturas del altiplano con paseos abrigados",
        "variety_focus": "Teckel de Pelo Largo denso y abrigado en variedad Caoba y Chocolate",
        "lifestyle": "viviendas en clubes campestres con calefacción suave y áreas de juego de bajo impacto"
    },
    {
        "city_slug": "tijuana", "city_name": "Tijuana", "country": "México", "currency": "MXN",
        "airport": "Aeropuerto Internacional de Tijuana (TIJ)",
        "neighborhoods": "Playas de Tijuana, Cacho, Chapultepec y Zona Río",
        "climate_focus": "la brisa costera del Pacífico y el estilo de vida transfronterizo",
        "variety_focus": "Teckel Miniatura pelo corto y Dapple plata con pasaporte sanitario internacional",
        "lifestyle": "compañero ideal para viajes frecuentes en cabina gracias a su tamaño ligero y porte calmado"
    },
    {
        "city_slug": "leon", "city_name": "León", "country": "México", "currency": "MXN",
        "airport": "Aeropuerto Internacional del Bajío (BJX)",
        "neighborhoods": "Gran Jardín, Campestre, El Molino y Mayorca",
        "climate_focus": "el clima agradable del Bajío y tardes soleadas en patios privados",
        "variety_focus": "Teckel Kaninchen de circunferencia menor a 30 cm con pedigree internacional",
        "lifestyle": "integración armónica en residencias familiares con arnés pectoral que cuida la columna"
    },
    {
        "city_slug": "ciudad-juarez", "city_name": "Ciudad Juárez", "country": "México", "currency": "MXN",
        "airport": "Aeropuerto Internacional Abraham González (CJS)",
        "neighborhoods": "Campestre, Misiones, Campos Elíseos y San Marcos",
        "climate_focus": "ambientes climatizados protegidos del clima desértico",
        "variety_focus": "Teckel Miniatura pelo duro con pelaje protector impermeable y mirada viva",
        "lifestyle": "rutinas en interiores con juegos cognitivos y rampas acolchadas en el dormitorio"
    },
    {
        "city_slug": "torreon", "city_name": "Torreón", "country": "México", "currency": "MXN",
        "airport": "Aeropuerto Internacional Francisco Sarabia (TRC)",
        "neighborhoods": "Campestre La Rosita, Senderos, Viñedos y El Fresno",
        "climate_focus": "interiores frescos con aire acondicionado y salidas a primera hora",
        "variety_focus": "Teckel pelo corto en Chocolate & Tan de brillo sedoso y constitución atlética",
        "lifestyle": "compañero fiel en casas club con superficies niveladas y chequeos de salud al día"
    },
    {
        "city_slug": "queretaro", "city_name": "Querétaro", "country": "México", "currency": "MXN",
        "airport": "Aeropuerto Intercontinental de Querétaro (QRO)",
        "neighborhoods": "Juriquilla, El Campanario, Jurica y Álamos",
        "climate_focus": "el excelente clima templado y áreas verdes en fraccionamientos privados",
        "variety_focus": "Teckel Miniatura Arlequín Silver Dapple con ojos zafiro y pigmentación perfecta",
        "lifestyle": "vida campestre y urbana combinada con transporte VIP y revisión ortopédica preventiva"
    },
    {
        "city_slug": "san-luis-potosi", "city_name": "San Luis Potosí", "country": "México", "currency": "MXN",
        "airport": "Aeropuerto Internacional Ponciano Arriaga (SLP)",
        "neighborhoods": "Lomas del Pedregal, La Loma Club de Golf, Villantigua y Tangamanga",
        "climate_focus": "el ambiente templado y caminatas seguras por el Parque Tangamanga",
        "variety_focus": "Teckel Kaninchen Negro & Fuego de pureza genealógica avalada por la FCM/FCI",
        "lifestyle": "convivencia familiar tranquila con accesorios de descanso ergonómicos de alta gama"
    },
    {
        "city_slug": "merida", "city_name": "Mérida", "country": "México", "currency": "MXN",
        "airport": "Aeropuerto Internacional Manuel Crescencio Rejón (MID)",
        "neighborhoods": "Montebello, Altabrisa, Temozón Norte y La Ceiba",
        "climate_focus": "residencias modernas con clima artificial y salidas nocturnas frescas",
        "variety_focus": "Teckel pelo corto en tono Isabella & Tan que no retiene exceso de temperatura",
        "lifestyle": "vida relajada en terrazas de piedra protegidas del sol con agua limpia constante"
    },
    {
        "city_slug": "aguascalientes", "city_name": "Aguascalientes", "country": "México", "currency": "MXN",
        "airport": "Aeropuerto Internacional Lic. Jesús Terán Peredo (AGU)",
        "neighborhoods": "Campestre, Bosques, Pulgas Pandas y San Telmo",
        "climate_focus": "el cielo despejado y tardes serenas en jardines residenciales",
        "variety_focus": "Teckel de Pelo Largo con plumas sedosas en orejas y cola en color Caoba intenso",
        "lifestyle": "hogares afectuosos con educación en positivo y cuidado riguroso de la espina dorsal"
    },
    {
        "city_slug": "hermosillo", "city_name": "Hermosillo", "country": "México", "currency": "MXN",
        "airport": "Aeropuerto Internacional General Ignacio Pesqueira García (HMO)",
        "neighborhoods": "Los Lagos, Pitic, La Joya y Valle Escondido",
        "climate_focus": "confort interior climatizado con salidas reguladas antes de que caliente el pavimento",
        "variety_focus": "Teckel Miniatura pelo corto Chocolate & Tan libre de anomalías oculares (PRA Clear)",
        "lifestyle": "convivencia de élite en privadas residenciales con supervisión nutricional y médica"
    },
    {
        "city_slug": "saltillo", "city_name": "Saltillo", "country": "México", "currency": "MXN",
        "airport": "Aeropuerto Internacional Plan de Guadalupe (SLW)",
        "neighborhoods": "Los Manantiales, San Patricio, El Campanario y Parque Centro",
        "climate_focus": "el clima semidesértico fresco y paseos matinales en plazas arboladas",
        "variety_focus": "Teckel de Pelo Duro con barba clásica de noble porte y temperamento dulce",
        "lifestyle": "hogares seguros equipados con rampas suaves para evitar impactos articulares"
    }
]

# Plantillas de países para las 80 ciudades restantes
ADDITIONAL_CITIES = [
    # COSTA RICA (5)
    ("san-jose", "San José", "Costa Rica", "USD", "Aeropuerto Internacional Juan Santamaría (SJO)", "Escazú, Santa Ana, Rohrmoser y Los Yoses", "el clima templado del Valle Central", "Teckel Miniatura pelo corto y Dapple", "condominios de montaña con rampas ergonómicas"),
    ("alajuela", "Alajuela", "Costa Rica", "USD", "Aeropuerto Internacional Juan Santamaría (SJO)", "La Garita, El Coyol y Hacienda Espinal", "tardes cálidas y jardines tropicales", "Teckel Kaninchen de pelo largo sedoso", "residencias campestres con arnés en Y"),
    ("cartago", "Cartago", "Costa Rica", "USD", "Aeropuerto Internacional Juan Santamaría (SJO)", "Taras, Tres Ríos, Dulce Nombre y Tejar", "el aire fresco de montaña", "Teckel de Pelo Duro con cejas y barba tupida", "ambientes tranquilos con cuidados de columna"),
    ("heredia", "Heredia", "Costa Rica", "USD", "Aeropuerto Internacional Juan Santamaría (SJO)", "Cariari, San Joaquín, Belén y San Pablo", "la tranquilidad de las zonas residenciales", "Teckel Chocolate & Tan con pedigree FCI", "apartamentos modernos con estimulación olfativa"),
    ("puntarenas", "Puntarenas", "Costa Rica", "USD", "Aeropuerto Internacional Juan Santamaría (SJO)", "Jaco, Manuel Antonio, Herradura y Quepos", "villas costeras con aire acondicionado", "Teckel pelo corto en tono Isabella exclusivo", "descanso climatizado tras paseos suaves"),

    # EL SALVADOR (5)
    ("san-salvador", "San Salvador", "El Salvador", "USD", "Aeropuerto Internacional de El Salvador (SAL)", "San Benito, Escalón, Santa Elena y Antiguo Cuscatlán", "la vida urbana y parques residenciales", "Teckel Miniatura Arlequín Plata y Negro Fuego", "torres de lujo con rampas anti-impacto"),
    ("santa-ana", "Santa Ana", "El Salvador", "USD", "Aeropuerto Internacional de El Salvador (SAL)", "Santa Lucía, El Trébol y Chalchuapa", "tardes apacibles en residencias coloniales", "Teckel de Pelo Largo con plumas brillantes", "paseos con arnés pectoral que cuida la espalda"),
    ("san-miguel", "San Miguel", "El Salvador", "USD", "Aeropuerto Internacional de El Salvador (SAL)", "Ciudad Jardín, Roosevelt y El Zamorano", "espacios interiores climatizados", "Teckel Kaninchen pelo corto Chocolate", "vida hogareña afectuosa y tranquila"),
    ("soyapango", "Soyapango", "El Salvador", "USD", "Aeropuerto Internacional de El Salvador (SAL)", "Prados de Venecia, Monte Carmelo y Sierra Morena", "la calidez del hogar familiar", "Teckel Miniatura Negro & Fuego con vacunas al día", "compañía alegre para toda la familia"),
    ("santa-tecla", "Santa Tecla", "El Salvador", "USD", "Aeropuerto Internacional de El Salvador (SAL)", "La Cordillera, Merliot, Pinares de Suiza y Utila", "el clima fresco de las faldas del volcán", "Teckel de Pelo Duro con linaje europeo", "caminatas seguras en parques ecológicos"),

    # GUATEMALA (5)
    ("ciudad-de-guatemala", "Ciudad de Guatemala", "Guatemala", "USD", "Aeropuerto Internacional La Aurora (GUA)", "Zona 14, Zona 10 (Zona Viva), Cayalá y Carretera a El Salvador", "el clima templado de la eterna primavera", "Teckel Kaninchen y Miniatura en Arlequín Dapple y Pelo Largo", "apartamentos exclusivos y residencias con rampas de madera"),
    ("mixco", "Mixco", "Guatemala", "USD", "Aeropuerto Internacional La Aurora (GUA)", "San Cristóbal, Bosques de San Nicolás y El Naranjo", "la frescura de los valles guatemaltecos", "Teckel Miniatura pelo corto Chocolate & Tan", "hogares seguros con arnés en Y para paseos"),
    ("villa-nueva", "Villa Nueva", "Guatemala", "USD", "Aeropuerto Internacional La Aurora (GUA)", "Bárcenas, San José y Planes de Bárcenas", "residenciales cerrados con jardines", "Teckel de linaje puro con pedigree FCI internacional", "convivencia familiar alegre y de bajo impacto"),
    ("quetzaltenango", "Quetzaltenango", "Guatemala", "USD", "Aeropuerto Internacional La Aurora (GUA)", "Zonas 3, 7, 9 y La Democracia", "el frío del altiplano con suéteres abrigados", "Teckel de Pelo Largo denso y abrigado", "descanso cálido junto a la familia"),
    ("antigua-guatemala", "Antigua Guatemala", "Guatemala", "USD", "Aeropuerto Internacional La Aurora (GUA)", "Calle del Arco, San Pedro Las Huertas y Santa Ana", "recorridos empedrados en brazos o sobre césped", "Teckel de Pelo Duro con barba noble y rústica", "elegancia clásica en casas coloniales"),

    # HONDURAS (5)
    ("tegucigalpa", "Tegucigalpa", "Honduras", "USD", "Aeropuerto Internacional de Palmerola (XPL)", "Lomas del Guijarro, Palmira, Florencia y El Hatillo", "el aire de montaña y pinares", "Teckel Miniatura en Negro y Fuego con pedigree", "residencias con rampas y chequeos de columna"),
    ("san-pedro-sula", "San Pedro Sula", "Honduras", "USD", "Aeropuerto Internacional Ramón Villeda Morales (SAP)", "Trejo, Río de Piedras, Rancho El Coco y Jardines del Valle", "espacios frescos con aire acondicionado", "Teckel Kaninchen de pelo corto brillante", "convivencia cómoda en pisos residenciales"),
    ("choloma", "Choloma", "Honduras", "USD", "Aeropuerto Internacional Ramón Villeda Morales (SAP)", "La Mora, Las Colinas y El Centro", "hogares familiares y tranquilos", "Teckel de porte compacto y carácter dulce", "cuidados preventivos y alimentación premium"),
    ("la-ceiba", "La Ceiba", "Honduras", "USD", "Aeropuerto Internacional Golosón (LCE)", "Barrio La Isla, Mazapán y Bella Vista", "la cercanía del Caribe y brisa marina", "Teckel Chocolate & Tan con esquema de vacunación", "paseos crepusculares protegidos del sol"),
    ("el-progreso", "El Progreso", "Honduras", "USD", "Aeropuerto Internacional Ramón Villeda Morales (SAP)", "Palermo, Las Acacias y Manganditos", "tardes amenas en familia", "Teckel de raza pura con microchip ISO", "integración hogareña con afecto total"),

    # NICARAGUA (5)
    ("managua", "Managua", "Nicaragua", "USD", "Aeropuerto Internacional Augusto C. Sandino (MGA)", "Villa Fontana, Las Colinas, Santo Domingo y Los Robles", "interiores frescos y climatizados", "Teckel Miniatura Arlequín y Pelo Corto", "terrazas privadas y rampas para evitar saltos"),
    ("leon-ni", "León", "Nicaragua", "USD", "Aeropuerto Internacional Augusto C. Sandino (MGA)", "Sutiaba, El Calvario y San Felipe", "la historia colonial y tardes apacibles", "Teckel Kaninchen Negro & Fuego de gran nobleza", "paseos tempraneros con arnés ergonómico"),
    ("masaya", "Masaya", "Nicaragua", "USD", "Aeropuerto Internacional Augusto C. Sandino (MGA)", "Monimbó, San Jerónimo y San Juan", "el clima fresco cerca de la laguna", "Teckel de Pelo Largo con plumas sedosas", "entornos familiares de gran calidez"),
    ("chinandega", "Chinandega", "Nicaragua", "USD", "Aeropuerto Internacional Augusto C. Sandino (MGA)", "Santa Ana, El Calvario y San Antonio", "ambientes protegidos del calor", "Teckel pelo corto Chocolate & Tan", "descanso en camas ortopédicas de espuma"),
    ("granada", "Granada", "Nicaragua", "USD", "Aeropuerto Internacional Augusto C. Sandino (MGA)", "Calle Real Xalteva, La Calzada y Los Cerros", "patios coloniales sombreados", "Teckel de Pelo Duro con personalidad aristocrática", "compañía fiel en casas coloniales"),

    # PANAMÁ (5)
    ("panama", "Panamá", "Panamá", "USD", "Aeropuerto Internacional de Tocumen (PTY)", "Punta Pacífica, Costa del Este, Santa María y San Francisco", "la vida en rascacielos climatizados con vista al mar", "Teckel Kaninchen y Miniatura en Isabella & Tan y Silver Dapple", "apartamentos inteligentes con alfombras de olfato y rampas"),
    ("colon", "Colón", "Panamá", "USD", "Aeropuerto Internacional de Tocumen (PTY)", "Margarita, Coco Solo y Costa Verde", "la costa caribeña y áreas residenciales", "Teckel de pelo corto con pedigree internacional", "traslado en cabina climatizada con llegada segura"),
    ("david", "David", "Panamá", "USD", "Aeropuerto Internacional Enrique Malek (DAV)", "San Mateo, Doleguita y Las Lomas", "la cercanía a las tierras altas chiricanas", "Teckel de Pelo Largo con manto caoba", "paseos en senderos verdes con arnés en Y"),
    ("san-miguelito", "San Miguelito", "Panamá", "USD", "Aeropuerto Internacional de Tocumen (PTY)", "Brisas del Golf, Villa Lucre y El Crisol", "comunidades residenciales modernas", "Teckel Miniatura Negro & Fuego con microchip", "integración con niños y familias activas"),
    ("la-chorrera", "La Chorrera", "Panamá", "USD", "Aeropuerto Internacional de Tocumen (PTY)", "Costa Verde, Barrio Colón y Balboa", "la tranquilidad de las nuevas zonas de expansión", "Teckel Chocolate & Tan de estructura equilibrada", "cuidado preventivo del dorso en casas de una planta"),

    # REPÚBLICA DOMINICANA (5)
    ("santo-domingo", "Santo Domingo", "República Dominicana", "USD", "Aeropuerto Internacional Las Américas (SDQ)", "Piantini, Naco, Bella Vista, Los Cacicazgos y Anacaona", "la vibrante vida en torres residenciales de lujo", "Teckel Miniatura y Kaninchen en Silver Dapple y pelo corto", "apartamentos con aire central y rampas suaves para muebles"),
    ("santiago-rd", "Santiago de los Caballeros", "República Dominicana", "USD", "Aeropuerto Internacional del Cibao (STI)", "Los Cerros de Gurabo, Villa Olga y La Trinitaria", "el ambiente acogedor del Cibao", "Teckel de Pelo Duro con expresiva barba y cejas", "caminatas en jardines privados sin escalones"),
    ("la-romana", "La Romana", "República Dominicana", "USD", "Aeropuerto Internacional de La Romana (LRM)", "Casa de Campo, Buena Vista y Caleta", "villas exclusivas con vistas al mar y campos de golf", "Teckel Kaninchen en tono Chocolate & Tan de lujo", "estilo de vida resort con transporte VIP asistido"),
    ("san-pedro-macoris", "San Pedro de Macorís", "República Dominicana", "USD", "Aeropuerto Internacional Las Américas (SDQ)", "Miramar, Placer Bonito y Los Maestros", "la brisa marina y tardes en terrazas", "Teckel pelo corto con pedigree de exportación", "descanso fresco en colchonetas ortopédicas"),
    ("punta-cana", "Punta Cana", "República Dominicana", "USD", "Aeropuerto Internacional de Punta Cana (PUJ)", "Cap Cana, Punta Cana Resort, Cocotal y Bávaro", "el enclave caribeño más exclusivo", "Teckel Miniatura en Isabella & Tan y Arlequín", "vida relajada en interiores frescos con supervisión VIP"),

    # ARGENTINA (5)
    ("buenos-aires", "Buenos Aires", "Argentina", "USD", "Aeropuerto Internacional Ministro Pistarini (EZE)", "Recoleta, Palermo Soho, Puerto Madero y Belgrano", "paseos por parques emblemáticos como los Bosques de Palermo", "Teckel Kaninchen y Miniatura de pelo largo y corto en Black & Tan", "pisos elegantes con rampas de diseño para proteger su espalda"),
    ("cordoba", "Córdoba", "Argentina", "USD", "Aeropuerto Internacional Ingeniero Aeronáutico Ambrosio Taravella (COR)", "Nueva Córdoba, Cerro de las Rosas y Villa Belgrano", "el clima mediterráneo y las sierras cercanas", "Teckel de Pelo Duro con estándar alemán de caza y compañía", "arneses en Y para paseos saludables sin tensión en cuello"),
    ("rosario", "Rosario", "Argentina", "USD", "Aeropuerto Internacional Rosario Islas Malvinas (ROS)", "Puerto Norte, Pichincha y Boulevard Oroño", "caminatas junto al Río Paraná en horarios templados", "Teckel Chocolate & Tan con pruebas genéticas de retina (PRA)", "apartamentos modernos con enriquecimiento olfativo"),
    ("mendoza", "Mendoza", "Argentina", "USD", "Aeropuerto Internacional Gobernador Francisco Gabrielli (MDZ)", "Chacras de Coria, Dalvian y Quinta Sección", "el clima seco al pie de la Cordillera de los Andes", "Teckel Miniatura Arlequín Dapple con ojos zafiro", "residencias vitivinícolas con jardines planos"),
    ("la-plata", "La Plata", "Argentina", "USD", "Aeropuerto Internacional Ministro Pistarini (EZE)", "City Bell, Villa Elisa y el Casco Urbano", "las arboledas diagonales y plazas niveladas", "Teckel pelo largo en tono Caoba Rojizo", "hogares familiares con vacunación completa y microchip"),

    # BOLIVIA (5)
    ("la-paz", "La Paz", "Bolivia", "BOB", "Aeropuerto Internacional El Alto (LPB)", "Calacoto, La Florida, Achumani, San Miguel y Cota Cota", "la calidez de la Zona Sur paceña protegida del frío", "Teckel de Pelo Largo denso y Kaninchen abrigado", "pisos residenciales con suéter suave y rampas de descanso"),
    ("santa-cruz", "Santa Cruz de la Sierra", "Bolivia", "BOB", "Aeropuerto Internacional Viru Viru (VVI)", "Equipetrol, Las Palmas, Urubó y Sirari", "condominios modernos con aire acondicionado", "Teckel Miniatura pelo corto en Chocolate y Dapple", "paseos nocturnos con arnés que no bloquea la escápula"),
    ("cochabamba", "Cochabamba", "Bolivia", "BOB", "Aeropuerto Internacional Jorge Wilstermann (CBB)", "Cala Cala, Queru Queru, Tupuraya y Sarco", "el clima templado del valle cochabambino", "Teckel de Pelo Duro con barba aristocrática", "vida en casas con jardín sin desniveles pronunciados"),
    ("sucre", "Sucre", "Bolivia", "BOB", "Aeropuerto Internacional de Alcantarí (ALC)", "San Matías, Poconas y el Casco Histórico", "la tranquilidad de la Ciudad Blanca", "Teckel Kaninchen Negro & Fuego de porte noble", "convivencia en patios coloniales con atención médica VIP"),
    ("el-alto", "El Alto", "Bolivia", "BOB", "Aeropuerto Internacional El Alto (LPB)", "Ciudad Satélite, Villa Dolores y 16 de Julio", "el rigor del altiplano con interiores climatizados", "Teckel de pelo largo con excelente cobertura térmica", "cuidados especiales de temperatura y nutrición premium"),

    # BRASIL (5)
    ("sao-paulo", "São Paulo", "Brasil", "BRL", "Aeroporto Internacional de Guarulhos (GRU)", "Jardins, Itaim Bibi, Moema, Higienópolis e Vila Nova Conceição", "a vida cosmopolita e passeios no Parque Ibirapuera", "Teckel Kaninchen e Miniatura Pelo Longo e Dapple Prata", "apartamentos de alto padrão com rampas ergonômicas para sofás"),
    ("rio-de-janeiro", "Rio de Janeiro", "Brasil", "BRL", "Aeroporto Internacional do Galeão (GIG)", "Leblon, Ipanema, Lagoa, Barra da Tijuca e Copacabana", "o calçadão nas primeiras horas da manhã com brisa do mar", "Teckel Pelo Curto em cores Chocolate e Preto e Fogo", "interiores frescos com ar-condicionado e peitoral em Y"),
    ("brasilia", "Brasília", "Brasil", "BRL", "Aeroporto Internacional de Brasília (BSB)", "Lago Sul, Lago Norte, Asa Sul e Sudoeste", "as superquadras arborizadas e gramados planos", "Teckel de Pelo Duro com barba e sobrancelhas nobres", "residências amplas com controle preventivo de coluna"),
    ("salvador", "Salvador", "Brasil", "BRL", "Aeroporto Internacional de Salvador (SSA)", "Vitória, Graça, Horto Florestal e Barra", "a atmosfera acolhedora e lares à beira-mar", "Teckel Kaninchen em padrão Dapple exclusivo", "cuidados com hidratação e proteção contra o calor"),
    ("fortaleza", "Fortaleza", "Brasil", "BRL", "Aeroporto Internacional de Fortaleza (FOR)", "Meireles, Aldeota, Cocó e Porto das Dunas", "ambientes climatizados voltados para a orla", "Teckel Pelo Curto com pedigree internacional FCI", "vida relaxante em família com suporte veterinário VIP"),

    # CHILE (5)
    ("santiago", "Santiago", "Chile", "CLP", "Aeropuerto Internacional Arturo Merino Benítez (SCL)", "Las Condes, Vitacura, Providencia, Lo Barnechea y La Dehesa", "paseos por el Parque Bicentenario y el Parque Araucano", "Teckel Kaninchen y Miniatura de pelo largo sedoso y arlequín", "departamentos modernos con rampas acolchadas y arnés en Y"),
    ("valparaiso", "Valparaíso", "Chile", "CLP", "Aeropuerto Internacional Arturo Merino Benítez (SCL)", "Cerro Alegre, Cerro Concepción, Reñaca y Concón", "las vistas panorámicas al océano y calles costeras", "Teckel de Pelo Duro con manto impermeable y barba clásica", "cuidados al subir colinas, usando transporte seguro en brazos"),
    ("concepcion", "Concepción", "Chile", "CLP", "Aeropuerto Internacional Carriel Sur (CCP)", "Lomas de San Andrés, Pedro de Valdivia y Andalué", "el clima templado sureño y paseos en lagunas urbanas", "Teckel Miniatura Negro & Fuego de linaje alemán", "hogares cálidos con pruebas genéticas de salud certificadas"),
    ("la-serena", "La Serena", "Chile", "CLP", "Aeropuerto La Florida (LSC)", "Avenida del Mar, San Joaquín y Cerro Grande", "el cielo despejado y la brisa marina del norte", "Teckel Chocolate & Tan de pelo corto brillante", "convivencia apacible en condominios residenciales"),
    ("antofagasta", "Antofagasta", "Chile", "CLP", "Aeropuerto Internacional Andrés Sabella (ANF)", "Jardines del Sur, Playa Blanca y Costa Laguna", "el borde costero protegido del sol del mediodía", "Teckel Kaninchen Dapple con pasaporte y microchip ISO", "integración hogareña con nutrición y chequeos de columna"),

    # ECUADOR (5)
    ("quito", "Quito", "Ecuador", "USD", "Aeropuerto Internacional Mariscal Sucre (UIO)", "Cumbayá, Tumbaco, González Suárez, La Carolina y Monteserrín", "el clima fresco de montaña y valles andinos", "Teckel Miniatura y Kaninchen de pelo largo y pelo corto", "apartamentos con rampas de madera y arnés pectoral ergonómico"),
    ("guayaquil", "Guayaquil", "Ecuador", "USD", "Aeropuerto Internacional José Joaquín de Olmedo (GYE)", "Samborondón, Puerto Santa Ana, Urdesa y Los Ceibos", "la vida en islas y condominios con aire acondicionado", "Teckel de pelo corto en color Chocolate y Negro Fuego", "paseos nocturnos en malecones privados con agua fresca"),
    ("cuenca", "Cuenca", "Ecuador", "USD", "Aeropuerto Internacional Mariscal La Mar (CUE)", "Puertas del Sol, Challuabamba, El Vergel y San Sebastián", "caminatas junto a las orillas del río Tomebamba", "Teckel de Pelo Duro con barba tupida y porte noble", "casas tradicionales con cuidado preventivo de escaleras"),
    ("santo-domingo-ec", "Santo Domingo", "Ecuador", "USD", "Aeropuerto Internacional Mariscal Sucre (UIO)", "Los Rosales, Zaracay y Bombolí", "el verdor tropical y tardes familiares", "Teckel Kaninchen con pedigree internacional FCI", "entornos seguros con tapetes olfativos interactivos"),
    ("ambato", "Ambato", "Ecuador", "USD", "Aeropuerto Internacional Mariscal Sucre (UIO)", "Ficoa, Miraflores, Atocha y La Merced", "los jardines floridos y clima templado del valle", "Teckel Miniatura Rojo Ciervo de brillo sedoso", "compañía fiel con esquema completo de vacunación"),

    # PARAGUAY (5)
    ("asuncion", "Asunción", "Paraguay", "PYG", "Aeropuerto Internacional Silvio Pettirossi (ASU)", "Villa Morra, Carmelitas, Manorá, Los Laureles y Ycuá Satí", "residencias arboladas con espacios climatizados", "Teckel Miniatura Arlequín Dapple y Chocolate & Tan", "casas de una sola planta y rampas para camas y sillones"),
    ("ciudad-del-este", "Ciudad del Este", "Paraguay", "PYG", "Aeropuerto Internacional Guaraní (AGT)", "Área 1, Country Club, Boquerón y Paraná Country", "la vida en clubes campestres privados", "Teckel Kaninchen de pelo corto y porte distinguido", "paseos matinales con arnés en Y sin tirones"),
    ("san-lorenzo", "San Lorenzo", "Paraguay", "PYG", "Aeropuerto Internacional Silvio Pettirossi (ASU)", "Barcequillo, San Antonio y Villa Industrial", "hogares afectuosos con patios nivelados", "Teckel Negro & Fuego de linaje puro con microchip", "convivencia armoniosa con niños y adultos"),
    ("luque", "Luque", "Paraguay", "PYG", "Aeropuerto Internacional Silvio Pettirossi (ASU)", "Zárate Isla, Tarumandy y Rincón", "la cercanía a la terminal aérea y áreas verdes", "Teckel de Pelo Largo con estandarte sedoso en cola", "recepción VIP directa en el aeropuerto"),
    ("capiata", "Capiatá", "Paraguay", "PYG", "Aeropuerto Internacional Silvio Pettirossi (ASU)", "Posta Ybycuá, Candelaria y Naranjaty", "ambientes familiares tranquilos", "Teckel de estructura fuerte y temperamento alegre", "atención veterinaria y garantías de salud por escrito"),

    # PERÚ (5)
    ("lima", "Lima", "Perú", "USD", "Aeropuerto Internacional Jorge Chávez (LIM)", "Miraflores, San Isidro, Barranco, Surco (Chacarilla) y La Molina", "caminatas por el Malecón de Miraflores y parques nivelados", "Teckel Kaninchen y Miniatura en Silver Dapple y Pelo Largo", "departamentos de lujo con rampas anti-impacto y arnés en Y"),
    ("arequipa", "Arequipa", "Perú", "USD", "Aeropuerto Internacional Rodríguez Ballón (AQP)", "Cayma, Yanahuara, Cerro Colorado y Vallecito", "el sol eterno y las terrazas de sillar", "Teckel de Pelo Duro con barba rústica y carácter valiente", "ambientes residenciales con chequeos de columna"),
    ("trujillo", "Trujillo", "Perú", "USD", "Aeropuerto Internacional Capitán FAP Carlos Martínez de Pinillos (TRU)", "El Golf, California, Las Quintanas y Huanchaco", "la primavera norteña y tardes tranquilas", "Teckel Chocolate & Tan de pelo corto reluciente", "vida familiar con alimentación balanceada y pedigree FCI"),
    ("chiclayo", "Chiclayo", "Perú", "USD", "Aeropuerto Internacional Capitán FAP José A. Quiñones (CIX)", "Santa Victoria, Los Parques y Pimentel", "la calidez costeña y brisa marina", "Teckel Negro & Fuego con test de retina cord1-PRA Clear", "descanso climatizado y paseos sin escaleras"),
    ("piura", "Piura", "Perú", "USD", "Aeropuerto Internacional Capitán FAP Guillermo Concha Iberico (PIU)", "Los Ejidos, Miraflores y Club Grau", "viviendas frescas con ventilación y áreas protegidas", "Teckel Kaninchen Isabella & Tan de exclusiva tonalidad", "cuidados de temperatura y transporte en cabina VIP"),

    # URUGUAY (5)
    ("montevideo", "Montevideo", "Uruguay", "USD", "Aeropuerto Internacional de Carrasco (MVD)", "Carrasco, Pocitos, Punta Carretas, Malvín y Punta Gorda", "paseos por la Rambla y parques como Villa Biarritz", "Teckel Kaninchen y Miniatura en pelo largo y Dapple plata", "apartamentos con rampas de diseño y arneses ergonómicos"),
    ("salto", "Salto", "Uruguay", "USD", "Aeropuerto Internacional de Carrasco (MVD)", "Costanera Norte, Centro y Arenitas Blancas", "tardes apacibles cerca del río", "Teckel de Pelo Duro con barba y cejas aristocráticas", "hogares serenos con garantía médica contractual"),
    ("ciudad-de-la-costa", "Ciudad de la Costa", "Uruguay", "USD", "Aeropuerto Internacional de Carrasco (MVD)", "Shangrilá, Lagomar, Solymar y El Pinar", "la serenidad de los balnearios y pinares", "Teckel Chocolate & Tan de pelo corto suave", "caminatas en senderos de arena firme sin desniveles"),
    ("paysandu", "Paysandú", "Uruguay", "USD", "Aeropuerto Internacional de Carrasco (MVD)", "San Félix, Bella Vista y Zona Puerto", "la vida ribereña en familia", "Teckel Negro & Fuego con microchip ISO y pedigree", "integración en casas con superficies planas"),
    ("maldonado", "Maldonado / Punta del Este", "Uruguay", "USD", "Aeropuerto Internacional de Laguna del Sauce (PDP)", "Punta del Este, La Barra, Manantiales y Pinares", "el estilo de vida náutico y playas exclusivas", "Teckel Miniatura en manto Isabella & Tan y Silver Dapple", "recepción VIP en aeropuerto con atención personalizada"),

    # VENEZUELA (5)
    ("caracas", "Caracas", "Venezuela", "USD", "Aeropuerto Internacional de Maiquetía Simón Bolívar (CCS)", "La Lagunita, Altamira, Los Palos Grandes, Valle Arriba y El Country", "el clima fresco del valle a los pies de El Ávila", "Teckel Kaninchen y Miniatura en Pelo Largo y Arlequín", "residencias de lujo con rampas acolchadas y arnés en Y"),
    ("maracaibo", "Maracaibo", "Venezuela", "USD", "Aeropuerto Internacional La Chinita (MAR)", "La Virginia, El Milagro, Bella Vista y Santa Rita", "interiores frescos con aire acondicionado constante", "Teckel pelo corto en Chocolate y Negro Fuego", "paseos nocturnos con agua fresca y descanso suave"),
    ("valencia", "Valencia", "Venezuela", "USD", "Aeropuerto Internacional Arturo Michelena (VLN)", "Guataparo, El Parral, La Viña y Prebo", "los clubes campestres y calles arboladas", "Teckel de Pelo Duro con pelaje protector y gran vivacidad", "convivencia armónica con prevención de saltos"),
    ("barquisimeto", "Barquisimeto", "Venezuela", "USD", "Aeropuerto Internacional Jacinto Lara (BRM)", "Nueva Segovia, El Parral y Cabudare", "los hermosos atardeceres larenses", "Teckel Miniatura de líneas europeas con pedigree", "vida familiar afectuosa y juegos de olfato"),
    ("maracay", "Maracay", "Venezuela", "USD", "Aeropuerto Internacional de Maiquetía Simón Bolívar (CCS)", "El Castaño, Las Delicias y Calicanto", "la frescura cercana al Parque Henri Pittier", "Teckel Rojo Ciervo y Dapple con cartilla completa", "llegada en cabina con supervisión VIP personalizada")
]

def build_story(city_name, country, neighborhoods, climate_focus, variety_focus, lifestyle, airport):
    """Construye una historia local única, fluida y cinológicamente rica sin frases robóticas."""
    story = (
        f"En {city_name}, {country}, el Teckel (perro salchicha) se ha posicionado como una de las razas más admiradas "
        f"por familias y amantes de los caninos selectos que residen en áreas como {neighborhoods}. "
        f"Nuestros ejemplares destacan por su morfología equilibrada, destacando variedades como {variety_focus}. "
        f"Gracias a su inteligencia y tamaño compacto, se adaptan a la perfección a {lifestyle}, disfrutando de {climate_focus}. "
        f"Como criadero especializado de linaje internacional, todos nuestros cachorros provienen de reproductores con riguroso cribado radiológico "
        f"de calcificaciones discales (prevención de IVDD) y pruebas de ADN libres de atrofia progresiva de retina (cord1-PRA Clear). "
        f"Cada ejemplar se entrega con su certificado de pedigree oficial FCI, microchip subcutáneo internacional, cartilla sanitaria al día "
        f"y contrato de garantía genética. Gestionamos un servicio de traslado VIP con supervisión personalizada en cabina, "
        f"coordinando una entrega segura y puntual en el {airport}."
    )
    return story

def main():
    all_rows = []
    
    # Procesar las primeras 20 ciudades detalladas
    for item in CITIES_DATA:
        slug = f"teckel-{item['city_slug']}"
        h1 = f"Teckel en {item['city_name']} | Criadero Especializado de Perro Salchicha"
        meta = (
            f"Criadero exclusivo de Teckel (perro salchicha) en {item['city_name']}, {item['country']}. "
            f"Cachorros miniatura y kaninchen con pedigree FCI, genética certificada y entrega VIP."
        )
        story = build_story(
            item['city_name'], item['country'], item['neighborhoods'],
            item['climate_focus'], item['variety_focus'], item['lifestyle'],
            item['airport']
        )
        all_rows.append({
            "Dominio": DOMAIN,
            "Categoría": CATEGORY,
            "URL Final (Slug)": slug,
            "H1 Título": h1,
            "Meta Descripción": meta,
            "Moneda": item['currency'],
            "País": item['country'],
            "Aeropuerto": item['airport'],
            "Historia Local": story
        })
        
    # Procesar las 80 ciudades adicionales
    for (city_slug, city_name, country, currency, airport, neighborhoods, climate, variety, lifestyle) in ADDITIONAL_CITIES:
        slug = f"teckel-{city_slug}"
        h1 = f"Teckel en {city_name} | Criadero Especializado de Perro Salchicha"
        meta = (
            f"Venta de cachorros Teckel en {city_name}, {country}. Criadero ético de perro salchicha miniatura y kaninchen "
            f"con pedigree FCI, salud garantizada y envío VIP."
        )
        story = build_story(city_name, country, neighborhoods, climate, variety, lifestyle, airport)
        all_rows.append({
            "Dominio": DOMAIN,
            "Categoría": CATEGORY,
            "URL Final (Slug)": slug,
            "H1 Título": h1,
            "Meta Descripción": meta,
            "Moneda": currency,
            "País": country,
            "Aeropuerto": airport,
            "Historia Local": story
        })
        
    # Escribir el CSV final con formato y comillas perfectas
    fieldnames = [
        "Dominio", "Categoría", "URL Final (Slug)", "H1 Título",
        "Meta Descripción", "Moneda", "País", "Aeropuerto", "Historia Local"
    ]
    
    with open(OUTPUT_CSV, mode="w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames, quoting=csv.QUOTE_MINIMAL)
        writer.writeheader()
        for row in all_rows:
            writer.writerow(row)
            
    print(f"✅ Dataset de Teckels generado con éxito: {len(all_rows)} filas en {OUTPUT_CSV}")

if __name__ == "__main__":
    main()
