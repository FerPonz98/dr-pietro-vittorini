export const SITE = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://dr-pietro-vittorini.vercel.app",
  name: "Dr. Pietro Vittorini Sangüeza",
  title: "Dr. Pietro Vittorini · Implantes y Estética Dental en Cochabamba",
  description:
    "Implantes dentales, carillas naturales, coronas, muelas del juicio, ATM y más en Cochabamba. Dr. Pietro Vittorini Sangüeza, cirujano dentista e implantólogo formado en Brasil.",
  phone: "59177933351",
  phoneLabel: "+591 77933351",
  instagram: "https://www.instagram.com/drpietrovittorinisangueza/",
  instagramHandle: "@drpietrovittorinisangueza",
  city: "Cochabamba, Bolivia",
  // Reemplazar con la dirección exacta del consultorio
  mapQuery: "Cochabamba, Bolivia",
  // Reemplazar con el enlace real de reseñas del Perfil de Empresa de Google
  reviewUrl: "https://g.page/r/REEMPLAZAR/review",
  author: { name: "Fernando Ponz", url: "https://wa.me/59177108880" },
};

export const waLink = (msg: string) =>
  `https://wa.me/${SITE.phone}?text=${encodeURIComponent(msg)}`;

export type Faq = [string, string];
export type Treatment = {
  slug: string;
  icon: IconName;
  cat: string;
  t: string;
  short: string;
  seo: string;
  intro: string;
  tags: string[];
  who: string[];
  steps: [string, string][];
  faq: Faq[];
};
export type IconName = "implant" | "sparkle" | "crown" | "wisdom" | "jaw" | "gum" | "shield" | "smile";

export const TREATMENTS: Treatment[] = [
  {
    slug: "implantes-dentales", icon: "implant", cat: "Implantología", t: "Implantes dentales",
    short: "Reemplaza dientes perdidos con una raíz de titanio y una corona fija.",
    seo: "Implantes dentales en Cochabamba",
    intro: "Un implante reemplaza la raíz de un diente perdido con un tornillo de titanio. Sobre él se coloca una corona fija que se ve y se usa como un diente propio, sin depender de los dientes vecinos.",
    tags: ["Un diente", "Varios dientes", "Prótesis sobre implantes"],
    who: ["Perdiste uno o varios dientes", "Usas una prótesis removible que se mueve", "Te cuesta masticar ciertos alimentos", "Quieres una solución fija y duradera"],
    steps: [["Valoración y estudios", "Se revisa el hueso con radiografía o tomografía para planificar el caso."], ["Colocación del implante", "Cirugía con anestesia local, en el consultorio."], ["Integración", "Se esperan unos meses para que el implante se una al hueso."], ["Corona final", "Se coloca la corona hecha a medida, con forma y color naturales."]],
    faq: [["¿Duele ponerse un implante?", "La cirugía se hace con anestesia local, así que durante el procedimiento no se siente dolor. Los primeros días puede haber molestias leves que se controlan con las indicaciones y la medicación que indica el doctor."], ["¿Cuánto tiempo dura el tratamiento completo?", "Depende de cada caso. En general, entre la colocación y la corona final pasan algunos meses, que es el tiempo que el implante necesita para unirse al hueso."]],
  },
  {
    slug: "estetica-dental-carillas", icon: "sparkle", cat: "Estética", t: "Estética dental y carillas",
    short: "Carillas naturales, blanqueamiento y diseño de sonrisa a tu medida.",
    seo: "Carillas y estética dental en Cochabamba",
    intro: "Carillas, blanqueamiento y diseño de sonrisa pensados para tu rostro. La idea no es cambiar quién eres, sino mejorar forma, tamaño y tono para que tus dientes se vean naturales y proporcionales.",
    tags: ["Carillas", "Blanqueamiento", "Diseño de sonrisa"],
    who: ["Dientes con manchas o color irregular", "Dientes desgastados, cortos o con formas distintas", "Pequeños espacios entre dientes", "Quieres verte mejor sin que se note un tratamiento"],
    steps: [["Análisis de sonrisa", "Fotos y evaluación de tu rostro, labios y mordida."], ["Diseño", "Se planifica forma, tamaño y tono de cada diente."], ["Prueba", "Puedes ver cómo quedará antes del resultado final."], ["Colocación y control", "Se colocan las carillas y se revisa la mordida."]],
    faq: [["¿Las carillas se ven falsas?", "No tienen por qué. El Dr. Pietro diseña carillas proporcionales a tu rostro, con forma y tono pensados para que se vean como tus propios dientes."], ["¿El blanqueamiento daña los dientes?", "Hecho por un profesional y con el protocolo adecuado, es un tratamiento seguro. Puede dar algo de sensibilidad temporal."]],
  },
  {
    slug: "coronas-dentales", icon: "crown", cat: "Rehabilitación", t: "Coronas dentales",
    short: "Devuelven forma, fuerza y color a dientes muy dañados.",
    seo: "Coronas dentales en Cochabamba",
    intro: "Una corona cubre por completo un diente muy dañado para protegerlo y devolverle su forma, su fuerza y un color natural. Es la solución habitual en dientes fracturados o con tratamiento de conducto.",
    tags: ["Dientes fracturados", "Después de endodoncia", "Estética y función"],
    who: ["Diente fracturado o muy restaurado", "Diente con tratamiento de conducto", "Restauraciones antiguas desgastadas", "Necesitas proteger un diente débil"],
    steps: [["Evaluación", "Se revisa el diente y la mordida."], ["Preparación", "Se prepara el diente y se toman medidas."], ["Corona provisional", "Proteges el diente mientras se fabrica la definitiva."], ["Corona definitiva", "Se ajusta y se cementa la corona final."]],
    faq: [["¿Cuánto dura una corona?", "Con buena higiene y controles, una corona puede durar muchos años."], ["¿Se nota que es una corona?", "Se elige forma y color para que combine con tus dientes y no se note."]],
  },
  {
    slug: "muelas-del-juicio", icon: "wisdom", cat: "Cirugía", t: "Muelas del juicio",
    short: "Extracción de terceros molares retenidos o que causan dolor.",
    seo: "Extracción de muelas del juicio en Cochabamba",
    intro: "Cirugía para retirar terceros molares que no tienen espacio, están mal posicionados o causan molestias. Se planifica con radiografía y se hace con técnica cuidadosa para una recuperación más tranquila.",
    tags: ["Muelas retenidas", "Muelas mal posicionadas"],
    who: ["Dolor o inflamación al fondo de la boca", "Infecciones repetidas en la zona", "Muelas que empujan a otros dientes", "Indicación de tu ortodoncista"],
    steps: [["Radiografía", "Se evalúa la posición de las muelas."], ["Cirugía", "Con anestesia local, en el consultorio."], ["Indicaciones", "Cuidados y medicación para los primeros días."], ["Control", "Revisión de la cicatrización."]],
    faq: [["¿Cuándo hay que sacar las muelas del juicio?", "Cuando no tienen espacio para salir bien, están mal posicionadas, causan dolor o infecciones o empujan a los demás dientes. Con una radiografía se decide si conviene retirarlas."], ["¿Cuánto tarda la recuperación?", "Suele haber molestias e inflamación algunos días. El doctor te da las indicaciones según tu caso."]],
  },
  {
    slug: "atm", icon: "jaw", cat: "Función", t: "Tratamiento de la ATM",
    short: "Alivio para dolor de mandíbula, chasquidos y bruxismo.",
    seo: "Tratamiento de ATM y bruxismo en Cochabamba",
    intro: "La ATM es la articulación que une la mandíbula con el cráneo. Cuando no funciona bien puede dar dolor al masticar, chasquidos, tensión y dolores de cabeza. El tratamiento busca aliviar los síntomas y proteger tus dientes.",
    tags: ["Dolor mandibular", "Chasquidos", "Bruxismo"],
    who: ["Dolor al masticar o al abrir la boca", "Chasquidos o trabas en la mandíbula", "Aprietas o rechinas los dientes", "Dolores de cabeza o de oído frecuentes"],
    steps: [["Evaluación", "Revisión de la articulación, músculos y mordida."], ["Diagnóstico", "Se identifica la causa probable de las molestias."], ["Tratamiento", "Según el caso, placa de relajación, ajustes y recomendaciones."], ["Seguimiento", "Controles para medir la mejora."]],
    faq: [["¿Qué es la ATM y cómo sé si tengo un problema?", "Es la articulación que une la mandíbula con el cráneo. Señales frecuentes son dolor al masticar, chasquidos al abrir la boca, dolor de cabeza o de oído, o dificultad para abrir la boca por completo."], ["¿Qué es el bruxismo?", "Es apretar o rechinar los dientes, muchas veces de noche. Puede desgastar los dientes y cargar la articulación."]],
  },
  {
    slug: "gingivectomia", icon: "gum", cat: "Estética de encías", t: "Gingivectomía",
    short: "Remodelado de encía para una sonrisa más armónica.",
    seo: "Gingivectomía y estética de encías en Cochabamba",
    intro: "Remodelado del contorno de la encía para corregir sonrisas con mucha encía visible o dientes que se ven cortos. Es un procedimiento sencillo que cambia mucho la armonía de la sonrisa.",
    tags: ["Sonrisa gingival", "Contorno de encías"],
    who: ["Se te ve mucha encía al sonreír", "Tus dientes se ven cortos", "Encías disparejas entre dientes", "Complemento de carillas o diseño de sonrisa"],
    steps: [["Evaluación", "Se analiza tu sonrisa y el nivel de las encías."], ["Planificación", "Se define el nuevo contorno."], ["Procedimiento", "Con anestesia local, en una sesión."], ["Control", "Revisión de la cicatrización."]],
    faq: [["¿Es doloroso?", "Se hace con anestesia local. Después puede haber sensibilidad leve unos días."], ["¿Se puede combinar con carillas?", "Sí. Muchas veces se hace antes del diseño de sonrisa para mejorar las proporciones."]],
  },
  {
    slug: "curacion-de-caries", icon: "shield", cat: "General", t: "Curación de caries",
    short: "Restauraciones del color del diente que nadie nota.",
    seo: "Curación de caries con resina estética en Cochabamba",
    intro: "Se elimina la caries y se restaura el diente con resina del color natural, para que quede fuerte y la curación no se note. Atenderla a tiempo evita tratamientos más complejos después.",
    tags: ["Resinas estéticas", "Prevención"],
    who: ["Sensibilidad al frío o al dulce", "Manchas oscuras en los dientes", "Curaciones antiguas de metal", "Control preventivo"],
    steps: [["Revisión", "Se detecta la caries, a veces con radiografía."], ["Limpieza del diente", "Se retira la parte dañada."], ["Restauración", "Se reconstruye con resina del color del diente."], ["Pulido", "Se ajusta la mordida y se pule."]],
    faq: [["¿Se pueden cambiar curaciones de metal por blancas?", "En muchos casos sí. En la valoración se revisa si conviene cambiarlas."], ["¿Duele curar una caries?", "Normalmente se usa anestesia local, así que el procedimiento es cómodo."]],
  },
  {
    slug: "limpieza-dental", icon: "smile", cat: "Prevención", t: "Limpieza dental",
    short: "Elimina sarro y manchas y cuida tus encías.",
    seo: "Limpieza dental profesional en Cochabamba",
    intro: "Limpieza profesional que elimina sarro y manchas, cuida tus encías y ayuda a que tus tratamientos duren más. Es la base de una sonrisa sana.",
    tags: ["Profilaxis", "Control de sarro"],
    who: ["Sangrado de encías al cepillarte", "Sarro o manchas visibles", "Mal aliento persistente", "Hace más de seis meses de tu última limpieza"],
    steps: [["Revisión", "Se evalúan dientes y encías."], ["Limpieza", "Se retira el sarro y la placa."], ["Pulido", "Se quitan manchas superficiales."], ["Recomendaciones", "Consejos de higiene para tu caso."]],
    faq: [["¿Cada cuánto debo hacerme una limpieza?", "En general se recomienda cada seis meses, aunque según tu caso el doctor puede indicar otra frecuencia."], ["¿La limpieza desgasta el esmalte?", "No. Una limpieza profesional bien hecha no daña el esmalte."]],
  },
];

export const GENERAL_FAQ: Faq[] = [
  TREATMENTS[0].faq[0], TREATMENTS[1].faq[0], TREATMENTS[3].faq[0], TREATMENTS[4].faq[0], TREATMENTS[7].faq[0],
];

export const VIDEOS = [
  { src: "/video/carillas-sin-rodeos.mp4", poster: "/video/carillas-sin-rodeos.jpg", who: "EL DOCTOR", title: "Carillas, sin rodeos", desc: "Qué son y qué esperar del procedimiento." },
  { src: "/video/experiencia-fabio.mp4", poster: "/video/experiencia-fabio.jpg", who: "PACIENTE", title: "La experiencia de Fabio", desc: "Blanqueamiento y carillas, en sus palabras." },
  { src: "/video/naturales-proporcionales.mp4", poster: "/video/naturales-proporcionales.jpg", who: "EL DOCTOR", title: "Naturales y proporcionales", desc: "Por qué sus carillas no se ven falsas." },
];

export const faqJsonLd = (list: Faq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: list.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
});
