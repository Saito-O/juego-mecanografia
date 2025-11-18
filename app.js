
const input = document.querySelector("#input input");
const contenedor = document.getElementById("palabras");
const info = document.getElementById("info");
const botonNuevo = document.getElementById("nuevo-juego");
let fraseActual = "";
let letrasSpans = [];
let correctas = 0;
let escritas = 0;


const palabras = [
    "La mecanografía acelera tu pensamiento porque no te detienes a buscar teclas.",
    "Escribir sin mirar el teclado te da libertad para concentrarte en las ideas.",
    "Cada dedo tiene su propia misión y tu cerebro aprende a confiar en ellos.",
    "La postura correcta evita dolores y aumenta tu velocidad con el tiempo.",
    "Escribir rápido sirve de poco si no escribes con precisión.",
    "La constancia vence siempre a la motivación del primer día.",
    "La rapidez llega sola cuando dominas la técnica base.",
    "Es mejor cometer pocos errores que correr sin control sobre el teclado.",
    "Un buen mecanógrafo mantiene la calma incluso cuando comete un error.",
    "Tus dedos deben aprender un camino fijo para cada tecla.",
    "La práctica diaria transforma la mecanografía en un acto natural.",
    "Escribir bien ahorra tiempo, evita frustración y mejora tu trabajo.",
    "La precisión es la reina absoluta de la mecanografía.",
    "El teclado es una herramienta, pero tu cerebro es quien escribe.",
    "La velocidad solo aparece cuando tu mente deja de pensar en las teclas.",
    "La memoria muscular se construye con repetición, no con prisa.",
    "Las manos rápidas son inútiles si tu mente va más lento.",
    "Lo importante es aprender a escribir limpio, sin tachones digitales.",
    "Mecanografiar mejora la fluidez de tus ideas y tu expresión escrita.",
    "Cada error corregido es un paso más hacia una técnica sólida.",
    "En la mecanografía no existe la suerte, solo disciplina.",
    "No te compares con otros; compite contigo mismo cada día.",
    "Escribir bien es una herramienta esencial para cualquier carrera.",
    "Cuando tus dedos automatizan la escritura, tu mente se vuelve libre.",
    "La técnica correcta te hace escribir con menos esfuerzo.",
    "La suavidad de tus movimientos es clave para mejorar.",
    "La mecanografía convierte tus pensamientos en texto sin interrupciones.",
    "No importa la velocidad inicial, importa cuánto practiques.",
    "El teclado QWERTY está diseñado para usarse sin mirar.",
    "La precisión siempre debe ir por delante de la velocidad.",
    "Mecanografiar rápido sin errores es como bailar sin pisar a tu pareja.",
    "Toma descansos cortos para evitar tensión en las manos.",
    "El progreso real viene cuando escribes incluso sin ganas.",
    "La mente clara produce escritura clara, incluso a gran velocidad.",
    "Los dedos ágiles hacen que todo tu día sea más eficiente.",
    "La mecanografía te ayuda a pensar más rápido y más ordenado.",
    "La práctica diaria crea el hábito, el hábito crea el dominio.",
    "No subestimes el poder de veinte minutos de práctica al día.",
    "La buena postura es tu aliada para sesiones largas de mecanografía.",
    "Cuando dominas la técnica, escribir se vuelve un arte silencioso.",
    "Piensa en lo que escribes, no en qué dedo lo escribe.",
    "La mecanografía es una inversión en tu tiempo y en tu futuro.",
    "Mantén tus manos relajadas para reducir errores involuntarios.",
    "Tu mayor competencia es el tú del día anterior.",
    "Escribir con fluidez mejora todos tus trabajos digitales.",
    "La técnica correcta nunca te abandona una vez aprendida.",
    "La precisión constante te hace un mejor comunicador.",
    "Los errores enseñan más que los aciertos en la mecanografía.",
    "Cada tecla presionada correctamente es una victoria en silencio.",
    "La mecanografía no es un reto de velocidad, es un ejercicio de control."

];


function seleccionarTexto() {
    return palabras[Math.floor(Math.random() * palabras.length)];
}

//No se usa en el codigo, dejar en caso de ser requerido mas adelante
/*
function colocarFrase(){
    let contenedorFrase = document.getElementById('palabras').innerHTML = seleccionarTexto();
    return contenedorFrase;
}
*/

//Separaremos el texto para poder escoger letra por letra y colocarle en sombreado antes de que escriba.
/*function separarPalabraPorPalabra(){
    let textoASeparar = colocarFrase();
    let textoSeparado = [];
    let palabra = "";
    for (let i = 0; i <= textoASeparar.length; i++){
        if(textoASeparar[i] === " "){
            if(palabra !== ""){
                textoSeparado.push(palabra);
                palabra = "";
            }
        }
        else{
            palabra +=textoASeparar[i];
        }
    }
    return textoSeparado;

*/ //Se logro identificar que en esta parte no era necesaria por que se podia separar por split desde el texto


function formatearTexto(texto) {
    contenedor.innerHTML = "";
    letrasSpans = [];

    texto.split("").forEach(letra => {
        const span = document.createElement("span");
        span.classList.add("letra");
        span.style.color = "gray";
        span.textContent = letra;
        contenedor.appendChild(span);
        letrasSpans.push(span);
    });
}
function actualizarPorcentaje() {
    if (escritas === 0) {
        info.textContent = "100%";
        return;
    }

    const porcentaje = Math.round((correctas / escritas) * 100);
    info.textContent = porcentaje + "%";
}


function nuevoJuego() {
    fraseActual = seleccionarTexto();
    formatearTexto(fraseActual);
    input.value = "";
    input.focus(); 
    correctas = 0;
    escritas = 0;
    actualizarPorcentaje();
}

input.addEventListener("input", () => {
    const textoUsuario = input.value;

    correctas = 0;
    escritas = textoUsuario.length;

    for (let i = 0; i < letrasSpans.length; i++) {
        const span = letrasSpans[i];
        const letraCorrecta = fraseActual[i];
        const letraUsuario = textoUsuario[i];

        if (letraUsuario == null) {
            span.style.color = "gray";
        } else if (letraUsuario === letraCorrecta) {
            span.style.color = "lime";
            correctas++;
        } else {
            span.style.color = "red";
        }
    }

    actualizarPorcentaje();
});

botonNuevo.addEventListener("click", nuevoJuego);// Puerto de escucha del boton para reiniciar


nuevoJuego();




