var preguntas = [

{
pregunta: "¿Qué tratamiento térmico se aplica después del temple?",
opciones: [
"Revenido",
"Recocido",
"Cementación"
],
correcta: 0
},

{
pregunta: "¿Para qué sirve el revenido?",
opciones: [
"Reducir la fragilidad del acero",
"Aumentar la corrosión",
"Fundir el acero"
],
correcta: 0
},

{
pregunta: "El revenido se aplica a un acero:",
opciones: [
"Ya templado",
"En estado líquido",
"Frío sin tratar"
],
correcta: 0
},

{
pregunta: "El revenido consiste en:",
opciones: [
"Calentar el acero templado a menor temperatura",
"Derretir el acero",
"Enfriar lentamente en el horno"
],
correcta: 0
},

{
pregunta: "¿Qué propiedad mejora con el revenido?",
opciones: [
"Tenacidad",
"Fragilidad",
"Oxidación"
],
correcta: 0
},

{
pregunta: "Temperatura aproximada del revenido:",
opciones: [
"150°C a 650°C",
"1000°C a 1200°C",
"2000°C"
],
correcta: 0
},

{
pregunta: "El revenido ayuda a:",
opciones: [
"Eliminar tensiones internas",
"Aumentar grietas",
"Fundir el acero"
],
correcta: 0
},

{
pregunta: "¿Qué tipo de revenido mejora la elasticidad?",
opciones: [
"Revenido medio",
"Revenido bajo",
"Temple"
],
correcta: 0
},

{
pregunta: "El revenido bajo se usa cuando se quiere:",
opciones: [
"Conservar mucha dureza",
"Fundir el acero",
"Eliminar carbono"
],
correcta: 0
},

{
pregunta: "El revenido permite lograr:",
opciones: [
"Equilibrio entre dureza y tenacidad",
"Solo fragilidad",
"Solo corrosión"
],
correcta: 0
}

];
var indice = 0;

/* CARGAR JUGADOR */
let jugador = JSON.parse(localStorage.getItem("jugador"));

/* ELEMENTOS */
var empezar = document.getElementById("empezar");
var resumen = document.getElementById("act5");

var preguntaHTML = document.getElementById("act2");
var opcionesHTML = document.getElementById("act3");

var mensaje = document.getElementById("mensaje");
var progreso = document.getElementById("progreso");
var xpHTML = document.getElementById("xp");

/* HUD */
var vidasHTML = document.getElementById("vidas"); // ID donde se mostrarán los corazones
var barraXP = document.getElementById("barraXP");
var nivelHTML = document.getElementById("nivel");
var claseHTML = document.getElementById("clase");

/* MOSTRAR HUD */
function actualizarHUD(){

let corazonesLlenos = Math.floor(jugador.vida / 20);

let texto = "";

for(let i=0;i<5;i++){

if(i < corazonesLlenos){
texto += "❤️";
}else{
texto += "🤍";
}

}

vidasHTML.innerHTML = texto;

/* BARRA XP */

barraXP.style.width = jugador.xp + "%";

/* NIVEL Y CLASE */

nivelHTML.innerHTML = jugador.nivel;

claseHTML.innerHTML = jugador.clase;

}
/* INICIAR */
actualizarHUD();

/* INICIAR MISIÓN */
empezar.onclick = function () {
    resumen.style.display = "none";
    mostrarPregunta();
}

/* MOSTRAR PREGUNTA */
function mostrarPregunta() {
    if (indice >= preguntas.length) {
        preguntaHTML.innerHTML = "⭐ MISIÓN COMPLETADA";
        opcionesHTML.innerHTML = "";
        mensaje.innerHTML = "";
        xpHTML.innerHTML = "XP TOTAL: " + jugador.xp;
        // Guardar jugador al finalizar
        localStorage.setItem("jugador", JSON.stringify(jugador));
        return;
    }

    var actual = preguntas[indice];
    preguntaHTML.innerHTML = actual.pregunta;
    progreso.innerHTML = "Pregunta " + (indice + 1) + " / " + preguntas.length;
    opcionesHTML.innerHTML = "";

    for (var i = 0; i < actual.opciones.length; i++) {
        var boton = document.createElement("button");
        boton.innerHTML = actual.opciones[i];
        boton.className = "opcion";
        boton.onclick = function () {
            verificarRespuesta(this);
        };
        opcionesHTML.appendChild(boton);
    }
}

/* VERIFICAR RESPUESTA */
function verificarRespuesta(boton) {
    var actual = preguntas[indice];
    var respuesta = boton.innerHTML;

    if (respuesta == actual.opciones[actual.correcta]) {
        boton.classList.add("correcta");
        mensaje.innerHTML = "✔ Correcto +10 XP";
        jugador.xp += 10;

        // Subir nivel si llega a 100 XP
        if (jugador.xp >= 100) {
            jugador.nivel++;
            jugador.xp = 0;
            jugador = actualizarClase(jugador);
            mensaje.innerHTML = "🎉 SUBISTE DE NIVEL | Nueva clase: " + jugador.clase;
        }
    } else {
        boton.classList.add("incorrecta");
        mensaje.innerHTML = "❌ Incorrecto";
        // Restar vida
        jugador.vida -= 5;
        if (jugador.vida < 0) jugador.vida = 0;
    }

    // Actualizar HUD siempre
    actualizarHUD();

    // Guardar jugador
    localStorage.setItem("jugador", JSON.stringify(jugador));

    // Continuar al siguiente paso
    setTimeout(function () {
        indice++;
        mostrarPregunta();
        mensaje.innerHTML = "";
    }, 1000);
}