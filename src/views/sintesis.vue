<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.mb-5
      .col-12.ps-3(style="border-left: 10px solid #39A900;") 
        h3.mb-1 Bases de datos generalidades y sistemas de gestión.
        p.mb-0 
          | Síntesis:           
          | Modelado de bases de datos y construcción de esquemas relacionales. 
    p.mt-5 A continuación, se presenta una síntesis de la temática estudiada por el componente formativo.    

    
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Síntesis sobre modelado de bases de datos y esquemas relacionales que organiza fundamentos, modelos de datos tradicionales y actuales, modelo conceptual ER, modelo lógico y físico, normalización, diseño de estructura e integridad, y lenguaje SQL, incluyendo entidades, atributos, relaciones, claves, índices y formas normales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
