export default {
  global: {
    Name: 'Modelado de bases de datos y construcción de esquemas relacionales.',
    Description:
      'Este componente profundiza en el modelado conceptual, lógico y físico de bases de datos, abordando modelos de datos, normalización, construcción del esquema relacional e introducción al lenguaje SQL. Proporciona las bases teóricas y prácticas necesarias para transformar requerimientos del dominio en estructuras relacionales eficientes y coherentes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de modelos de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de modelo de datos',
            hash: 't_1_1',
          },
          {
            numero: '1.1',
            titulo: 'Clasificación de los modelos de datos',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Modelos de datos vigentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Estructura del modelo jerárquico',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Concepto y características del modelo de red',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Modelos actuales (NoSQL, multimodelo)',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Modelo conceptual de bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto de modelo conceptual de datos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Modelo entidad–relación (ER)',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Diagramas entidad–relación',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Modelamiento lógico y físico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Definición de tablas, campos y atributos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de claves: primaria, foránea y compuesta',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Diseño de índices',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Representación física del almacenamient5',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Normalización de bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto y objetivos de la normalización',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Primera, segunda y tercera forma normal',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Eliminación de redundancias y dependencias',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Diseño estructural de la base de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Organización de la estructura de tablas',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Definición de relaciones entre tablas',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Integridad referencial',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Introducción al lenguaje de consulta SQL',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: '¿Qué es SQL y para qué sirve?',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Operaciones fundamentales de SQL',
            hash: 't_7_2',
          },
        ],
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/21710088_CF2_DU.pdf',
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
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Atributo',
      significado:
        'Característica que describe a una entidad; en el modelo lógico se implementa como una columna de tabla.',
    },
    {
      termino: 'Clave foránea (FK)',
      significado:
        'Campo que referencia una clave primaria de otra tabla, garantizando integridad referencial.',
    },
    {
      termino: 'Clave primaria (PK)',
      significado:
        'Atributo o conjunto de atributos que identifica de manera única un registro dentro de una tabla.',
    },
    {
      termino: 'Data warehouses',
      significado:
        'Bodega electrónica donde una empresa u organización almacena grandes volúmenes de información, generalmente provenientes de diversas fuentes y bases de datos.',
    },
    {
      termino: 'Dominio',
      significado:
        'Conjunto de valores o atributos que comparten un significado o propósito común dentro de la gestión de datos; representa el límite del sistema.',
    },
    {
      termino: 'Entidad',
      significado:
        'Objeto o concepto relevante para el dominio, representado en el modelo conceptual y posteriormente convertido en tabla.',
    },
    {
      termino: 'Grafos',
      significado:
        'Representaciones que modelan metadatos complejos o conceptos de dominio en un formato estandarizado para aportar semántica al procesamiento del lenguaje natural.',
    },
    {
      termino: 'Índice',
      significado:
        'Estructura física auxiliar que acelera la búsqueda de datos en una tabla.',
    },
    {
      termino: 'JSONB',
      significado:
        'Tipo de datos de PostgreSQL similar a JSON que se utiliza para almacenar datos semiestructurados.',
    },
    {
      termino: 'N:M',
      significado:
        'Notación utilizada para denominar una relación de muchos a muchos; comúnmente asociada con 1:N, que indica una relación uno a muchos.',
    },
    {
      termino: 'Paralelismo',
      significado:
        'Contexto en el que se emplean varios discos duros para mejorar el rendimiento o la disponibilidad del sistema.',
    },
    {
      termino: 'Relación',
      significado:
        'Vínculo entre dos entidades, expresado mediante cardinalidades y, en el modelo relacional, mediante claves foráneas.',
    },
    {
      termino: 'Validación',
      significado:
        'Comprobación y limpieza de los datos para evitar que ingresen incorrectos, incompletos o irrelevantes a la base de datos, garantizando su fiabilidad.',
      ificado:
        'Contexto en el que se emplean varios discos duros para mejorar el rendimiento o la disponibilidad del sistema.',
    },
  ],
  referencias: [
    {
      referencia:
        'Amazon Web Services. (2026). Introducción a Amazon Relational Database Service (Amazon RDS).',
      link:
        'https://docs.aws.amazon.com/es_es/AmazonRDS/latest/UserGuide/CHAP_GettingStarted.html',
    },
    {
      referencia:
        'Coronel, C., y Morris, S. (2023). Database systems: Design, implementation, and management. Cengage Learning.',
      link: 'https://faculty.cengage.com/works/9780357673034',
    },
    {
      referencia:
        'Elmasri, R., y Navathe, S. B. (2007). Fundamentals of database systems (7th ed.). Pearson.',
      link: '',
    },
    {
      referencia: 'Microsoft. (2026). Documentación técnica de SQL Server.',
      link:
        'https://learn.microsoft.com/es-es/sql/sql-server/?view=sql-server-ver17',
    },
    {
      referencia: 'MongoDB. (2026). Documentación de MongoDB.',
      link: 'https://www.mongodb.com/es/docs/',
    },
    {
      referencia: 'Oracle Corporation. (2025). Database concepts.',
      link:
        'https://docs.oracle.com/en/database/oracle/oracle-database/19/cncpt/index.html',
    },
    {
      referencia:
        'Chen, P. P.-S. (1976). The entity-relationship model—Toward a unified view of data. ACM Transactions on Database Systems, 1(1), 9–36.',
      link: 'https://doi.org/10.1145/320434.320440',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
