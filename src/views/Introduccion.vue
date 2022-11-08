<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p(data-aos="fade-left") Apreciado aprendiz, sea bienvenido a este recurso educativo orientado a generar conocimientos en la configuración del modelo digital de producto con base en herramientas de ensamble y plano del sistema CAD (diseño asistido por computador). Así mismo, se darán a conocer, los tipos de escáner de tipo tridimensional (3D) que existen en el mercado para así realizar el proceso (flujo de trabajo) que está enmarcado en la realización de un scanner 3D de un objeto; con ello se identificarán cuáles son los archivos que se generan después del proceso de scanner, los cuales se pueden descargar a un computador para así posteriormente tratarlos en un sistema o programa informático CAD. Para la utilización y publicación de estos modelos tridimensionales resultantes del proceso de #[i scanner] 3D se estudiará por último un #[i software] que trata estas imágenes tomadas desde un scanner 3D denominado #[i Geomagic], el cual ayuda a dejar la imagen resultante muy parecida al objeto real, gracias a las diferentes herramientas que este contiene.
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/img0.png', alt='')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-left") En el siguiente video se podrá conocer de forma general la temática que se estudiará a lo largo del componente formativo.
    
    .row.justify-content-center.align-items-center.md-5   
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
