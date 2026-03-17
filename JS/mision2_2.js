var preguntas = [

{
pregunta:"Los tratamientos termoquímicos modifican la composición química de la superficie del acero.",
correcta:true
},

{
pregunta:"La cementación consiste en introducir carbono en la superficie del acero.",
correcta:true
},

{
pregunta:"La cementación se realiza a bajas temperaturas menores a 200°C.",
correcta:false
},

{
pregunta:"La nitruración introduce nitrógeno en la superficie del acero.",
correcta:true
},

{
pregunta:"La nitruración gaseosa utiliza amoníaco como fuente de nitrógeno.",
correcta:true
},

{
pregunta:"La nitruración aumenta la resistencia al desgaste y la dureza superficial.",
correcta:true
},

{
pregunta:"La carbonitruración introduce carbono y nitrógeno en el acero.",
correcta:true
},

{
pregunta:"La carbonitruración se usa principalmente para metales no ferrosos.",
correcta:false
},

{
pregunta:"La cianuración utiliza sales con cianuro para endurecer la superficie.",
correcta:true
},

{
pregunta:"La cianuración se realiza generalmente a temperaturas bajas menores de 200°C.",
correcta:false
},

{
pregunta:"La sulfinización introduce azufre en la superficie del metal.",
correcta:true
},

{
pregunta:"La sulfinización mejora la lubricación y reduce la fricción.",
correcta:true
},

{
pregunta:"El boronizado introduce boro en la superficie del acero.",
correcta:true
},

{
pregunta:"El boronizado aumenta mucho la resistencia al desgaste.",
correcta:true
},

{
pregunta:"Los tratamientos termoquímicos modifican todo el interior del metal.",
correcta:false
}

];

var indice = 0;

/* CARGAR JUGADOR */

let jugador = JSON.parse(localStorage.getItem("jugador"));

/* ELEMENTOS HTML */

var preguntaHTML = document.getElementById("pregunta");
var progreso = document.getElementById("progreso");
var mensaje = document.getElementById("mensaje");
var xpHTML = document.getElementById("xp");

var botonV = document.getElementById("verdadero");
var botonF = document.getElementById("falso");

/* PANEL JUGADOR */

var corazones = document.getElementById("vidaCorazones");
var xpBarra = document.getElementById("xpBarra");
var xpTexto = document.getElementById("xpTexto");
var nivelHTML = document.getElementById("nivel");
var claseHTML = document.getElementById("clase");


/* MOSTRAR VIDA */

function mostrarVida(){

let corazonesLlenos = Math.floor(jugador.vida / 20);

let texto = "";

for(let i=0;i<5;i++){

if(i < corazonesLlenos){
texto += "❤️";
}else{
texto += "🤍";
}

}

corazones.innerHTML = texto;

}


/* MOSTRAR XP */

function mostrarXP(){

xpTexto.innerHTML = jugador.xp + " / 100";

xpBarra.style.width = jugador.xp + "%";

nivelHTML.innerHTML = jugador.nivel;

claseHTML.innerHTML = jugador.clase;

}


/* MOSTRAR PREGUNTA */

function mostrarPregunta(){

if(indice >= preguntas.length){

preguntaHTML.innerHTML="⭐ MISIÓN COMPLETADA";

mensaje.innerHTML="";
progreso.innerHTML="";

xpHTML.innerHTML="XP TOTAL: "+jugador.xp;

botonV.style.display="none";
botonF.style.display="none";

/* GUARDAR */

localStorage.setItem("jugador", JSON.stringify(jugador));

return;

}

preguntaHTML.innerHTML = preguntas[indice].pregunta;

progreso.innerHTML = "Pregunta "+(indice+1)+" / "+preguntas.length;

mensaje.innerHTML="";

}


/* VERIFICAR RESPUESTA */

function verificar(respuesta){

var correcta = preguntas[indice].correcta;

if(respuesta == correcta){

mensaje.innerHTML="✔ Correcto +10 XP";

/* SUMAR XP */

jugador.xp +=10;

/* SUBIR NIVEL */

if(jugador.xp >= 100){

jugador.nivel++;
jugador.xp = 0;

/* ACTUALIZAR CLASE */

jugador = actualizarClase(jugador);

mensaje.innerHTML="🎉 SUBISTE DE NIVEL | Nueva clase: "+jugador.clase;

}

mostrarXP();

}else{

mensaje.innerHTML="❌ Incorrecto -5 vida";

/* QUITAR VIDA */

jugador.vida -=5;

if(jugador.vida < 0){
jugador.vida = 0;
}

mostrarVida();

/* SI MUERE */

if(jugador.vida == 0){

mensaje.innerHTML="💀 Has muerto. XP reiniciada";

jugador.xp = 0;
jugador.vida = 100;

localStorage.setItem("jugador", JSON.stringify(jugador));

mostrarVida();
mostrarXP();

setTimeout(function(){
location.reload();
},2000);

return;

}

}

/* GUARDAR */

localStorage.setItem("jugador", JSON.stringify(jugador));

setTimeout(function(){

indice++;
mostrarPregunta();

mensaje.innerHTML="";

},1000);

}


/* BOTONES */

botonV.onclick = function(){

verificar(true);

}

botonF.onclick = function(){

verificar(false);

}


/* INICIAR */

mostrarVida();
mostrarXP();
mostrarPregunta();