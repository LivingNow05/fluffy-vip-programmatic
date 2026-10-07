export interface PetPark {
  nombre: string;
  zona: string;
  descripcion: string;
  destacado: string;
}

export interface CityClimateInfo {
  tipoClima: string;
  tempPromedio: string;
  adaptacionFluffy: string;
  horarioPaseo: string;
  consejosTermicos: string[];
}

export interface CityLocalGuide {
  clima: CityClimateInfo;
  parques: PetPark[];
}

// Base de datos curada de ciudades clave de alto impacto
const curatedCityData: Record<string, CityLocalGuide> = {
  // COLOMBIA
  'Bogotá': {
    clima: {
      tipoClima: 'Frío de Montaña Andina (Sabana)',
      tempPromedio: '14°C - 19°C (Altitud: 2,600 msnm)',
      adaptacionFluffy: 'El clima fresco de la sabana es un paraíso para el Bulldog Francés Fluffy. Su abundante manto de pelo largo (gen FGF5) actúa como un escudo térmico natural frente a los vientos andinos, permitiéndole pasear con comodidad sin fatigarse.',
      horarioPaseo: '8:00 AM - 11:30 AM y 2:30 PM - 5:30 PM (aprovechando los días soleados pero sin exceso térmico)',
      consejosTermicos: [
        'En días de llovizna o neblina matutina, secar bien el pelaje y las orejas al regresar para evitar humedad en los pliegues.',
        'La altitud favorece el reposo; sus vías braquicéfalas no sufren estrés calórico como en climas cálidos.',
        'Cepillado 3 veces por semana para retirar partículas de polen tras jugar en los parques de la sabana.'
      ]
    },
    parques: [
      {
        nombre: 'Parque El Virrey',
        zona: 'El Virrey / Chicó Norte',
        descripcion: 'Circuito lineal arbolado de 2.8 km con amplias zonas verdes, canales de agua y excelente sombra natural. Punto de encuentro predilecto de la comunidad canina de alta gama en la capital.',
        destacado: 'Sombra Continua & Caminos Suaves'
      },
      {
        nombre: 'Parque de la 93',
        zona: 'Chicó, Chapinero Norte',
        descripcion: 'Entorno cosmopolita con césped impecable y terrazas gastronómicas 100% pet-friendly en su perímetro. Ideal para socialización de cachorros en un ambiente controlado y seguro.',
        destacado: 'Ambiente Cosmopolita Pet-Friendly'
      },
      {
        nombre: 'Parque Metropolitano Simón Bolívar',
        zona: 'Teusaquillo / Salitre',
        descripcion: 'El pulmón verde más grande de la ciudad. Ofrece senderos planos de asfalto liso y praderas masivas donde el Fluffy puede pasear a paso constante sin pendientes que desgasten su columna.',
        destacado: 'Senderos Planos sin Pendientes'
      }
    ]
  },

  'Medellín': {
    clima: {
      tipoClima: 'Primavera Templada (Valle de Aburrá)',
      tempPromedio: '21°C - 26°C (Brisa fresca de valle)',
      adaptacionFluffy: 'El clima de la Ciudad de la Eterna Primavera es muy bondadoso con el Bulldog Fluffy. Gracias a la ventilación constante del Valle de Aburrá, el perro se mantiene confortable, aunque se debe cuidar del asfalto caliente al mediodía.',
      horarioPaseo: '6:30 AM - 9:00 AM y 5:30 PM - 8:30 PM (evitando las horas de sol vertical entre 11:30 AM y 3:00 PM)',
      consejosTermicos: [
        'En días de sol radiante en El Poblado o Laureles, caminar siempre por el lado de la sombra de los samanes y guayacanes.',
        'Llevar siempre bebedero portátil con agua fresca en cada caminata.',
        'En apartamentos altos de El Poblado o Envigado, mantener ventilador o aire acondicionado suave en tardes calurosas.'
      ]
    },
    parques: [
      {
        nombre: 'Parque Lineal La Presidenta',
        zona: 'El Poblado / Provenza',
        descripcion: 'Sendero ecológico fresco que acompaña la quebrada, rodeado de frondosa vegetación nativa y cafés pet-friendly. El microclima bajo los árboles mantiene la temperatura hasta 3°C más baja.',
        destacado: 'Microclima Fresco & Mucha Sombra'
      },
      {
        nombre: 'Ciudad del Río',
        zona: 'El Poblado / Industriales',
        descripcion: 'Extensas explanadas de pasto verde junto al MAMM, con bebederos caninos, zona de socialización muy concurrida y fácil acceso en coche.',
        destacado: 'Zonas Verdes Amplias & Socialización'
      },
      {
        nombre: 'Parques del Río',
        zona: 'Conquistadores / La 33',
        descripcion: 'Moderno corredor verde peatonal con túneles de viento naturales y senderos de bajo impacto para caminatas recreativas tranquilas.',
        destacado: 'Paseo Peatonal Moderno & Ventilado'
      }
    ]
  },

  'Cali': {
    clima: {
      tipoClima: 'Cálido Tropical de Valle',
      tempPromedio: '24°C - 31°C (Tardes con brisa de los Farallones)',
      adaptacionFluffy: 'Cali exige disciplina de termorregulación: el Bulldog Francés es braquicéfalo y su manto largo retiene calor. Requiere vida interior con aire acondicionado durante el día y paseos coordinados con la brisa vespertina.',
      horarioPaseo: '6:00 AM - 7:45 AM (amanecer fresco) y 6:00 PM en adelante (cuando baja la brisa de los Farallones de Cali)',
      consejosTermicos: [
        'Nunca pasear entre las 10:00 AM y las 4:30 PM para evitar quemaduras en almohadillas y sofoco respiratorio.',
        'Tener tapetes refrigerantes o baldosas frescas en el hogar donde el cachorro pueda disipar calor corporal.',
        'Brindar agua fresca con cubos de hielo en días de calor intenso.'
      ]
    },
    parques: [
      {
        nombre: 'Parque del Perro',
        zona: 'San Fernando',
        descripcion: 'El punto canino más emblemático del suroccidente colombiano. Rodeado de árboles corpulentos y locales gastronómicos que reciben con gusto a perros educados con correa.',
        destacado: 'Cultura Canina Tradicional'
      },
      {
        nombre: 'Parque El Peñón',
        zona: 'El Peñón / Río Cali',
        descripcion: 'Plaza señorial arbolada a pasos del Río Cali, donde las corrientes de aire vespertino permiten un paseo delicioso y fresco.',
        destacado: 'Corriente Fresca del Río'
      },
      {
        nombre: 'Bulevar del Río Cali',
        zona: 'Centro Histórico / Santa Rosa',
        descripcion: 'Paseo peatonal adoquinado ideal para caminatas nocturnas bajo la brisa, seguro y con excelente iluminación.',
        destacado: 'Paseo Nocturno con Brisa'
      }
    ]
  },

  'Barranquilla': {
    clima: {
      tipoClima: 'Cálido Costero Caribeño',
      tempPromedio: '28°C - 33°C (Humedad relativa moderada-alta)',
      adaptacionFluffy: 'En la costa caribeña el cuidado principal es la ventilación y la hidratación. El Fluffy debe vivir en espacios climatizados (aire acondicionado a 22°C-24°C) y realizar salidas cortas para necesidades fisiológicas.',
      horarioPaseo: '6:00 AM - 7:30 AM y 7:00 PM - 9:30 PM (noches estrelladas con brisa marina)',
      consejosTermicos: [
        'Comprobar la temperatura del pavimento con la palma de la mano durante 5 segundos antes de salir.',
        'Limpieza diaria de arrugas nasales y secado de pliegues para evitar hongos por humedad tropical.',
        'Sesiones de cepillado frecuentes para retirar pelo muerto y aligerar la densidad del subpelo.'
      ]
    },
    parques: [
      {
        nombre: 'Parque El Golf',
        zona: 'El Golf, Norte',
        descripcion: 'Parque residencial exclusivo dotado de gigantescos samanes y ceibas que ofrecen sombra tupida en cualquier momento del día.',
        destacado: 'Sombra Densa de Samanes Centenarios'
      },
      {
        nombre: 'Parque Sagrado Corazón',
        zona: 'Ciudad Jardín',
        descripcion: 'Uno de los parques más grandes y arbolados de Barranquilla, con amplios senderos y zona exclusiva de esparcimiento canino.',
        destacado: 'Zona Canina Delimitada'
      },
      {
        nombre: 'Parque Washington',
        zona: 'Altos del Prado',
        descripcion: 'Entorno residencial apacible, perfecto para paseos breves de 15 minutos en la mañana y tarde.',
        destacado: 'Ambiente Tranquilo & Seguro'
      }
    ]
  },

  'Cartagena': {
    clima: {
      tipoClima: 'Tropical Caribeño Húmedo',
      tempPromedio: '29°C - 33°C (Brisa del Mar Caribe)',
      adaptacionFluffy: 'La brisa de la Bahía y el Mar Caribe ayuda a refrescar las zonas costeras, pero el índice de calor exige máxima precaución braquicéfala. El cachorro debe disfrutar del aire acondicionado en casa.',
      horarioPaseo: '6:00 AM - 7:15 AM y 6:30 PM - 9:00 PM',
      consejosTermicos: [
        'Priorizar paseos al borde de la bahía donde la brisa marina sopla continuamente.',
        'Evitar la exposición directa a la arena caliente de la playa en horas diurnas.',
        'Mantener toallas húmedas frescas a mano tras el paseo matutino.'
      ]
    },
    parques: [
      {
        nombre: 'Paseo Peatonal de Castillogrande',
        zona: 'Castillogrande / Bahía',
        descripcion: 'Extenso paseo plano paralelo a la Bahía de Cartagena con brisa marina ininterrumpida y aceras anchas perfectas para paseos de bajo impacto.',
        destacado: 'Brisa Marina de la Bahía'
      },
      {
        nombre: 'Parque Flanagan',
        zona: 'Bocagrande',
        descripcion: 'Parque arbolado en el corazón de Bocagrande, con sombra protectora y fuentes de agua.',
        destacado: 'Sombra en Zona Residencial'
      },
      {
        nombre: 'Parque de la Marina',
        zona: 'Centro Histórico / Murallas',
        descripcion: 'Jardines abiertos junto a las históricas murallas, ideal para paseos nocturnos con brisa fresca.',
        destacado: 'Paseos Nocturnos Históricos'
      }
    ]
  },

  // MÉXICO
  'CDMX': {
    clima: {
      tipoClima: 'Templado de Altiplano Central',
      tempPromedio: '15°C - 24°C (Altitud: 2,240 msnm)',
      adaptacionFluffy: 'La Ciudad de México ofrece un clima excepcionalmente favorable para el Bulldog Francés Fluffy. Las temperaturas templadas de colonias como Condesa, Roma o Polanco permiten paseos cómodos la mayor parte del año.',
      horarioPaseo: '7:30 AM - 10:30 AM y 4:30 PM - 7:30 PM',
      consejosTermicos: [
        'Durante los meses de primavera seca (marzo a mayo), hidratar con frecuencia durante el paseo.',
        'En época de lluvias de verano, proteger el pelaje largo de encharcamientos en las banquetas.',
        'Aprovechar la gran infraestructura pet-friendly de restaurantes y cafeterías con áreas al aire libre.'
      ]
    },
    parques: [
      {
        nombre: 'Parque México',
        zona: 'Condesa, Cuauhtémoc',
        descripcion: 'El parque pet-friendly más famoso de América Latina, con una zona canina cerrada de más de 1,000 m², bebederos y piso de arena sílice tratada.',
        destacado: 'Área Canina Oficial Cercada'
      },
      {
        nombre: 'Parque Lincoln',
        zona: 'Polanco, Miguel Hidalgo',
        descripcion: 'Elegante parque rodeado de espejos de agua, senderos arbolados y la exclusiva zona de cafés de Emilio Castelar con servicio dog-friendly.',
        destacado: 'Entorno VIP & Espejos de Agua'
      },
      {
        nombre: 'Parque España',
        zona: 'Roma Norte / Condesa',
        descripcion: 'Atmósfera más tranquila y recogida que el Parque México, con una densa copa de árboles que filtra el sol y caminos suaves de tierra compactada.',
        destacado: 'Sombra Densa & Paseos Relajados'
      }
    ]
  },

  'Guadalajara': {
    clima: {
      tipoClima: 'Subtropical Templado de Valle',
      tempPromedio: '18°C - 28°C',
      adaptacionFluffy: 'La Perla Tapatía tiene un clima noble con mañanas frescas y tardes soleadas. El manto Fluffy requiere cepillado habitual para retirar ramitas y hojas secas tras caminar por jardines tapatíos.',
      horarioPaseo: '7:00 AM - 9:30 AM y 6:00 PM - 8:30 PM',
      consejosTermicos: [
        'Evitar horas pico de radiación solar en primavera (abril-mayo).',
        'Cuidar el pelaje en parques con follaje abundante para evitar nudos.',
        'Hogar ventilado con zonas de sombra fresca en el patio o terraza.'
      ]
    },
    parques: [
      {
        nombre: 'Parque Metropolitano de Guadalajara',
        zona: 'Zapopan / Estancia',
        descripcion: 'Extensas áreas verdes con zona canina dedicada, caminos llanos y ambiente seguro para socializar con otros perros de raza.',
        destacado: 'Área Canina Especializada'
      },
      {
        nombre: 'Bosque Los Colomos',
        zona: 'Providencia / Colomos',
        descripcion: 'Reserva forestal urbana con gigantescos eucaliptos y arroyos que bajan la temperatura ambiente notablemente.',
        destacado: 'Aire Puro & Bosque Urbano'
      },
      {
        nombre: 'Parque Rubén Darío',
        zona: 'Providencia',
        descripcion: 'Parque vecinal tranquilo en una de las colonias más elegantes de la zona metropolitana, con sombra generosa.',
        destacado: 'Paseo Residencial Exclusivo'
      }
    ]
  },

  'Monterrey': {
    clima: {
      tipoClima: 'Semiárido con Contrastes Térmicos',
      tempPromedio: 'Veranos calurosos (hasta 37°C) e Inviernos frescos (10°C - 18°C)',
      adaptacionFluffy: 'En la Sultana del Norte y San Pedro Garza García, el Fluffy debe vivir en interiores 100% climatizados con aire acondicionado en verano. En invierno, su pelaje largo lo protege y le permite disfrutar el exterior al máximo.',
      horarioPaseo: '6:00 AM - 8:00 AM y 7:30 PM en adelante (durante verano) / Horario libre en invierno',
      consejosTermicos: [
        'En los meses cálidos de canícula, limitar las salidas a caminatas cortas de higiene.',
        'Jamás dejar al perro dentro del coche ni un solo minuto bajo el sol regiomontano.',
        'Hidratación con cubitos de hielo en su bebedero interior.'
      ]
    },
    parques: [
      {
        nombre: 'Parque Rufino Tamayo',
        zona: 'San Pedro Garza García',
        descripcion: 'El parque canino de mayor nivel en el norte de México. Cuenta con área pet-friendly cercada, arroyo natural, pasto cuidado y vista a la Sierra Madre.',
        destacado: 'Área Canina de Élite en San Pedro'
      },
      {
        nombre: 'Calzada del Valle (Camellón Central)',
        zona: 'San Pedro Garza García',
        descripcion: 'Camellón peatonal arbolado de varios kilómetros, con bebederos para mascotas y estaciones de bolsas.',
        destacado: 'Circuito Arbolado Seguro'
      },
      {
        nombre: 'Parque Fundidora',
        zona: 'Monterrey Centro / Obrera',
        descripcion: 'Parque histórico industrial con amplias calzadas asfaltadas y áreas de sombra para pasear en mañanas frescas.',
        destacado: 'Espacios Abiertos Emblemáticos'
      }
    ]
  },

  // ESTADOS UNIDOS (MIAMI)
  'Miami': {
    clima: {
      tipoClima: 'Subtropical Húmedo Costero',
      tempPromedio: '24°C - 32°C (Sol constante y brisa marina)',
      adaptacionFluffy: 'En el sur de Florida el aire acondicionado es estándar en los hogares. El Bulldog Fluffy disfruta de los paseos costeros siempre que se programen temprano en la mañana o al atardecer.',
      horarioPaseo: '6:30 AM - 8:30 AM y 7:00 PM - 9:30 PM',
      consejosTermicos: [
        'Monitorear la temperatura del concreto en Brickell y South Beach.',
        'Cepillado para eliminar humedad marina del pelaje largo.',
        'Uso de arnés acolchado en lugar de collar para facilitar la respiración.'
      ]
    },
    parques: [
      {
        nombre: 'Margaret Pace Park',
        zona: 'Edgewater / Downtown Miami',
        descripcion: 'Parque costero junto a la Bahía de Biscayne con dos parques para perros cerrados (para razas pequeñas y grandes) y brisa marina constante.',
        destacado: 'Dog Park Cerrado con Vista a la Bahía'
      },
      {
        nombre: 'Tropical Park Bark Park',
        zona: 'Westchester / Coral Gables',
        descripcion: 'Parque de recreación masivo con zona canina cerrada, obstáculos suaves de agilidad y fuentes de hidratación.',
        destacado: 'Fuentes Caninas & Agilidad'
      },
      {
        nombre: 'South Pointe Park',
        zona: 'South Beach',
        descripcion: 'Paseo panorámico frente al océano con colinas de césped y áreas verdes que reciben la brisa atlántica.',
        destacado: 'Brisa del Océano Atlántico'
      }
    ]
  },

  // ARGENTINA (BUENOS AIRES)
  'Buenos Aires': {
    clima: {
      tipoClima: 'Templado Húmedo Pampeano',
      tempPromedio: '12°C - 25°C (Cuatro estaciones bien marcadas)',
      adaptacionFluffy: 'Buenos Aires tiene un clima excelente para el Fluffy. Sus inviernos frescos y otoños suaves le permiten lucir su pelaje largo en los caniles de Palermo y Recoleta con confort total.',
      horarioPaseo: '8:00 AM - 11:00 AM y 4:00 PM - 7:30 PM',
      consejosTermicos: [
        'En los veranos húmedos de enero, preferir paseos bajo la sombra de las tipas de Palermo.',
        'En invierno el pelaje Fluffy lo abriga perfectamente sin necesidad de chalecos.',
        'Revisión regular de patas tras pasear por plazas con hojas secas en otoño.'
      ]
    },
    parques: [
      {
        nombre: 'Bosques de Palermo (Parque 3 de Febrero)',
        zona: 'Palermo / Rosedal',
        descripcion: 'El pulmón más famoso de Buenos Aires con lagos, calzadas amplias y grandes caniles con suelo de arena donde socializan bulldogs de toda la ciudad.',
        destacado: 'Caniles Cerrados en Palermo'
      },
      {
        nombre: 'Plaza Francia / Parque Thays',
        zona: 'Recoleta',
        descripcion: 'Grandes praderas de pasto en pendiente suave, rodeadas de cafés y museos con cultura pet-friendly muy arraigada.',
        destacado: 'Césped Clásico de Recoleta'
      },
      {
        nombre: 'Parque Centenario',
        zona: 'Caballito',
        descripcion: 'Parque circular con amplio canil comunitario, fuentes y senderos llanos en el corazón geográfico de la capital.',
        destacado: 'Canil Vecinal Activo'
      }
    ]
  },

  // CHILE (SANTIAGO)
  'Santiago': {
    clima: {
      tipoClima: 'Mediterráneo Continental Semiárido',
      tempPromedio: '8°C - 28°C (Días secos y noches frescas)',
      adaptacionFluffy: 'El aire seco y las noches frescas de la cuenca de Santiago favorecen la respiración del Bulldog Francés. En verano el calor es seco, por lo que el Fluffy se refresca rápidamente a la sombra.',
      horarioPaseo: '8:00 AM - 10:30 AM y 6:30 PM - 8:30 PM',
      consejosTermicos: [
        'En invierno y primavera, disfrutar de las mañanas frescas en los parques del sector oriente.',
        'En verano seco, llevar agua siempre para mantener humectadas sus mucosas nasales.',
        'Mantener su cama en interiores abrigados durante las noches de invierno.'
      ]
    },
    parques: [
      {
        nombre: 'Parque Bicentenario',
        zona: 'Vitacura',
        descripcion: 'Uno de los parques más modernos de Sudamérica, con laguna de flamencos, pasto cuidado, bebederos caninos y zona de juegos para mascotas.',
        destacado: 'Parque de Alto Nivel con Laguna'
      },
      {
        nombre: 'Parque Araucano',
        zona: 'Las Condes',
        descripcion: 'Cuenta con un canil cerrado de primer nivel con pasto sintético, bebederos automáticos y áreas de juego seguras.',
        destacado: 'Canil Cerrado de Las Condes'
      },
      {
        nombre: 'Parque Forestal',
        zona: 'Santiago Centro / Bellas Artes',
        descripcion: 'Parque histórico longitudinal arbolado con plátanos orientales que brindan sombra generosa en el centro cívico.',
        destacado: 'Sombra Histórica Centenaria'
      }
    ]
  },

  // PERÚ (LIMA)
  'Lima': {
    clima: {
      tipoClima: 'Desértico Subtropical con Garúa Costera',
      tempPromedio: '16°C - 24°C (Humedad alta pero sin extremos térmicos)',
      adaptacionFluffy: 'Lima es una de las ciudades más benévolas para el Bulldog Fluffy porque prácticamente nunca hace calor sofocante ni frío polar. La garúa costera mantiene el ambiente templado y suave.',
      horarioPaseo: '7:30 AM - 11:00 AM y 4:00 PM - 7:00 PM',
      consejosTermicos: [
        'Por la humedad constante en distritos del malecón, secar el pelaje si hay neblina marina.',
        'La temperatura templada permite caminatas recreativas más prolongadas que en otras capitales.',
        'Excelente tolerancia al ejercicio moderado gracias a la ausencia de picos térmicos.'
      ]
    },
    parques: [
      {
        nombre: 'Malecón de Miraflores (Parque Raimondi & Amor)',
        zona: 'Miraflores / Acantilados',
        descripcion: 'Paseo panorámico sobre los acantilados de la Costa Verde con brisa marina del Pacífico, amplios jardines y zona canina cercada en Parque Raimondi.',
        destacado: 'Paseo Frente al Pacífico'
      },
      {
        nombre: 'Bosque El Olivar',
        zona: 'San Isidro',
        descripcion: 'Monumento natural con más de 1,600 olivos antiguos que crean un microclima sombreado, pacífico y aristocrático para caminar con correa.',
        destacado: 'Entorno Silencioso & Olivos Centenarios'
      },
      {
        nombre: 'Parque Reducto N° 2',
        zona: 'Miraflores',
        descripcion: 'Parque histórico cerrado, extremadamente limpio y seguro, ideal para paseos relajantes de fin de semana.',
        destacado: 'Ambiente Seguro & Limpio'
      }
    ]
  },

  // ECUADOR (QUITO)
  'Quito': {
    clima: {
      tipoClima: 'Templado Andino de Altura (Primavera Fresca)',
      tempPromedio: '10°C - 19°C (Altitud: 2,850 msnm)',
      adaptacionFluffy: 'Quito ofrece condiciones óptimas para el pelo largo Fluffy: nunca hace calor sofocante. El pelaje denso protege al perro del frío de la tarde andina.',
      horarioPaseo: '8:30 AM - 11:30 AM y 2:30 PM - 5:30 PM',
      consejosTermicos: [
        'La radiación UV en altura es intensa a mediodía; buscar siempre senderos arbolados.',
        'El pelaje largo lo aísla perfectamente del viento frío de los volcanes.',
        'Brindar una alimentación rica en ácidos grasos para mantener el brillo del manto en clima andino.'
      ]
    },
    parques: [
      {
        nombre: 'Parque La Carolina',
        zona: 'Iñaquito, Norte',
        descripcion: 'El parque urbano central de Quito, con zona canina delimitada, circuitos planos y gran afluencia de mascotas de raza.',
        destacado: 'Zona Canina Urbana Dedicada'
      },
      {
        nombre: 'Parque Metropolitano Guangüiltagua',
        zona: 'Bellavista',
        descripcion: 'El bosque de eucaliptos más extenso de la ciudad, con senderos naturales de tierra y aire puro andino.',
        destacado: 'Senderos Naturales & Bosque'
      },
      {
        nombre: 'Parque Bicentenario',
        zona: 'Antiguo Aeropuerto',
        descripcion: 'Explanada plana gigantesca con pistas pavimentadas amplias para paseos de baja exigencia física.',
        destacado: 'Grandes Explanadas Planas'
      }
    ]
  },

  // PANAMÁ
  'Ciudad de Panamá': {
    clima: {
      tipoClima: 'Tropical Húmedo de Costa',
      tempPromedio: '25°C - 32°C (Humedad alta)',
      adaptacionFluffy: 'En Panamá el cuidado es el mismo que en las urbes caribeñas: casa con aire acondicionado confortable y paseos concentrados en las primeras horas de la mañana o en la noche.',
      horarioPaseo: '6:00 AM - 7:30 AM y 7:00 PM - 9:30 PM',
      consejosTermicos: [
        'Hacer paseos por la Cinta Costera aprovechando la brisa de la Bahía de Panamá.',
        'Secar siempre los pliegues faciales tras salidas húmedas.',
        'Disponer de bebederos con agua fresca purificada.'
      ]
    },
    parques: [
      {
        nombre: 'Parque Recreativo Omar',
        zona: 'San Francisco',
        descripcion: 'El gran pulmón verde de la ciudad con 56 hectáreas de praderas, árboles tropicales y senderos para caminar con mascotas.',
        destacado: '56 Hectáreas de Áreas Verdes'
      },
      {
        nombre: 'Cinta Costera',
        zona: 'Avenida Balboa / Bahía',
        descripcion: 'Paseo marítimo plano con brisa constante del Océano Pacífico, excelente iluminación y banquetas anchas.',
        destacado: 'Brisa Marina de la Bahía'
      },
      {
        nombre: 'Parque Andrés Bello',
        zona: 'El Cangrejo',
        descripcion: 'Parque vecinal concurrido y arbolado en una zona residencial bohemia y pet-friendly.',
        destacado: 'Entorno Residencial & Seguro'
      }
    ]
  },

  // COSTA RICA (SAN JOSÉ)
  'San José': {
    clima: {
      tipoClima: 'Tropical de Altura Templado (Valle Central)',
      tempPromedio: '18°C - 25°C (Clima agradable todo el año)',
      adaptacionFluffy: 'El Valle Central costarricense goza de un clima muy noble. La temperatura suave evita el sobrecalentamiento y permite que el pelaje Fluffy se mantenga esponjoso y limpio.',
      horarioPaseo: '7:00 AM - 10:00 AM y 3:30 PM - 6:00 PM',
      consejosTermicos: [
        'En temporada de lluvias verdes (mayo a noviembre), cepillar y secar con toalla tras el paseo.',
        'La temperatura templada favorece paseos en parques abiertos sin estrés térmico.',
        'Aprovechar la gran cultura pet-friendly de cafeterías en Escalante y Rohrmoser.'
      ]
    },
    parques: [
      {
        nombre: 'Parque Metropolitano La Sabana',
        zona: 'Mata Redonda / Sabana',
        descripcion: 'El pulmón de San José, con lago, senderos arbolados planos y zonas abiertas de césped para caminar tranquilamente.',
        destacado: 'Senderos Planos & Lago'
      },
      {
        nombre: 'Parque Francia',
        zona: 'Barrio Escalante',
        descripcion: 'Punto de encuentro favorito de la comunidad canina joven, rodeado de restaurantes y bistrós con terrazas dog-friendly.',
        destacado: 'Cultura Pet-Friendly de Escalante'
      },
      {
        nombre: 'Parque del Café',
        zona: 'Rohrmoser',
        descripcion: 'Parque residencial apacible con senderos adoquinados y árboles frondosos que filtran la luz solar.',
        destacado: 'Paseo Residencial Sombreado'
      }
    ]
  }
};

// Generador inteligente por región para ciudades que no estén en la lista curada directa
export function getCityLocalGuide(cityName: string, country: string): CityLocalGuide {
  // Limpieza del nombre de la ciudad
  const cleanName = cityName.trim();

  // Búsqueda directa o por coincidencia parcial
  if (curatedCityData[cleanName]) {
    return curatedCityData[cleanName];
  }

  for (const [key, value] of Object.entries(curatedCityData)) {
    if (cleanName.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(cleanName.toLowerCase())) {
      return value;
    }
  }

  // Generador contextual inteligente según el país / región
  const isAndeanCold = ['Bolivia', 'Ecuador'].includes(country) || ['Toluca', 'Pasto', 'Tunja', 'Manizales', 'Cochabamba', 'La Paz', 'Cuenca'].some(c => cleanName.includes(c));
  const isTropicalWarm = ['Colombia', 'Venezuela', 'Panamá', 'República Dominicana', 'Costa Rica', 'El Salvador', 'Honduras', 'Nicaragua', 'Guatemala'].includes(country) && 
    ['Cartagena', 'Barranquilla', 'Santa Marta', 'Cali', 'Maracaibo', 'Valencia', 'Punta Cana', 'Cancún', 'Mérida', 'Veracruz', 'David', 'Colón', 'San Pedro Sula'].some(c => cleanName.includes(c));
  const isSouthernCone = ['Argentina', 'Chile', 'Uruguay', 'Paraguay'].includes(country);

  if (isAndeanCold) {
    return {
      clima: {
        tipoClima: `Templado Frío de Montaña en ${cleanName}`,
        tempPromedio: '12°C - 20°C',
        adaptacionFluffy: `En ${cleanName}, las temperaturas frescas de montaña resultan sumamente favorables para el Bulldog Francés Fluffy. Su denso manto largo (gen FGF5) funciona como un aislante térmico protector ante los vientos locales.`,
        horarioPaseo: '8:30 AM - 11:30 AM y 3:00 PM - 5:30 PM',
        consejosTermicos: [
          'Secar adecuadamente el pelaje tras lloviznas o neblinas matutinas para evitar humedad en los pliegues.',
          'El aire fresco de altura evita la fatiga respiratoria común en climas cálidos.',
          'Cepillado regular 3 veces por semana para mantener la sedosidad del pelo.'
        ]
      },
      parques: [
        {
          nombre: `Parque Central de ${cleanName}`,
          zona: `Sector Residencial / Centro de ${cleanName}`,
          descripcion: `Área verde arbolada tradicional con senderos de bajo impacto para paseos seguros con correa.`,
          destacado: 'Caminos Planos & Sombra'
        },
        {
          nombre: `Parque Lineal Metropolitano`,
          zona: `Zona Norte de ${cleanName}`,
          descripcion: `Corredor verde con praderas naturales y espacio ventilado ideal para la socialización tranquila de cachorros.`,
          destacado: 'Áreas Verdes Amplias'
        }
      ]
    };
  }

  if (isTropicalWarm) {
    return {
      clima: {
        tipoClima: `Cálido Tropical en ${cleanName}`,
        tempPromedio: '26°C - 32°C',
        adaptacionFluffy: `En ${cleanName}, el cuidado principal radica en la termorregulación. Al ser un perro braquicéfalo con pelo largo, debe habitar en interiores con aire acondicionado o buena ventilación durante las horas de sol intenso.`,
        horarioPaseo: '6:00 AM - 7:45 AM y 6:30 PM - 9:00 PM (evitando las horas de calor diurno)',
        consejosTermicos: [
          'Verificar la temperatura del suelo con la palma de la mano antes de iniciar la caminata.',
          'Llevar siempre agua fresca en cada salida.',
          'Mantener secos y limpios los pliegues faciales tras paseos en ambientes de alta humedad.'
        ]
      },
      parques: [
        {
          nombre: `Parque Residencial Principal`,
          zona: `Sector Exclusivo de ${cleanName}`,
          descripcion: `Zonas arboladas con sombra continua para evitar la exposición a los rayos solares directos.`,
          destacado: 'Sombra Protectora'
        },
        {
          nombre: `Paseo Peatonal del Valle`,
          zona: `Área Recreativa de ${cleanName}`,
          descripcion: `Paseo llano y ventilado para caminatas cortas de bajo impacto en horarios frescos.`,
          destacado: 'Brisa Fresca & Paseos Cortos'
        }
      ]
    };
  }

  // Fallback templado general
  return {
    clima: {
      tipoClima: `Clima Templado Moderado en ${cleanName}`,
      tempPromedio: '16°C - 24°C',
      adaptacionFluffy: `El Bulldog Francés Fluffy se adapta con gran facilidad al estilo de vida urbano y residencial de ${cleanName}. Su pelaje esponjoso lo protege de cambios bruscos de temperatura mientras disfruta de la vida en familia.`,
      horarioPaseo: '7:30 AM - 10:30 AM y 5:00 PM - 7:30 PM',
      consejosTermicos: [
        'Paseos recreativos moderados de 20 a 30 minutos al día.',
        'Cepillado regular para mantener el manto libre de nudos y polvo.',
        'Hogar con ventilación confortable y espacio de descanso fresco.'
      ]
    },
    parques: [
      {
        nombre: `Parque Urbano Principal de ${cleanName}`,
        zona: `Zona Residencial de ${cleanName}`,
        descripcion: `Espacio verde cuidado con senderos adoquinados y arboledas para caminatas relajantes.`,
        destacado: 'Ambiente Familiar & Seguro'
      },
      {
        nombre: `Circuito Recreativo Verde`,
        zona: `Sector Norte de ${cleanName}`,
        descripcion: `Praderas llanas ideales para que el cachorro explore sin forzar sus articulaciones.`,
        destacado: 'Senderos de Bajo Impacto'
      }
    ]
  };
}
