<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Tratamiento de modelos tridimensionales y opciones de exportación
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img1.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p(data-aos="fade-down").mb-0 El tratamiento de los modelos tridimensionales (imágenes digitales) que resultan del proceso de someter un objeto a un escáner 3d es variado; las imágenes de estos modelos tridimensionales son fácilmente exportables a un computador común y el espectro o la gama para trabajarlos es amplia; hay desde programas o #[i softwares] gratuitos o de licencia. Entre los #[i softwares] de licencia más potentes para la edición y creación de estos modelos los más representativos que existen en el mercado, en especial para el sector industrial de tipo CAD son; #[i SolidWorks], #[i SolidEdge] y #[i Autodesk], entre otros. 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-down") Las opciones de exportación de los programas tipo CAD se dan de acuerdo con el tipo de formato de archivo y las características y objetivos para los cuáles son hechos. Observe por medio de esta infografía los más usados.

    ImagenInfografica.color-primario
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema2/img2.svg', alt='Exportacion de programas tipo CAD')

      .tarjeta.color-acento-botones.p-3(x="15.7%" y="34.4%" numero="")
        p .stl (#[i STereo Lithography] ó #[i STéreo Litografía]) este formato es el más común en los programas CAD, donde define la geometría de objetos tipo 3D.

      .tarjeta.color-acento-botones.p-3(x="84.3%" y="34.4%" numero="")
        p .ply (#[i Polygon File Format] ó Formato de archivo de polígono) este formato almacena propiedades como el color, descripción de la superficie, coordenadas espaciales de objetos tipo 3D.

      .tarjeta.color-acento-botones.p-3(x="84.3%" y="89.5%" numero="")
        p vrml (#[i Virtual Reality Modeling] Language o Lenguaje de modelado de realidad virtual) representa escenas u objetos de tipo interactivo o tridimensional (3D)
      
      .tarjeta.color-acento-botones.p-3(x="15.7%" y="89.5%" numero="")        
        p .obj (#[i Wavefront] OBJ – Object- ó frente de onda) este formato almacena propiedades como el color y la textura de objetos tipo 3D.
        
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
