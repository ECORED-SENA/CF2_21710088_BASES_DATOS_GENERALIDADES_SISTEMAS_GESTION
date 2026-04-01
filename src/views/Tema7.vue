<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Introducción al lenguaje de consulta SQL
    .row.justify-content-center.align-items-stretch.g-0.mb-3(data-aos="fade-left")
            .col-lg-10.bg-color-6.p-4.mb-0.d-flex.align-items-center
              p.mb-0 SQL ( <i>Structured Query Language</i>) surgió en la década de 1970 como un lenguaje declarativo diseñado para consultar y manipular bases de datos relacionales sin requerir programación algorítmica tradicional. Su principal fortaleza radica en que permite expresar <b>qué se desea obtener</b>, mientras el sistema gestor decide <b>cómo ejecutar la operación.</b>
            .col-lg-2.d-flex.align-items-center.justify-content-center
              figure
                img(src="@/assets/curso/tema7/img1.png", data-aos="zoom-in", style="width: 100%").mx-auto
    .bloque-texto-g.bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-4.p(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema7/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Esta característica lo convierte en un lenguaje accesible para analistas, consultores, administradores y desarrolladores. Además, constituye un estándar implementado por prácticamente todos los Sistemas Gestores de Bases de Datos Relacionales (SGBDR), aunque cada proveedor puede incorporar extensiones propias.
    p(data-aos="fade-left") SQL no opera de manera aislada: depende directamente de la estructura diseñada previamente. Por ello, comprender el modelo relacional es condición indispensable para formular consultas coherentes y eficientes.
    Separador
    //- Inicio Tema 7.1
    .row.mt-5
        #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.1 ¿Qué es SQL y para qué sirve?
    //- FIn Tema 7.1
    p(data-aos="fade-left") A continuación, se presenta un pódcast  orientado a comprender los fundamentos del lenguaje SQL y su aplicación en la consulta de información dentro de bases de datos relacionales.
    .row.bg-color-15
      .col-12
        .p-5
          //- Inicio Podcast
          .container-fluid.tarjeta.tarjeta--blanca.px-0.mb-2
            .row.g-0.align-items-stretch
              .col-lg-7.mb-3
                .p-4.p-md-5.bg-custom-dark-teal.h-100.rounded-4
                  .row.align-items-center
                    .col-md-5.text-center.mb-4.mb-md-0
                      img(src="@/assets/curso/tema7/img3.svg" style="max-width: 200px;").img-fluid
                    .col-md-7.ps-md-4
                      h2.mb-3.fw-bold(style="color:#FFF") Pódcast
                      .tarjeta.bg-white.p-3.shadow-sm.border-lemon
                        h5.mb-3.fw-bold ¿Qué es SQL y para qué sirve?
                        TarjetaAudio.color-primario(
                          texto="" 
                          :audio="require('@/assets/componentes/audios/podcast.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")        
              .col-lg-5
                figure.mb-0
                  img(src='@/assets/curso/tema7/img4.svg')
          //- Fin Podcast
          //- Inicio Tema 7.2
          .row.mt-5
              #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 7.2	Operaciones fundamentales de SQL
          //- FIn Tema 7.2
          p(data-aos="fade-left") A continuación, se presentan las operaciones esenciales del lenguaje SQL orientadas a la consulta de datos dentro del modelo relacional. Los siguientes ejemplos no constituyen un tutorial exhaustivo. Su propósito es ilustrar cómo funcionan las consultas dentro de una base de datos estructurada.
          //- Inicio Accordion
          .bg--img_03.mt-5
          .row.justify-content-center
            .col-lg-3 
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema7/img5.png", alt="").img400.m-auto
            .col-lg-9
              AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonB")
                .row(titulo="SELECT: recuperar datos")
                  .col-12
                    p La forma más básica de extraer información de una tabla:                    
                      figure
                        img(src='@/assets/curso/tema7/query1.svg',  style="width: 300px")
                    p La expresión * recupera todas las columnas. No es recomendable en sistemas grandes, pero es útil para exploración.
                .row(titulo="SELECT con columnas específicas")
                    .col-12
                    p La forma más básica de extraer información de una tabla:                    
                      figure
                        img(src='@/assets/curso/tema7/query2.svg',  style="width: 300px")                    
                .row(titulo="WHERE: aplicar condiciones")
                    .col-12
                    p Permite filtrar registros según criterios:
                      figure
                        img(src='@/assets/curso/tema7/query3.svg',  style="width: 300px")                    
                .row(titulo="Operadores (=, <, >, LIKE, BETWEEN)")
                    .col-12
                    p La forma más básica de extraer información de una tabla:                    
                      .row
                        .col-lg-6.mb-2
                          figure
                            img(src='@/assets/curso/tema7/query4.svg',  style="width: 350px")
                        .col-lg-6
                          figure
                            img(src='@/assets/curso/tema7/query5.svg',  style="width: 350px")                    
                .row(titulo="ORDER BY: ordenar resultados")
                    .col-12
                    p Ordenar registros en forma ascendente o descendente:
                      figure
                        img(src='@/assets/curso/tema7/query6.svg',  style="width: 300px")
                .row(titulo="LIMIT: restringir resultados")
                  .col-12
                    p Útil para análisis preliminares o listados rápidos:
                      figure
                        img(src='@/assets/curso/tema7/query7.svg',  style="width: 300px")
                    p Algunos motores utilizan TOP (SQL Server) o FETCH FIRST (Oracle), pero el principio es universal.
          //- Fin Accordion
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
