<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar sobre los fundamentos del modelado conceptual, lógico y físico, la normalización de bases de datos y las operaciones básicas del lenguaje SQL.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: 'El modelo entidad–relación pertenece al nivel:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Físico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Conceptual.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'De índice.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Transaccional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'Una entidad se convierte en:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un índice.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una tabla.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un disparador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un procedimiento almacenado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: 'Un atributo multivaluado debe representarse como:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un campo tipo lista.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una columna con valores separados por comas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una tabla independiente relacionada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un índice compuesto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'Una clave primaria debe caracterizarse por:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aceptar valores duplicados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cambiar frecuentemente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ser siempre compuesta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ser única y estable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: 'La primera forma normal exige:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La primera forma normal exige:',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Separar claves compuestas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que todos los valores sean atómicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Usar índices en todas las columnas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: 'Una relación N:M se implementa mediante:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dos claves primarias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una tabla intermedia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Duplicación de datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un índice único.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: 'Una dependencia funcional incorrecta ocasiona:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mayor velocidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Menos consultas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Anomalías de actualización.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Índices innecesarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: 'La eliminación de redundancias busca:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Replicar datos para mayor seguridad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar inconsistencias en la información.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el número de tablas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar el tamaño del modelo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: 'La integridad referencial garantiza que:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No existan registros referenciados sin correspondencia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Dos tablas tengan el mismo número de filas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Todas las claves sean compuestas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los índices se actualicen automáticamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'SQL es un lenguaje:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Imperativo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Orientado a objetos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Declarativo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Procedimental avanzado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: 'La instrucción para filtrar registros es:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<i>ORDER BY.</i>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<i>LIMIT.</i>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<i>WHERE.</i>',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '<i>CREATE.</i>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: 'La sintaxis  <i>SELECT * FROM</i> tabla significa:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Devolver todas las columnas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Filtrar información.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ordenar resultados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Borrar datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: 'El operador  <i>LIKE</i> se utiliza para:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comparaciones exactas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ordenamiento ascendente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Limitar el número de registros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Búsquedas por patrones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Cuál de las siguientes opciones describe mejor el propósito del modelo lógico?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Representar los datos con detalles físicos del motor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Traducir el modelo conceptual en tablas y claves sin depender del SGBD.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Definir los índices que usarán las consultas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Administrar permisos y roles de usuarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'En una relación N:M, la clave primaria de la tabla intermedia suele estar compuesta por:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dos índices únicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El nombre de ambas tablas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un identificador autoincremental.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las claves primarias de las tablas relacionadas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            'Un atributo que depende de otro atributo no clave genera un problema de:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dependencia transitiva.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cardinalidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Integridad referencial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Indexación múltiple.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: 'Un índice compuesto resulta útil cuando:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Varias columnas se usan juntas en condiciones de búsqueda.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Se desea eliminar duplicados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Hay relaciones recursivas en el modelo conceptual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se quieren reducir las escrituras en la base de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'La forma normal que elimina dependencias parciales respecto a una clave compuesta es:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '1FN.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '2FN.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '3FN.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'BCNF.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Cuál de las siguientes afirmaciones describe mejor un modelo NoSQL documental?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Almacena datos estrictamente tabulares.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Requiere claves compuestas obligatoriamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No permite almacenar relaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Usa documentos JSON/BSON con estructura flexible.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: 'En SQL, la cláusula ORDER BY se utiliza para:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizar los resultados según una o varias columnas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Filtrar datos por un patrón de texto a partir de columnas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Crear índices en columnas específicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar la cantidad de filas mostradas en pantalla.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
