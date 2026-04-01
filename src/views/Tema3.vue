<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Modelo conceptual de bases de datos
    p(data-aos="fade-left") Cuando se modelan datos, la abstracción conceptual funciona como un punto intermedio entre la complejidad del mundo real y la formalidad matemática del modelo relacional. Este nivel de diseño, denominado <b>modelo conceptual</b>, ofrece una representación organizada del sistema sin incorporar todavía detalles técnicos como tipos de datos, índices o definiciones físicas.
    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-9
        p.p-4.bg-color-8(data-aos="fade-left") En los primeros apartados del componente formativo se revisaron los modelos históricos y actuales; ahora se inicia la transición hacia el diseño práctico. En términos de Elmasri y Navathe (2007), el modelo conceptual constituye una “<b>representación semántica” del dominio</b>, es decir, una estructura organizada de la realidad que se desea almacenar.
        p(data-aos="fade-left") Por su parte, Coronel y Morris (2023) lo describen como el lenguaje común entre analistas, diseñadores y usuarios, quienes necesitan comprender la organización de los datos sin conocer cómo los gestionará el sistema. En consecuencia, el modelo conceptual se convierte en la columna vertebral del diseño de una base de datos correcta y bien normalizada, pues articula comprensión del dominio y coherencia estructural.
      .col-md-4.col-lg-3.d-flex.justify-content-center
        figure.mb-0
          img(src='@/assets/curso/tema3/img1.png' style="width: 450px").img-fluid
    Separador
    //- Inicio Tema3.1
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Concepto de modelo conceptual de datos
    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-9
        p.p-4.bg-color-6(data-aos="fade-left") A diferencia del modelo lógico (donde ya existen tablas, claves primarias, tipos de datos y restricciones formales) el modelo conceptual se concentra en describir qué es relevante en el sistema y cómo se relacionan sus componentes, omitiendo deliberadamente cualquier consideración tecnológica. Un modelo conceptual sólido responde preguntas fundamentales como las siguientes:
      .col-md-4.col-lg-3.d-flex.justify-content-center
        figure.mb-0
          img(src='@/assets/curso/tema3/img2.png' style="width: 400px").img-fluid
    //- Inicio Tarjetas
    .row(data-aos="fade-left")
      .col-sm-6.col-lg.mb-4
        .tarjeta.bg-color-7.p-4.border-0.rounded-4.h-100.d-flex.align-items-center.justify-content-center
          h3.text-center ¿Qué entidades existen en el dominio?
      .col-sm-6.col-lg.mb-4
        .tarjeta.bg-color-7.p-4.border-0.rounded-4.h-100.d-flex.align-items-center.justify-content-center
          h3.text-center ¿Qué características describen a cada entidad?
      .col-sm-6.col-lg.mb-4
        .tarjeta.bg-color-7.p-4.border-0.rounded-4.h-100.d-flex.align-items-center.justify-content-center
          h3.text-center ¿Qué vínculos las conectan?
      .col-sm-6.col-lg.mb-4
        .tarjeta.bg-color-7.p-4.border-0.rounded-4.h-100.d-flex.align-items-center.justify-content-center
          h3.text-center ¿Qué reglas del negocio condicionan esas relaciones? 
    //- Fin Tarjetas
    p(data-aos="fade-left") Estos interrogantes pueden sintetizarse de la siguiente manera:
    //- Inicio Tarjetas
    .row(data-aos="fade-right")
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.bg-color-6.p-4.border-0.rounded-4.h-100
          .row.justify-content-center.mb-3.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/tema3/tarjeta01_1.svg', style="width: 80px").mx-auto
          h3.text-center Entidades
          p.text-center Identificar los objetos o conceptos relevantes del dominio.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.bg-color-6.p-4.border-0.rounded-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema3/tarjeta01_2.svg', style="width: 80px").mx-auto
          h3.text-center Atributos
          p.text-center Precisar las características que describen cada entidad.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.bg-color-6.p-4.border-0.rounded-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema3/tarjeta01_3.svg', style="width: 80px").mx-auto
          h3.text-center Relaciones
          p.text-center  Establecer los vínculos semánticos entre entidades.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.bg-color-6.p-4.border-0.rounded-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema3/tarjeta01_4.svg', style="width: 80px").mx-auto
          h3.text-center Reglas de negocio
          p.text-center Definir restricciones y condiciones que rigen el sistema.
    //- Fin Tarjetas
    p(data-aos="fade-left") Por ejemplo, en el contexto de una biblioteca, el modelo conceptual reconoce entidades como <b>Libro, Autor, Usuario y Préstamo</b>, y determina cómo se relacionan mediante asociaciones semánticas. En esta fase no se define qué tipo de dato representará el ISBN ni si el autor tendrá un índice por apellido; esas decisiones corresponden al modelamiento lógico posterior.                   
    .row.justify-content-center.align-items-stretch.g-0
      .col-md-4.mb-0p(data-aos="fade-left")
        figure.mb-0.h-100
          img.w-100.h-100(src='@/assets/curso/tema3/img3.png' style="object-fit: cover;")
      .col-md-4.bg-color-7.d-flex.align-items-center.mb-0p(data-aos="fade-left")
        .p-4
          p.mb-0 Este nivel de abstracción permite la participación activa de personas no técnicas, ya que se centra en describir la realidad organizacional y no la tecnología. Entre sus ventajas principales se encuentra la posibilidad de <b>identificar vacíos, supuestos y ambigüedades</b> antes de traducir el diseño al modelo relacional, lo que reduce errores estructurales en etapas posteriores.
    Separador
    .row.bg-color-15
      .col-12
        .p-5        
          //- Inicio Tema3.1
          #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 3.2 Modelo entidad–relación (ER)
          p(data-aos="fade-left") El modelo entidad–relación (ER) es la técnica más extendida para la elaboración de modelos conceptuales. Fue propuesto por Pin-Shan Chen (1976) y continúa vigente debido a que ofrece una representación clara, comprensible y estandarizada del sistema.          
          .row.justify-content-center.align-items-stretch.mt-5
            .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
              .bg-color-8.p-4.p-lg-5.h-100.d-flex.align-items-center.rounded-4
                p.mb-0 Diversos motores de bases de datos, como  <i>Oracle</i> o  <i>SQL Server</i>, incorporan herramientas que permiten generar esquemas relacionales a partir de diagramas ER.
            .col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
              figure.mb-0.h-100
                img(src="@/assets/curso/tema3/img4.png", alt="", style="height:100%; object-fit:cover;").w-100
            .col-lg-4(data-aos="fade-left")
              .px-4.pt-4.pb-0.h-100.d-flex.flex-column.justify-content-end
                img.mb-3(src="@/assets/curso/tema3/icono.svg", alt="Icono comunicación" style="max-width:90px").d-none.d-xl-block
                p.mb-0 Este modelo facilita la transición entre la comprensión del dominio y la formalización lógica, pues organiza los elementos esenciales del sistema en estructuras semánticas claramente definidas.
            .bloque-texto-g.bloque-texto-g--inverso.bg-color-1.p-3.p-sm-4.p-md-5.mb-3.mt-5(data-aos="fade-left")
                  .bloque-texto-g__img(
                    :style="{'background-image': `url(${require('@/assets/curso/tema3/img6.png')})`}"
                  )
                  .bloque-texto-g__texto.p-4
                    p.mb-5 Para favorecer su apropiación conceptual, puede entenderse el modelo ER como una forma estructurada de relatar la dinámica de un sistema:                    
                    lista-ul.mb-0
                      li.d-flex.mb-2        
                        i.fas.fa-check-circle.me-3(style="color:#AD9721")
                        p.mb-0 Las <b>entidades</b> representan los “personajes” del dominio.
                      li.d-flex.mb-2        
                        i.fas.fa-check-circle.me-3(style="color:#AD9721")
                        p.mb-0 Los <b>atributos</b> describen sus características.
                      li.d-flex.mb-2        
                        i.fas.fa-check-circle.me-3(style="color:#AD9721")
                        p.mb-0 Las <b>relaciones</b> expresan los vínculos o interacciones entre ellos.
    p(data-aos="fade-left") El diagrama ER no desarrolla esta historia en lenguaje natural, sino mediante convenciones gráficas estandarizadas. En su forma más básica, se compone de los siguientes elementos:
    .row.justify-content-center.mt-5.mb-5
      .col-lg-auto
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Forma simple de ER
        figure
          img(src="@/assets/curso/tema3/img7.svg", alt="Diagrama ER con dos entidades representadas por rectángulos etiquetados ENTIDAD, unidas por una línea horizontal que indica una relación entre ambas.", style="width: 900px")
    p(data-aos="fade-left") Es importante precisar que el modelo entidad–relación admite mayores niveles de detalle que enriquecen su capacidad descriptiva. Entre estos se encuentran las <b>cardinalidades</b>, la <b>participación obligatoria u opcional</b>, los <b>atributos multivaluados</b>, las <b>jerarquías de especialización y generalización</b>, así como las <b>relaciones recursivas</b>, entre otros.
    .row.justify-content-center.align-items-stretch.g-0
      .col-md-4.mb-0p(data-aos="fade-right")
        figure.mb-0.h-100
          img.w-100.h-100(src='@/assets/curso/tema3/img8.png' style="object-fit: cover;")
      .col-md-4.bg-color-7.d-flex.align-items-center.mb-0p(data-aos="fade-left")
        .p-4
          p.mb-0 Esta amplitud convierte al modelo ER en una herramienta altamente expresiva, capaz de representar tanto estructuras básicas como configuraciones complejas del dominio organizacional.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Atributos: el comportamiento de las entidades
    //- Título con imagen
    p(data-aos="fade-left") Los atributos no constituyen un conjunto homogéneo. Su naturaleza varía según la función que desempeñan dentro del sistema y su relación con otras entidades. A continuación, se sintetizan sus principales tipos:
    //- Carrusel
    .bg-full-width.bg-fondo-slider.mb-5
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema3/slide01_1.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Simple
                    p No puede descomponerse en partes más pequeñas (por ejemplo, edad).                   
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema3/slide01_2.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Compuesto
                    p Puede dividirse en subcomponentes con significado propio (por ejemplo, dirección: calle, ciudad, código postal).
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema3/slide01_3.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Identificador (clave)
                    p Distingue de manera única cada instancia de la entidad.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema3/slide01_4.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Multivaluado
                    p Permite más de un valor para una misma entidad (por ejemplo, varios números telefónicos).
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema3/slide01_5.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Derivado
                    p Se obtiene a partir de otros atributos (por ejemplo, edad calculada desde la fecha de nacimiento).
    //- Fin Carrusel
    p.mb-5(data-aos="fade-left") La identificación precisa de estos tipos permite representar con mayor fidelidad la lógica del dominio antes de trasladarla al modelo lógico.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Cardinalidad y participación
    //- Título con imagen
    p.mb-5(data-aos="fade-left") La cardinalidad y la participación constituyen la semántica central del modelo ER, pues determinan la naturaleza de las relaciones entre entidades. Estos elementos permiten establecer:
    .row.justify-content-center.align-items-stretch.g-0
      .col-md-4.bg-color-7.d-flex.align-items-center.mb-0(data-aos="fade-left")
        .p-4
          ol.lista-ol--cuadro.ms-4
            li.d-flex.mb-3 
              .lista-ol--cuadro__vineta
                span A
              | Cuántas instancias de una entidad pueden asociarse con instancias de otra.
            li.d-flex 
              .lista-ol--cuadro__vineta
                span B
              | Si la relación es obligatoria u opcional.
            li.d-flex 
              .lista-ol--cuadro__vineta
                span C
              | Si existe dependencia de existencia entre entidades.
      .col-md-4.mb-0p(data-aos="fade-right")
        figure.mb-0.h-100
          img.w-100.h-100(src='@/assets/curso/tema3/img9.png' style="object-fit: cover;")
    .row.bg-color-15
      .col-12
        .p-5        
          p.mt-5(data-aos="fade-left") <b>Estas reglas pueden resumirse así:</b>
          //- Inicio Tarjetas
          .row.mt-5.mb-3.justify-content-center(data-aos="fade-left")
            .col-sm-6.col-lg-2.mb-4.d-flex
              .card.h-100.border-0.shadow-sm
                .bg-color-2.p-2.d-flex.align-items-center.justify-content-center(style="min-height: 85px")
                  p.text-center.mb-0 <b>Cardinalidad</b>
                .card-body.bg-color-8            
                  | Define la correspondencia entre entidades (1:1, 1:N, N:M).
            .col-sm-6.col-lg-2.mb-4.d-flex
              .card.h-100.border-0.shadow-sm
                .bg-color-2.p-2.d-flex.align-items-center.justify-content-center(style="min-height: 85px")
                  p.text-center.mb-0 <b>Participación</b>
                .card-body.bg-color-8            
                  | Indica si todas las instancias deben participar en la relación (total) o si es opcional (parcial).
            .col-sm-6.col-lg-2.mb-4.d-flex
              .card.h-100.border-0.shadow-sm
                .bg-color-2.p-2.d-flex.align-items-center.justify-content-center(style="min-height: 85px")
                  p.text-center.mb-0 <b>Dependencia de existencia</b>
                .card-body.bg-color-8            
                  | Determina si una entidad puede existir sin estar asociada a otra.
            .col-sm-6.col-lg-4.mb-4.d-flex.align-items-center
              figure.mb-0
                img(src='@/assets/curso/tema3/img10.png', style="width: 100%")            
          //- Fin Tarjetas
          p.mb-5(data-aos="fade-left") Por ejemplo, un <b>Préstamo</b> no puede existir sin un <b>Usuario</b>, mientras que un <b>Usuario</b> puede existir sin realizar préstamos. Esta condición expresa una regla semántica del dominio antes que una restricción tecnológica. El modelo ER permite formalizar estas dependencias conceptuales con claridad, fortaleciendo la coherencia del diseño previo al modelamiento lógico.
            Separador
            //- Inicio Tema3.1
            #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
              h2 3.2 Modelo entidad–relación (ER)
            p.mb-5(data-aos="fade-left") El diagrama entidad–relación (ER) constituye la representación gráfica del modelo conceptual. No es un recurso ornamental, sino una <b>herramienta de análisis y validación.</b> Un diagrama correctamente estructurado permite comprobar la coherencia del sistema sin necesidad de recurrir a descripciones extensas.
                .bloque-texto-g.bloque-texto-g--inverso.bg-color-1.p-3.p-sm-4.p-md-5.mb-3.mt-5(data-aos="fade-left")
                  .bloque-texto-g__img(
                    :style="{'background-image': `url(${require('@/assets/curso/tema3/img4.png')})`}"
                  )
                  .bloque-texto-g__texto.p-4
                    p.mb-5 Existen diversas notaciones, como Chen, Barker,  <i>Crow’s Foot</i> y UML. Aunque presentan diferencias formales, todas comparten los mismos componentes esenciales: entidades, atributos, relaciones y cardinalidades. En la práctica profesional, la notación  <i>Crow’s Foot</i> es ampliamente utilizada en la documentación técnica asociada a motores como SQL Server y Oracle.
                p(data-aos="fade-left") <b>A continuación, se presenta un ejemplo típico con notación Crow’s Foot aplicado a un sistema de préstamos:</b>
    .row.justify-content-center.mt-0.mb-5(data-aos="fade-right")
      .col-lg-auto
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span Ejemplo: sistema de préstamos
        figure
          img(src="@/assets/curso/tema3/img11.svg", alt="Infografía de diagrama entidad-relación sobre un sistema de préstamos con las entidades Usuario y Libro conectadas por la relación Préstamo. Incluye cardinalidad uno a muchos (1:N), indicando que un usuario puede tener muchos préstamos y que un libro puede aparecer en varios préstamos, pero cada préstamo corresponde a un solo libro.", style="width: 832px")
    .row.mb-4.justify-content-center(data-aos="fade-left")
      .col-8
        p.mb-5 <b>En este esquema se identifican dos relaciones fundamentales:</b>
      .row.justify-content-center.align-items-stretch
        .col-md-4.bg-color-10.p-4.m-2.d-flex.align-items-center.justify-content-center.text-center.text-white.rounded-4
          p.mb-5 Un <b>Usuario</b> puede tener muchos <b>Préstamos</b> (relación 1:N).
        .col-md-4.bg-color-11.p-4.m-2.d-flex.align-items-center.justify-content-center.text-center.text-white.rounded-4
          p.mb-5 Un <b>Libro</b> puede aparecer en muchos <b>Préstamos</b>, pero cada <b>Préstamo</b> se asocia a un único <b>Libro</b>.
    p.mb-5(data-aos="fade-left") Más allá del ejemplo concreto, lo relevante es comprender la función analítica del diagrama ER. Sus principales aportes pueden sintetizarse así:
    .row.bg-color-16
      .col-12
        .p-5
          //- Inicio Tarjetas
          .row(data-aos="fade-right")
            .col-sm-6.col-lg.mb-4.d-flex.flex-column
              .tarjeta.tarjeta--blanca.p-4.bordes.rounded-4.h-100
                .row.justify-content-center.mb-3.align-items-center
                  .col-7
                    figure
                      img(src='@/assets/curso/tema3/tarjeta02_1.svg')
                h3.text-center Detección de errores conceptuales
                p.text-center Permite identificar omisiones, redundancias o inconsistencias antes del diseño lógico.
            .col-sm-6.col-lg.mb-4.d-flex.flex-column
              .tarjeta.tarjeta--blanca.p-4.bordes.rounded-4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema3/tarjeta02_2.svg')
                h3.text-center Validación con expertos del dominio
                p.text-center Facilita la discusión de reglas del negocio con personas no técnicas.
            .col-sm-6.col-lg.mb-4.d-flex.flex-column
              .tarjeta.tarjeta--blanca.p-4.bordes.rounded-4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema3/tarjeta02_3.svg')
                h3.text-center Base para el modelo relacional
                p.text-center  Sirve como insumo directo para normalización y construcción de tablas.
            .col-sm-6.col-lg.mb-4.d-flex.flex-column
              .tarjeta.tarjeta--blanca.p-4.bordes.rounded-4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema3/tarjeta02_4.svg')
                h3.text-center Claridad estructural
                p.text-center Reduce ambigüedades en la interpretación del sistema.
          //- Fin Tarjetas
          //- Título con imagen
          .bg-full-width.mt-5
            .px-4.px-md-5.pb-md-3
            .titulo-con-imagen(data-aos="fade-right")
              .titulo-con-imagen__fondo
                img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
                h3.titulo-con-imagen__texto Recomendaciones importantes
          //- Título con imagen
    p.mb-5(data-aos="fade-left") Aunque no existe un único estilo correcto, es recomendable aplicar criterios de coherencia y claridad:
    .row.justify-content-center.g-0.align-items-stretch.mb-3
      .col-md-8.col-lg-5.bg-color-6.p-4.p-md-5.d-flex.align-items-center
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-check-circle.me-3.mt-1(style="color:#AD9721")
              p.mb-0 Utilizar nombres en singular (Autor en lugar de Autores).
            li.d-flex
              i.fas.fa-check-circle.me-3.mt-1(style="color:#AD9721")
              p.mb-0 Representar únicamente los elementos esenciales, evitando sobrecargar el diagrama.
            li.d-flex
              i.fas.fa-check-circle.me-3.mt-1(style="color:#AD9721")
              p.mb-0 Confirmar las cardinalidades con expertos del dominio.
            li.d-flex
              i.fas.fa-check-circle.me-3.mt-1(style="color:#AD9721")
              p.mb-0 Documentar reglas de negocio que no puedan expresarse mediante la notación gráfica.
      .col-md-4.col-lg-3
        figure.mb-0.h-100
          img.w-100.h-100(src='@/assets/curso/tema3/img12.png' style="object-fit: cover; object-position: center;")
    p.mb-5(data-aos="fade-left") El diagrama ER cumple una doble función: es un instrumento técnico y, al mismo tiempo, una herramienta de comunicación. Un diseño conceptual sólido reduce significativamente problemas en las fases posteriores de modelamiento lógico, normalización e implementación.
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
