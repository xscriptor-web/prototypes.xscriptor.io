export type Locale = "es" | "va"

export type Rich = string | { em: string } | { strong: string }

export interface AwardCopy {
  title: string
  detail?: string
}

export interface PatCopy {
  header: {
    nav: {
      home: string
      obras: string
      blog: string
      bio: string
      contacto: string
    }
    menuOpen: string
    menuClose: string
    mainMenu: string
    languageLabel: string
  }
  footer: {
    rights: string
    developer: string
    prototypes: string
    tagline: string
  }
  home: {
    title: string
    subtitle: string
    blogCta: string
    bioCta: string
    latest: string
    readMore: string
    recent: string
    allPosts: string
  }
  books: {
    knowMore: string
    allWorks: string
  }
  poetry: {
    fragment: string
  }
  blogIndex: {
    title: string
    subtitle: string
    emptyTitle: string
    emptyText: string
  }
  post: {
    back: string
  }
  bio: {
    title: string
    paragraphs: Rich[][]
    worksTitle: string
    awardsTitle: string
    awards: AwardCopy[]
  }
  obras: {
    title: string
    intro: string
    mediaTitle: string
    mediaIntro: string
    mediaOutro: string
  }
  contact: {
    title: string
    intro: string
    email: string
    note: string
  }
}

export const patCopy: Record<Locale, PatCopy> = {
  es: {
    header: {
      nav: {
        home: "Inicio",
        obras: "Obras",
        blog: "Blog",
        bio: "Bio",
        contacto: "Contacto",
      },
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
      mainMenu: "Menú principal",
      languageLabel: "Idioma",
    },
    footer: {
      rights: "Patricia Crespo Alcalá. Todos los derechos reservados.",
      developer: "Desarrollador",
      prototypes: "Índice de prototipos",
      tagline: "— poética y literatura —",
    },
    home: {
      title: "De poéticas",
      subtitle: "Poesía, literatura y crítica literaria desde Valencia",
      blogCta: "Blog",
      bioCta: "Biografía",
      latest: "Última publicación",
      readMore: "Leer más",
      recent: "Publicaciones recientes",
      allPosts: "Ver todas las publicaciones",
    },
    books: {
      knowMore: "Saber más",
      allWorks: "Ver todas las obras",
    },
    poetry: {
      fragment: "Fragmento",
    },
    blogIndex: {
      title: "Blog",
      subtitle: "Publicaciones de poesía y literatura",
      emptyTitle: "No hay publicaciones aún.",
      emptyText: "Pronto encontrarás aquí nuevos contenidos.",
    },
    post: {
      back: "Volver al blog",
    },
    bio: {
      title: "Biografía",
      paragraphs: [
        [
          "Patricia Crespo Alcalá es poeta, escritora y crítica literaria valenciana. Licenciada en Filología Clásica por la Universitat de València, su obra poética se caracteriza por una profunda sensibilidad hacia el lenguaje, explorando los límites entre la prosa poética y el verso, con una mirada que abarca desde lo íntimo hasta lo universal.",
        ],
        [
          "Colabora regularmente con medios como ",
          { em: "Zenda Libros" },
          " y ",
          { em: "Vallejo & Co." },
          ", donde publica críticas literarias y artículos sobre poesía contemporánea. Es colaboradora del programa de radio «Mar de Muses» y ha coorganizado los encuentros poéticos «Lavadero poético» (2019) y «Plaza poética» (2020). Actualmente es responsable del Festival Poético «Villa de las palabras» en Puertomingalvo (Teruel).",
        ],
        [
          "Ha impartido talleres de escritura poética y ha participado con sus poemas en varias exposiciones. Su trabajo ha sido reconocido con el ",
          { strong: "Premio de Poesía Prólogos Marina Izquierdo" },
          " y ",
          { strong: "Manifiesto de Incertidumbre" },
          " fue finalista de los ",
          { strong: "Premios de la Crítica Literaria Valenciana" },
          " en la categoría de poesía. Su poesía ha trascendido fronteras: una selección de sus poemas fue traducida al búlgaro por la hispanista Valentina Istatkova.",
        ],
      ],
      worksTitle: "Obras",
      awardsTitle: "Premios y reconocimientos",
      awards: [
        { title: "Premio de Poesía Prólogos Marina Izquierdo" },
        {
          title: "Finalista Premios de la Crítica Literaria Valenciana",
          detail: "Manifiesto de Incertidumbre (2022)",
        },
        {
          title: "Traducción al búlgaro",
          detail: "Poemas de «un solo árbol» por Valentina Istatkova",
        },
        {
          title: "Recitales internacionales",
          detail: "Festivales y encuentros en Europa y América",
        },
      ],
    },
    obras: {
      title: "Obras",
      intro:
        "A continuación se recogen las obras publicadas de Patricia Crespo Alcalá:",
      mediaTitle: "Colaboraciones en medios",
      mediaIntro:
        "Patricia Crespo Alcalá colabora habitualmente con medios literarios donde publica reseñas, críticas y artículos sobre poesía contemporánea. A continuación, algunas de sus últimas colaboraciones:",
      mediaOutro: "Pueden verse más colaboraciones en los respectivos medios.",
    },
    contact: {
      title: "Contacto",
      intro:
        "Puedes seguir a Patricia Crespo Alcalá en sus redes sociales o escribirle a través de los siguientes canales:",
      email: "Correo electrónico",
      note: "Todos los enlaces abren en una nueva ventana.",
    },
  },
  va: {
    header: {
      nav: {
        home: "Inici",
        obras: "Obres",
        blog: "Blog",
        bio: "Bio",
        contacto: "Contacte",
      },
      menuOpen: "Obrir menú",
      menuClose: "Tancar menú",
      mainMenu: "Menú principal",
      languageLabel: "Llengua",
    },
    footer: {
      rights: "Patricia Crespo Alcalá. Tots els drets reservats.",
      developer: "Desenvolupador",
      prototypes: "Índex de prototips",
      tagline: "— poètica i literatura —",
    },
    home: {
      title: "De poètiques",
      subtitle: "Poesia, literatura i crítica literària des de València",
      blogCta: "Blog",
      bioCta: "Biografia",
      latest: "Última publicació",
      readMore: "Llegir més",
      recent: "Publicacions recents",
      allPosts: "Veure totes les publicacions",
    },
    books: {
      knowMore: "Saber-ne més",
      allWorks: "Veure totes les obres",
    },
    poetry: {
      fragment: "Fragment",
    },
    blogIndex: {
      title: "Blog",
      subtitle: "Publicacions de poesia i literatura",
      emptyTitle: "Encara no hi ha publicacions.",
      emptyText: "Pròximament trobaràs ací nous continguts.",
    },
    post: {
      back: "Tornar al blog",
    },
    bio: {
      title: "Biografia",
      paragraphs: [
        [
          "Patricia Crespo Alcalá és poeta, escriptora i crítica literària valenciana. Llicenciada en Filologia Clàssica per la Universitat de València, la seua obra poètica es caracteritza per una profunda sensibilitat cap al llenguatge, tot explorant els límits entre la prosa poètica i el vers, amb una mirada que abasta des d'allò més íntim fins a allò universal.",
        ],
        [
          "Col·labora regularment amb mitjans com ",
          { em: "Zenda Libros" },
          " i ",
          { em: "Vallejo & Co." },
          ", on publica crítiques literàries i articles sobre poesia contemporània. És col·laboradora del programa de ràdio «Mar de Muses» i ha coorganitzat les trobades poètiques «Lavadero poético» (2019) i «Plaza poética» (2020). Actualment és responsable del Festival Poètic «Villa de las palabras» a Puertomingalvo (Terol).",
        ],
        [
          "Ha impartit tallers d'escriptura poètica i ha participat amb els seus poemes en diverses exposicions. El seu treball ha sigut reconegut amb el ",
          { strong: "Premi de Poesia Prólogos Marina Izquierdo" },
          " i ",
          { strong: "Manifiesto de Incertidumbre" },
          " va ser finalista dels ",
          { strong: "Premis de la Crítica Literària Valenciana" },
          " en la categoria de poesia. La seua poesia ha traspassat fronteres: una selecció dels seus poemes va ser traduïda al búlgar per l'hispanista Valentina Istatkova.",
        ],
      ],
      worksTitle: "Obres",
      awardsTitle: "Premis i reconeixements",
      awards: [
        { title: "Premi de Poesia Prólogos Marina Izquierdo" },
        {
          title: "Finalista Premis de la Crítica Literària Valenciana",
          detail: "Manifiesto de Incertidumbre (2022)",
        },
        {
          title: "Traducció al búlgar",
          detail: "Poemes d'«un solo árbol» per Valentina Istatkova",
        },
        {
          title: "Recitals internacionals",
          detail: "Festivals i trobades a Europa i Amèrica",
        },
      ],
    },
    obras: {
      title: "Obres",
      intro:
        "A continuació es recullen les obres publicades de Patricia Crespo Alcalá:",
      mediaTitle: "Col·laboracions en mitjans",
      mediaIntro:
        "Patricia Crespo Alcalá col·labora habitualment amb mitjans literaris on publica ressenyes, crítiques i articles sobre poesia contemporània. A continuació, algunes de les seues últimes col·laboracions:",
      mediaOutro: "Es poden veure més col·laboracions en els respectius mitjans.",
    },
    contact: {
      title: "Contacte",
      intro:
        "Pots seguir a Patricia Crespo Alcalá en les seues xarxes socials o escriure-li a través dels següents canals:",
      email: "Correu electrònic",
      note: "Tots els enllaços s'obrin en una finestra nova.",
    },
  },
}
