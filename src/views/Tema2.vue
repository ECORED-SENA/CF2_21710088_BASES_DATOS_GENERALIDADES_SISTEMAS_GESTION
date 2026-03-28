<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Modelos de datos vigentes
    
    p(data-aos="fade-right") A lo largo del tiempo, distintos modelos han predominado según el contexto tecnológico. Comprender su evolución permite analizar por qué el <b>modelo relacional</b> continúa siendo dominante y cómo convive actualmente con alternativas más flexibles. 
    .bloque-texto-g.bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-3.p(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este recorrido no debe entenderse como una secuencia lineal en la que un modelo reemplaza completamente a otro. Se trata, más bien, de un diálogo entre diversas formas de organizar la información, cada una pertinente para necesidades específicas como consistencia transaccional, escalabilidad horizontal o manejo de estructuras dinámicas.
    .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade")
      .col-lg-10.bg-color-6.p-4.mb-0.d-flex.align-items-center
        p.mb-0 Antes de profundizar en sus diferencias, resulta pertinente contrastar las bases de datos relacionales con las soluciones NoSQL, dado que representan los enfoques más influyentes en la actualidad. A partir de esta comparación general, se sintetizan sus principales diferencias conceptuales:
      .col-lg-2.bg-color-3.d-flex.align-items-center.justify-content-center.p-4
        figure
          img(src="@/assets/curso/tema2/img2.svg", data-aos="zoom-in", style="width: 80px").mx-auto
    .row.justify-content-center.mt-5
      .col-lg-auto
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Bases de datos relacionales versus Bases de datos NoSQL
        figure
          img(src="@/assets/curso/tema2/img3.svg", alt=" Infografía comparativa sobre bases de datos relacionales y NoSQL que incluye la estructura, escalabilidad, flexibilidad y ejemplos. Presenta esquema fijo con tablas y datos estructurados frente a esquema dinámico con documentos, clave-valor y grafos; compara escalabilidad vertical y horizontal, rigidez y flexibilidad, y menciona tecnologías como Oracle, MySQL, MongoDB, Redis y Neo4j. ", style="width: 900px")
    Separador
    //- Inicio Tema2.1
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Estructura del modelo jerárquico
    p(data-aos="fade-left") El modelo jerárquico fue uno de los primeros enfoques formales de organización de datos. Se fundamenta en una estructura en forma de árbol, semejante al esquema de carpetas de un sistema operativo. Cada elemento, denominado <b>nodo</b>, mantiene una relación padre–hijo exclusiva: un hijo no puede depender de más de un padre. A continuación, se presenta un esquema representativo de su organización:
    .row.justify-content-center.mt-5      
      .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Bases de datos relacionales versus Bases de datos NoSQL
      .col-lg-6.mb-3
        figure
          img(src="@/assets/curso/tema2/img4.svg", alt=" Infografía comparativa sobre bases de datos relacionales y NoSQL que incluye la estructura, escalabilidad, flexibilidad y ejemplos. Presenta esquema fijo con tablas y datos estructurados frente a esquema dinámico con documentos, clave-valor y grafos; compara escalabilidad vertical y horizontal, rigidez y flexibilidad, y menciona tecnologías como Oracle, MySQL, MongoDB, Redis y Neo4j. ", style="width: 900px")
      .col-lg-6
          figure
          img(src="@/assets/curso/tema2/img5.png", style="width: 900px")
    p.mt-5(data-aos="fade-left") Este tipo de estructura se caracteriza por una jerarquía clara y dependencias unidireccionales: 
    .row.bg-color-15.align-items-center
      .col-12
        .p-5
          //- Inicio Tarjetas
          .row.mt-5.justify-content-center(data-aos="fade-left")
            .col-sm-6.col-lg-2.mb-4.d-flex.flex-column
              .card.h-100.border-0.shadow-sm
                p.text-center.p-2.bg-color-2.mb-0 <b>Raíz</b>
                .card-body.bg-color-8            
                  | Nodo principal del cual dependen todos los demás elementos.
            .col-sm-6.col-lg-2.mb-4.d-flex.flex-column
              .card.h-100.border-0.shadow-sm
                p.text-center.p-2.bg-color-2.mb-0 <b>Padre</b>
                .card-body.bg-color-8            
                  | Nodo que contiene o agrupa otros nodos subordinados.
            .col-sm-6.col-lg-2.mb-4.d-flex.flex-column
              .card.h-100.border-0.shadow-sm
                p.text-center.p-2.bg-color-2.mb-0 <b>Hijo</b>
                .card-body.bg-color-8            
                  | Nodo dependiente de un único padre.
            .col-sm-6.col-lg-2.mb-4.d-flex.flex-column
              .card.h-100.border-0.shadow-sm
                p.text-center.p-2.bg-color-2.mb-0 <b>Relación</b>
                .card-body.bg-color-8            
                  | Vínculo uno a muchos (1:N) entre padre e hijo.
            .col-sm-6.col-lg-2.mb-4.d-flex.flex-column
              .card.h-100.border-0.shadow-sm
                p.text-center.p-2.bg-color-2.mb-0 <b>Organización</b>
                .card-body.bg-color-8            
                  | Estructura rígida en niveles jerárquicos definidos.
          //- Fin Tarjetas
          p.mt-5.mb-5(data-aos="fade-left") Este diseño resulta adecuado cuando la información puede describirse mediante dependencias claramente delimitadas, como ocurre en organigramas institucionales, catálogos de productos o clasificaciones temáticas. Su simplicidad estructural facilita consultas previsibles y rutas de acceso definidas.          
          .row.justify-content-center.align-items-stretch.g-0.mb-3(data-aos="fade-up")
            .col-md-4.mb-0
              figure.mb-0.h-100
                img.w-100.h-100(src='@/assets/curso/tema2/img6.png' style="object-fit: cover;")
            .col-md-4.bg-color-7.d-flex.align-items-center.mb-0
              .p-4
                p.mb-0 No obstante, su rigidez se convirtió en una limitación en contextos donde los datos requieren múltiples relaciones o accesos flexibles. Según Elmasri y Navathe (2007), el modelo jerárquico ofrecía eficiencia operativa, pero sacrificaba <b>flexibilidad y expresividad</b>, lo que condujo a su progresiva disminución en aplicaciones modernas.
    //- Fin Tema2.1
    Separador
    //- Inicio Tema2.2
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2	Concepto y características del modelo de red    
    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-9
        p.p-4.bg-color-6(data-aos="fade-left") El siguiente hito en la evolución de los modelos de datos fue el <b>modelo de red</b>, regulado por el estándar CODASYL. A diferencia del modelo jerárquico, este enfoque permite que un registro tenga <b>múltiples padres</b>, lo que habilita un entramado más natural de relaciones entre datos.
        p(data-aos="fade-left") Mientras el modelo jerárquico organiza la información en forma de árbol, el modelo de red la concibe como una <b>malla de conexiones</b>. Esta característica posibilitó representar estructuras complejas en sectores como banca, manufactura y logística, donde las relaciones entre entidades suelen ser múltiples y dinámicas. Sus características principales pueden sintetizarse así:
      .col-md-4.col-lg-3.d-flex.justify-content-center
        figure.mb-0
          img(src='@/assets/curso/tema2/img7.png' style="width: 450px").img-fluid
    //- Inicio Tarjetas
    .row(data-aos="fade-left")
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.tarjeta--blanca.p-4.bordes.rounded.h-100
          .row.justify-content-center.mb-3.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/tema1/tarjeta01_1.svg')
          h3.text-center Flexibilidad elevada
          p.text-center Permite modelar relaciones complejas y múltiples entre registros.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.tarjeta--blanca.p-4.bordes.rounded.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/tarjeta01_2.svg')
          h3.text-center Acceso navegacional
          p.text-center El sistema accede a los datos siguiendo enlaces preestablecidos entre registros.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.tarjeta--blanca.p-4.bordes.rounded.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/tarjeta01_3.svg')
          h3.text-center Eficiencia de consulta
          p.text-center  El acceso directo a relaciones reduce costos computacionales en entornos estructurados.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.tarjeta--blanca.p-4.bordes.rounded.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/tarjeta01_4.svg')
          h3.text-center Complejidad técnica
          p.text-center Su diseño y mantenimiento requieren mayor conocimiento técnico especializado.     
    //- Fin Tarjetas
    p(data-aos="fade-left") Aunque el modelo de red representó un avance significativo en flexibilidad respecto al jerárquico, su complejidad dificultaba la comprensión por parte de usuarios no técnicos. Por esta razón, fue desplazado en el mercado masivo por el modelo relacional, que introdujo una lógica más intuitiva basada en tablas y consultas declarativas.
    //- Fin Tema2.2
    Separador
    //- Inicio Tema2.1
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Modelos actuales (NoSQL, multimodelo)
    p(data-aos="fade-left") El crecimiento exponencial de los datos, la necesidad de procesamiento en tiempo real y la diversidad de formatos impulsaron el surgimiento de los modelos NoSQL. Estos enfoques priorizan <b>flexibilidad estructural, escalabilidad horizontal y adaptación a entornos distribuidos.</b> A continuación, se presentan sus principales variantes:
    //- Inicio Accordion
    .bg--img_03.mt-5
    .row.justify-content-center
      .col-lg-3 
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/img8.png", alt="").img400.m-auto
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Bases documentales )")
              p.mb-4 Almacenan datos en documentos JSON o BSON. Son adecuadas cuando los registros no comparten exactamente la misma estructura. La documentación oficial de MongoDB (2026) resalta su aplicabilidad en aplicaciones web, analítica y microservicios.              
          .row(titulo="Almacenes clave–valor")
              p.mb-4 Estructuras simples orientadas a alto rendimiento. Constituyen la base de sistemas de caché como  <i>Redis</i>.
          .row(titulo="Bases de datos de grafos")
              p.mb-4 Representan entidades como nodos y relaciones como aristas. Son útiles en redes sociales, análisis de vínculos, rutas y sistemas de recomendación.
          .row(titulo="Modelos multimodelo")
              p.mb-4 Motores como  <i>PostgreSQL</i> o  <i>ArangoDB</i> integran varios paradigmas en un mismo servidor, permitiendo almacenar simultáneamente documentos, grafos y tablas relacionales.
    //- Fin Accordion
    p.p-4.bg-color-8.rounded(data-aos="fade-left") Antes de analizar su integración en arquitecturas modernas, resulta pertinente considerar su convergencia tecnológica. Los modelos actuales no sustituyen al relacional; lo complementan. Coronel y Morris (2023) sostienen que la elección del modelo depende del tipo de aplicación (transaccional, analítica, distribuida o semiestructurada)  y de los requisitos de consistencia, rendimiento y escalabilidad del sistema.


    //- Fin Tema2.1
</template>

<script>
export default {
  name: 'Tema2',
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
