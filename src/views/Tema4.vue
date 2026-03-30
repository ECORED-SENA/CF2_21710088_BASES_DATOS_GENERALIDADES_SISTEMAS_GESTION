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
