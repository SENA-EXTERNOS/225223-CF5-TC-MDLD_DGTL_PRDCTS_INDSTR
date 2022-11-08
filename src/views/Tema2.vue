<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Flujo de trabajo
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-down") Existen determinadas pautas que se deben tener en cuenta para tener un buen flujo de trabajo con el escáner 3D, las siguientes son algunas de ellas.
    
    SlyderF(columnas="col-lg-6 col-xl-4").mb-5
      .tarjeta.color-acento-botones.p-4(style="background-color:#FFDCAB")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img33.svg' alt='')
        p.text-center(style="color:#000000") Elegir el objeto según geometría y textura
      
      .tarjeta.color-acento-botones.p-4(style="background-color:#FFDCAB")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img34.svg' alt='')
        p.text-center(style="color:#000000") Revisar el tipo de superficie del objeto
      
      .tarjeta.color-acento-botones.p-4(style="background-color:#FFDCAB")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img35.svg' alt='')
        p.text-center(style="color:#000000") Calcular la distancia entre el escáner y el objeto
      
      .tarjeta.color-acento-botones.p-4(style="background-color:#FFDCAB")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img36.svg' alt='')
        p.text-center(style="color:#000000") Elegir la iluminación

      .tarjeta.color-acento-botones.p-4(style="background-color:#FFDCAB")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img37.svg' alt='')
        p.text-center(style="color:#000000") Tener herramientas auxiliares
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-down") La siguiente información sobre el proceso de escaneo ayuda a profundizar de una mejor manera lo descrito anteriormente.
    
    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Elegir objeto")
        .row        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img42.svg', alt='')              
          .col-md-8.mb-4.mb-md-0
            h4 Elegir el objeto según geometría y textura
            p Al realizar el escaneo 3D es importante que se elijan objetos con geometría y texturas abundantes. Lo anterior repercutirá en que sea más intuitivo o fácil el proceso de escanear en 3D; esto debido a que compensará los movimientos poco delicados o bruscos que se realizan cuando se está haciendo esta actividad las primeras veces. Esto ya que es completamente normal que al usar una tecnología nueva la persona se deba adecuar rápidamente, para que al realizar un escaneo se pueda tener un buen seguimiento de la forma, dando con esto un mejor movimiento del escáner al transcurrir el tiempo.
      .py-3.py-md-4(titulo="Tipo de superficie")
        .row
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img41.svg', alt='')              
          .col-md-8
            h4 Revisar el tipo de superficie del objeto
            p Hay algunos objetos que por sus características pueden ser problemáticos a la hora de ser escaneados, entre estas las de mayor grado de dificultad son:
            ul.lista-ul--color
                li
                  i.fas.fa-solid.fa-stop(style="color:#FF9500")
                  .col-12
                    p Superficies brillantes.
                li
                  i.fas.fa-solid.fa-stop(style="color:#FF9500")
                  .col-12
                    p Superficies de color negro.
                li
                  i.fas.fa-solid.fa-stop(style="color:#FF9500")
                  .col-12
                    p Superficies muy delgadas.
                li
                  i.fas.fa-solid.fa-stop(style="color:#FF9500")
                  .col-12
                    p Superficies transparentes. 

      .py-3.py-md-4(titulo="Calcular distancia")
        .row
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img40.svg', alt='') 
          .col-md-8
            h4 Calcular la distancia entre el escáner y el objeto
            p Se debe de mantener una distancia eficaz entre el scanner y el objeto a escanear para evitar que el seguimiento de este se realice de manera inadecuada. Por lo anterior se deben mantener los ojos enfocados en la pantalla de visualización de lo que se está escaneando, para así poder monitorear el proceso y notar puntos que requieren de atención en el proceso.
      
      .py-3.py-md-4(titulo="Elegir la iluminación")
        .row
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img39.svg', alt='') 
          .col-md-8
            h4 Elegir la iluminación
            p Para un buen escaneo se debe tener una buena iluminación (no escanear con luz solar); si el tamaño del objeto es muy grande es importante asegurarse de tener una fuente de energía constante y de confianza para poder abarcar toda la superficie.
      
      .py-3.py-md-4(titulo="Herramientas auxiliares")
        .row
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img38.svg', alt='') 
          .col-md-8
            h4 Tener herramientas auxiliares
            p En lo posible, se deben tener herramientas como una silla o una escalera dado el caso de que la altura sobresalga del promedio para que el proceso de flujo de trabajo sea exitoso y sin menores contratiempos.
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-down") Para complementar el aprendizaje sobre el flujo de trabajo se puede visualizar el siguiente video.
    
    .row.justify-content-center.align-items-center.md-5   
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Tema2',
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
