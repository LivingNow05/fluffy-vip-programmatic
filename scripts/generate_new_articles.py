# -*- coding: utf-8 -*-
import json
import re

def count_words(html_text):
    # Remove scripts, styles and json-ld
    clean_no_scripts = re.sub(r'<script.*?</script>', ' ', html_text, flags=re.DOTALL)
    clean = re.sub(r'<[^>]+>', ' ', clean_no_scripts)
    clean = re.sub(r'\s+', ' ', clean).strip()
    return len(clean.split())

# ==========================================
# ARTÍCULO 1: Viajar en Avión en Cabina
# ==========================================
art1_title = "Cómo Viajar en Avión en Cabina con un Bulldog Francés Fluffy: Requisitos, Transportín y Seguridad Veterinaria"
art1_slug = "viajar-en-avion-cabina-bulldog-frances-fluffy"
art1_cat = "cuidados"
art1_desc = "Guía veterinaria para viajar en cabina con un Bulldog Francés Fluffy: medidas de transportín, trámites IATA, hidratación y prevención respiratoria."

art1_content = """<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Viajar en avión junto a un <strong>Bulldog Francés Fluffy</strong> es una experiencia sumamente gratificante pero que exige una planificación veterinaria minuciosa. Su fisonomía braquicéfala y su exclusivo manto de pelo largo derivado de mutaciones en el gen <em>FGF5</em> demandan protocolos rigurosos de ventilación, aclimatación previa y control térmico constante para garantizar un traslado seguro y confortable en cabina.
</p>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Las normativas aeronáuticas internacionales y el consenso médico de la comunidad veterinaria coinciden en un principio innegociable: los caninos de morro chato jamás deben volar en la bodega de carga de una aeronave comercial. En esta guía detallamos los requisitos oficiales de las aerolíneas, la elección técnica del bolso transportín homologado, la preparación física del ejemplar y las pautas que aseguran un vuelo libre de riesgos.
</p>

<div class="bg-cornflower/10 border-l-4 border-cornflower p-6 rounded-2xl my-8">
  <h3 class="text-lg font-bold text-obsidian dark:text-canvas mb-2">Principio Veterinario Esencial</h3>
  <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
    El Bulldog Francés Fluffy únicamente debe viajar bajo la modalidad de mascota en cabina (PETC) o en vuelos de aviación privada pet-friendly. Las bodegas comerciales presentan oscilaciones térmicas imprevistas y variaciones de presurización que desencadenan estrés agudo y colapso de las vías aéreas superiores en ejemplares braquicéfalos.
  </p>
</div>

<h2 class="text-2xl font-bold text-obsidian dark:text-canvas mt-10 mb-4">1. Fisiología Braquicéfala y Presurización de Cabina</h2>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
La conformación craneofacial del Bulldog Francés se clasifica como braquicefalia severa, caracterizada por un acortamiento longitudinal del esqueleto facial sin una reducción proporcional de los tejidos blandos faríngeos. Entre los componentes anatómicos habituales se encuentran un paladar blando alargado, narinas estrechas y un calibre traqueal reducido respecto a su masa corporal.
</p>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Durante el vuelo de crucero, la cabina de pasajeros se presuriza a una altitud equivalente de entre 1.800 y 2.400 metros sobre el nivel del mar, lo que reduce la presión parcial de oxígeno ambiental disponible. En perros mesocefálicos convencionales esta altitud no representa un obstáculo fisiológico, pero en un ejemplar braquicéfalo con un esfuerzo respiratorio basal incrementado puede elevar la frecuencia respiratoria. Si el cachorro experimenta calor o ansiedad, el jadeo continuado produce congestión e inflamación en las mucosas faríngeas, cerrando el lumen respiratorio. La vigilancia directa en cabina permite actuar de inmediato ante el menor síntoma de incomodidad.
</p>

<h3 class="text-xl font-bold text-obsidian dark:text-canvas mt-6 mb-3">El Factor Térmico del Pelaje Fluffy (Gen FGF5)</h3>
<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
La presencia de dos alelos recesivos en el gen <em>FGF5</em> otorga al Fluffy un manto sedoso, denso y afelpado que retiene más temperatura corporal que el pelaje corto estándar. Dado que los caninos carecen de glándulas sudoríparas corporales eficientes y dependen casi con exclusividad de la convección del aire y del jadeo para termorregularse, un bolso transportín cerrado o con ventilación insuficiente acumula calor con rapidez. Por este motivo, el bolso debe contar obligatoriamente con mallas transpirables de amplia superficie en sus costados y en la parte superior.
</p>

<h2 class="text-2xl font-bold text-obsidian dark:text-canvas mt-10 mb-4">2. Requisitos de Aerolíneas y Transportín Homologado IATA</h2>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Para viajar en cabina bajo el asiento delantero, la mayoría de aerolíneas comerciales imponen un límite de peso combinado (perro más transportín) de entre 8 kg y 10 kg. Este formato es ideal para cachorros, ejemplares jóvenes y hembras de morfología cobby compacta. Para perros adultos de mayor porte óseo que superen dicho peso, las opciones seguras abarcan el alquiler de asientos contiguos en compañías que lo autoricen, traslados en jet privado pet-friendly o transporte terrestre climatizado de primera categoría.
</p>

<div class="overflow-x-auto my-8">
  <table class="w-full text-left border-collapse rounded-2xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700">
    <thead>
      <tr class="bg-gray-100 dark:bg-gray-800 text-obsidian dark:text-canvas text-sm font-semibold">
        <th class="p-4 border-b border-gray-200 dark:border-gray-700">Criterio de Evaluación</th>
        <th class="p-4 border-b border-gray-200 dark:border-gray-700">Cabina Comercial (PETC)</th>
        <th class="p-4 border-b border-gray-200 dark:border-gray-700">Bodega de Carga (AVIH)</th>
      </tr>
    </thead>
    <tbody class="text-sm text-gray-700 dark:text-gray-300 divide-y divide-gray-200 dark:divide-gray-700">
      <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
        <td class="p-4 font-bold">Seguridad del Fluffy</td>
        <td class="p-4 text-emerald-600 font-semibold">Óptima con supervisión visual permanente</td>
        <td class="p-4 text-red-600 font-semibold">Crítica / Prohibida por IATA</td>
      </tr>
      <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
        <td class="p-4 font-bold">Límite de Peso Permitido</td>
        <td class="p-4">8 kg a 10 kg con bolso incluido</td>
        <td class="p-4">Hasta 50 kg (No apto para la raza)</td>
      </tr>
      <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
        <td class="p-4 font-bold">Tipo de Contenedor</td>
        <td class="p-4">Bolso blando transpirable homologado</td>
        <td class="p-4">Jaula rígida metálica</td>
      </tr>
      <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
        <td class="p-4 font-bold">Ventilación Exigida</td>
        <td class="p-4">Malla en mínimo tres laterales y techo</td>
        <td class="p-4">Rejillas perimetrales estándar</td>
      </tr>
    </tbody>
  </table>
</div>

<h3 class="text-xl font-bold text-obsidian dark:text-canvas mt-6 mb-3">Características Técnicas del Bolso de Cabina</h3>
<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
El bolso transportín debe cumplir con especificaciones técnicas rigurosas: una estructura semirrígida que se adapte con suavidad bajo la butaca delantera (típicamente 45 x 30 x 24 cm), base impermeable desmontable forrada con material absorbente lavable y mallas microperforadas de alta resistencia que aseguren una circulación continua de aire fresco sin peligro de desgarros por uñas.
</p>

<div class="blog-cta-dark my-10 p-8 sm:p-10 rounded-3xl bg-[#0B1411] text-white relative overflow-hidden shadow-2xl border border-gray-800" style="background-color: #0B1411; color: #ffffff;">
  <div class="relative z-10 max-w-2xl">
    <span class="inline-block px-4 py-1.5 rounded-full bg-cornflower/20 text-cornflower text-xs font-bold uppercase tracking-widest mb-4">Líneas Genéticas de Élite &amp; Asesoría Internacional</span>
    <h3 class="text-2xl sm:text-3xl font-bold text-white mb-3">Criamos Ejemplares Fluffy con Estructura Anatómica Optimizada</h3>
    <p class="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
      Nuestros Bulldogs Franceses Fluffy combinan paladares funcionales, narinas abiertas y pelajes sedosos de ensueño. Facilitamos protocolos de exportación internacional y viajes en cabina sin contratiempos.
    </p>
    <div class="flex flex-wrap gap-4 items-center">
      <a href="/precios" class="blog-cta-btn-primary"><span>Consultar Planes &amp; Precios</span></a>
      <a href="/color/isabella" class="blog-cta-btn-outline"><span>Ver Variedad Isabella Fluffy</span></a>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold text-obsidian dark:text-canvas mt-10 mb-4">3. Documentación Veterinaria y Prohibición Estricta de Sedantes</h2>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
El éxito de un traslado aéreo comienza en la consulta del médico veterinario colegiado. Entre los 5 y 10 días previos al embarque, se debe emitir el <strong>Certificado Oficial de Salud y Aptitud de Vuelo</strong>, validando que el ejemplar se encuentra libre de ectoparásitos, afecciones infecciosas o dificultades cardiopulmonares agudas.
</p>

<h3 class="text-xl font-bold text-obsidian dark:text-canvas mt-6 mb-3">Requisitos Sanitarios Fundamentales</h3>
<ul class="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
  <li><strong>Microchip homologado ISO 11784/11785:</strong> Cuya lectura debe comprobarse con escáner antes de certificar las vacunas.</li>
  <li><strong>Vacunación antirrábica y polivalente:</strong> Aplicada con un mínimo de 21 días de antelación en el caso de la inmunización contra la rabia.</li>
  <li><strong>Desparasitación interna y externa certificada:</strong> Administrada y sellada en la cartilla sanitaria oficial dentro de las 48 a 72 horas previas al viaje.</li>
  <li><strong>Certificado zoosanitario de exportación:</strong> Requerido en rutas internacionales según las exigencias del país receptor.</li>
</ul>

<div class="bg-cornflower/10 border-l-4 border-cornflower p-6 rounded-2xl my-8">
  <h3 class="text-lg font-bold text-obsidian dark:text-canvas mb-2">Advertencia Clínica sobre Fármacos Tranquilizantes</h3>
  <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
    La administración de sedantes o tranquilizantes (como la acepromazina) está formalmente contraindicada por la Asociación Americana de Medicina Veterinaria (AVMA) y la IATA en perros braquicéfalos. Estos principios activos reducen la presión arterial y relajan en exceso la musculatura de la faringe y el velo palatino, provocando el colapso de las vías aéreas y anulando los reflejos que permiten al perro reacomodar su postura para ventilar los pulmones con normalidad.
  </p>
</div>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Para gestionar el nerviosismo o la novedad del entorno aeroportuario se aconseja implementar la habituación progresiva al transportín mediante refuerzo positivo en casa semanas antes, junto al uso de feromonas caninas sintéticas de apaciguamiento pulverizadas sobre la base textil del bolso 15 minutos antes de la entrada del animal.
</p>

<h2 class="text-2xl font-bold text-obsidian dark:text-canvas mt-10 mb-4">4. Protocolo Práctico el Día del Vuelo</h2>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
El día del desplazamiento debe regirse por un cronograma meticuloso diseñado para prevenir sobrecargas estomacales y térmicas:
</p>

<h3 class="text-xl font-bold text-obsidian dark:text-canvas mt-6 mb-3">Cepillado Previo y Ayuno Digestivo</h3>
<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Un cepillado minucioso la víspera retira todo el subpelo muerto y favorece la libre transpiración cutánea del manto Fluffy. En cuanto a la nutrición, suspenda el alimento sólido entre 4 y 6 horas antes de la hora fijada para el despegue. El estómago vacío previene mareos por movimiento, náuseas y el riesgo letal de broncoaspiración por vómitos dentro del transportín. El acceso a agua fresca debe mantenerse hasta 90 minutos antes del embarque, programando un paseo higiénico previo al control de seguridad.
</p>

<h3 class="text-xl font-bold text-obsidian dark:text-canvas mt-6 mb-3">Elementos Indispensables en el Bolso de Mano</h3>
<ul class="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
  <li><strong>Manta auto-enfriante de gel no tóxico (cooling mat):</strong> Para mantener fresco el lecho del bolso sin recurrir a elementos mojados o aparatosos.</li>
  <li><strong>Bebedero portátil antigoteo con válvula dosificadora:</strong> Facilita ofrecer sorbos dosificados a temperatura fresca durante escalas o antes del embarque.</li>
  <li><strong>Gasas estériles y suero fisiológico monodosis:</strong> Para higienizar los pliegues nasales y limpiar los ojos ante la sequedad del aire acondicionado del avión.</li>
  <li><strong>Arnés pectoral antitracción ergonómico:</strong> Jamás utilice collares de cuello que ejerzan compresión directa sobre la laringe o la tráquea.</li>
</ul>

<h2 class="text-2xl font-bold text-obsidian dark:text-canvas mt-10 mb-4">5. Cuidados Durante el Despegue, Crucero y Aterrizaje</h2>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Una vez en el interior de la aeronave, coloque el bolso bajo el asiento delantero verificando que ninguna prenda o maletín bloquee las aberturas de malla. Oriente la boquilla de ventilación individual superior hacia el suelo para generar un flujo constante de aire fresco renovado en derredor del transportín sin dirigir el chorro directo a los ojos del cachorro.
</p>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Durante las maniobras de despegue y descenso, el sonido de las turbinas y las modificaciones de presión barométrica pueden inquietar momentáneamente al perro. Acariciar su cabeza suavemente a través de la cremallera superior del bolso le brindará serenidad y confort. Si advierte signos de estrés térmico (lengua ensanchada de tonalidad purpúrea, jadeo ruidoso o salivación densa), humedezca de inmediato sus almohadillas plantares y vientre con un paño húmedo con agua fría y solicite colaboración a la tripulación para asegurar que el caudal de ventilación se mantenga al máximo.
</p>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Al aterrizar en el destino, espere a desembarcar en un área ventilada antes de ofrecerle agua fresca en pequeñas tomas pausadas. Permítale estirar las extremidades y realizar sus necesidades higiénicas en la zona pet relief del aeropuerto, asegurando una transición suave hacia el nuevo entorno.
</p>

<h2 class="text-2xl font-bold text-obsidian dark:text-canvas mt-10 mb-4">Preguntas Frecuentes sobre Viajar en Avión con un Bulldog Francés Fluffy</h2>

<details class="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm mb-4 transition-all">
  <summary class="font-bold text-obsidian dark:text-canvas cursor-pointer flex justify-between items-center text-lg list-none">
    <span>¿Puede viajar un Bulldog Francés Fluffy en la bodega del avión?</span>
    <span class="text-cornflower transition-transform group-open:rotate-180 text-xl font-black">&darr;</span>
  </summary>
  <p class="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
    No. Las normativas de la IATA y las aerolíneas internacionales prohíben el transporte de razas braquicéfalas en bodega de carga por el alto riesgo de asfixia, estrés térmico y colapso respiratorio. El Bulldog Francés Fluffy solo debe trasladarse en cabina de pasajeros bajo supervisión permanente o mediante aviación privada especializada.
  </p>
</details>

<details class="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm mb-4 transition-all">
  <summary class="font-bold text-obsidian dark:text-canvas cursor-pointer flex justify-between items-center text-lg list-none">
    <span>¿Es recomendable sedar o dar tranquilizantes al perro antes del vuelo?</span>
    <span class="text-cornflower transition-transform group-open:rotate-180 text-xl font-black">&darr;</span>
  </summary>
  <p class="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
    Está desaconsejado médicamente por veterinarios y organismos internacionales. Los sedantes relajan en exceso las vías respiratorias altas en perros de morro chato y disminuyen sus reflejos fisiológicos de compensación, multiplicando el peligro de colapso respiratorio e hipoxia severa a gran altitud.
  </p>
</details>

<details class="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm mb-4 transition-all">
  <summary class="font-bold text-obsidian dark:text-canvas cursor-pointer flex justify-between items-center text-lg list-none">
    <span>¿Cuáles son las medidas y peso límite para viajar bajo el asiento?</span>
    <span class="text-cornflower transition-transform group-open:rotate-180 text-xl font-black">&darr;</span>
  </summary>
  <p class="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
    El peso máximo permitido oscila habitualmente entre 8 kg y 10 kg combinando el peso del perro y del bolso transportín. Las medidas habituales del bolso blando son de unos 45 cm de longitud, 30 cm de ancho y 24 cm de alto, permitiendo encajarlo holgadamente bajo el asiento delantero.
  </p>
</details>

<details class="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm mb-4 transition-all">
  <summary class="font-bold text-obsidian dark:text-canvas cursor-pointer flex justify-between items-center text-lg list-none">
    <span>¿Cómo influye el pelaje largo Fluffy en el viaje en cabina?</span>
    <span class="text-cornflower transition-transform group-open:rotate-180 text-xl font-black">&darr;</span>
  </summary>
  <p class="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
    El pelaje largo retiene mayor calor corporal. Por ello es indispensable cepillar al ejemplar antes de viajar para eliminar pelo muerto, usar alfombrillas refrigerantes en el fondo del bolso y mantener abierto el flujo de aire fresco en cabina.
  </p>
</details>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Puede viajar un Bulldog Francés Fluffy en la bodega del avión?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. La IATA y las aerolíneas prohíben el transporte de braquicéfalos en bodega por riesgo de asfixia y estrés térmico. Solo deben volar en cabina de pasajeros."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es recomendable sedar o dar tranquilizantes al perro antes del vuelo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Los sedantes relajan la faringe y los tejidos blandos de las vías aéreas, aumentando el riesgo de hipoxia y colapso respiratorio en perros braquicéfalos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuáles son las medidas y peso límite para viajar bajo el asiento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El límite de peso total oscila entre 8 y 10 kg incluyendo el transportín, con dimensiones típicas de unos 45 x 30 x 24 cm para ajustarse bajo el asiento."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo influye el pelaje largo Fluffy en el viaje en cabina?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El manto largo derivado del gen FGF5 retiene más calor. Se recomienda cepillado previo, alfombrillas refrescantes y ventilación constante en cabina."
      }
    }
  ]
}
</script>

<div class="mt-12 p-8 bg-gray-50 dark:bg-gray-800/80 rounded-3xl border border-gray-200 dark:border-gray-700 text-center">
  <h3 class="text-xl sm:text-2xl font-bold text-obsidian dark:text-canvas mb-3">¿Deseas Asesoría Personalizada para el Traslado de tu Fluffy?</h3>
  <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-6">
    Nuestros especialistas veterinarios y genetistas te orientan en los trámites de viaje, documentación internacional y crianza responsable de cachorros Bulldog Francés Fluffy de alta pureza.
  </p>
  <button type="button" data-open-quiz="true" class="btn-primary bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-[#25D366]/20 inline-flex items-center gap-2 border-transparent text-base cursor-pointer"><span>Hablar con un Especialista en WhatsApp</span></button>
</div>"""


# ==========================================
# ARTÍCULO 2: Salud Ocular en el Bulldog Francés Fluffy
# ==========================================
art2_title = "Salud Ocular en el Bulldog Francés Fluffy: Ojo de Cereza, Úlceras Corneales y Limpieza de Lagrimal"
art2_slug = "salud-ocular-ojos-bulldog-frances-fluffy"
art2_cat = "salud"
art2_desc = "Guía médica para el cuidado ocular del Bulldog Francés Fluffy: tratamiento del ojo de cereza, prevención de úlceras corneales y protocolo de limpieza lagrimal."

art2_content = """<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
La expresiva y cautivadora mirada del <strong>Bulldog Francés Fluffy</strong> constituye uno de sus mayores atractivos estéticos. Sin embargo, su morfología craneofacial braquicéfala, sumada a la presencia de pelos más largos y densos en la región periorbitaria, predispone a esta variedad canina a condiciones oftalmológicas particulares que requieren vigilancia diaria y cuidados especializados.
</p>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Desde el prolapso de la glándula nictitante (conocido popularmente como ojo de cereza o <em>cherry eye</em>) hasta las microabrasiones corneales y la tinción por oxidación en el lagrimal, el conocimiento preventivo del tutor marca la diferencia entre una salud visual óptima y complicaciones oculares irreversibles. En este artículo profundizamos en la anatomía ocular de la raza, los tratamientos quirúrgicos de vanguardia y los protocolos higiénicos esenciales.
</p>

<div class="bg-cornflower/10 border-l-4 border-cornflower p-6 rounded-2xl my-8">
  <h3 class="text-lg font-bold text-obsidian dark:text-canvas mb-2">Máxima Oftalmológica Canina</h3>
  <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
    Cualquier molestia ocular caracterizada por un ojo cerrado (blefarospasmo), secreción purulenta, opacidad blanquecina o lagrimeo excesivo súbito debe considerarse una <strong>urgencia veterinaria inmediata</strong>. La córnea del bulldog francés es delicada y una úlcera superficial puede progresar a perforación en menos de 48 horas sin atención facultativa.
  </p>
</div>

<h2 class="text-2xl font-bold text-obsidian dark:text-canvas mt-10 mb-4">1. Particularidades Anatómicas de los Ojos en el Bulldog Francés Fluffy</h2>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
El cráneo braquicéfalo del bulldog francés presenta órbitas óseas notablemente poco profundas en comparación con razas dolicocéfalas o mesocefálicas. Como consecuencia directa, los globos oculares se sitúan en una posición prominente hacia el exterior, fenómeno conocido como exoftalmia relativa. Esta posición expone una mayor superficie corneal al aire seco, a las partículas de polvo ambiental y a posibles roces directos con elementos externos.
</p>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Asimismo, la hendidura palpebral suele ser amplia (macrobléfaron), lo que ocasiona que los párpados no cierren de forma hermética durante el parpadeo involuntario, generando una distribución irregular de la película lagrimal precorneal. La evaporación acelerada de la fase acuosa predispone al epitelio corneal a microdesecaciones locales que facilitan la adhesión bacteriana si no se mantiene una lubricación ocular continua.
</p>

<h3 class="text-xl font-bold text-obsidian dark:text-canvas mt-6 mb-3">La Influencia del Pelo Largo Fluffy en el Área Ocular</h3>
<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
En los ejemplares Fluffy portadores de la mutación <em>FGF5</em>, el pelaje alrededor del morro, la frente y las orejas crece con mayor longitud y textura sedosa. Si estos pelos no se peinan o limpian adecuadamente, pueden doblarse hacia adentro (triquiasis mecánica) e impactar de forma continua contra la conjuntiva o la córnea con cada parpadeo, actuando como un microabrasivo inadvertido que causa irritación crónica y epífora constante.
</p>

<h2 class="text-2xl font-bold text-obsidian dark:text-canvas mt-10 mb-4">2. Prolapso de la Glándula Nictitante (Ojo de Cereza): Por Qué Jamás Debe Extirparse</h2>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
El prolapso de la glándula de la membrana nictitante, comúnmente llamado <em>cherry eye</em> u ojo de cereza, ocurre cuando los ligamentos fibrosos que anclan la glándula al tercer párpado ceden por laxitud congénita, provocando que la masa glandular emerja en el canto interno del ojo con un aspecto carnoso rojizo similar a una pequeña cereza.
</p>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Es crucial desterrar prácticas quirúrgicas obsoletas del pasado: <strong>la glándula nictitante jamás debe ser extirpada</strong>. Esta estructura produce entre el 35% y el 50% de la fase acuosa de la lágrima en el canino. Su ablación quirúrgica condena al perro a sufrir de forma inevitable una Queratoconjuntivitis Seca (KCS) o síndrome de ojo seco crónico en la edad adulta, patología dolorosa que requiere colirios inmunosupresores (como ciclosporina o tacrolimus) y lágrimas artificiales de por vida para evitar la ceguera por pigmentación corneal.
</p>

<div class="overflow-x-auto my-8">
  <table class="w-full text-left border-collapse rounded-2xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700">
    <thead>
      <tr class="bg-gray-100 dark:bg-gray-800 text-obsidian dark:text-canvas text-sm font-semibold">
        <th class="p-4 border-b border-gray-200 dark:border-gray-700">Patología Ocular</th>
        <th class="p-4 border-b border-gray-200 dark:border-gray-700">Causa Principal</th>
        <th class="p-4 border-b border-gray-200 dark:border-gray-700">Síntoma Típico</th>
        <th class="p-4 border-b border-gray-200 dark:border-gray-700">Abordaje Veterinario Correcto</th>
      </tr>
    </thead>
    <tbody class="text-sm text-gray-700 dark:text-gray-300 divide-y divide-gray-200 dark:divide-gray-700">
      <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
        <td class="p-4 font-bold">Ojo de Cereza</td>
        <td class="p-4">Laxitud ligamentosa congénita</td>
        <td class="p-4">Masa roja redondeada en canto medial</td>
        <td class="p-4 text-emerald-600 font-semibold">Reposición quirúrgica (Técnica de Morgan)</td>
      </tr>
      <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
        <td class="p-4 font-bold">Úlcera Corneal</td>
        <td class="p-4">Traumatismo o roce por pelo</td>
        <td class="p-4">Ojo cerrado con dolor y lagrimeo</td>
        <td class="p-4 text-emerald-600 font-semibold">Test de fluoresceína y colirios cicatrizantes</td>
      </tr>
      <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
        <td class="p-4 font-bold">Entropión</td>
        <td class="p-4">Inversión del borde palpebral</td>
        <td class="p-4">Pestañas frotando la córnea</td>
        <td class="p-4 text-emerald-600 font-semibold">Blefaroplastia reconstructiva temprana</td>
      </tr>
      <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
        <td class="p-4 font-bold">Tinción Lagrimal</td>
        <td class="p-4">Oxidación de porfirinas en epífora</td>
        <td class="p-4">Surco marrón o rojizo bajo el ojo</td>
        <td class="p-4 text-emerald-600 font-semibold">Higiene diaria y secado minucioso de pliegue</td>
      </tr>
    </tbody>
  </table>
</div>

<h3 class="text-xl font-bold text-obsidian dark:text-canvas mt-6 mb-3">La Técnica de Bolsillo de Morgan</h3>
<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
El tratamiento de elección moderno es la reposición mediante la técnica quirúrgica de bolsillo conjuntival descrita por Morgan. Mediante esta técnica microquirúrgica, el oftalmólogo veterinario crea dos incisiones paralelas en la conjuntiva bulbar del tercer párpado, reintroduce la glándula en su posición anatómica original y sutura los bordes con material reabsorbible ultrafino dejando aberturas laterales para que la lágrima siga fluyendo hacia la córnea sin impedimentos.
</p>

<div class="blog-cta-dark my-10 p-8 sm:p-10 rounded-3xl bg-[#0B1411] text-white relative overflow-hidden shadow-2xl border border-gray-800" style="background-color: #0B1411; color: #ffffff;">
  <div class="relative z-10 max-w-2xl">
    <span class="inline-block px-4 py-1.5 rounded-full bg-cornflower/20 text-cornflower text-xs font-bold uppercase tracking-widest mb-4">Crianza Responsable &amp; Salud Genética</span>
    <h3 class="text-2xl sm:text-3xl font-bold text-white mb-3">Selección Reproductiva Libre de Patologías Oculares Hereditarias</h3>
    <p class="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
      En Dinastía Bulldog Fluffy evaluamos rigurosamente las órbitas oculares y los párpados de nuestros reproductores para entregar cachorros con salud visual insuperable y morfología armoniosa.
    </p>
    <div class="flex flex-wrap gap-4 items-center">
      <a href="/precios" class="blog-cta-btn-primary"><span>Consultar Planes &amp; Precios</span></a>
      <a href="/color/isabella" class="blog-cta-btn-outline"><span>Ver Variedad Isabella Fluffy</span></a>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold text-obsidian dark:text-canvas mt-10 mb-4">3. Úlceras Corneales: Detección Temprana y Manejo Clínico</h2>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Debido a la poca profundidad de las órbitas, los ojos del bulldog francés son altamente susceptibles a traumatismos accidentales causados por ramas bajas, arañazos durante juegos con otros cachorros o autolesiones al frotarse contra alfombras. Una lesión en el epitelio corneal genera una úlcera que produce un dolor intenso evidenciado por blefarospasmo, fotofobia y miosis reactiva.
</p>

<h3 class="text-xl font-bold text-obsidian dark:text-canvas mt-6 mb-3">Diagnóstico Preciso con Test de Fluoresceína</h3>
<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Ante la menor sospecha de lesión ocular, el veterinario aplicará una gota de colorante vital de fluoresceína sódica. El epitelio corneal intacto es hidrófobo y repele el colorante, pero si existe una erosión epitelial, el estroma subyacente retiene la fluoresceína tiñéndose de un color verde manzana brillante bajo luz azul de cobalto, delimitando la extensión y profundidad de la úlcera.
</p>

<div class="bg-cornflower/10 border-l-4 border-cornflower p-6 rounded-2xl my-8">
  <h3 class="text-lg font-bold text-obsidian dark:text-canvas mb-2">Advertencia Crítica: Peligro de Corticoides en Gotas Oculares</h3>
  <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
    Nunca aplique colirios que contengan corticoides (dexametasona, betametasona o prednisolona) en el ojo de su perro sin prescripción veterinaria previa confirmada por tinción negativa. Si existe una úlcera corneal activa, los corticoides potencian la acción de las enzimas colagenasas, degradando el estroma y provocando la perforación del globo ocular (descemetocele) en cuestión de horas.
  </p>
</div>

<h2 class="text-2xl font-bold text-obsidian dark:text-canvas mt-10 mb-4">4. Epífora, Pelaje Facial y Manchas de Óxido en el Lagrimal</h2>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Las manchas parduzcas o rojizas que se forman en el canal lagrimal y en los pliegues cutáneos suboculares son motivo frecuente de consulta. Esta tinción no está causada por suciedad superficial, sino por la presencia de <em>porfirinas</em> y lactoferrina en la lágrima canina, moléculas que contienen hierro y que al entrar en contacto con el oxígeno ambiental y la luz solar se oxidan, tiñendo el pelo de tonalidades cobrizas.
</p>

<h3 class="text-xl font-bold text-obsidian dark:text-canvas mt-6 mb-3">Factores Agravantes en el Manto Fluffy</h3>
<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
En el Bulldog Francés Fluffy, el pelo largo de las mejillas y el pliegue nasal retiene la humedad de las lágrimas como una esponja. Si la zona permanece continuamente empapada, se genera un microambiente anaeróbico cálido idóneo para la proliferación secundaria de levaduras del género <em>Malassezia pachydermatis</em> y bacterias cutáneas, generando mal olor, picor intenso y dermatitis del pliegue facial.
</p>

<h2 class="text-2xl font-bold text-obsidian dark:text-canvas mt-10 mb-4">5. Protocolo Diario de Higiene Ocular y Limpieza de Lagrimales</h2>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Para conservar la mirada impecable y proteger la piel periorbitaria de su ejemplar, adopte una rutina higiénica estructurada en cuatro pasos rápidos cada mañana:
</p>

<h3 class="text-xl font-bold text-obsidian dark:text-canvas mt-6 mb-3">Paso a Paso de la Higiene Ocular Diaria</h3>
<ol class="list-decimal pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
  <li><strong>Lavado de manos y preparación del material:</strong> Utilice gasas estériles suaves de tejido sin tejer. Evite el algodón en rama tradicional, ya que desprende filamentos microscópicos que se adhieren a la córnea.</li>
  <li><strong>Humedecimiento suave:</strong> Impregne la gasa con suero fisiológico estéril al 0.9% o una loción limpiadora oftálmica isotónica formulada a base de agua de aciano o eufrasia. Limpie desde el canto interno hacia afuera con movimientos suaves y sin presionar el ojo.</li>
  <li><strong>Secado exhaustivo:</strong> Tome una segunda gasa seca y seque minuciosamente todo el surco del lagrimal y el interior del pliegue nasal. La sequedad de la piel es la mejor barrera contra hongos y bacterias.</li>
  <li><strong>Protección de la barrera cutánea:</strong> Aplique una finísima película de bálsamo dérmico con óxido de zinc o cera de abejas en el fondo del pliegue nasal para repeler el goteo lagrimal directo sin tocar la superficie del ojo.</li>
</ol>

<h2 class="text-2xl font-bold text-obsidian dark:text-canvas mt-10 mb-4">Preguntas Frecuentes sobre la Salud Ocular del Bulldog Francés Fluffy</h2>

<details class="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm mb-4 transition-all">
  <summary class="font-bold text-obsidian dark:text-canvas cursor-pointer flex justify-between items-center text-lg list-none">
    <span>¿Qué es el ojo de cereza y por qué nunca debe extirparse la glándula?</span>
    <span class="text-cornflower transition-transform group-open:rotate-180 text-xl font-black">&darr;</span>
  </summary>
  <p class="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
    El ojo de cereza es el prolapso de la glándula del tercer párpado debido a debilidad en sus ligamentos. Jamás debe extirparse porque produce hasta la mitad de la lágrima acuosa del ojo. Si se extrae, el perro sufrirá ojo seco crónico (queratoconjuntivitis seca), requiriendo medicación de por vida. La solución adecuada es la recolocación quirúrgica mediante la técnica de Morgan.
  </p>
</details>

<details class="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm mb-4 transition-all">
  <summary class="font-bold text-obsidian dark:text-canvas cursor-pointer flex justify-between items-center text-lg list-none">
    <span>¿Por qué el Bulldog Francés Fluffy es más propenso a úlceras en los ojos?</span>
    <span class="text-cornflower transition-transform group-open:rotate-180 text-xl font-black">&darr;</span>
  </summary>
  <p class="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
    Sus órbitas óseas poco profundas dejan el globo ocular expuesto hacia afuera (exoftalmia relativa), facilitando roces mecánicos. Además, el pelaje largo en la zona facial y los pliegues cutáneos pueden desviar pelos hacia la córnea, produciendo abrasiones si no se realiza un cepillado e higiene correctos.
  </p>
</details>

<details class="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm mb-4 transition-all">
  <summary class="font-bold text-obsidian dark:text-canvas cursor-pointer flex justify-between items-center text-lg list-none">
    <span>¿Cómo se deben limpiar las manchas rojas del lagrimal?</span>
    <span class="text-cornflower transition-transform group-open:rotate-180 text-xl font-black">&darr;</span>
  </summary>
  <p class="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
    Se deben limpiar a diario con una gasa estéril humedecida en suero fisiológico o limpiador oftálmico suave, secando muy bien el pliegue con una gasa seca. El color rojizo proviene de las porfirinas oxidadas de las lágrimas. Mantener la zona completamente seca evita la reproducción de hongos como la levadura Malassezia.
  </p>
</details>

<details class="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm mb-4 transition-all">
  <summary class="font-bold text-obsidian dark:text-canvas cursor-pointer flex justify-between items-center text-lg list-none">
    <span>¿Cuáles son los signos de alarma para acudir de urgencia al oftalmólogo veterinario?</span>
    <span class="text-cornflower transition-transform group-open:rotate-180 text-xl font-black">&darr;</span>
  </summary>
  <p class="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
    Debe acudir de inmediato si el perro mantiene el ojo cerrado con signos de dolor (blefarospasmo), si nota una mancha blanquecina o azulada en la superficie de la córnea, secreción mucosa espesa amarillenta o inflamación súbita de los párpados.
  </p>
</details>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es el ojo de cereza y por qué nunca debe extirparse la glándula?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es el prolapso de la glándula lagrimal del tercer párpado. Nunca debe extirparse porque produce hasta el 50% de la lágrima del ojo; su eliminación causa ojo seco irreversible. Debe reposicionarse quirúrgicamente con la técnica de Morgan."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué el Bulldog Francés Fluffy es más propenso a úlceras en los ojos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Por la conformación de sus órbitas poco profundas que exponen el globo ocular y el roce de pelos largos faciales si no se mantienen peinados y limpios."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo se deben limpiar las manchas rojas del lagrimal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Con gasa estéril y suero fisiológico cada día, secando muy bien el pliegue lagrimal para evitar la proliferación de la levadura Malassezia debida a las porfirinas oxidadas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuáles son los signos de alarma para acudir de urgencia al oftalmólogo veterinario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ojo cerrado con dolor, lagrimeo excesivo, opacidad blanquecina en la córnea o secreción purulenta requieren atención veterinaria inmediata para evitar perforación corneal."
      }
    }
  ]
}
</script>

<div class="mt-12 p-8 bg-gray-50 dark:bg-gray-800/80 rounded-3xl border border-gray-200 dark:border-gray-700 text-center">
  <h3 class="text-xl sm:text-2xl font-bold text-obsidian dark:text-canvas mb-3">¿Tienes Dudas sobre la Salud Ocular de tu Bulldog Francés Fluffy?</h3>
  <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-6">
    Nuestro equipo veterinario te brinda orientación experta en cuidados oftálmicos preventivos, genética y bienestar integral para ejemplares Fluffy de máxima pureza.
  </p>
  <button type="button" data-open-quiz="true" class="btn-primary bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-[#25D366]/20 inline-flex items-center gap-2 border-transparent text-base cursor-pointer"><span>Hablar con un Especialista en WhatsApp</span></button>
</div>"""

w1 = count_words(art1_content)
w2 = count_words(art2_content)
print(f"Artículo 1: {w1} palabras | Desc: {len(art1_desc)} chars")
print(f"Artículo 2: {w2} palabras | Desc: {len(art2_desc)} chars")
