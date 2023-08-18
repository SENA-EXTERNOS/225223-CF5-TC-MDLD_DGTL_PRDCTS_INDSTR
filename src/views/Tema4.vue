<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Utilización y publicación de modelos tridimensionales con Geomagic
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p(data-aos="fade-down") #[i Geomagic] es un #[i software] de ingeniería que permite la creación de imágenes 3D gracias al escaneo de esta misma tecnología (3D); la utilización de estos modelos tridimensionales se hace de manera común como se hace con un #[i software] CAD tradicional. Dentro de este #[i software] se observan o tratan las características del modelo (imagen capturada por el escáner) como son la #[b superficie], #[b la geometría], detalles de #[b textura] entre otras, para convertirlo luego en un modelo CAD tipo 3D; permitiendo diseñar y utilizar estas imágenes para la publicación de estos modelos tridimensionales, exportándolos en cualquier plataforma CAD habitual para su utilización, como lo son #[i SOLIDWORKS], #[i Autodesk Inventor] o #[i Catia], que están entre los #[i softwares] más utilizados para el tratamiento en modelos tridimensionales, en especial para de productos de tipo industriales y de ingeniería.         
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema4/img1.svg', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema4/img2.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p(data-aos="fade-down").mb-0 Los productos de este tipo de #[i software] de la marca (#[i Geomagic]) se centran en el diseño CAD (diseño asistido por computadora), con énfasis marcado en el escaneo tipo 3D y otras metodologías de diseño no tradicionales, como la ingeniería por medio de las imágenes tomadas por el escáner 3D por dar un ejemplo, además la marca también comercializa #[i softwares] de inspección de calidad 3D y como se presentan los escáneres 3D bajo su marca registrada #[i Geomagic].
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
       p(data-aos="fade-down") Algunos de los productos más representativos de la marca son:
    
    .tarjeta.tarjeta--azul.p-4.mb-5(style="background-color: #e8e8e8")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.mb-5          
          .col-md-6.mb-4.mb-md-0
            h3 Sistemas de escaneo (3D)
            p #[i Geomagic Capture] es un sistema integrado que está constituido por un escáner 3D de luz estructurada (LED azul), cuando este se utiliza su deber ser es como herramienta de diseño soportado en escaneo tipo 3D, en donde un objeto físico para nuestro caso un objeto industrial se escanea (3D) y luego se convierte en un modelo CAD (3D) o también en una herramienta de inspección, en la que al ser escaneado un objeto físico, luego se verifica de manera (dimensionalmente) al compararla con un #[i software] CAD 3D.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img3.svg', alt='')
        .row.justify-content-center.align-items-center.mb-5          
          .col-md-6.mb-4.mb-md-0
            h3 #[i Software] de diseño (3D)
            p #[i Geomagic Design] es un #[i software] de diseño (mecánico) con énfasis en sistemas y ensamblajes (mecánicos), adicionalmente se tiene el #[i Geomagic Design X], #[i Design Direct], #[i Studio] y #[i Wrap], que son #[i softwares] que ofrecen diferentes flujos de trabajo para crear modelos tipo 3D para la fabricación de manera inmediata, incluido el modelado sólido y su correspondiente superficie NURBS (representaciones matemáticas de geometría en 3D). 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img4.svg', alt='')
        
        .row.justify-content-center.align-items-center.mb-5          
          .col-md-6.mb-4.mb-md-0
            h3 #[i Software] de inspección y metrología 3D
            p #[i Geomagic Verify] y #[i Geomagic Qualify], son #[i softwares] que se concentran en ofrecer herramientas de medición, generar informes y de comparación para los procesos de inspección automatizados de primeros productos.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img5.svg', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema4/img6.svg', alt='')
      .col-lg-10
        p(data-aos="fade-down").mb-4 Este programa como todo #[em software] CAD, tiene variadas herramientas para el tratamiento de las imágenes resultantes en el proceso de escaneo 3D Sin embargo, a continuación se van a mencionar las herramientas que tienen más uso y relevancia, en cuanto a proceso de escaneo 3D. Las herramientas que más se usan en este programa son:
    
    .row.justify-content-center.align-items-center.md-5
      .col-10
        .titulo-sexto.color-acento-contenido
          h5(data-aos="fade-down") Figura 1.
          br
          span Herramientas de 
            em Geomagic
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        ImagenInfograficaB.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema4/img7.svg', alt='')
          div(x="6.8%" y="44.2%" tooltip="Escáner" numero="+")            
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-4                
                figure
                  img(src='@/assets/curso/temas/tema4/img8.svg', alt='')
              .col-lg-8
                figure.mb-4
                  img(src='@/assets/curso/temas/tema4/img8_1.svg', alt='')(style="width:8%")                
                p.mb-2 Esta herramienta se utiliza para analizar un objeto dando como resultado la construcción de su modelo digital de manera tridimensional, por medio del proceso de escáner 3D.
          div(x="22.6%" y="44.2%" tooltip="Alineación" numero="+")
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-4                
                figure
                  img(src='@/assets/curso/temas/tema4/img8_2.svg', alt='')
              .col-lg-8
                figure.mb-4
                  img(src='@/assets/curso/temas/tema4/img8_22.svg', alt='')(style="width:8%")            
                p.mb-2 Esta herramienta se estructura para alinear y combinar las diferentes imágenes o cenas (digitales) resultantes del proceso del escaneo cuando se somete un objeto a este tipo de procedimiento.
          div(x="38.6%" y="44.2%" tooltip="Pincel" numero="+")
           .row.justify-content-center.align-items-center.mb-5
              .col-lg-4                
                figure
                  img(src='@/assets/curso/temas/tema4/img8_3.svg', alt='')
              .col-lg-8
                figure.mb-4
                  img(src='@/assets/curso/temas/tema4/img8_33.svg', alt='')(style="width:8%")            
                p.mb-2 Esta herramienta permite seleccionar partes dentro de una ruta dibujada a mano alzada en la pantalla.
          div(x="54.6%" y="44.2%" tooltip="Región" numero="+")
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-4                
                figure
                  img(src='@/assets/curso/temas/tema4/img8_4.svg', alt='')
              .col-lg-8
                figure.mb-4
                  img(src='@/assets/curso/temas/tema4/img8_44.svg', alt='')(style="width:8%")            
                p.mb-2 Esta herramienta explora las diferentes regiones o caras de las que pueda estar constituida la imagen general; que se está conformada de las diferentes imágenes que produce al ser puesto el objeto frente al escáner 3D.
          div(x="74%" y="44.2%" tooltip="Plano y vector" numero="+")
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-4                
                figure
                  img(src='@/assets/curso/temas/tema4/img8_5.svg', alt='')
              .col-lg-8
                figure.mb-4
                  img(src='@/assets/curso/temas/tema4/img8_55.svg', alt='')(style="width:8%")            
                p.mb-2 Estas herramientas ayudan o facilitan la referencia geométrica de la imagen escaneada.
          div(x="93.3%" y="44.2%" tooltip="Alineación interactiva" numero="+")
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-4                
                figure
                  img(src='@/assets/curso/temas/tema4/img8_6.svg', alt='')
              .col-lg-8
                figure.mb-4
                  img(src='@/assets/curso/temas/tema4/img8_66.svg', alt='')(style="width:8%")            
                p.mb-2 Esta herramienta ayuda o facilita alinear las imágenes resultantes del objeto escaneado en las diferentes coordenadas (x, y, z), respectivamente.
          div(x="18.1%" y="56.4%" tooltip="Llenar orificios" numero="+")
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-4                
                figure
                  img(src='@/assets/curso/temas/tema4/img8_7.svg', alt='')
              .col-lg-8
                figure.mb-4
                  img(src='@/assets/curso/temas/tema4/img8_77.svg', alt='')(style="width:8%")            
                p.mb-2 Con esta herramienta se llenan los agujeros o espacios, que hayan quedado inconclusos en la malla, para que así la figura pueda tener una apariencia más consistente a la real.
          div(x="34%" y="56.4%" tooltip="Boceto" numero="+")
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-4                
                figure
                  img(src='@/assets/curso/temas/tema4/img8_8.svg', alt='')
              .col-lg-8
                figure.mb-4
                  img(src='@/assets/curso/temas/tema4/img8_88.svg', alt='')(style="width:8%")            
                p.mb-2 Esta herramienta se utiliza para hacer un boceto o malla preliminar; esto después de los anteriores cambios que se le hayan realizado a las imágenes o escenas digitales escaneadas.
          div(x="50.1%" y="56.4%" tooltip="Modelo" numero="+")
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-4                
                figure
                  img(src='@/assets/curso/temas/tema4/img8_9.svg', alt='')
              .col-lg-8
                figure.mb-4
                  img(src='@/assets/curso/temas/tema4/img8_99.svg', alt='')(style="width:8%")            
                p.mb-2 Con esta herramienta se corta la sección de la pieza para rellenar y visualizar los ejes que la componen.
          div(x="66.1%" y="56.4%" tooltip="Mapas de entorno" numero="+")
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-4                
                figure
                  img(src='@/assets/curso/temas/tema4/img8_10.svg', alt='')
              .col-lg-8
                figure.mb-4
                  img(src='@/assets/curso/temas/tema4/img8_101.svg', alt='')(style="width:8%")            
                p.mb-2 Esta herramienta permite visualizar rayas de cebra en la superficie para mostrar su continuidad.
          div(x="82%" y="56.4%" tooltip="Modo de visualización de curvatura de la malla" numero="+")
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-4                
                figure
                  img(src='@/assets/curso/temas/tema4/img8_11.svg', alt='')
              .col-lg-8
                figure.mb-4
                  img(src='@/assets/curso/temas/tema4/img8_111.svg', alt='')(style="width:8%")            
                p.mb-2 Esta herramienta permite activar o desactivar la visibilidad del mapa de curvatura de la malla. 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.cajon--amarillo-1.p-3.p-sm-4
          p(data-aos="fade-down").mb-4 Es importante revisar los demás recursos disponibles en el menú principal, estos permiten ampliar los conocimientos adquiridos y revisar los que ya se estudiaron.

</template>

<script>
export default {
  name: 'Tema4',
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
