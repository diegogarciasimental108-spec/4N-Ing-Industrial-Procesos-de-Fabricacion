var videos = [

  {
    titulo:"Video 1: Tratamientos termoquímicos - Introducción",
    link:"https://www.youtube.com/watch?v=G_4nfx56ym0"
  },

  {
    titulo:"Video 2: Tratamientos termoquímicos - Conceptos",
    link:"https://www.youtube.com/watch?v=72V_PxU-qVc"
  },

  {
    titulo:"Video 3: Tratamientos termoquímicos de Cementación",
    link:"https://www.youtube.com/watch?v=IyL3AJ4RYDI"
  },

  {
    titulo:"Video 4: Tratamientos termoquímicos - Aplicaciones",
    link:"https://www.youtube.com/watch?v=mjD68KxEJRI"
  },

 

  {
    titulo:"Video 5: Tratamientos termicos y termoquímicos",
    link:"https://www.youtube.com/watch?v=Fdn3oNcel-E"
  }

];

var indice = 0;
var xp = 0;

var titulo = document.getElementById("tituloVideo");
var linkVideo = document.getElementById("linkVideo");
var progreso = document.getElementById("progreso");
var xpHTML = document.getElementById("xp");

var boton = document.getElementById("visto");
var botonAnterior = document.getElementById("anterior");

function cargarVideo() {

  if(indice >= videos.length){

    titulo.innerHTML="⭐ MISIÓN COMPLETADA";
    linkVideo.style.display="none";
    boton.style.display="none";
    botonAnterior.style.display="none";
    progreso.innerHTML="";
    xpHTML.innerHTML="XP TOTAL: "+xp;

    return;

  }

  titulo.innerHTML = videos[indice].titulo;

  linkVideo.href = videos[indice].link;

  progreso.innerHTML = "Video "+(indice+1)+" / "+videos.length;

  xpHTML.innerHTML = "XP: "+xp;

}

boton.onclick = function(){

  xp += 10;
  indice++;

  cargarVideo();

}

botonAnterior.onclick = function(){

  if(indice > 0){

    indice--;
    xp -= 10;

    if(xp < 0){
      xp = 0;
    }

    cargarVideo();

  }

}

cargarVideo();
