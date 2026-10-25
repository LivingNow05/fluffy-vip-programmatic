# -*- coding: utf-8 -*-
"""
Script to generate and publish two new blog articles for Fluffy Frenchies:
1. Por Qué tu Bulldog Francés Fluffy Respira Rápido: Causas, Síntomas de Alarma y Protocolo Veterinario
2. Genética del Color Merle en el Bulldog Francés Fluffy: Patrones de Pigmentación, Ojos Azules y Cruces Éticos
"""

import json
import re
import os

def count_words(html_text):
    # Exclude script tags to count visible article words
    no_script = re.sub(r'<script.*?</script>', '', html_text, flags=re.DOTALL)
    clean = re.sub(r'<[^>]+>', ' ', no_script)
    clean = re.sub(r'\s+', ' ', clean)
    words = re.findall(r'\b[A-Za-zÁÉÍÓÚáéíóúñÑüÜ0-9\-\'\"]+\b', clean)
    return len(words)

# ==========================================
# ARTICLE 1: RESPIRACIÓN RÁPIDA
# ==========================================
slug_1 = "bulldog-frances-fluffy-respiracion-rapida-causas-alarma"
title_1 = "Por Qué tu Bulldog Francés Fluffy Respira Rápido: Causas, Síntomas de Alarma y Protocolo Veterinario"
desc_1 = "Descubre por qué tu Bulldog Francés Fluffy respira rápido: causas fisiológicas, taquipnea por calor o estrés, señales de alarma y protocolo veterinario."
cat_1 = "salud"
date_today = "2026-10-25"

content_1 = """<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Observar a tu <strong>Bulldog Francés Fluffy</strong> respirar con un ritmo acelerado despierta una comprensible inquietud en cualquier tutor devoto. Esta raza extraordinaria, célebre por su temperamento afectuoso y su exclusivo pelaje semilargo originado por la mutación recesiva del gen <em>FGF5</em>, posee particularidades anatómicas y fisiológicas que condicionan directamente su capacidad de ventilación. Distinguir qué ritmos son fisiológicos y cuáles constituyen una señal de alerta es clave para su longevidad y bienestar.
</p>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
En términos clínicos, la <strong>taquipnea</strong> describe un incremento en la frecuencia respiratoria en reposo que supera los parámetros habituales de la especie. Mientras que un can estándar registra entre 15 y 30 respiraciones por minuto (rpm) cuando descansa, el ejemplar braquicéfalo con manto denso experimenta fluctuaciones térmicas más marcadas. Analizamos a continuación las causas fisiológicas de la respiración rápida, las banderas rojas de emergencia y el protocolo veterinario preventivo.
</p>

<h2 class="text-2xl font-bold text-obsidian dark:text-canvas mt-10 mb-4">Fisiología Respiratoria en el Bulldog Francés: Parámetros Normales vs. Taquipnea</h2>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Para evaluar con precisión si tu Fluffy respira a un ritmo patológico, es imperativo cuantificar su frecuencia respiratoria basal en reposo absoluto o durante el sueño tranquilo, en una habitación fresca y sin estímulos estresantes.
</p>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Una respiración completa abarca un ciclo de inhalación y exhalación. Contar estos movimientos durante 30 segundos y multiplicar el resultado por dos ofrece la tasa por minuto:
</p>

<ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2 leading-relaxed">
  <li><strong>Frecuencia basal saludable (en reposo):</strong> Entre 15 y 30 respiraciones por minuto. El tórax se mueve con suavidad rítmica sin implicación abdominal.</li>
  <li><strong>Respiración acelerada transitoria (polipnea fisiológica):</strong> Entre 35 y 55 rpm tras juego o excitación moderada, normalizándose en menos de 10 minutos.</li>
  <li><strong>Taquipnea o jadeo hipertermorregulador:</strong> Más de 60 rpm con la boca abierta y lengua extendida buscando disipar calor.</li>
  <li><strong>Distrés respiratorio (urgencia crítica):</strong> Ritmo desordenado superior a 60 rpm en reposo sostenido con esfuerzo muscular visible en flancos y cuello estirado.</li>
</ul>

<div class="bg-cornflower/10 border-l-4 border-cornflower p-6 rounded-2xl my-8">
  <h3 class="text-lg font-bold text-obsidian dark:text-canvas mb-2">Fundamento Clínico del Pelaje Fluffy en la Termorregulación</h3>
  <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
    El perro disipa calor principalmente mediante el jadeo por evaporación en la mucosa lingual. El pelaje largo de la variedad Fluffy (genotipo l/l) provee un aislamiento térmico notable que puede enlentecer la pérdida de calor si el entorno supera los 24°C, demandando una mayor cadencia respiratoria para mantener estable la temperatura interna corporal.
  </p>
</div>

<h2 class="text-2xl font-bold text-obsidian dark:text-canvas mt-10 mb-4">Causas Fisiológicas y Ambientales de la Respiración Acelerada</h2>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
No toda aceleración ventilatoria denota enfermedad. Los Bulldogs Franceses Fluffy son intensamente expresivos y sensibles a su entorno:
</p>

<h3 class="text-xl font-bold text-obsidian dark:text-canvas mt-6 mb-3">1. Sueño REM y Fasciculaciones Oníricas</h3>
<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Durante la fase de movimiento ocular rápido (REM), el cerebro canino procesa vivencias del día. Es natural observar respiraciones rápidas y superficiales, pequeños espasmos en las patas o temblor en belfos que cesan al entrar en sueño profundo.
</p>

<h3 class="text-xl font-bold text-obsidian dark:text-canvas mt-6 mb-3">2. Estrés Térmico y Sensibilidad Ambiental</h3>
<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Un aumento en la temperatura de la habitación activa de inmediato el jadeo compensatorio. Debido al grosor de su manto afelpado, los ejemplares Fluffy requieren espacios aclimatados con buena ventilación.
</p>

<h3 class="text-xl font-bold text-obsidian dark:text-canvas mt-6 mb-3">3. Excitación Emocional, Ansiedad y Dolor Silencioso</h3>
<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
La llegada de tutores o ruidos imprevistos desencadena descargas de adrenalina que aceleran el pulso y la respiración. Asimismo, dolores ocultos por molestias osteoarticulares o gases intestinales pueden manifestarse con taquipnea continua con la boca cerrada.
</p>

<h2 class="text-2xl font-bold text-obsidian dark:text-canvas mt-10 mb-4">Tabla Clínica: Diagnóstico Diferencial de la Ventilación Canina</h2>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
El siguiente cuadro comparativo clasifica las pautas respiratorias más comunes para diferenciar un estado biológico ordinario de una urgencia médica:
</p>

<div class="overflow-x-auto my-8">
  <table class="w-full text-left border-collapse border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm">
    <thead class="bg-gray-100 dark:bg-gray-800 text-obsidian dark:text-canvas text-sm uppercase tracking-wider font-bold">
      <tr>
        <th class="p-4 border-b border-gray-200 dark:border-gray-700">Parámetro</th>
        <th class="p-4 border-b border-gray-200 dark:border-gray-700">Fisiológico / Normal</th>
        <th class="p-4 border-b border-gray-200 dark:border-gray-700">Taquipnea Moderada</th>
        <th class="p-4 border-b border-gray-200 dark:border-gray-700">Emergencia Crítica</th>
      </tr>
    </thead>
    <tbody class="text-sm text-gray-700 dark:text-gray-300 divide-y divide-gray-200 dark:divide-gray-700">
      <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
        <td class="p-4 font-semibold">Frecuencia en Reposo</td>
        <td class="p-4">15 - 30 rpm</td>
        <td class="p-4">35 - 55 rpm</td>
        <td class="p-4 font-bold text-rose-600">&gt; 60 rpm sostenida</td>
      </tr>
      <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
        <td class="p-4 font-semibold">Color de Encías y Lengua</td>
        <td class="p-4 text-emerald-600 font-medium">Rosa salmón brillante</td>
        <td class="p-4 text-amber-600 font-medium">Rojizo intenso o pálido leve</td>
        <td class="p-4 font-bold text-rose-600">Azul, violeta, cenizo (Cianosis)</td>
      </tr>
      <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
        <td class="p-4 font-semibold">Esfuerzo Abdominal</td>
        <td class="p-4">Nulo o imperceptible</td>
        <td class="p-4">Ligera contracción al exhalar</td>
        <td class="p-4 font-bold text-rose-600">Pumping abdominal marcado</td>
      </tr>
      <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
        <td class="p-4 font-semibold">Postura Corporal</td>
        <td class="p-4">Relajada, de lado o esfinge</td>
        <td class="p-4">Atenta, incorporada</td>
        <td class="p-4 font-bold text-rose-600">Ortopnea (cuello estirado, codos abiertos)</td>
      </tr>
      <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
        <td class="p-4 font-semibold">Ruidos Ventilatorios</td>
        <td class="p-4">Silenciosa o ronquido suave</td>
        <td class="p-4">Jadeo audible sin silbidos</td>
        <td class="p-4 font-bold text-rose-600">Estridor agudo, gorgoteo espumoso</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 class="text-2xl font-bold text-obsidian dark:text-canvas mt-10 mb-4">Señales de Alarma Inmediata: Cuándo Acudir al Hospital Veterinario</h2>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
El Síndrome Braquicéfalo (BOAS) comprende factores como narinas estenóticas y elongación del paladar blando. Cuando un ejemplar entra en un ciclo de sobreesfuerzo respiratorio, se genera una inflamación que estrecha las vías aéreas.
</p>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Debes trasladar a tu Bulldog Francés Fluffy de inmediato a urgencias si detectas cualquiera de estos síntomas clínicos:
</p>

<ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2 leading-relaxed">
  <li><strong>Cianosis en mucosas:</strong> Encías o lengua con tonalidad azulada o violeta oscura por falta de oxígeno.</li>
  <li><strong>Postura ortopneica:</strong> El animal rehúsa echarse, permanece de pie con codos separados y cuello estirado para abrir la vía aérea.</li>
  <li><strong>Estridor laríngeo:</strong> Sonidos inspiratorios agudos y metálicos que indican colapso laríngeo o inflamación de tejidos blandos.</li>
  <li><strong>Salivación espumosa espesa:</strong> Incapacidad de tragar saliva mientras intenta inhalar con desesperación.</li>
  <li><strong>Hipertermia severa (&gt; 39.5 °C):</strong> Elevación crítica de temperatura que puede derivar en golpe de calor.</li>
  <li><strong>Síncope o desmayo:</strong> Pérdida repentina de equilibrio o consciencia.</li>
</ul>

<div class="blog-cta-dark my-10 p-8 sm:p-10 rounded-3xl bg-[#0B1411] text-white relative overflow-hidden shadow-2xl border border-gray-800" style="background-color: #0B1411; color: #ffffff;">
  <div class="relative z-10 max-w-2xl">
    <span class="inline-block px-4 py-1.5 rounded-full bg-cornflower/20 text-cornflower text-xs font-bold uppercase tracking-widest mb-4">Crianza Responsable &amp; Genética VIP</span>
    <h3 class="text-2xl sm:text-3xl font-bold text-white mb-3">Ejemplares con Narinas Abiertas y Vías Respiratorias Saludables</h3>
    <p class="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
      En Dinastía Bulldog Fluffy VIP priorizamos la funcionalidad biológica. Nuestros reproductores son seleccionados mediante paneles genéticos y evaluaciones morfológicas de vías respiratorias, asegurando cachorros con narinas amplias, paladares equilibrados y excelente tolerancia al ejercicio cotidiano.
    </p>
    <div class="flex flex-wrap gap-4">
      <a href="/precios" class="blog-cta-btn-primary"><span>Consultar Planes &amp; Precios</span></a>
      <a href="/color/isabella" class="blog-cta-btn-outline"><span>Ver Variedad Isabella Fluffy</span></a>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold text-obsidian dark:text-canvas mt-10 mb-4">Protocolo Veterinario de Primeros Auxilios y Prevención Doméstica</h2>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Frente a un episodio de respiración agitada sin cianosis ni desmayo, actuar con método frena la progresión del cuadro:
</p>

<h3 class="text-xl font-bold text-obsidian dark:text-canvas mt-6 mb-3">Paso 1: Detener Todo Esfuerzo Físico</h3>
<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Cesa cualquier actividad o paseo al instante y traslada al ejemplar a una habitación fresca con aire acondicionado. Conserva la calma, pues el nerviosismo del tutor eleva el cortisol y la demanda de oxígeno del can.
</p>

<h3 class="text-xl font-bold text-obsidian dark:text-canvas mt-6 mb-3">Paso 2: Enfriamiento Pasivo y Seguro</h3>
<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Aplica toallas humedecidas con agua templada o fresca (nunca hielo ni agua helada) en almohadillas, ingles y axilas. El agua helada genera vasoconstricción periférica refleja, reteniendo el calor en los órganos internos.
</p>

<h3 class="text-xl font-bold text-obsidian dark:text-canvas mt-6 mb-3">Paso 3: Hidratación sin Forzar la Vía Oral</h3>
<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Permite que lama agua fresca o una gasa húmeda. Jamás viertas líquido directamente en su garganta mientras jadee con intensidad para evitar una broncoaspiración accidental.
</p>

<h3 class="text-xl font-bold text-obsidian dark:text-canvas mt-6 mb-3">Paso 4: Control de Peso y Arneses Anatómicos</h3>
<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
El control estricto del peso corporal previene la compresión torácica diafragmática. Utiliza siempre arneses en forma de 'Y' que liberen la tráquea de presiones mecánicas y programa chequeos veterinarios anuales.
</p>

<h2 class="text-2xl font-bold text-obsidian dark:text-canvas mt-10 mb-4">Preguntas Frecuentes sobre la Respiración Rápida en el Bulldog Francés Fluffy</h2>

<details class="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm mb-4 transition-all">
  <summary class="font-bold text-obsidian dark:text-canvas cursor-pointer flex justify-between items-center text-lg list-none">
    <span>¿Es normal que mi Bulldog Francés Fluffy respire rápido cuando duerme?</span>
    <span class="text-cornflower transition-transform group-open:rotate-180 text-xl font-black">&darr;</span>
  </summary>
  <p class="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
    Sí, es común y biológicamente inofensivo si ocurre durante la fase de sueño REM, acompañada de pequeños espasmos en patas o belfos. No obstante, si el perro mantiene una frecuencia superior a 35 rpm en sueño profundo y tranquilo sin soñar, debe evaluarse clínicamente para descartar patología cardiopulmonar o dolor subyacente.
  </p>
</details>

<details class="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm mb-4 transition-all">
  <summary class="font-bold text-obsidian dark:text-canvas cursor-pointer flex justify-between items-center text-lg list-none">
    <span>¿Cómo distingo un jadeo por calor de una taquipnea por dolor o estrés?</span>
    <span class="text-cornflower transition-transform group-open:rotate-180 text-xl font-black">&darr;</span>
  </summary>
  <p class="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
    El jadeo termorregulador se efectúa con la boca bien abierta y la lengua extendida, remitiendo al colocar al animal bajo aire acondicionado o en una superficie fresca. Por el contrario, la respiración rápida debida a dolor o distrés suele presentarse con boca semicerrada, pupilas dilatadas, postura rígida y desinterés general por el entorno.
  </p>
</details>

<details class="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm mb-4 transition-all">
  <summary class="font-bold text-obsidian dark:text-canvas cursor-pointer flex justify-between items-center text-lg list-none">
    <span>¿El pelaje largo del Fluffy empeora los problemas respiratorios de la raza?</span>
    <span class="text-cornflower transition-transform group-open:rotate-180 text-xl font-black">&darr;</span>
  </summary>
  <p class="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
    El gen FGF5 responsable del pelo largo únicamente modifica la longitud y textura folicular, sin alterar la estructura osteocartilaginosa interna de tráquea o paladar. Sin embargo, su manto afelpado ofrece mayor resistencia térmica, por lo que en climas cálidos el perro alcanzará el umbral de jadeo más rápidamente si no se climatiza el hogar.
  </p>
</details>

<details class="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm mb-4 transition-all">
  <summary class="font-bold text-obsidian dark:text-canvas cursor-pointer flex justify-between items-center text-lg list-none">
    <span>¿Qué debo hacer de inmediato si mi perro comienza a emitir sonidos de asfixia o gorgoteo?</span>
    <span class="text-cornflower transition-transform group-open:rotate-180 text-xl font-black">&darr;</span>
  </summary>
  <p class="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
    Suspende cualquier movimiento, coloca al perro en una estancia con ventilación fría directa, extiende suavemente su cuello sin forzar la mandíbula y contacta al hospital veterinario de urgencia más próximo. Evita introducir los dedos en la boca o forzar agua y trasládalo en un vehículo con aire acondicionado a máxima potencia.
  </p>
</details>

<details class="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm mb-4 transition-all">
  <summary class="font-bold text-obsidian dark:text-canvas cursor-pointer flex justify-between items-center text-lg list-none">
    <span>¿A qué edad se recomienda evaluar las vías respiratorias superiores en un cachorro Fluffy?</span>
    <span class="text-cornflower transition-transform group-open:rotate-180 text-xl font-black">&darr;</span>
  </summary>
  <p class="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
    La evaluación preliminar de narinas se realiza desde las 8 a 12 semanas durante sus primeras vacunas. La valoración exhaustiva del paladar blando y laringe se efectúa entre los 6 y 12 meses de edad, cuando las estructuras craneofaciales han alcanzado su madurez estructural fundamental.
  </p>
</details>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Es normal que mi Bulldog Francés Fluffy respire rápido cuando duerme?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, es común y biológicamente inofensivo si ocurre durante la fase de sueño REM, acompañada de pequeños espasmos en patas o belfos. No obstante, si el perro mantiene una frecuencia superior a 35 rpm en sueño profundo y tranquilo sin soñar, debe evaluarse clínicamente para descartar patología cardiopulmonar o dolor subyacente."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo distingo un jadeo por calor de una taquipnea por dolor o estrés?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El jadeo termorregulador se efectúa con la boca bien abierta y la lengua extendida, remitiendo al colocar al animal bajo aire acondicionado o en una superficie fresca. Por el contrario, la respiración rápida debida a dolor o distrés suele presentarse con boca semicerrada, pupilas dilatadas, postura rígida y desinterés general por el entorno."
      }
    },
    {
      "@type": "Question",
      "name": "¿El pelaje largo del Fluffy empeora los problemas respiratorios de la raza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El gen FGF5 responsable del pelo largo únicamente modifica la longitud y textura folicular, sin alterar la estructura osteocartilaginosa interna de tráquea o paladar. Sin embargo, su manto afelpado ofrece mayor resistencia térmica, por lo que en climas cálidos el perro alcanzará el umbral de jadeo más rápidamente si no se climatiza el hogar."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué debo hacer de inmediato si mi perro comienza a emitir sonidos de asfixia o gorgoteo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Suspende cualquier movimiento, coloca al perro en una estancia con ventilación fría directa, extiende suavemente su cuello sin forzar la mandíbula y contacta al hospital veterinario de urgencia más próximo. Evita introducir los dedos en la boca o forzar agua y trasládalo en un vehículo con aire acondicionado a máxima potencia."
      }
    },
    {
      "@type": "Question",
      "name": "¿A qué edad se recomienda evaluar las vías respiratorias superiores en un cachorro Fluffy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La evaluación preliminar de narinas se realiza desde las 8 a 12 semanas durante sus primeras vacunas. La valoración exhaustiva del paladar blando y laringe se efectúa entre los 6 y 12 meses de edad, cuando las estructuras craneofaciales han alcanzado su madurez estructural fundamental."
      }
    }
  ]
}
</script>

<div class="mt-12 p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 rounded-3xl border border-gray-200 dark:border-gray-700 text-center">
  <h3 class="text-2xl font-bold text-obsidian dark:text-canvas mb-3">¿Deseas Asesoría Personalizada sobre la Salud de tu Bulldog Fluffy?</h3>
  <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-6">
    Nuestros especialistas caninos y veterinarios están a tu disposición para orientarte sobre protocolos preventivos de salud, cuidados de vías aéreas y bienestar de ejemplares Fluffy VIP.
  </p>
  <button type="button" data-open-quiz="true" class="btn-primary bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-[#25D366]/20 inline-flex items-center gap-2 border-transparent text-base cursor-pointer"><span>Hablar con un Especialista en WhatsApp</span></button>
</div>"""


# ==========================================
# ARTICLE 2: GENÉTICA DEL COLOR MERLE
# ==========================================
slug_2 = "bulldog-frances-fluffy-merle-genetica-patrones-cuidados"
title_2 = "Genética del Color Merle en el Bulldog Francés Fluffy: Patrones de Pigmentación, Ojos Azules y Cruces Éticos"
desc_2 = "Guía genética sobre el patrón Merle en el Bulldog Francés Fluffy: alelo PMEL, ojos azules, heterocromía, riesgos del doble merle y crianza ética VIP."
cat_2 = "genetica"

content_2 = """<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
En el fascinante universo de la cinología contemporánea, la conjunción entre la mutación del pelaje largo (gen <em>FGF5</em>) y el espectacular patrón marmolado <strong>Merle</strong> ha dado origen a una de las expresiones fenotípicas más deslumbrantes y cotizadas del <strong>Bulldog Francés</strong>. El <strong>Bulldog Francés Fluffy Merle</strong> cautiva por su melena afelpada combinada con complejas matrices cromáticas de tonos pizarra, platino y carbón, complementadas con frecuencia por penetrantes miradas de ojos celestes o heterocromías hipnóticas.
</p>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Detrás de esta belleza visual existe un entramado genético de alta precisión que demanda conocimiento molecular por parte de criadores éticos y familias tutoras. El gen Merle no opera como un simple pigmento superficial, sino como un modificador estructural de la producción de melanina que exige selección rigurosa para preservar la salud sensorial de los cachorros. A continuación, desglosamos las bases científicas del locus M, los patrones reconocidos, la verdad biológica sobre los ojos azules y los principios inviolables de la crianza responsable VIP.
</p>

<h2 class="text-2xl font-bold text-obsidian dark:text-canvas mt-10 mb-4">El Locus M y el Gen PMEL: Biología Molecular del Manto Fluffy Merle</h2>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
El patrón Merle en los cánidos está regido por el gen <em>PMEL</em> (proteína premelanosómica), situado en el cromosoma canino 10. A nivel molecular, la mutación Merle consiste en la inserción de un retrotransposón SINE con una cola poli-A de longitud variable en el genoma canino.
</p>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Este retrotransposón interfiere de forma estocástica (aleatoria) en la síntesis normal de la <strong>eumelanina</strong> (pigmento oscuro de tonos negros, chocolates y azulados). Durante la embriogénesis, algunas células melanocíticas sintetizan pigmento pleno mientras que otras quedan parcial o totalmente inactivadas. El fenotipo visible es un fondo de color diluido salpicado por parches irregulares de pigmentación concentrada.
</p>

<div class="bg-cornflower/10 border-l-4 border-cornflower p-6 rounded-2xl my-8">
  <h3 class="text-lg font-bold text-obsidian dark:text-canvas mb-2">Interacción Sinérgica: El Gen Merle y el Gen Recesivo FGF5</h3>
  <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
    Para que un ejemplar sea Fluffy Merle, debe heredar dos copias recesivas del gen de pelo largo (genotipo <em>l/l</em> en FGF5) junto a un alelo Merle activo dominante (<em>M</em>) en heterocigosis con el alelo no-merle (<em>m</em>), resultando en la fórmula <strong>M/m l/l</strong>. La longitud del pelo largo aporta una tridimensionalidad óptica sin precedentes: los parches marmolados se difuminan suavemente a lo largo de los mechones en orejas, pecho y patas con un efecto de acuarela exclusivo.
  </p>
</div>

<h2 class="text-2xl font-bold text-obsidian dark:text-canvas mt-10 mb-4">Variedades Cromáticas de Élite en el Bulldog Fluffy Merle</h2>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Dado que el alelo Merle actúa sobre el pigmento basal del ejemplar, su interacción con otros loci de dilución genera combinaciones de extraordinaria elegancia:
</p>

<h3 class="text-xl font-bold text-obsidian dark:text-canvas mt-6 mb-3">1. Blue Merle Fluffy</h3>
<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Ocurre cuando el patrón Merle interactúa con el genotipo de dilución azul recesivo (<em>d/d</em> en el locus D). La base del manto adquiere un deslumbrante tono gris plateado contrastado con parches densos de color gris acero azulado, siendo una de las combinaciones más admiradas.
</p>

<h3 class="text-xl font-bold text-obsidian dark:text-canvas mt-6 mb-3">2. Isabella Merle Fluffy</h3>
<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Constituye la cumbre de la exclusividad cromática. Requiere la cuádruple interacción de homocigosis recesiva para chocolate/cocoa (<em>co/co</em> o <em>b/b</em>) y dilución azul (<em>d/d</em>), conformando el tono champán-grisáceo característico del Isabella sobre el cual se despliegan sutiles veteados platino y lila suave.
</p>

<h3 class="text-xl font-bold text-obsidian dark:text-canvas mt-6 mb-3">3. Lilac Merle y Chocolate Merle</h3>
<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
En el Lilac Merle, la pigmentación basal marrón-violácea se diluye creando remolinos de tono lavanda cálido. Por su parte, el Chocolate Merle exhibe contrastes de cacao puro con fondos cremosos, manteniendo trufas y almohadillas en tonos avellana cálido.
</p>

<h2 class="text-2xl font-bold text-obsidian dark:text-canvas mt-10 mb-4">Ojos Azules y Heterocromía: ¿Por Qué Ocurre y Qué Implica?</h2>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Una de las características más atractivas de los Bulldogs Fluffy Merle es la presencia de ojos celestes cristalinos, ya sea de forma bilateral, unilateral o sectorial (heterocromía donde un segmento del iris es celeste y el resto ámbar o café).
</p>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
El origen de este fenómeno radica en la migración de los melanocitos procedentes de la cresta neural. Si la dilución del alelo Merle alcanza los tejidos del estroma del iris durante la embriogénesis, la producción de pigmento queda suprimida. Ante la falta de melanina, la luz se dispersa en el iris mediante el efecto Rayleigh refractando tonalidades azul cielo.
</p>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Desde una perspectiva médica, <strong>en un ejemplar heterocigoto ético (M/m), los ojos azules no representan ceguera ni degeneración retiniana</strong>. La agudeza visual, la respuesta pupilar a la luz y la estructura interna del ojo permanecen plenamente intactas. Únicamente se sugiere evitar exposiciones solares prolongadas al mediodía por una sutil fotosensibilidad pupilar fisiológica.
</p>

<h2 class="text-2xl font-bold text-obsidian dark:text-canvas mt-10 mb-4">Tabla Genética de Cruces: Prácticas Éticas vs. Riesgos Críticos</h2>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
La siguiente matriz genética ilustra la viabilidad científica de los apareamientos, permitiendo distinguir un programa de crianza responsable de prácticas de riesgo:
</p>

<div class="overflow-x-auto my-8">
  <table class="w-full text-left border-collapse border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm">
    <thead class="bg-gray-100 dark:bg-gray-800 text-obsidian dark:text-canvas text-sm uppercase tracking-wider font-bold">
      <tr>
        <th class="p-4 border-b border-gray-200 dark:border-gray-700">Cruce Planificado</th>
        <th class="p-4 border-b border-gray-200 dark:border-gray-700">Genotipo Esperado</th>
        <th class="p-4 border-b border-gray-200 dark:border-gray-700">Proporción Fenotípica</th>
        <th class="p-4 border-b border-gray-200 dark:border-gray-700">Dictamen Ético y Clínico</th>
      </tr>
    </thead>
    <tbody class="text-sm text-gray-700 dark:text-gray-300 divide-y divide-gray-200 dark:divide-gray-700">
      <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
        <td class="p-4 font-semibold">Merle (M/m) x Sólido (m/m)</td>
        <td class="p-4">50% M/m, 50% m/m</td>
        <td class="p-4">50% Fluffy Merle, 50% Fluffy Sólido</td>
        <td class="p-4 text-emerald-600 font-bold">100% SEGURO Y ÉTICO. Cachorros sanos y vitales.</td>
      </tr>
      <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
        <td class="p-4 font-semibold">Merle (M/m) x Merle (M/m)</td>
        <td class="p-4">25% M/M, 50% M/m, 25% m/m</td>
        <td class="p-4">25% Doble Merle, 75% Viables</td>
        <td class="p-4 text-rose-600 font-bold">ESTRICTAMENTE PROHIBIDO. Riesgo de ceguera y sordera.</td>
      </tr>
      <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
        <td class="p-4 font-semibold">Merle Críptico (Mc/m) x Sólido (m/m)</td>
        <td class="p-4">50% Mc/m, 50% m/m</td>
        <td class="p-4">100% Fenotipo Sólido aparente</td>
        <td class="p-4 text-emerald-600 font-bold">SEGURO. Requiere secuenciación genética previa.</td>
      </tr>
      <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
        <td class="p-4 font-semibold">Merle (M/m) x Merle Críptico (Mc/m)</td>
        <td class="p-4">Posibles mosaicos alélicos</td>
        <td class="p-4">Variable según tamaño de la cola SINE</td>
        <td class="p-4 text-amber-600 font-bold">PRECAUCIÓN. Solo con análisis molecular de pares de bases.</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 class="text-2xl font-bold text-obsidian dark:text-canvas mt-10 mb-4">El Riesgo del 'Doble Merle' (M/M) y el Compromiso de Crianza VIP</h2>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
En cinología existe una regla de oro inviolable: <strong>nunca se deben cruzar dos ejemplares que porten el gen Merle entre sí</strong>. Cuando dos alelos dominantes <em>M</em> coinciden en el cigoto dando lugar a la condición homocigota <strong>M/M</strong> (conocida como "Doble Merle"), la ausencia de melanocitos suprime células esenciales en órganos sensoriales vitales.
</p>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
En el oído interno, los melanocitos son indispensables en la <em>estría vascular</em> de la cóclea para suministrar nutrientes a los cilios auditivos. Sin estas células, los cilios se atrofian provocando sordera neurosensorial congénita. Paralelamente, en el aparato ocular, el Doble Merle puede inducir microftalmia y colobomas del iris.
</p>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Por ello, en programas de alta gama se realiza una prueba de ADN a cada reproductor sólido para descartar <em>Merle críptico (Mc)</em> —alelos con inserciones cortas que lucen como mantos sólidos pero portan el transposón—. Cruzar siempre un ejemplar Merle heterocigoto (M/m) con un reproductor sólido certificado (m/m) erradica cualquier riesgo patológico, garantizando cachorros con oído y vista intachables.
</p>

<div class="blog-cta-dark my-10 p-8 sm:p-10 rounded-3xl bg-[#0B1411] text-white relative overflow-hidden shadow-2xl border border-gray-800" style="background-color: #0B1411; color: #ffffff;">
  <div class="relative z-10 max-w-2xl">
    <span class="inline-block px-4 py-1.5 rounded-full bg-cornflower/20 text-cornflower text-xs font-bold uppercase tracking-widest mb-4">Crianza Responsable &amp; Genética VIP</span>
    <h3 class="text-2xl sm:text-3xl font-bold text-white mb-3">Linajes Fluffy Merle Libres de Defectos Sensoriales</h3>
    <p class="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
      En Dinastía Bulldog Fluffy VIP implementamos paneles genéticos completos por secuenciación molecular para el gen PMEL y locus FGF5. Nuestros cachorros Merle provienen exclusivamente de cruces éticos certificados, asegurando salud auditiva plena, visión perfecta y una morfología cobby inigualable.
    </p>
    <div class="flex flex-wrap gap-4">
      <a href="/precios" class="blog-cta-btn-primary"><span>Consultar Planes &amp; Precios</span></a>
      <a href="/color/isabella" class="blog-cta-btn-outline"><span>Ver Variedad Isabella Fluffy</span></a>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold text-obsidian dark:text-canvas mt-10 mb-4">Cuidados Específicos del Pelaje y la Piel en el Fluffy Merle</h2>

<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
El mantenimiento estético de un Bulldog Francés Fluffy Merle conjuga las atenciones de un manto largo con la preservación dérmica en zonas con menor densidad de melanina:
</p>

<ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2 leading-relaxed">
  <li><strong>Cepillado regular con carda suave:</strong> Realizar sesiones 3 veces por semana con spray acondicionador para evitar nudos en axilas y traseras de orejas.</li>
  <li><strong>Protección solar tópica en áreas despigmentadas:</strong> Si el ejemplar presenta zonas rosadas en la trufa o párpados, aplicar bálsamos con filtro solar canino sin óxido de zinc en días soleados.</li>
  <li><strong>Nutrición rica en Omega-3 y zinc:</strong> La síntesis de queratina se beneficia de suplementos con aceite de salmón rico en EPA y DHA, potenciando el brillo del manto marmolado.</li>
  <li><strong>Baño higiénico con champú hidratante de avena:</strong> Cosméticos veterinarios libres de sulfatos que limpian sin alterar los lípidos protectores de la piel.</li>
</ul>

<h2 class="text-2xl font-bold text-obsidian dark:text-canvas mt-10 mb-4">Preguntas Frecuentes sobre el Bulldog Francés Fluffy Merle</h2>

<details class="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm mb-4 transition-all">
  <summary class="font-bold text-obsidian dark:text-canvas cursor-pointer flex justify-between items-center text-lg list-none">
    <span>¿Un Bulldog Francés Fluffy Merle es más delicado de salud que uno tradicional?</span>
    <span class="text-cornflower transition-transform group-open:rotate-180 text-xl font-black">&darr;</span>
  </summary>
  <p class="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
    No, siempre y cuando proceda de un cruce ético heterocigoto (M/m x m/m) con progenitores testados genéticamente. Un Fluffy Merle sano posee la misma robustez inmunológica, esperanza de vida y vitalidad que cualquier otro ejemplar de color sólido. Las complicaciones sensoriales ocurren exclusivamente en cruces doble merle (M/M).
  </p>
</details>

<details class="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm mb-4 transition-all">
  <summary class="font-bold text-obsidian dark:text-canvas cursor-pointer flex justify-between items-center text-lg list-none">
    <span>¿Los ojos azules en un cachorro Fluffy Merle pueden cambiar de color al crecer?</span>
    <span class="text-cornflower transition-transform group-open:rotate-180 text-xl font-black">&darr;</span>
  </summary>
  <p class="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
    Los cachorros nacen con ojos azul grisáceo debido a la inmadurez de los melanocitos. Entre las 8 y 14 semanas se define la pigmentación final. Si el iris carece de melanocitos por acción del alelo Merle, los ojos mantendrán su color azul cristalino durante toda su vida adulta. Si existía pigmentación latente, oscurecerán hacia ámbar o castaño.
  </p>
</details>

<details class="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm mb-4 transition-all">
  <summary class="font-bold text-obsidian dark:text-canvas cursor-pointer flex justify-between items-center text-lg list-none">
    <span>¿Qué es el 'Merle Críptico' y por qué es tan peligroso sin pruebas de ADN?</span>
    <span class="text-cornflower transition-transform group-open:rotate-180 text-xl font-black">&darr;</span>
  </summary>
  <p class="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
    El Merle Críptico (Mc) es una variación alélica de PMEL con una inserción corta que no produce manchas visibles en el pelaje, pareciendo un perro 100% sólido. Si se cruza con un ejemplar Merle visible sin test previo de ADN, pueden nacer cachorros Doble Merle con severas discapacidades auditivas u oculares.
  </p>
</details>

<details class="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm mb-4 transition-all">
  <summary class="font-bold text-obsidian dark:text-canvas cursor-pointer flex justify-between items-center text-lg list-none">
    <span>¿Por qué las organizaciones tradicionales como la FCI o AKC debaten sobre el color Merle?</span>
    <span class="text-cornflower transition-transform group-open:rotate-180 text-xl font-black">&darr;</span>
  </summary>
  <p class="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
    Los estándares decimonónicos de clubes tradicionales fueron redactados reconociendo únicamente colores como fawn, atigrado y blanco. Aunque organizaciones internacionales emiten registros genealógicos para ejemplares exóticos y Fluffy, los clubes tradicionales no los admiten en pistas de conformación cerrada por tradición histórica.
  </p>
</details>

<details class="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm mb-4 transition-all">
  <summary class="font-bold text-obsidian dark:text-canvas cursor-pointer flex justify-between items-center text-lg list-none">
    <span>¿Cómo se comprueba que un cachorro Fluffy Merle tiene perfecta audición?</span>
    <span class="text-cornflower transition-transform group-open:rotate-180 text-xl font-black">&darr;</span>
  </summary>
  <p class="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
    La confirmación diagnóstica definitiva se realiza mediante el examen de Potenciales Evocados Auditivos del Tronco Encefálico (BAER). Esta prueba veterinaria no invasiva evalúa la respuesta eléctrica en la cóclea y vías auditivas ante estímulos sonoros, certificando la perfecta audición bilateral antes de la entrega del cachorro.
  </p>
</details>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Un Bulldog Francés Fluffy Merle es más delicado de salud que uno tradicional?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, siempre y cuando proceda de un cruce ético heterocigoto (M/m x m/m) con progenitores testados genéticamente. Un Fluffy Merle sano posee la misma robustez inmunológica, esperanza de vida y vitalidad que cualquier otro ejemplar de color sólido. Las complicaciones sensoriales ocurren exclusivamente en cruces doble merle (M/M)."
      }
    },
    {
      "@type": "Question",
      "name": "¿Los ojos azules en un cachorro Fluffy Merle pueden cambiar de color al crecer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los cachorros nacen con ojos azul grisáceo debido a la inmadurez de los melanocitos. Entre las 8 y 14 semanas se define la pigmentación final. Si el iris carece de melanocitos por acción del alelo Merle, los ojos mantendrán su color azul cristalino durante toda su vida adulta. Si existía pigmentación latente, oscurecerán hacia ámbar o castaño."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué es el 'Merle Críptico' y por qué es tan peligroso sin pruebas de ADN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El Merle Críptico (Mc) es una variación alélica de PMEL con una inserción corta que no produce manchas visibles en el pelaje, pareciendo un perro 100% sólido. Si se cruza con un ejemplar Merle visible sin test previo de ADN, pueden nacer cachorros Doble Merle con severas discapacidades auditivas u oculares."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué las organizaciones tradicionales como la FCI o AKC debaten sobre el color Merle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los estándares decimonónicos de clubes tradicionales fueron redactados reconociendo únicamente colores como fawn, atigrado y blanco. Aunque organizaciones internacionales emiten registros genealógicos para ejemplares exóticos y Fluffy, los clubes tradicionales no los admiten en pistas de conformación cerrada por tradición histórica."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo se comprueba que un cachorro Fluffy Merle tiene perfecta audición?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La confirmación diagnóstica definitiva se realiza mediante el examen de Potenciales Evocados Auditivos del Tronco Encefálico (BAER). Esta prueba veterinaria no invasiva evalúa la respuesta eléctrica en la cóclea y vías auditivas ante estímulos sonoros, certificando la perfecta audición bilateral antes de la entrega del cachorro."
      }
    }
  ]
}
</script>

<div class="mt-12 p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 rounded-3xl border border-gray-200 dark:border-gray-700 text-center">
  <h3 class="text-2xl font-bold text-obsidian dark:text-canvas mb-3">¿Deseas Asesoría Personalizada sobre Ejemplares Fluffy Merle Exóticos?</h3>
  <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-6">
    Nuestros genetistas y especialistas caninos están a tu disposición para orientarte sobre linajes certificados, pruebas de ADN y disponibilidad exclusiva de cachorros Fluffy VIP.
  </p>
  <button type="button" data-open-quiz="true" class="btn-primary bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-[#25D366]/20 inline-flex items-center gap-2 border-transparent text-base cursor-pointer"><span>Hablar con un Especialista en WhatsApp</span></button>
</div>"""

def main():
    w1 = count_words(content_1)
    w2 = count_words(content_2)
    print(f"Article 1 visible word count: {w1} words")
    print(f"Article 2 visible word count: {w2} words")
    
    assert 1300 <= w1 <= 1700, f"Article 1 word count {w1} is outside 1300-1700 range!"
    assert 1300 <= w2 <= 1700, f"Article 2 word count {w2} is outside 1300-1700 range!"
    
    # Check images exist
    img_path_1 = f"public/images/blog/{slug_1}.webp"
    img_path_2 = f"public/images/blog/{slug_2}.webp"
    assert os.path.exists(img_path_1) and os.path.getsize(img_path_1) > 20000, f"{img_path_1} missing or < 20KB"
    assert os.path.exists(img_path_2) and os.path.getsize(img_path_2) > 20000, f"{img_path_2} missing or < 20KB"

    # Read existing articles
    with open("blog_articles.json", "r", encoding="utf-8") as f:
        articles = json.load(f)
    
    existing_slugs = {a["slug"] for a in articles}
    next_id = max(a["id"] for a in articles) + 1 if articles else 1
    
    new_articles = []
    
    if slug_1 not in existing_slugs:
        art1 = {
            "id": next_id,
            "cat": cat_1,
            "title": title_1,
            "desc": desc_1,
            "author": "Dinastía Bulldog Fluffy VIP",
            "date": date_today,
            "slug": slug_1,
            "img": f"/images/blog/{slug_1}.webp",
            "readTime": "8 min",
            "content": content_1
        }
        articles.append(art1)
        new_articles.append(art1)
        next_id += 1
    else:
        print(f"Slug {slug_1} already exists in blog_articles.json")

    if slug_2 not in existing_slugs:
        art2 = {
            "id": next_id,
            "cat": cat_2,
            "title": title_2,
            "desc": desc_2,
            "author": "Dinastía Bulldog Fluffy VIP",
            "date": date_today,
            "slug": slug_2,
            "img": f"/images/blog/{slug_2}.webp",
            "readTime": "8 min",
            "content": content_2
        }
        articles.append(art2)
        new_articles.append(art2)
        next_id += 1
    else:
        print(f"Slug {slug_2} already exists in blog_articles.json")

    # Save to both blog_articles.json and src/data/blog_articles.json
    with open("blog_articles.json", "w", encoding="utf-8") as f:
        json.dump(articles, f, indent=2, ensure_ascii=False)
        
    with open("src/data/blog_articles.json", "w", encoding="utf-8") as f:
        json.dump(articles, f, indent=2, ensure_ascii=False)
        
    print(f"Successfully saved {len(new_articles)} new articles to blog_articles.json and src/data/blog_articles.json.")

    # Update pending_blogs_queue.json
    with open("pending_blogs_queue.json", "r", encoding="utf-8") as f:
        queue = json.load(f)
        
    completed_slugs = {slug_1, slug_2}
    for item in queue:
        if item.get("suggested_slug") in completed_slugs:
            item["status"] = "completed"
            item["completed_at"] = date_today
            
    with open("pending_blogs_queue.json", "w", encoding="utf-8") as f:
        json.dump(queue, f, indent=2, ensure_ascii=False)
        
    print("Updated pending_blogs_queue.json successfully.")

if __name__ == "__main__":
    main()
