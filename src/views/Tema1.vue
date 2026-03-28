<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos de modelos de datos 
    .row.justify-content-center.align-items-stretch.g-0.mb-3(data-aos="fade")
      .col-lg-9.bg-color-6.p-4.mb-0.d-flex.align-items-center
        p.mb-0 Modelar datos no es un ejercicio ornamental; es la actividad que da forma, orden y estructura a la información que una organización necesita para operar. Cada modelo de datos actúa como una “lente conceptual” que permite representar entidades, atributos, relaciones y reglas del negocio con distintos niveles de abstracción.
      .col-lg-3.d-flex.align-items-center.justify-content-center
        figure
          img(src="@/assets/curso/tema1/img1.png", data-aos="zoom-in", style="width: 100%").mx-auto
    .bloque-texto-g.bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-3.p(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Sin un modelo, los datos permanecen dispersos, sin un marco formal que permita interpretarlos o convertirlos en información útil. Con un modelo, en cambio, se obtiene una representación coherente, lógica y comunicable del sistema, lo que habilita el diseño de bases de datos relacionales, la integración de procesos y la automatización de operaciones.
    p(data-aos="fade-left") Coronel y Morris (2023) enfatizan que estos modelos funcionan como mapas conceptuales que guían el diseño; sin ellos, cualquier esfuerzo de implementación carecería de una base sólida. Asimismo, Coronel y Morris (2023) señalan que el modelado permite <b>detectar redundancias, inconsistencias y vacíos</b> antes de que se conviertan en fallas del sistema en producción.
    Separador
    //- Inicio Tema 1.1
    .row.mt-5
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1	Concepto de modelo de datos
    p(data-aos="fade-left") El modelo de datos es una representación abstracta que describe cómo se organiza, estructura y manipula la información dentro de un sistema. No consiste únicamente en diagramas; es una construcción formal que establece que existe en el dominio, cómo se conecta y bajo qué condiciones opera. A continuación, se sintetizan sus componentes esenciales:
    //- Inicio carrusel
    .row.bg-color-16
      .col-12
        .p-5
          .bg-full-width.mt-5p(data-aos="fade-right")
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.mb-5.align-items-center
                  .col-lg-9.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-4 col-lg-6")
                      .bg-color-17.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta01_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Entidades
                        p.card-text.text-center
                        | Objetos o conceptos del mundo real sobre los que se requiere almacenar información.
                      .bg-color-17.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta01_2.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Atributos
                        p.card-text.text-center
                        | Propiedades o características que describen a cada entidad.
                      .bg-color-17.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta01_3.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Relaciones
                        p.card-text.text-center
                        | Vínculos lógicos que conectan entidades entre sí.
                      .bg-color-17.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta01_4.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Reglas de negocio
                        p.card-text.text-center
                        | Restricciones y condiciones que determinan el comportamiento válido de los datos.           
                  .col-lg-3.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/tema1/img3.png', style="max-width: 250px", alt='', data-aos="zoom-in").m-auto
    //- Fin carrusel
    .row.mb-5p.justify-content-center(data-aos="fade-left")
      .col-lg-10.align-items-center
        p.bg-color-7.p-4.mb-5.rounded-4 Estos elementos permiten traducir la complejidad de un entorno organizacional en una estructura formal comprensible y operativa. Una característica esencial del modelo de datos es su capacidad de servir como <b>puente entre el mundo real y el mundo computacional.</b> Representa conceptos del negocio mediante símbolos y convenciones que un motor de base de datos puede interpretar. En consecuencia, transforma un dominio complejo en una arquitectura estructurada, consistente y expresable en términos técnicos.
    //- Fin Tema 1.1
    Separador
    //- Inicio Tema 1.2
    .row.mt-5
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2	Clasificación de los modelos de datos
    p(data-aos="fade-left") A continuación, se presenta una explicación sistemática sobre la clasificación de los modelos de datos, destacando sus principales enfoques, fundamentos conceptuales y aplicaciones en los sistemas de información contemporáneos.
    //- Inicio Video
    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/nHjl83QvSUw?si=PYOSxqLdAk88V5nb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    //- Fin Video
    p(data-aos="fade-right") Esta clasificación no es estática. Evoluciona conforme surgen nuevas arquitecturas, necesidades de procesamiento masivo y enfoques híbridos de almacenamiento. En consecuencia, la elección de un modelo de datos depende del contexto organizacional, los requisitos de consistencia y escalabilidad, así como del tipo de información que se desea gestionar.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
