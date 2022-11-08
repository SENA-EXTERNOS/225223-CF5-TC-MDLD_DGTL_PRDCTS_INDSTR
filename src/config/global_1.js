export default {
  global: {
    componenteFormativo: 'Post- procesamiento de datos y nubes de puntos',
    descripcionCurso:
      'Esta formación desea orientar al aprendiz en generar configuraciones de modelos digitales de producto con base en herramientas de ensamble y plano del sistema CAD. Cuando se realiza el <em>scanner</em> 3D denominado flujo de trabajo, los archivos de exportación se presentan en la imagen escaneada y está en la utilización de modelos tridimensionales con un <em>software</em> de ingeniería denominado <em>Geomagic</em>.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Planificación de escaneo 3D',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de escáner',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Preparación del objeto a escanear',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Flujo de trabajo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Tratamiento de modelos tridimensionales y opciones de exportación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Utilización y publicación de modelos tridimensionales con <em>Geomagic</em>',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Flujo de trabajo ',
      referencia:
        'AR Medical Technologies Inc. (2021). Flujo de trabajo de MaskFit AR - Escaneo 3D. [video]. Youtube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=3Ij3R2UcwuY',
    },
    {
      tema: 'Tipos de escáner 3D',
      referencia:
        'Artec 3D. (2018). Obtención de un modelo 3D exacto de una motocicleta utilizando los <em>Artec Eva</em> y <em>Artec Space Spider</em>. [video]. Youtube. ',
      tipo: '',
      descarga: 'https://www.youtube.com/watch?v=fSGtFQ0uWIc',
    },
    {
      tema: 'Tratamiento de modelos tridimensionales ',
      referencia:
        'Grupo SYSTOP: SYSTOP, 3DlaserSolutions. (2021). Generación de modelos tridimensionales mediante nube de puntos de escáner láser aplicado en minería. [video]. Youtube.',
      tipo: 'Video',
      descarga: 'https://www.youtube.com/watch?v=CSP-ht4CkQQ',
    },
    {
      tema: 'Preparación del objeto a escanear',
      referencia:
        '<em>SHINING</em> 3D. (2021). <em>EinScan Salon Ep 2: Scan Preparation of Black, Transparent and Reflective Objects</em>. [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=jrAgnJ7myo0',
    },
    {
      tema: 'Opciones de exportación ',
      referencia:
        '<em>SolidServicios</em>. (2021). <em>SOLIDWORKS</em> TUTORIAL- Exportar a <em>Xdesing</em>. [video]. Youtube. ',
      tipo: 'Video',
      descarga: 'https://www.youtube.com/watch?v=G_T9VY4FH3s',
    },
    {
      tema: '<em>Geomagic</em>',
      referencia:
        '3D Systems en Español. (2020). Herramientas de Nubes de Puntos. [video]. Youtube. ',
      tipo: 'Video',
      descarga: 'https://www.youtube.com/watch?v=T3xSfNLpi5s',
    },
  ],
  glosario: [
    {
      termino: 'CAD',
      significado:
        'es el significado de la traducción en español de una abreviatura del idioma inglés que se describe: <em>computer aided design</em>, diseño asistido por computador.',
    },
    {
      termino: 'Escáner 3D de láser',
      significado:
        'es un tipo de escáner físico que se realiza gracias al proceso de triangulación trigonométrica por medio de luz láser.',
    },
    {
      termino: 'Escaneo 3D',
      significado:
        'técnica digital, que se utiliza para someter un objeto a un proceso por emisión de luz a ser captura de su morfología en sus tres dimensiones para plasmarlo en imágenes digitales.',
    },
    {
      termino: 'Escaneo 3D',
      significado:
        'técnica digital, que se utiliza para someter un objeto a un proceso por emisión de luz a ser captura de su morfología en sus tres dimensiones para plasmarlo en imágenes digitales.',
    },
    {
      termino: 'Flujo de trabajo',
      significado:
        'son diferentes pasos o tratamientos que se le hacen a la imagen resultante cuando se realiza el escaneo 3D de uno objeto.',
    },
    {
      termino: '<em>Geomagic</em>',
      significado:
        '<em>software</em> de ingeniería que permite la creación de imágenes 3D gracias al escaneo de esta misma tecnología (3D), donde la utilización de estos modelos tridimensionales se hace de manera común como se hace con un software CAD tradicional.',
    },
    {
      termino: 'obj',
      significado:
        'de su abreviatura del inglés (<em>wavefront</em> ó frente de onda): este formato almacena propiedades como el color y la textura de objetos tipo 3D.',
    },
    {
      termino: 'ply',
      significado:
        'de su abreviatura del inglés (<em>polygon file format</em> ó formato de archivo de polígono): este formato almacena propiedades como el color, descripción de la superficie, coordenadas espaciales de objetos tipo 3D.',
    },
    {
      termino: '<em>Software</em> CAD',
      significado:
        'son los programas informáticos gratuitos o de licencia que ayudan a la edición y creación de estos modelos tridimensionales los más representativos que existen en el mercado en especial para el sector industrial son: <em>SolidWorks</em>, <em>SolidEdge</em>, <em>Autodesk</em> o <em>Catia</em>',
    },
    {
      termino: 'stl',
      significado:
        'de su abreviatura del inglés (<em>STereo Lithography</em> ó <em>STéreo</em> Litografía) es el formato más común en los programas CAD, donde define la geometría de objetos tipo 3D.',
    },
    {
      termino: 'vrml',
      significado:
        'de su abreviatura del inglés que significa lenguaje de modelado de realidad virtual representa escenas u objetos de tipo interactivo o tridimensional (3D).',
    },
    {
      termino: '3D',
      significado:
        'abreviatura para indicar que se estará mencionando la palabra tridimensional.',
    },
  ],
  referencias: [
    {
      referencia:
        'Akca, K. (2022). <em>Preparación del escaneo de objetos negros, transparentes y reflectantes. Shining</em> 3D.',
      link:
        'https://support.einscan.com/es/support/solutions/articles/60000716538-preparaci%C3%B3n-del-escaneo-de-objetos-negros-transparentes-y-reflectantes',
    },
    {
      referencia:
        'Córdoba, J. (2022). <em>Creación de modelos anatómicos tridimensionales y de realidad aumentada para el estudio de la neuroanatomía.</em>  [Trabajo de grado para optar por el título de neurocirujano, Universidad del bosque].',
      link:
        'https://repositorio.unbosque.edu.co/bitstream/handle/20.500.12495/6892/Davidson_Cordoba_Juan_Sebastian_2022..pdf?sequence=1',
    },
    {
      referencia:
        'Golubeva, S. (2022). <em>Análisis de los mejores escáneres 3D de Artec 3D en 2022</em>. Artec3d.',
      link:
        'https://www.artec3d.com/es/learning-center/best-handheld-3d-scanners',
    },
    {
      referencia:
        'Kivolya, N. (2019). <em>Escáner de luz estructurada</em>. Artec3d.',
      link:
        'https://www.artec3d.com/es/learning-center/how-3d-scan-object-portable-structured-light-scanner',
    },
    {
      referencia:
        'Valverde, J. (2019), <em>Desarrollo de metodologías enfocadas a aplicaciones de ingeniería inversa para reproducir objetos mediante escaneado 3d, sistemas cad/cam y prototipado rápido</em> [Trabajo de titulación previo a la obtención del título de magíster en diseño y simulación, Escuela politécnica nacional].',
      link:
        'https://bibdigital.epn.edu.ec/bitstream/15000/20357/1/CD%209829.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
