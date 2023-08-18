<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Planificación de escaneo 3D

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p(data-aos="fade-down").mb-0 Antes de abordar el tema de planificación de escaneo 3D, es pertinente recordar cuál es la función u objeto de un escáner 3D, es decir, la creación de  una 
              b nube de puntos 
              | de la superficie del objeto a escanear, por medio de un sensor. Estos puntos se pueden usar para 
              b extrapolar
              | ; es decir, la 
              b reconstrucción digital 
              | del objeto. Además, es posible extrapolar el color, en caso de estar incluido en la información obtenida en estos puntos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-down") Es útil recordar que el escáner 3D difiere de las cámaras digitales en el proceso de captura de la imagen, como se muestra a continuación:
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-12
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-secundario.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/tema1/img2.svg', alt='Camaras digitales')(style="max-width: 75%;")
            h2.text-center Cámaras digitales
            p(data-aos="fade-down") Las cámaras digitales reúnen la información de color según su campo de visión, tipo, cono o embudo.
          .col-md.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/tema1/img3.svg', alt='Escaner 3D')(style="max-width: 75%;")
            h2.text-center Escáner 3D
            p(data-aos="fade-down") Los escáneres 3D reúnen información de la geometría del objeto escaneado, por medio de las nubes de puntos.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-down") El #[b modelo] de la pieza o la imagen resultante de un proceso utilizando escáner 3D es la expresión de la posición tridimensional de cada uno de los puntos analizados de la pieza u objeto escaneado.
        p(data-aos="fade-down") Cuando se está realizando el escáner de un objeto se deben tener algunas consideraciones:
    
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-adicional-1--borde.p-4(titulo="Tipo de escáner")        
        .row
          .col-xl-6
            div.p-3(style="background-color:#DAF1F7")
              p Se debe de empezar conociendo o indagando que tipo de escáner se utilizará para así saber cuáles son sus características o prestaciones.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img4.png', alt='')
      .tarjeta.color-adicional-1--borde.p-4(titulo="Características del objeto")        
        .row
          .col-xl-6
            div.p-3(style="background-color:#DAF1F7")
              p Se debe conocer el tipo de escáner para poder tomar todos los detalles morfológicos y las características físicas que constituyen al objeto, que se está tratando por medio del escáner 3D.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img4.png', alt='')
      .tarjeta.color-adicional-1--borde.p-4(titulo="Tecnología del escáner")        
        .row
          .col-xl-6
            div.p-3(style="background-color:#DAF1F7")
              p Se debe tener en cuenta si el escáner debe ser de características de láser o de luz estructurada, para así saber si los sensores o cámaras tomarán bien los registros necesarios del objeto para su posterior digitalización.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img4.png', alt='')
      .tarjeta.color-adicional-1--borde.p-4(titulo="Preparación del objeto")        
        .row
          .col-xl-6
            div.p-3(style="background-color:#DAF1F7")
              p Se analiza la preparación del objeto a escanear debido a que se está trabajando a una escala de detalle importante; por no decir que alta y exigente, donde el objeto debe estar expuesto de manera natural para así tener un símil digital adecuado.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img4.png', alt='') 
      .tarjeta.color-adicional-1--borde.p-4(titulo="Exposición del objeto")          
        .row
          .col-xl-6
            div.p-3(style="background-color:#DAF1F7")
              p No se debe exponer el objeto durante el proceso a superficies que reflejen o sean de características tipo transparentes.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img4.png', alt='')
      .tarjeta.color-adicional-1--borde.p-4(titulo="Iluminación")        
        .row
          .col-xl-6
            div.p-3(style="background-color:#DAF1F7")
              p El objeto a escanear debe tener muy buena iluminación; lo anterior se realiza para que los sensores (cámaras) puedan capturar al objeto con todos sus contornos, detalles característicos y rasgos especiales que lo componen.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img4.png', alt='')       

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.cajon--amarillo-1.p-3.p-sm-4
          p(data-aos="fade-down").mb-4 En la mayoría de los casos, un solo escaneo no dará como resultado un modelo total del objeto; por lo tanto, es usual que se requieran varias tomas y en algunos casos demasiadas, al igual que en diferentes direcciones, para así obtener todos los lados posibles del objeto. Estos variados escaneos #[b tienen que estar vinculados a un sistema de referencia mediante la alineación], haciendo que se puedan transformar las coordenadas de cada una de las tomas en coordenadas generales.
    separador

    .row
      .col-xl-12
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.1	 Tipos de escáner
    
    .row.justify-content-center.align-items-center
      .col-lg-12
        p(data-aos="fade-down").mb-4 Veamos dos tipos de tecnología de escáner que son de gran importancia para el modelado 3D; el #[b escáner láser] y el #[b escáner de luz estructurada].

    .row.justify-content-center.align-items-center
      .col-xl-12
        ul.lista-ul--color.lista-ul
          li
            i.fas.fa-solid.fa-circle(style="color:#FF9500") 
            h3 Escáner láser
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-down") Las siguientes son algunas características del proceso de un escáner láser tradicional.

    .tarjeta.tarjeta--gris.p-4.mb-5
      LineaTiempoC.color-acento-botones(text-small)
        .row.justify-content-center.align-items-center.mb-5(titulo="Paso 1")
          .col-md-6.mb-4.mb-md-0
            p Este tipo de escáner se realiza gracias al proceso de #[b triangulación trigonométrica] para capturar detalladamente la forma del objeto y queda de esta forma en modelo 3D.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img5.png', alt='')


        .row.justify-content-center.align-items-center.mb-5(titulo="Paso 2")
          .col-md-6.mb-4.mb-md-0
            p Lo que hace por medio de este proceso es convertir el objeto en millones de #[b puntos de información].
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img6.png', alt='')


        .row.justify-content-center.align-items-center.mb-5(titulo="Paso 3")
          .col-md-6.mb-4.mb-md-0
            p Esto se hace gracias a que #[b proyecta un punto láser] sobre el objeto a escanear.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img7.png', alt='')
        
        .row.justify-content-center.align-items-center.mb-5(titulo="Paso 4")
          .col-md-6.mb-4.mb-md-0
            p Después de escaneado, el reflejo del objeto es capturado con los diferentes sensores o cámaras que componen este tipo de escáner. 
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img8.png', alt='')
        
        .row.justify-content-center.align-items-center.mb-5(titulo="Paso 5")
          .col-md-6.mb-4.mb-md-0
            p Estos sensores se ubican a cierta distancia conocida de la fuente de la luz láser, es por ello por lo que se pueden realizar mediciones al detalle de puntos realizando el cálculo de los ángulos de reflexión de la luz del láser. 
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img9.png', alt='')

        .row.justify-content-center.align-items-center.mb-5(titulo="Paso 6")
          .col-md-6.mb-4.mb-md-0
            p Con lo anterior al tener el conocimiento de la distancia del escáner al objeto hacer tratado por el mismo, la parte física de este (#[i hardware]), puede hacer un mapa (#[b mapear]) la superficie del objeto y con ello expresarlo en un modelo ya digital propiamente dicho.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img10.png', alt='')
    
    .row.justify-content-center.align-items-center
      .col-xl-12
        ul.lista-ul--color.lista-ul
          li
            i.fas.fa-solid.fa-circle(style="color:#FF9500") 
            h3 Escáner de luz estructurada
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-izq.mb-5(data-aos="zoom-in")
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img.d-flex.align-items-center
              img(src='@/assets/curso/temas/tema1/img11.png', alt='')
            .bloque-texto-g__texto--border.p-2.d-inline-block
              .bloque-texto-g__texto.p-4
                p.mb-0 Este tipo de escáner o de tecnología de escáner, utiliza el proceso de triangulación trigonométrica, su diferencia es que proyecta un #[b patrón de luz] al escanear el objeto y no una línea.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-down").mb-4 Algunas características del escáner de luz estructurada son:
      
    .bg--img_03
      .row.justify-content-center.mb-4
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img12.png", alt="alt").img400.m-auto
        .col-lg-8
          AcordionA.mb-2.color-acento-botones(tipo="a" clase-tarjeta="tarjeta ca-ab")
            .row.justify-content-center.mb-4(titulo="Proyector de luz")
              .col-10
                p.mb-0 El cual se proyecta o se enfoca sobre el objeto utilizando un proyector tipo LCD o una fuente de luz estable.
            .row.justify-content-center.mb-4(titulo="Cámaras o sensores")
              .col-10
                p.mb-0 El proceso se acompaña con cámaras, donde estas se encuentran ligeramente desplazadas o al lado del proyector.
            .row.justify-content-center.mb-4(titulo="Distancia de puntos")
              .col-10
                p.mb-0 Por medio del proyector se observa la forma del patrón de luz y se calcula así la distancia de cada uno de los puntos en el campo de visión de las cámaras.
            .row.justify-content-center.mb-4(titulo="Características de la luz")
              .col-10
                p.mb-0 Este tipo de escáner de luz estructurada se utiliza al realizar el escaneo luz de color blanca o azul y su patrón de luz; es decir, cómo se proyecta o se ve en el objeto a escanear es en forma de rayas, que a su vez pueden consistir en una matriz de puntos. 
           
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.cajon--amarillo-1.p-3.p-sm-4
          p(data-aos="fade-down").mb-4 Los escáneres 3D de luz estructurada proyectan un patrón de luz en el objeto y analizan la deformación del patrón producida por la geometría del escáner. El modelo digital resultante puede ser unidimensional o de dos dimensiones.

    .row.justify-content-center.align-items-center
      .col-xl-12
        ul.lista-ul--color.lista-ul
          li
            i.fas.fa-solid.fa-circle(style="color:#FF9500") 
            h3 Modelo unidimensional

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-down").mb-4 Un ejemplo de un modelo unidimensional es una línea; a continuación, se encontrarán las características de este modelo.
    
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-botones.p-4(style="background-color:#FFDCAB")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img13.svg' alt='')
        p.text-center(style="color:#000000") La línea se proyecta sobre el objeto que se analiza con un proyector de LCD o un láser.
        br
        br
      
      .tarjeta.color-acento-botones.p-4(style="background-color:#FFDCAB")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img13.svg' alt='')
        p.text-center(style="color:#000000") Una cámara desviada levemente del proyector de modelo ayuda a comprobar la forma de la línea.
        br
        br
      
      .tarjeta.color-acento-botones.p-4(style="background-color:#FFDCAB")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img13.svg' alt='')
        p.text-center(style="color:#000000") La cámara usa una técnica semejante a la triangulación para calcular la distancia de cada punto en la línea.
        br
        br
      
      .tarjeta.color-acento-botones.p-4(style="background-color:#FFDCAB")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img13.svg' alt='')
        p.text-center(style="color:#000000") En el caso del modelo de una sola línea, la línea se barre a través del campo del panorama para reunir información de la distancia de una línea a la vez.
    
    .row.justify-content-center.align-items-center
      .col-xl-12
        ul.lista-ul--color.lista-ul
          li
            i.fas.fa-solid.fa-circle(style="color:#FF9500") 
            h3 Modelo bidimensional
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-down").mb-4 Un ejemplo de un modelo bidimensional es una cuadrícula o un modelo de líneas. A continuación, se encuentran las características de este modelo.
    

    .row.justify-content-center.mb-5
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/img14.svg' alt='')
        .tarjeta.tarjeta--amarilla-1.p-4
          br
          br
          p.text-center Una cámara se usa para registrar la deformación del modelo.
      
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/img15.svg' alt='')
        .tarjeta.tarjeta--amarilla-1.p-4
          br
          br
          p.text-center Un algoritmo bastante complejo se usa para calcular la distancia entre cada punto en el modelo. 
      
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/img16.svg' alt='')
        .tarjeta.tarjeta--amarilla-1.p-4
          br
          br
          p.text-center Las líneas proyectadas son ambiguas.

    .row.justify-content-center.mb-5
      .col-xl-4
        figure
          img(src='@/assets/curso/temas/tema1/img17.svg', alt='')
      .col-xl-8
        h3(data-aos="fade-down") Ambigüedad de las líneas láser
        p(data-aos="fade-down") Una razón para la complejidad del algoritmo es la ambigüedad que se refiere a la dirección o ruta que se toma desde el sensor de la cámara hasta llegar al objeto de las líneas del láser.

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12
            .cajon.cajon--azul-1.color-acento-contenido.p-3.p-sm-4
              p(data-aos="fade-down").mb-4 Es importante considerar entonces una serie de rayas verticales paralelas de láser que barren horizontalmente a través de un blanco. En el caso más sencillo, uno podría analizar una imagen y asumir que la secuencia izquierda-derecha de rayas que reflejan la sucesión de los láseres en la serie, así de esta manera la raya de extremo izquierdo de la imagen es el primer láser; el próximo es el segundo láser, etcétera.
        
        p(data-aos="fade-down") En objetivos no triviales que contienen cambio de patrón, hoyos, oclusiones y de profundidad; sin embargo, esta secuencia se descompone como rayas que a veces se esconden o pueden aparecer incluso con el orden cambiado, teniendo como resultado la ambigüedad de raya de láser.

    separador
    .row
      .col-xl-12
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.2	 Preparación del objeto a escanear
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p(data-aos="fade-down") Para la preparación se debe recordar que el escaneo 3D se constituye #[b como el proceso que se hace para transferir un determinado objeto real, desde el mundo físico hacia el mundo digital o virtual] si es que se le puede llamar así, donde ésta se convierte en una herramienta poderosa en la creación de prototipos de futuros productos en especial en el sector industrial.
        p(data-aos="fade-down") Es importante que al instante que se vaya a hacer el escáner de un determinado objeto, siempre se consideren las siguientes indicaciones al momento de preparar el objeto:
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img18.svg', alt='')
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-12
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-secundario.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/tema1/img19.svg', alt='Camaras digitales')(style="max-width: 75%;")
            h2.text-center No transparencias
            p(data-aos="fade-down") No utilizar superficies que reflejen o sean de características transparentes.
          .col-md.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/tema1/img20.svg', alt='Escaner 3D')(style="max-width: 75%;")
            h2.text-center Iluminación
            p(data-aos="fade-down") Lo más importante es que tenga buena iluminación.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.cajon--amarillo-1.p-3.p-sm-4
          p(data-aos="fade-down").mb-4 Lo anterior se indica para que los sensores puedan capturar mejor al objeto en su superficie, es decir en su contorno y detalles característicos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-down").mb-4 Las pautas para hacer esta preparación de modo eficaz son las siguientes:
    
    SlyderF(columnas="col-lg-6 col-xl-4").mb-5
      .tarjeta.color-acento-botones.p-4(style="background-color:#FFDCAB")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img21.svg' alt='')
        p.text-center(style="color:#000000") Planificación y preparación de la distribución física de los puntos de escaneo.
      
      .tarjeta.color-acento-botones.p-4(style="background-color:#FFDCAB")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img22.svg' alt='')
        p.text-center(style="color:#000000") Planificación de la ruta de escaneo, para así minimizar la cantidad de estos escaneos.
      
      .tarjeta.color-acento-botones.p-4(style="background-color:#FFDCAB")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img23.svg' alt='')
        p.text-center(style="color:#000000") Minimizar los errores.
        br
        br
      
      .tarjeta.color-acento-botones.p-4(style="background-color:#FFDCAB")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img24.svg' alt='')
        p.text-center(style="color:#000000") Acelerar el proceso.
        br
        br

    .row.justify-content-center.align-items-center.mb-3
      .col-xl-12
        ul.lista-ul--color.lista-ul
          li
            i.fas.fa-solid.fa-circle(style="color:#FF9500") 
            h3 Planificación y preparación de la distribución física de los puntos de escaneo
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img25.svg', alt='')
      .col-lg-10
        p(data-aos="fade-down").mb-4 La #[b planificación del trabajo] y un #[b archivo de control] es vital para cualquier proyecto en el proceso del escaneo 3D, para ello se requiere asegurar que haya un tiempo suficiente en la etapa que comprende a la investigación previa del sitio o lugar en que se hará el escaneo, ya que se debe saber si el objeto es grande, pequeño y además el reflejo de la luz en el sitio elegido para la realización del proceso, aspectos que darán un buen resultado, si se hace una buena planificación.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p(data-aos="fade-down") En esta etapa de planificación se definirá lo siguiente:

    TabsA.color-acento-contenido
      .tarjeta.color-adicional-1--borde.p-4(titulo="Cómo")        
        .row
          .col-xl-6
            div.p-3(style="background-color:#DAF1F7")
              p Se define cómo se captura la información del objeto a escanear.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img26.svg', alt='')
      .tarjeta.color-adicional-1--borde.p-4(titulo="Dónde")        
        .row
          .col-xl-6
            div.p-3(style="background-color:#DAF1F7")
              p Se identifica dónde se deberá colocar el escáner y los elementos necesarios para el proceso en el lugar, formando una estación de escaneo.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img26.svg', alt='')
      .tarjeta.color-adicional-1--borde.p-4(titulo="Grabar")        
        .row
          .col-xl-6
            div.p-3(style="background-color:#DAF1F7")
              p Se pueden grabar las ubicaciones del escaneo en el 
                em software 
                | del mismo de manera paulatina y revisar cómo se mueve a través de la zona a escanear para así saber cuáles son las zonas que ya están escaneadas del objeto.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img26.svg', alt='')
      .tarjeta.color-adicional-1--borde.p-4(titulo="Boceto")        
        .row
          .col-xl-6
            div.p-3(style="background-color:#DAF1F7")
              p Se puede realizar un boceto a mano para identificar los puntos de escaneo y esto dará una mayor precisión para trazar estos puntos y saber dónde están ubicados.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img26.svg', alt='')
      .tarjeta.color-adicional-1--borde.p-4(titulo="Personal")        
        .row
          .col-xl-6
            div.p-3(style="background-color:#DAF1F7")
              p También se debe tener en cuenta el personal asignado para planificar el sitio; esto es para saber qué escáner se debe utilizar, cómo es la luz, si se debe cambiar de lugar el objeto, por ello es importante que las personas que estén en el sitio en donde se escaneará tengan experiencia en el uso del equipo de escaneo 3D que se ha elegido. Por ejemplo, la creación de puntos de control de inspección del sitio debe requerir diferentes habilidades e insumos de equipos de escaneo 3D.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img26.svg', alt='')

    .row.justify-content-center.align-items-center.mb-3
      .col-xl-12
        ul.lista-ul--color.lista-ul
          li
            i.fas.fa-solid.fa-circle(style="color:#FF9500") 
            h3 Planificación de la ruta de escaneo, para así minimizar la cantidad de estos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p(data-aos="fade-down").mb-4 El objetivo de la planificación es asegurar que se pueda obtener una cobertura total de la zona u objeto a escanear, sin embargo, se intenta de igual manera minimizar la cantidad de escaneos que se deben realizar o que los que se hagan sean contundentes en la captura de las características morfológicas del espacio u objeto a escanear, todo ello para que este proceso sea más eficiente y además para reducir considerablemente la cantidad de tiempo en donde se realice el escaneo. Como consecuencia de esta planificación se acelera el #[b proceso de registro de las imágenes digitales] que resultan de este proceso de escaneo.
        p(data-aos="fade-down").mb-4 Existen varias características y factores para poder realizar una buena planificación de ruta de escaneo y así, minimizar la cantidad que se necesiten de estos. 
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img27.svg', alt='')      

    .bg--img_03
      .row.justify-content-center.mb-4
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img28.svg", alt="alt").img400.m-auto
        .col-lg-8
          AcordionA.mb-2.color-acento-botones(tipo="a" clase-tarjeta="tarjeta ca-ab")
            .row.justify-content-center.mb-4(titulo="Ambiente del lugar u objeto")
              .col-10
                p.mb-0 El escáner realiza mediciones dentro de la línea de visión, por ello un ambiente con muchas características como obstáculos difíciles de cubrir o pasillos pequeños requerirá muchos más escaneos.
            .row.justify-content-center.mb-4(titulo="Tamaño del lugar u objeto")
              .col-10
                p.mb-0 Dado el caso de que se requiera hacer un escaneo de un espacio muy grande o de un objeto o producto industrial robusto en su tamaño, esto demandará cubrir mucho espacio; al contrario de un espacio vacío o un objeto industrial de tamaño mediano.
            .row.justify-content-center.mb-4(titulo="Uso del resultado del escaneo")
              .col-10
                p.mb-0 Se deben considerar aspectos como la cantidad de detalles que tenga el objeto y lo que desea hacer con los escaneos propiamente dicho.
            .row.justify-content-center.mb-4(titulo="Referencias del lugar")
              .col-10
                p.mb-0 Si se desea escanear un sitio físico como una iglesia o un edificio, no hay nada más apropiado que visitarlo, sin embargo, si no es posible hacerlo, un conjunto de planos en 2D o fotos pueden ayudar.
            .row.justify-content-center.mb-4(titulo="Observación de objetos medianos y pequeños")
              .col-10
                p.mb-0 Para los proyectos u objetos pequeños se puede simplificar el trabajo con una inspección meramente visual.
            .row.justify-content-center.mb-4(titulo="<em>Softwares</em> auxiliares")
              .col-10
                p.mb-0 Para proyectos macro o complejos se debe emplear 
                  em software 
                  | de modelado, esto para que se puedan ayudar a identificar las ubicaciones donde el escaneo no pueda llegar, ya sea porque es una esquina o un detalle muy pequeño a donde el escáner no puede llegar.
            .row.justify-content-center.mb-4(titulo="Superposición para unión")
              .col-10
                p.mb-0 Depende del #[i software] que se utilice y de la complejidad de la morfología del objeto o espacio del entorno que esté escaneando se necesitará una superposición del 30 % al 50 % para unir con precisión los escaneos para que así de una buena imagen resultante.          

    .row.justify-content-center.align-items-center.mb-3
      .col-xl-12
        ul.lista-ul--color.lista-ul
          li
            i.fas.fa-solid.fa-circle(style="color:#FF9500") 
            h3 Minimizar los errores
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img29.svg', alt='')
      .col-lg-10
        p(data-aos="fade-down").mb-4 La combinación de múltiples escaneos en 3D puede llegar a producir errores por propagación; esto sucede cuando se hacen varios escaneos de un objeto o en una misma zona. Estas son entonces limitaciones que vienen por defecto del escáner; sin embargo, se pueden tener en cuenta algunos puntos para minimizar este tipo de error.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        TabsC.color-acento-contenido.mb-5
          .py-3.py-md-4(titulo="Experiencia en minimizar la cantidad en el proceso")
            .row        
              .col-md-12.mb-4.mb-md-0
                p Para una nube de puntos (compuesta) los escaneos se construyen o se fabrican uno detrás de otro en una secuencia a partir de un escaneo inicial; es decir, cuantos más pasos se den desde el escaneo inicial, mayor será el error. Lo anterior se puede minimizar; sin embargo, por la naturaleza del trabajo o proceso de escaneado 3D este no se puede eliminar.
          .py-3.py-md-4(titulo="Planificación de lugar")
            .row
              .col-md-12
                p Un paso vital en la planificación del lugar es poder dar cuenta del número total de escaneos que se requieren para obtener una buena cobertura de la zona; cuando esto se realiza de manera errónea tiende a crear errores de propagación pues no se pueden manejar los parámetros de precisión de las especificaciones en el escaneo.
          .py-3.py-md-4(titulo="Analizar la cantidad de escaneos")
            .row
              .col-md-12
                p Este es un paso crítico en el proceso de la creación de una nube de puntos, para poder encontrar precisión se deben conocer o evaluar muy bien la cantidad de escaneos necesarios, esto para tomar la imagen más acertada de manera final. Es por esto por lo que siempre se debe asegurar la precisión que se necesita en un proyecto; es decir, de lo que se requiere proyectar.
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img30.svg', alt='')    

    .row.justify-content-center.align-items-center.mb-3
      .col-xl-12
        ul.lista-ul--color.lista-ul
          li
            i.fas.fa-solid.fa-circle(style="color:#FF9500") 
            h3 Acelerar el proceso
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-down") Es importante tratar de usar y revisar algunos puntos para acelerar los procesos en el escaneo, estos son algunos de ellos:

    TabsA.color-acento-contenido
      .tarjeta.color-adicional-1--borde.p-4(titulo="Tiempo de ejecución")        
        .row
          .col-xl-6
            div.p-3(style="background-color:#DAF1F7")
              p Uno de los mayores ahorros que se deben tener en estos procesos a nivel de escaneo 3d es el tiempo de ejecución.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img31.svg', alt='')
      .tarjeta.color-adicional-1--borde.p-4(titulo="Alineación")        
        .row
          .col-xl-6
            div.p-3(style="background-color:#DAF1F7")
              p También se debe tener en cuenta si hay una alineación de nube a nube deficiente; es decir, si se está escaneado uno sobre otro en las zonas.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img31.svg', alt='')
      .tarjeta.color-adicional-1--borde.p-4(titulo="Superposición de escaneo")        
        .row
          .col-xl-6
            div.p-3(style="background-color:#DAF1F7")
              p Revisar si necesita una superposición mayor o con más cantidad, esto para garantizar un buen registro y así evitar pérdida de tiempo.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img31.svg', alt='')
      .tarjeta.color-adicional-1--borde.p-4(titulo="Múltiple escaneo")        
        .row
          .col-xl-6
            div.p-3(style="background-color:#DAF1F7")
              p En el procesamiento se pueden crear múltiples escaneos de zona, es decir del mismo punto o lugar que se ha escaneado; este proceso constituye los árboles de escaneo, que pueden ser tan grandes como sea necesario para los requisitos de precisión. Lo anterior se construye con base en lo que se requiere en el trabajo y las características del objeto a escanear o del espacio, con ello se reducen más los errores de propagación que se mencionaron anteriormente.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img31.svg', alt='')
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-down") Lo anterior brinda la capacidad de reducir la cantidad de imágenes para luego procesarlas de manera eficaz.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-izq.mb-5(data-aos="zoom-in")
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img.d-flex.align-items-center
              img(src='@/assets/curso/temas/tema1/img32.svg', alt='')
            .bloque-texto-g__texto--border.p-2.d-inline-block
              .bloque-texto-g__texto.p-4
                h3 Conclusiones de una buena planificación
                br
                p El escaneo 3D por su precisión es confiable; tiene buena velocidad y facilidad en uso por ser intuitivo, es por esto por lo que se vuelve ideal para hacer escaneo o medir lugares y/ó objetos diversos. Sin embargo, a pesar de esta confianza, no se debe descuidar una buena planificación y preparación para el proceso.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
