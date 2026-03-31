<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Modelamiento lógico y físico
    .row.bg-color-15
      .col-12
        .p-5
          .row.justify-content-center.align-items-stretch.g-0.mb-3(data-aos="fade-left")
            .col-lg-10.bg-color-6.p-4.mb-0.d-flex.align-items-center
              p.mb-0 El modelamiento lógico y físico representa la transformación progresiva del conocimiento conceptual en estructuras preparadas para su implementación en un Sistema Gestor de Bases de Datos (SGBD). El <b>nivel lógico</b> opera en un plano intermedio: no depende aún de un producto comercial específico, pero traduce entidades y relaciones en <b>tablas, claves primarias, claves foráneas y restricciones.</b> El <b>nivel físico</b>, en cambio, se concentra en cómo se almacenan los datos, cómo se distribuyen en páginas o bloques y cómo se optimizan los accesos.
            .col-lg-2.d-flex.align-items-center.justify-content-center
              figure
                img(src="@/assets/curso/tema4/img1.png", data-aos="zoom-in", style="width: 100%").mx-auto
          .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade")
            .col-lg-2.d-flex.align-items-center.justify-content-center
              figure
                img(src="@/assets/curso/tema4/img2.svg", data-aos="zoom-in", style="width: 100%").mx-auto
            .col-lg-10.p-4.mb-0.d-flex.align-items-center
              p.mb-0 Elmasri y Navathe (2007) señalan que estos niveles buscan “preservar la semántica del dominio mientras se maximiza la eficiencia y consistencia del sistema”. Por su parte, Coronel y Morris (2023) destacan que un modelo físico bien diseñado puede mejorar significativamente el rendimiento sin modificar la lógica del sistema, lo que evidencia la complementariedad de ambos niveles.
          p(data-aos="fade-left") <b>Esta relación puede sintetizarse de la siguiente manera:</b>          
          //- Inicio Tarjetas
          .row.mt-5.mb-3.justify-content-center(data-aos="fade-left")
            .col-sm-6.col-lg-2.mb-4.d-flex
              .card.h-100.border-0.shadow-sm
                .bg-color-2.p-2.d-flex.align-items-center.justify-content-center(style="min-height: 85px")
                  p.text-center.mb-0 <b>Conceptual</b>
                .card-body.bg-color-8            
                  | Describe entidades, atributos y relaciones sin considerar tecnología.
            .col-sm-6.col-lg-2.mb-4.d-flex
              .card.h-100.border-0.shadow-sm
                .bg-color-2.p-2.d-flex.align-items-center.justify-content-center(style="min-height: 85px")
                  p.text-center.mb-0 <b>Lógico</b>
                .card-body.bg-color-8            
                  | Traduce el modelo conceptual en tablas, claves y restricciones formales.
            .col-sm-6.col-lg-2.mb-4.d-flex
              .card.h-100.border-0.shadow-sm
                .bg-color-2.p-2.d-flex.align-items-center.justify-content-center(style="min-height: 85px")
                  p.text-center.mb-0 <b>Físico</b>
                .card-body.bg-color-8            
                  | Define almacenamiento, índices, particionamiento y optimización del rendimiento.
            .col-sm-6.col-lg-4.mb-4.d-flex.align-items-center
              figure.mb-0
                img(src='@/assets/curso/tema4/img3.png', style="width: 100%")            
          //- Fin Tarjetas
    p(data-aos="fade-left") El tránsito entre estos niveles exige coherencia estructural, criterio técnico y comprensión del dominio.
    Separador
    //- Inicio Tema 1.1
    .row.mt-5
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.1 Definición de tablas, campos y atributos
    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-9
        p(data-aos="fade-left") El primer paso del modelamiento lógico consiste en convertir las entidades del modelo conceptual en tablas, y sus características en columnas o campos. El término “atributo” se conserva desde el diagrama ER; sin embargo, en el modelo lógico adquiere formalidad: se convierte en un campo con nombre, tipo de dato y restricciones asociadas. Este proceso no implica una simple transferencia mecánica de elementos. Requiere decisiones estratégicas sobre la granularidad de la información. Por ejemplo:
        p.p-4.bg-color-7(data-aos="fade-left") 
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-check-circle.me-3.mt-1(style="color:#AD9721")
              p.mb-0 Un atributo <b>Dirección</b> puede desagregarse en Calle, Ciudad y Código Postal.
            li.d-flex
              i.fas.fa-check-circle.me-3.mt-1(style="color:#AD9721")
              p.mb-0 Un atributo <b>Nombre completo</b> puede dividirse en Nombre y Apellido, según las necesidades de consulta y reporte.                 
      .col-md-4.col-lg-3.d-flex.justify-content-center
        figure.mb-0p(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img4.png' style="width: 450px").img-fluid
    .row.mb-5.justify-content-center.align-items-center
      .col-md-5.col-lg-5.justify-content-center
        figure.mb-0p(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img5.png' style="width: 450px").img-fluid
      .col-md-7.col-lg-7
        .row 
        p(data-aos="fade-left") Estas decisiones dependen del uso previsto de la base de datos. Si se requieren consultas detalladas o segmentaciones específicas, conviene descomponer atributos compuestos. Si el objetivo es simplicidad operativa, puede mantenerse una estructura más compacta. A continuación, se presenta un ejemplo de transformación del nivel conceptual al lógico:
        .row.p-2.bg-color-5(data-aos="fade-left")
          p Entidad conceptual: <b>USUARIO</b>
          p Atributos conceptuales: Nombre, Documento, Correo, Teléfono
    p.mb-5(data-aos="fade-left") Antes de presentar la tabla, es pertinente aclarar que los tipos de datos y las restricciones se definen con base en criterios de integridad, unicidad y consistencia estructural.    
    //- Inicio Tabla
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-md-6
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1.
          span Estructura lógica de la entidad Usuario
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th(style="width: 30%") Campo
                th(style="width: 40%") Tipo sugerido
                th(style="width: 30%") Restricción
            tbody
              tr
                td id_usuario
                td INT
                td PK
              tr
                td documento
                td VARCHAR
                td UNIQUE
              tr
                td nombre
                td VARCHAR
                td NOT NULL
              tr
                td correo
                td VARCHAR
                td NOT NULL
              tr
                td telefono
                td VARCHAR
                td NULL
    //- Fin Tabla
    .row.mb-5.justify-content-center
      .col-10.bg-color-7
        p.p-4 Esta estructura garantiza identificación única, evita duplicidad en el documento y establece obligatoriedad en campos esenciales. No existe una única configuración correcta. Lo fundamental es que la tabla represente fielmente la semántica del dominio, preserve la coherencia con el modelo conceptual y facilite el uso operativo futuro, tanto en consultas como en generación de reportes y mantenimiento del sistema.
    Separador
    //- Inicio Tema 1.1
    .row.mt-5
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2	Tipos de claves: primaria, foránea y compuesta
    .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade")      
      .col-lg-10.p-4.mb-0.d-flex.align-items-center.bg-color-6
        p.mb-0 Las claves constituyen el mecanismo formal que garantiza la <b>identidad, coherencia e integridad</b> dentro del modelo relacional. No son simples valores almacenados en una tabla; funcionan como anclas estructurales que previenen inconsistencias y sostienen las relaciones entre datos. A continuación, se describen los principales tipos de claves y su función dentro del modelamiento lógico:
      .col-lg-2.d-flex.align-items-center.justify-content-center
        figure
          img(src="@/assets/curso/tema4/img6.svg", data-aos="zoom-in", style="width: 100%").mx-auto
    //- Carrusel
    .bg-full-width.bg-fondo-slider.mb-5
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema4/slide01_1.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Clave primaria (PK)
                    p Identifica cada registro de manera inequívoca. Se recomienda que sea estable, que no cambie con el tiempo; simple, preferiblemente conformada por un solo campo; y sin significado operacional mutable, evitando datos susceptibles de modificación, como números de documento sujetos a actualización normativa.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema4/slide01_2.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Clave foránea (FK)
                    p Representa el vínculo formal entre tablas y se deriva de las relaciones definidas en el modelo conceptual. Su función es asegurar que un valor registrado en una tabla exista previamente en otra, preservando la integridad referencial. Por ejemplo, si una tabla Prestamo contiene el campo id_usuario, este debe corresponder a un registro existente en la tabla Usuario.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema4/slide01_3.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Clave compuesta
                    p Se presenta cuando la unicidad de un registro depende de la combinación de varios campos. En una tabla DetalleFactura, la combinación (id_factura, id_producto) puede definir la identidad del registro, ya que un producto puede aparecer en distintas facturas y una factura puede incluir varios productos. Aunque resultan útiles cuando reflejan una relación natural entre entidades, su uso excesivo puede complejizar el diseño, afectar el rendimiento y dificultar la administración del sistema. Por ello, se recomienda emplearlas únicamente cuando representen de forma genuina la estructura semántica del dominio.
    //- Fin Carrusel
    Separador
    //- Inicio Tema 1.1
    .row.mt-5
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3	Diseño de índices
    p.mb-5(data-aos="fade-left") Los índices son estructuras adicionales que permiten <b>acelerar la recuperación de datos</b>, funcionando como rutas alternativas de acceso a la información. Aunque no forman parte del modelo conceptual, son elementos esenciales en el nivel físico del diseño de bases de datos.
    .row.justify-content-center.align-items-stretch.g-0
      .col-md-4.mb-0p(data-aos="fade-right")
        figure.mb-0.h-100
          img.w-100.h-100(src='@/assets/curso/tema4/img7.svg' style="object-fit: cover;")
      .col-md-4.bg-color-7.d-flex.align-items-center.mb-0p(data-aos="fade-left")
        .p-4
          p.mb-0 Para dimensionar su impacto, conviene considerar lo siguiente: una búsqueda sin índice puede implicar recorrer todos los registros de una tabla. Con un índice adecuado, el motor identifica directamente la ubicación del registro requerido, reduciendo significativamente el tiempo de respuesta.
    p.mt-5.mb-5.text-center(data-aos="fade-left") Este contraste puede comprenderse mediante la siguiente analogía:
    //- Inicio Tarjetas
    .row.mt-5.mb-3.justify-content-center(data-aos="fade-right")
      .col-sm-6.col-lg-3.mb-4.d-flex
        .card.h-100.border-0.shadow-sm
          .bg-color-2.d-flex.align-items-center.justify-content-center(style="min-height: 85px")
            p.text-center.mb-0 <b>Sin índice</b>
          .card-body.bg-color-8            
            | Buscar un libro en un estante desordenado revisando ejemplar por ejemplar.
      .col-sm-6.col-lg-3.mb-4.d-flex
        .card.h-100.border-0.shadow-sm
          .bg-color-2.d-flex.align-items-center.justify-content-center(style="min-height: 85px")
            p.text-center.mb-0 <b>Con índice</b>
          .card-body.bg-color-8            
            | Consultar un catálogo organizado y dirigirse directamente al ejemplar indicado.
    p.mb-5.text-center(data-aos="fade-left") A continuación, se presentan los tipos de índices más comunes en sistemas relacionales:
        //- Inicio Tarjetas
    .row.mb-5(data-aos="fade-right")
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.bg-color-7.p-4.border-0.rounded-4.h-100
          .row.justify-content-center.mb-3.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/tema4/tarjeta01_1.svg', style="width: 80px").mx-auto
          h3.text-center Índice simple
          p.text-center Basado en un único campo. Adecuado para búsquedas frecuentes por un atributo específico.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.bg-color-7.p-4.border-0.rounded-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema4/tarjeta01_2.svg', style="width: 80px").mx-auto
          h3.text-center Índice compuesto
          p.text-center Construido sobre dos o más campos. Útil cuando las consultas incluyen múltiples filtros combinados.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.bg-color-7.p-4.border-0.rounded-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema4/tarjeta01_3.svg', style="width: 80px").mx-auto
          h3.text-center Índice único
          p.text-center Garantiza que no existan valores duplicados en el campo indexado. Refuerza la integridad de los datos.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.bg-color-7.p-4.border-0.rounded-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema4/tarjeta01_4.svg', style="width: 80px").mx-auto
          h3.text-center Índice de texto completo
          p.text-center Diseñado para búsquedas en campos extensos o documentos, especialmente en consultas por palabras clave.
    //- Fin Tarjetas
    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-8
        p(data-aos="fade-left") El diseño de índices exige equilibrio técnico. Un número excesivo puede afectar negativamente el rendimiento en operaciones de inserción, actualización o eliminación, ya que el SGBD debe mantener cada índice sincronizado con los datos almacenados.
        p.p-4.bg-color-6(data-aos="fade-left") En este sentido, Coronel y Morris (2023) recomiendan crear índices únicamente sobre campos que se utilicen con frecuencia en filtros, ordenamientos o uniones (<i>JOIN</i>). De esta manera, se optimiza el rendimiento sin comprometer la eficiencia global del sistema.                        
      .col-md-4.col-lg-4.d-flex.justify-content-center
        figure.mb-0p(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img8.png' style="width: 450px").img-fluid
    Separador
    //- Inicio Tema 4.4
    .row.mt-5
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.4 Representación física del almacenamiento
    .row.bg-color-15
      .col-12
        .p-5
          p(data-aos="fade-left") Una vez definidos los elementos del modelo lógico, surge una pregunta fundamental: <b>¿cómo se almacenan realmente los datos en un Sistema Gestor de Bases de Datos (SGBD)?.</b> En el nivel físico, los datos no permanecen como tablas abstractas, sino que se organizan en estructuras internas optimizadas para almacenamiento y recuperación eficiente. Aunque cada motor implementa mecanismos propios, los principios generales son similares: dividir, agrupar y administrar la información de forma que se garantice rendimiento, seguridad e integridad. Los componentes físicos más relevantes pueden sintetizarse así:
          //- Inicio Tarjetas
          .row.mt-5.mb-3.justify-content-center(data-aos="fade-left")
            .col-sm-6.col-lg-3.mb-4.d-flex
              .card.h-100.border-0.shadow-sm
                .bg-color-2.p-2.d-flex.align-items-center.justify-content-center(style="min-height: 85px")
                  p.text-center.mb-0 <b>Páginas o bloques</b>
                .card-body.bg-color-8
                  | Unidades mínimas de almacenamiento donde se guardan los registros. Su tamaño suele ser fijo (por ejemplo, 8 KB o 16 KB).
            .col-sm-6.col-lg-3.mb-4.d-flex
              .card.h-100.border-0.shadow-sm
                .bg-color-2.p-2.d-flex.align-items-center.justify-content-center(style="min-height: 85px")
                  p.text-center.mb-0 <b>Archivos de datos</b>
                .card-body.bg-color-8
                  | Contenedores físicos que agrupan páginas y son gestionados internamente por el motor del SGBD.
            .col-sm-6.col-lg-3.mb-4.d-flex
              .card.h-100.border-0.shadow-sm
                .bg-color-2.p-2.d-flex.align-items-center.justify-content-center(style="min-height: 85px")
                  p.text-center.mb-0 <b>Índices físicos</b>
                .card-body.bg-color-8
                  | Estructuras jerárquicas (como árboles B+)  que optimizan la localización de registros.
            .col-sm-6.col-lg-3.mb-4.d-flex
              .card.h-100.border-0.shadow-sm
                .bg-color-2.p-2.d-flex.align-items-center.justify-content-center(style="min-height: 85px")
                  p.text-center.mb-0 <b><i>Buffer pools</i></b>
                .card-body.bg-color-8
                  | Áreas de memoria que mantienen datos activos para reducir accesos directos al disco.            
          //- Fin Tarjetas
          .row.justify-content-center.g-0.align-items-stretch.mb-5
            .col-md-8.col-lg-8.bg-color-7.p-4.p-md-5.d-flex.align-items-center
              p.mb-3 Diversos motores como Oracle, PostgreSQL y SQL Server describen en su documentación oficial que:
                ul.lista-ul.mb-0.mt-2
                  li.d-flex
                    i.fas.fa-check-circle.me-3.mt-1(style="color:#AD9721")
                    p.mb-0 Las tablas se almacenan en páginas o bloques de tamaño fijo.
                  li.d-flex
                    i.fas.fa-check-circle.me-3.mt-1(style="color:#AD9721")
                    p.mb-0 Los índices emplean estructuras jerárquicas para acelerar la búsqueda.
                  li.d-flex
                    i.fas.fa-check-circle.me-3.mt-1(style="color:#AD9721")
                    p.mb-0 La información más utilizada se mantiene en memoria intermedia (buffer pool).
                  li.d-flex
                    i.fas.fa-check-circle.me-3.mt-1(style="color:#AD9721")
                    p.mb-0 Los registros se agrupan en archivos físicos administrados por el motor.
            .col-md-4.col-lg-2
              figure.mb-0.h-100
                img.w-100.h-100(src='@/assets/curso/tema4/img9.png' style="object-fit: cover; object-position: center;")
    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-8
        p(data-aos="fade-left") En este nivel comienzan a influir factores como la <b>fragmentación</b>, la <b>paginación</b>, la <b>ubicación física de los datos</b> y la <b>compresión</b>, todos determinantes en el desempeño del sistema, especialmente cuando se gestionan miles o millones de registros. Una analogía permite comprender la diferencia entre niveles:
        p.p-4.bg-color-6(data-aos="fade-left") Si el modelo lógico define qué habitaciones tiene una casa y cómo se relacionan entre sí, el modelo físico determina cómo se distribuyen los ladrillos, qué tipo de cimiento soporta la estructura y cómo se organizan las conexiones internas que garantizan su funcionamiento eficiente.
      .col-md-4.col-lg-4.d-flex.justify-content-center
        figure.mb-0p(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img10.png' style="width: 350px").img-fluid
    p.mb-5(data-aos="fade-right") En consecuencia, el diseño físico no altera la semántica del dominio, pero impacta directamente en la eficiencia operativa, la escalabilidad y la estabilidad del sistema.  La representación física del almacenamiento permite comprender cómo el SGBD organiza internamente páginas, bloques, archivos de datos, memoria intermedia (<i>buffer pool</i>) e índices para garantizar acceso eficiente y consistencia operativa.
    p(data-aos="fade-right") <b>La representación física del almacenamiento define cómo se organizan los datos para mejorar el rendimiento del sistema:</b>
    .row.bg-color-16
      .col-12
        .p-5
          .bg-full-width.mt-5p(data-aos="fade-right")
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.mb-5.align-items-center
                  .col-lg-12.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-4 col-lg-6")
                      .bg-color-17.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta02_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Representación física del almacenamiento de bases de datos
                        p.card-text.text-center
                        | De la lógica a los ladrillos digitales.
                      .bg-color-17.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta02_2.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Cómo se almacenan los datos
                        p.card-text.text-center
                        | Los SGBD utilizan páginas, bloques, páginas de buffer y buffers de memoria.
                      .bg-color-17.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta02_3.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Buffer
                        p.card-text.text-center
                        | Espacio temporal en memoria para gestionar la lectura y escritura de datos.
                      .bg-color-17.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta02_4.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Procesos asociados
                        p.card-text.text-center
                        | Fragmentación, paginación, ubicación física y compresión.
                      .bg-color-17.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta02_5.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Analogía
                        p.card-text.text-center
                        | Si el modelo lógico define las habitaciones, el modelo físico define los ladrillos y los cimientos.
                      .bg-color-17.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta02_6.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Optimización del modelo físico
                        p.card-text.text-center
                        | Las decisiones se toman con base en patrones de consulta, patrones de acceso, patrones de negocio, reglas de negocio y requisitos no funcionales.
                      .bg-color-17.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta02_7.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Ajustes posibles
                        p.card-text.text-center
                        | Ajuste de columnas, tipos de índices, tipos específicos, particiones grandes y ubicación en discos (paralelismo).
                      .bg-color-17.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta02_8.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Clave para el rendimiento
                        p.card-text.text-center
                        | Diferencias de tiempo entre milisegundos y segundos. Referencias: AWS (2025) y SQL Server (2026).
                      .bg-color-17.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta02_9.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Impacto
                        p.card-text.text-center
                        | Influye de forma directa en la experiencia del usuario y en la operación del sistema.
          //- Fin carrusel
          //- Título con imagen
          .bg-full-width.mt-5
            .px-4.px-md-5.pb-md-3
            .titulo-con-imagen.mb-5(data-aos="fade-right")
              .titulo-con-imagen__fondo
                img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
                h3.titulo-con-imagen__texto Optimización del modelo físico
          //- Título con imagen
          p.mb-5(data-aos="fade-left") Optimizar no significa “hacer más rápido” sin criterio técnico. Implica tomar decisiones estratégicas sustentadas en:
          .row.justify-content-center.g-0.align-items-stretch.mb-5
            .col-md-8.col-lg-6.bg-color-8.p-4.p-md-5.d-flex.align-items-center
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.me-3.mt-1(style="color:#AD9721")
                    p.mb-0 Patrones de consulta frecuentes.
                  li.d-flex
                    i.fas.fa-check-circle.me-3.mt-1(style="color:#AD9721")
                    p.mb-0 Volumen esperado de datos.
                  li.d-flex
                    i.fas.fa-check-circle.me-3.mt-1(style="color:#AD9721")
                    p.mb-0 Reglas del negocio que condicionan integridad y acceso.
                  li.d-flex
                    i.fas.fa-check-circle.me-3.mt-1(style="color:#AD9721")
                    p.mb-0 Requerimientos no funcionales, como disponibilidad, escalabilidad y tiempos de respuesta.
            .col-md-4.col-lg-4
              figure.mb-0.h-100
                img.w-100.h-100(src='@/assets/curso/tema4/img11.png' style="object-fit: cover; object-position: center;")
          p.mb-5(data-aos="fade-left") Las principales acciones de optimización pueden sintetizarse así:
    //- Inicio carrusel
    .row.bg-color-16
      .col-12
        .p-5
          .bg-full-width.mt-5p(data-aos="fade-right")
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.mb-5.align-items-center
                  .col-lg-9.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-6 col-lg-6")
                      .bg-color-17.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta03_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Ajuste de longitud de columnas
                        p.card-text.text-center
                        | Reduce consumo de almacenamiento y mejora eficiencia en lectura.
                      .bg-color-17.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta03_2.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Selección adecuada de tipos de datos
                        p.card-text.text-center
                        | Disminuye uso innecesario de espacio y mejora rendimiento.
                      .bg-color-17.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta03_3.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Creación de índices específicos
                        p.card-text.text-center
                        | Optimiza consultas complejas y operaciones de filtrado.
                      .bg-color-17.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta03_4.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Particionamiento de tablas grandes
                        p.card-text.text-center
                        | Facilita administración y mejora tiempos de acceso en grandes volúmenes.
                      .bg-color-17.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema4/tarjeta03_4.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Distribución de archivos en distintos discos
                        p.card-text.text-center
                        | Incrementa paralelismo y rendimiento en operaciones intensivas.
                  .col-lg-3.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/tema4/img12.png', style="max-width: 250px", alt='', data-aos="zoom-in").m-auto
    //- Fin carrusel
    p.mb-5(data-aos="fade-left") Amazon Relational Database Service (2026) y Microsoft (2026) explican que la optimización del almacenamiento puede mejorar el rendimiento incluso sin modificar una sola línea de SQL. Esto demuestra que el diseño físico tiene un impacto directo en el comportamiento del sistema. En bases de datos críticas, estas decisiones pueden determinar si una consulta tarda milisegundos o varios segundos, lo que incide directamente en la experiencia del usuario y en la continuidad operativa de la organización.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
