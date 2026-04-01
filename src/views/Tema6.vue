<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Diseño estructural de la base de datos
    .row.justify-content-center.align-items-stretch.g-0.mb-3(data-aos="fade-left")
            .col-lg-10.bg-color-6.p-4.mb-0.d-flex.align-items-center
              p.mb-0 Una vez que el modelo conceptual ha sido transformado en tablas normalizadas, y después de definir claves, dependencias y relaciones, es necesario examinar la arquitectura completa del esquema relacional. En esta etapa se analiza cómo se articulan las tablas, cómo se organizan dentro del esquema y cómo se garantiza la coherencia en cada operación del sistema.
            .col-lg-2.d-flex.align-items-center.justify-content-center
              figure
                img(src="@/assets/curso/tema6/img1.png", data-aos="zoom-in", style="width: 100%").mx-auto
    .bloque-texto-g.bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-3.p(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El diseño estructural no constituye únicamente un plano técnico; también representa el funcionamiento organizacional. Las decisiones adoptadas en este punto impactan directamente en la eficiencia operativa, la claridad de las consultas y la capacidad de adaptación ante cambios del negocio.
    Separador
    //- Inicio Tema 6.1
    .row.mt-5
        #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.1 Organización de la estructura de tablas
    //- FIn Tema 5.1
    p(data-aos="fade-left") La organización de las tablas no responde a una fórmula rígida. Depende de la naturaleza del dominio, del volumen esperado de datos y del tipo de operaciones predominantes (transaccionales, analíticas o híbridas). En términos generales, una estructura bien organizada incorpora los siguientes componentes:
    //- Inicio Tarjetas
    .row.mb-5(data-aos="fade-right")
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.bg-color-8.p-4.border-0.rounded-4.h-100
          .row.justify-content-center.mb-3.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/tema6/tarjeta02_1.svg', style="width: 80px").mx-auto
          h3.text-center Tablas principales
          p.text-center Representan entidades centrales del dominio (Cliente, Producto, Pedido).
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.bg-color-8.p-4.border-0.rounded-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema6/tarjeta02_2.svg', style="width: 80px").mx-auto
          h3.text-center Tablas puente
          p.text-center Resuelven relaciones N:M mediante claves foráneas hacia las entidades relacionadas.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.bg-color-8.p-4.border-0.rounded-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema6/tarjeta02_3.svg', style="width: 80px").mx-auto
          h3.text-center Tablas auxiliares
          p.text-center Contienen catálogos, parámetros o listas controladas (Estados, Tipos, Categorías).
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.bg-color-8.p-4.border-0.rounded-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema6/tarjeta02_4.svg', style="width: 80px").mx-auto
          h3.text-center Tablas de auditoría
          p.text-center Registran eventos, cambios o acciones realizadas sobre los datos.
    p(data-aos="fade-left") Un ejemplo muy breve, sin entrar en casos reales complejos:
    //- Fin Tarjetas
    .row.bg-color-5.p-4.rounded-4.mb-5
      //- Columna USUARIO
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .px-3
          h4.mb-3 USUARIO
          ul.lista-ul.mb-0
            li.d-flex.align-items-start
              span.me-2 ├──
              | id_usuario
            li.d-flex.align-items-start
              span.me-2 ├──
              | nombre
            li.d-flex.align-items-start
              span.me-2 └──
              | correo
      //- Columna LIBRO
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .px-3
          h4.mb-3 LIBRO
          ul.lista-ul.mb-0
            li.d-flex.align-items-start
              span.me-2 ├──
              | id_libro
            li.d-flex.align-items-start
              span.me-2 ├──
              | titulo
            li.d-flex.align-items-start
              span.me-2 └──
              | categoria
      //- Columna PRESTAMO
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .px-3
          h4.mb-3 PRESTAMO
          ul.lista-ul.mb-0
            li.d-flex.align-items-start
              span.me-2 ├──
              | id_prestamo
            li.d-flex.align-items-start
              span.me-2 ├──
              | id_usuario (FK)
            li.d-flex.align-items-start
              span.me-2 ├──
              | id_libro (FK)
            li.d-flex.align-items-start
              span.me-2 ├──
              | fecha_prestamo
            li.d-flex.align-items-start
              span.me-2 └──
              | fecha_devolucion
      //- Columna CATEGORIA
      .col-md-6.col-lg-3
        .px-3
          h4.mb-3 CATEGORIA
          ul.lista-ul.mb-0
            li.d-flex.align-items-start
              span.me-2 ├──
              | id_categoria
            li.d-flex.align-items-start
              span.me-2 └──
              | descripcion
    p(data-aos="fade-left") La estructura puede crecer y volverse considerablemente más compleja, pero el principio es el mismo: <b>cada tabla representa un concepto y está ubicada en un nivel coherente dentro del esquema.</b>
    Separador
    //- Inicio Tema 6.2
    .row.mt-5
        #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.2 Definición de relaciones entre tablas
    //- FIn Tema 6.2
    p(data-aos="fade-left") Las relaciones constituyen el eje estructural del modelo relacional. Su propósito no se limita a conectar tablas; buscan establecer <b>vínculos con reglas claras que reflejen la lógica del dominio.</b> Las relaciones pueden clasificarse en tres tipos principales:              
    //- Inicio Tarjetas
    .row.mt-5.mb-3.justify-content-center(data-aos="fade-left")
      .col-sm-6.col-lg-3.mb-4.d-flex
        .card.h-100.border-0.shadow-sm
          .bg-color-2.p-2.d-flex.align-items-center.justify-content-center(style="min-height: 85px")
            p.text-center.mb-0 <b>Uno a uno (1:1)</b>
          .card-body.bg-color-8            
            | Poco frecuentes en modelos operativos. Se utilizan en fragmentaciones lógicas o cuando se separan datos sensibles en tablas distintas.
      .col-sm-6.col-lg-3.mb-4.d-flex
        .card.h-100.border-0.shadow-sm
          .bg-color-2.p-2.d-flex.align-items-center.justify-content-center(style="min-height: 85px")
            p.text-center.mb-0 <b>Uno a muchos (1:N)</b>
          .card-body.bg-color-8            
            | La más común en sistemas transaccionales. Una instancia de una entidad puede relacionarse con varias de otra, pero no a la inversa.
      .col-sm-6.col-lg-3.mb-4.d-flex
        .card.h-100.border-0.shadow-sm
          .bg-color-2.p-2.d-flex.align-items-center.justify-content-center(style="min-height: 85px")
            p.text-center.mb-0 <b>Muchos a muchos (N:M)</b>
          .card-body.bg-color-8            
            | No se implementa directamente en el modelo relacional; requiere una tabla intermedia o tabla puente que contenga las claves foráneas de ambas entidades.
      .col-sm-6.col-lg-3.mb-4.d-flex.align-items-center
        figure.mb-0
          img(src='@/assets/curso/tema6/img3.png', style="width: 100%")            
    //- Fin Tarjetas
    .row.bg-color-15
      .col-12
        .p-5
          p.mb-3(data-aos="fade-left") Por ejemplo, un <b>Usuario</b> puede tener varios <b>Préstamos</b>, pero cada préstamo pertenece a un único usuario (relación 1:N). En cambio, la relación entre <b>Libro</b> y <b>Autor</b> suele ser N:M, lo que exige una tabla intermedia como <b>LIBRO_AUTOR.</b>
              .bloque-texto-g.bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-3.p(data-aos="fade-left")
                .bloque-texto-g__img(
                  :style="{'background-image': `url(${require('@/assets/curso/tema6/img2.png')})`}"
                )
                .bloque-texto-g__texto.p-4
                  p.mb-0 El diseño adecuado de las relaciones facilita consultas eficientes, evita duplicidad innecesaria y permite representar con precisión reglas del negocio que pueden evolucionar con el tiempo. Un error frecuente consiste en considerar las relaciones como simples conexiones gráficas. En realidad, representan estructuras semánticas profundas: pueden expresar propiedad, dependencia, temporalidad o composición, según el contexto del dominio.
              Separador
              //- Inicio Tema 6.3
              .row.mt-5
                  #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                    h2 6.3 Integridad referencial
              //- FIn Tema 6.3
              p(data-aos="fade-left") La integridad referencial garantiza que el conjunto de tablas funcione como un sistema coherente. No solo implica que una clave foránea (FK) deba existir previamente como clave primaria (PK) en otra tabla; también define el comportamiento del sistema cuando los datos cambian. Los SGBD modernos permiten establecer políticas específicas para estos casos:    
              //- Inicio Tarjetas
              .row.mt-5.mb-3.justify-content-center(data-aos="fade-left")
                .col-sm-6.col-lg-3.mb-4.d-flex
                  .card.h-100.border-0.shadow-sm
                    .bg-color-2.p-2.d-flex.align-items-center.justify-content-center(style="min-height: 85px")
                      p.text-center.mb-0 <b>CASCADE</b>
                    .card-body.bg-color-8            
                      | Propaga automáticamente la eliminación o actualización a los registros relacionados.
                .col-sm-6.col-lg-3.mb-4.d-flex
                  .card.h-100.border-0.shadow-sm
                    .bg-color-2.p-2.d-flex.align-items-center.justify-content-center(style="min-height: 85px")
                      p.text-center.mb-0 <b>SET NULL</b>
                    .card-body.bg-color-8            
                      | Asigna valores nulos a las claves foráneas dependientes.
                .col-sm-6.col-lg-3.mb-4.d-flex
                  .card.h-100.border-0.shadow-sm
                    .bg-color-2.p-2.d-flex.align-items-center.justify-content-center(style="min-height: 85px")
                      p.text-center.mb-0 <b>RESTRICT / NO ACTION</b>
                    .card-body.bg-color-8            
                      | Impide la operación si existen registros relacionados activos.
                .col-sm-6.col-lg-3.mb-4.d-flex.align-items-center
                  figure.mb-0
                    img(src='@/assets/curso/tema6/img4.png', style="width: 100%")            
              //- Fin Tarjetas
              p(data-aos="fade-right") Estas reglas son fundamentales para preservar la coherencia estructural. Un sistema sin integridad referencial puede presentar referencias a registros inexistentes, datos incompletos o inconsistencias que deterioran progresivamente la calidad de la información. Motores empresariales como Oracle Database, SQL Server y PostgreSQL documentan ampliamente la importancia de definir políticas explícitas de actualización y eliminación, ya que estas previenen fallos silenciosos y protegen la semántica del modelo diseñado.
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
