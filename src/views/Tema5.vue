<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Normalización de bases de datos
    .row.bg-color-15
      .col-12
        .p-5
          .row.justify-content-center.align-items-stretch.g-0.mb-3(data-aos="fade-left")
            .col-lg-10.bg-color-6.p-4.mb-0.d-flex.align-items-center
              p.mb-0 La normalización constituye uno de los procesos centrales en el diseño de bases de datos relacionales. Aunque suele asociarse con reglas y formas normales específicas, su propósito es más amplio: eliminar redundancias innecesarias, preservar la integridad lógica del dominio y facilitar consultas consistentes y eficientes.
            .col-lg-2.d-flex.align-items-center.justify-content-center
              figure
                img(src="@/assets/curso/tema5/img1.png", data-aos="zoom-in", style="width: 100%").mx-auto
          .row.justify-content-center.align-items-stretch.g-0.mb-3(data-aos="fade")
            .col-lg-2.d-flex.align-items-center.justify-content-center
              figure
                img(src="@/assets/curso/tema5/img2.svg", data-aos="zoom-in", style="width: 100%").mx-auto
            .col-lg-10.p-4.mb-0.d-flex.align-items-center
              p.mb-0 Elmasri y Navathe (2007) definen la normalización como una “técnica para analizar relaciones y asegurar que estén estructuradas de modo que minimicen las anomalías de actualización”. Estas anomalías incluyen problemas que deterioran la confiabilidad del sistema, tales como duplicación de datos, inconsistencias entre registros o dificultades para insertar y eliminar información sin efectos colaterales.
          .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade")            
            .col-lg-10.p-4.mb-0.d-flex.align-items-center
              p.mb-0 En la práctica, la normalización no es una etapa aislada. Forma parte de un proceso iterativo en el que se revisa el modelo conceptual, se evalúan atributos, se ajustan dependencias funcionales y se reorganizan relaciones. Incluso bases de datos ya implementadas pueden requerir procesos de normalización cuando aparecen inconsistencias históricas o limitaciones estructurales.
            .col-lg-2.d-flex.align-items-center.justify-content-center
              figure
                img(src="@/assets/curso/tema5/img3.svg", data-aos="zoom-in", style="width: 100%").mx-auto
          //- Inicio Tema 5.1
          .row.mt-5
              #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 5.1 Concepto y objetivos de la normalización
          //- FIn Tema 5.1
          p(data-aos="fade-left") El principio fundamental de la normalización es directo: cada dato debe almacenarse exactamente donde corresponde, sin duplicaciones innecesarias ni dependencias incorrectas. Sus objetivos pueden organizarse en cuatro ejes principales:
          //- Inicio Tarjetas
          .row.mt-5.mb-3.justify-content-center(data-aos="fade-left")
            .col-sm-6.col-lg-3.mb-4.d-flex
              .card.h-100.border-0.shadow-sm
                .bg-color-2.p-2.d-flex.align-items-center.justify-content-center(style="min-height: 85px")
                  p.text-center.mb-0 <b>Eliminar redundancias</b>
                .card-body.bg-color-8
                  | Evita repetición innecesaria de información que incrementa riesgo de inconsistencia.
            .col-sm-6.col-lg-3.mb-4.d-flex
              .card.h-100.border-0.shadow-sm
                .bg-color-2.p-2.d-flex.align-items-center.justify-content-center(style="min-height: 85px")
                  p.text-center.mb-0 <b>Prevenir anomalías</b>
                .card-body.bg-color-8
                  | Reduce problemas de inserción, eliminación y actualización.
            .col-sm-6.col-lg-3.mb-4.d-flex
              .card.h-100.border-0.shadow-sm
                .bg-color-2.p-2.d-flex.align-items-center.justify-content-center(style="min-height: 85px")
                  p.text-center.mb-0 <b>Asegurar dependencias lógicas</b>
                .card-body.bg-color-8
                  | Garantiza que los atributos dependan del identificador correcto y no de campos circunstanciales.
            .col-sm-6.col-lg-3.mb-4.d-flex
              .card.h-100.border-0.shadow-sm
                .bg-color-2.p-2.d-flex.align-items-center.justify-content-center(style="min-height: 85px")
                  p.text-center.mb-0 <b>Facilitar mantenimiento e integridad referencial</b>
                .card-body.bg-color-8
                  | Simplifica reglas de negocio y mejora la administración a largo plazo.
          //- Fin Tarjetas          
          .row.justify-content-center.g-0.mb-5
            .col-md-3.col-lg-3
                figure.mb-0
                  img(src='@/assets/curso/tema5/img4.png')
            .col-md-5.col-lg-5.bg-color-7.p-4.p-md-5.d-flex.align-items-center
              p Estos objetivos se concretan de la siguiente manera:
                ul.lista-ul.mb-0.mt-2
                  li.d-flex
                    i.fas.fa-check-circle.me-3.mt-1(style="color:#AD9721")
                    p.mb-0 Cuando una misma información se repite en múltiples lugares, aumentan las probabilidades de error: valores divergentes, actualizaciones incompletas o datos obsoletos.
                  li.d-flex
                    i.fas.fa-check-circle.me-3.mt-1(style="color:#AD9721")
                    p.mb-0 Una tabla mal estructurada puede impedir insertar registros sin información innecesaria, eliminar filas sin perder datos relevantes o actualizar campos sin generar inconsistencias.
                  li.d-flex
                    i.fas.fa-check-circle.me-3.mt-1(style="color:#AD9721")
                    p.mb-0 Las dependencias funcionales deben vincularse al identificador correcto; de lo contrario, se debilita la coherencia estructural del sistema.
                  li.d-flex
                    i.fas.fa-check-circle.me-3.mt-1(style="color:#AD9721")
                    p.mb-0 Un diseño normalizado reduce complejidad técnica y mejora la sostenibilidad del modelo en el tiempo.
            p.mt-5(data-aos="fade-left") Coronel y Morris (2023) advierten que la normalización no debe aplicarse de manera mecánica o indiscriminada. En contextos analíticos o de grandes volúmenes de datos, puede admitirse cierta desnormalización controlada para optimizar consultas. Sin embargo, en sistemas transaccionales, la normalización continúa siendo un estándar indispensable para garantizar integridad y estabilidad.
    Separador
    //- Inicio Tema 5.1
    .row.mt-5
        #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.2 Primera, segunda y tercera forma normal 
    //- FIn Tema 5.1
    p(data-aos="fade-left") En esta etapa el diseño comienza a adquirir forma estructural concreta. Las tres primeras formas normales constituyen el núcleo de la normalización clásica y permiten eliminar redundancias progresivamente, asegurando coherencia lógica entre atributos.
          //- Título con imagen
          .bg-full-width.mt-5
            .px-4.px-md-5.pb-md-3
            .titulo-con-imagen.mb-5(data-aos="fade-right")
              .titulo-con-imagen__fondo
                img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
                h3.titulo-con-imagen__texto Primera Forma Normal (1FN)
          //- Título con imagen    
    .row.justify-content-center.align-items-stretch.mb-5      
      .col-lg-4.bg-color-2.p-4.p-md-5.d-flex.align-items-center(data-aos="fade-right")
        p.mb-0 Una relación se encuentra en <b>Primera Forma Normal (1FN)</b> cuando todos sus atributos contienen <b>valores atómicos</b>. Esto significa que cada campo debe almacenar un único valor indivisible; no pueden existir listas, conjuntos ni valores compuestos dentro de una misma celda. Este principio responde al criterio básico de atomicidad: cada intersección entre fila y columna debe contener un solo dato.
      .col-lg-4.px-0(data-aos="zoom-in")
        figure.mb-0.h-100
          img.w-100.h-100(src='@/assets/curso/tema5/img5.png' style="object-fit: cover; display:block;")
      .col-lg-4.ps-4.pe-4.pt-4.pt-md-5.pb-0.d-flex.flex-column.justify-content-end(data-aos="fade-left")
        .content-wrap
          img.mb-4(src="@/assets/curso/fondos/icono.svg", alt="Icono" style="width:70px").d-none.d-xl-block         
          p.mb-0 Por ejemplo, un campo denominado Nombre completo puede requerir separación en Nombres y Apellidos, dependiendo de las necesidades de consulta. De manera similar, un atributo Dirección suele dividirse al menos en Calle, Ciudad y otros componentes relevantes.        
    .row.justify-content-center.mt-0.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 6.
          span Ejemplo de aplicación de la 1FN
        figure
          img(src="@/assets/curso/tema5/img6.svg", alt="Diagrama sobre la aplicación de la Primera Forma Normal (1FN) que representa la descomposición de una tabla en dos estructuras separadas para eliminar grupos repetitivos y garantizar atributos atómicos.", style="width: 1200px")
    p(data-aos="fade-left") En síntesis, la 1FN establece el punto de partida de la normalización: <b>garantizar que cada atributo contenga un único valor elemental</b>, condición necesaria para avanzar hacia formas normales superiores.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Segunda Forma Normal (2FN)
    //- Título con imagen    
    p.mb-5(data-aos="fade-left") La Segunda Forma Normal (2FN) aplica específicamente a relaciones cuya clave primaria es compuesta, es decir, está formada por dos o más atributos. Una tabla se encuentra en 2FN cuando todos los atributos no clave dependen de la totalidad de la clave primaria y no solo de una parte de ella. Cuando un atributo depende únicamente de uno de los componentes de la clave compuesta, se presenta una dependencia parcial, lo que constituye una anomalía estructural. Este problema es frecuente en tablas de detalle. Considérese el siguiente caso conceptual:
    .row.mb-5.justify-content-center(data-aos="fade-left")
      .col-6
        p.p-3.bg-color-10.text-center.rounded-4.text-white <b>DetallePedido(id_pedido, id_producto, cantidad, nombre_producto)</b>
    p(data-aos="fade-left") Si en esta tabla se incluye el atributo <b>nombre_producto </b>, surge una inconsistencia lógica. El nombre del producto no depende de la combinación (id_pedido, id_producto), sino exclusivamente de <b>id_producto</b>. Por tanto, ese atributo pertenece a la entidad <b>Producto</b> y no debería almacenarse en la tabla de detalle. Antes de la representación gráfica, es importante precisar que la 2FN elimina dependencias parciales, fortaleciendo la coherencia entre identificadores y atributos descriptivos.
    .row.justify-content-center.mt-5
      .titulo-sexto.color-acento-contenido
          h5 Figura 7.
          span Ejemplo de aplicación de la 2FN
      .col-lg-7.mb-3
        figure
          img(src="@/assets/curso/tema5/img7.svg", alt="Diagrama sobre dependencia funcional que presenta el atributo nombre_producto en la parte superior como determinante y una flecha hacia nombre_producto en la parte inferior, representando una relación de dependencia entre atributos.", style="width: 1000px")
      .col-lg-5.d-flex.flex-column.justify-content-end.bg-color-8(data-aos="fade-left")      
        .p-4
          img.mb-4(src="@/assets/curso/fondos/icono.svg", style="width:70px").d-none.d-xl-block         
          p.mb-0 En términos prácticos, la 2FN actúa como un filtro que impide que atributos propios de entidades externas se integren indebidamente en tablas cuya clave compuesta no los determina completamente. De esta manera, se reduce redundancia y se refuerza la consistencia estructural del modelo relacional.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Tercera Forma Normal (3FN)
    //- Título con imagen    
    p(data-aos="fade-left") Una relación se encuentra en <b>Tercera Forma Normal (3FN)</b> cuando cumple dos condiciones:
    .row.mb-5.justify-content-center
      .col-lg-4.bg-color-11.rounded-4
        p.p-4.text-center.text-white Está previamente en <b>Segunda Forma Normal (2FN).</b>
      .col-lg-4.bg-color-3.rounded-4
        p.p-4.text-center No existen <b>dependencias transitivas</b> entre atributos no clave.
    p(data-aos="fade-left") En términos simples, un atributo no clave no debe depender de otro atributo que tampoco sea clave. Toda dependencia debe vincularse directamente con la clave primaria. Considérese el siguiente ejemplo clásico:
    .row.mb-5.justify-content-center(data-aos="fade-left")
      .col-6
        p.p-3.bg-color-10.text-center.rounded-4.text-white <b>Estudiante(id_est, nombre, ciudad, codigo_postal)</b>
    p(data-aos="fade-right") Si el atributo <b>ciudad</b> depende de <b>codigo_postal</b>, y este último no es la clave primaria sino un atributo adicional, se configura una <b>dependencia transitiva</b>. En este caso, ciudad depende indirectamente de id_est a través de codigo_postal. Antes de la representación gráfica, es importante aclarar que la 3FN elimina este tipo de dependencias indirectas para fortalecer la coherencia estructural del modelo.
    .row.justify-content-center.mt-5
      .titulo-sexto.color-acento-contenido
          h5 Figura 8.
          span Ejemplo de aplicación de la 3FN
      .col-lg-7.mb-3
        figure
          img(src="@/assets/curso/tema5/img8.svg", alt="Diagrama sobre dependencia funcional que presenta el atributo ciudad en la parte superior como determinante y una flecha hacia ciudad en la parte inferior, representando una relación de dependencia entre atributos.", style="width: 1000px")
      .col-lg-5.d-flex.flex-column.justify-content-end.bg-color-8(data-aos="fade-left")      
        .p-4
          img.mb-4(src="@/assets/curso/fondos/icono.svg", style="width:70px").d-none.d-xl-block         
          p.mb-0 Al alcanzar la 3FN, la estructura resultante suele ser suficientemente robusta para la mayoría de las aplicaciones transaccionales, ya que reduce redundancia, previene anomalías y mantiene coherencia lógica entre los datos.
    Separador
    //- Inicio Tema 5.3
    .row.mt-5
        #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.3 Eliminación de redundancias y dependencias
    //- FIn Tema 5.3
    .row.justify-content-center.align-items-stretch.g-0.mb-3(data-aos="fade-left")
      .col-lg-10.bg-color-6.p-4.mb-0.d-flex.align-items-center
        p.mb-0 La eliminación de redundancias constituye tanto un resultado como un indicador de una normalización adecuada. No obstante, es necesario precisar que <b>no toda redundancia implica un error estructural.</b> En sistemas orientados a analítica, data warehouses o motores NoSQL, la redundancia puede utilizarse estratégicamente para mejorar el rendimiento y simplificar consultas complejas.
      .col-lg-2.d-flex.align-items-center.justify-content-center
        figure
          img(src="@/assets/curso/tema5/img9.png", data-aos="zoom-in", style="width: 100%").mx-auto
    p(data-aos="fade-right") Sin embargo, en el modelo relacional tradicional (especialmente en entornos transaccionales) la redundancia innecesaria suele generar consecuencias negativas que afectan la integridad y sostenibilidad del sistema. Estas consecuencias pueden sintetizarse así:
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
                        img(src='@/assets/curso/tema5/tarjeta01_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Inconsistencias lógicas
                        p.card-text.text-center
                        | Diferencias entre registros que deberían contener la misma información.
                      .bg-color-17.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema5/tarjeta01_1.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Duplicidad silenciosa
                        p.card-text.text-center
                        | Repetición de datos sin mecanismos claros de control.
                      .bg-color-17.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema5/tarjeta01_1.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Dificultad de mantenimiento
                        p.card-text.text-center
                        | Incremento del esfuerzo para modificar o auditar información.
                      .bg-color-17.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema5/tarjeta01_1.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Pérdida de integridad
                        p.card-text.text-center
                        | Riesgo de que reglas del negocio no se cumplan uniformemente.
          p(data-aos="fade-right") La normalización permite depurar estas redundancias mediante la reorganización estructural de las tablas. Una técnica clave en este proceso consiste en identificar <b>dependencias funcionales</b>, es decir, reglas que determinan cómo un conjunto de atributos define a otros dentro de una relación.
      .row.mb-5.justify-content-center(data-aos="fade-left")
        .col-6.p-3.bg-color-12.rounded-4
          p <b>Una dependencia funcional se expresa de la siguiente forma:</b>
          p (NumeroDocumento) → (Nombre, Apellido, FechaNacimiento) 
          p Esto significa que el NúmeroDocumento determina de manera única el Nombre, el Apellido y la Fecha de Nacimiento.
    p(data-aos="fade-right") Si una dependencia funcional no está alineada con la clave primaria de la tabla, o si revela que ciertos atributos dependen de otro campo que no es clave, es probable que la relación requiera descomposición en entidades separadas. Esta reorganización fortalece la coherencia lógica del modelo y reduce anomalías estructurales.
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
