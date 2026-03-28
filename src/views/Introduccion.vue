<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p(data-aos="fade-right") El componente formativo Modelado de bases de datos y construcción de esquemas relacionales, desarrolla las bases conceptuales y técnicas necesarias para transformar requerimientos del dominio en estructuras de datos organizadas, coherentes y aplicables en un sistema gestor de bases de datos. Su propósito es fortalecer la comprensión de los modelos vigentes y orientar el diseño estructural de esquemas relacionales alineados con criterios de integridad, consistencia y organización lógica.
    .bloque-texto-g.bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-3.p(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 A lo largo del componente se aborda el modelado conceptual mediante el enfoque entidad–relación, la transición hacia el nivel lógico con definición de tablas, claves y restricciones, y la representación física del almacenamiento. Asimismo, se profundiza en el proceso de normalización y se introduce el uso básico del lenguaje SQL para la consulta de datos, integrando teoría y práctica dentro de un marco estructurado.
    .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade")
      .col-lg-10.bg-color-6.p-4.mb-0.d-flex.align-items-center
        p.mb-0 En consecuencia, el componente no solo permite distinguir los fundamentos de los modelos de datos actuales, sino también diseñar bases de datos relacionales que respondan a necesidades reales, articulando comprensión del dominio, rigor técnico y coherencia estructural en cada etapa del proceso.
      .col-lg-2.bg-color-3.d-flex.align-items-center.justify-content-center.p-4
        figure
          img(src="@/assets/curso/intro/img2.svg", data-aos="zoom-in", style="width: 80px").mx-auto
</template>

<script>
export default {
  name: 'Introduccion',
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
