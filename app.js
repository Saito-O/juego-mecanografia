const input = document.getElementById("input");
const contenedor = document.getElementById("palabras");
let fraseActual = "";
let porcentajeDeAcierto = 100;
//Lista de frases de palabras
const palabras = [
    "Aprende mecanografia para poder seguir avanzando en el mundo.",
    "La mecanografia ayuda a mejorar la circulacion de la sangre.",
    "La mecanografia colabora con el procesamiento de mejor trabajo.","La mecanografía no solo trata de escribir rápido, sino de pensar con claridad mientras tus manos siguen el ritmo de tus ideas.",
    "Cuando practicas mecanografía a diario, notas cómo tus pensamientos fluyen más fácilmente hacia la pantalla sin interrupciones.",
    "Cada tecla presionada con intención te acerca un paso más a dominar la comunicación escrita en el mundo digital.",
    "Aprender mecanografía no es un lujo, es una herramienta esencial para cualquier persona que use la tecnología como medio de trabajo.",
    "La velocidad llega con el tiempo, pero la precisión es lo que realmente construye una base sólida en la mecanografía.",
    "Un buen mecanógrafo no es el que más rápido escribe, sino el que menos errores comete y mantiene el control del texto.",
    "Practicar con constancia transforma la mecanografía en un acto natural, casi automático, donde la mente se libera para pensar.",
    "Cada sesión de práctica mejora tu coordinación entre la mente, los ojos y las manos, creando un flujo perfecto de escritura.",
    "La mecanografía moderna combina disciplina, técnica y paciencia, tres virtudes que todo programador necesita.",
    "Escribir bien no es cuestión de suerte, sino de entrenamiento consciente y enfoque en cada palabra.",
    "La práctica diaria con textos variados fortalece tanto tu velocidad como tu comprensión de las estructuras del lenguaje.",
    "En la mecanografía, la repetición no es aburrida, es la base de la maestría y la confianza al escribir.",
    "Cuando logras escribir sin mirar el teclado, alcanzas una conexión directa entre pensamiento y palabra escrita.",
    "El verdadero progreso en mecanografía no se mide solo en palabras por minuto, sino en la calidad de lo que escribes.",
    "Una buena técnica de escritura mejora tu postura, tu concentración y hasta tu productividad general frente al computador.",
    "En el mundo digital actual, escribir con precisión y rapidez es tan valioso como hablar con claridad en público.",
    "Cada práctica de mecanografía te entrena para pensar más rápido y reaccionar con más agilidad mental.",
    "La mecanografía es una forma de meditación activa donde el sonido de las teclas reemplaza el silencio del pensamiento.",
    "Un buen ritmo al escribir te da fluidez y confianza, como si tus ideas corrieran directamente a la pantalla.",
    "Dominar la mecanografía te permite enfocarte en las ideas, no en las teclas, y eso multiplica tu creatividad.",
    "Los errores son inevitables, pero aprender a corregirlos rápido es lo que te convierte en un verdadero mecanógrafo.",
    "Cuanto más escribes, más entiendes que la mecanografía no es fuerza, sino ritmo, paciencia y memoria.",
    "El teclado puede parecer un obstáculo al principio, pero con práctica se convierte en una extensión natural de tus manos.",
    "Cada palabra escrita correctamente es un paso más hacia la excelencia en la comunicación digital.",
    "El éxito en la mecanografía no está en correr, sino en mantener la precisión incluso bajo presión.",
    "Tu progreso depende más de la constancia que del talento; la práctica diaria siempre supera la improvisación.",
    "Cuando escribes con concentración, tus manos aprenden a seguir tus pensamientos sin necesidad de mirar las teclas.",
    "Dominar la mecanografía es como tocar un instrumento: necesitas ritmo, práctica y sensibilidad para hacerlo bien.",
    "La mecanografía te enseña disciplina, enfoque y paciencia, cualidades que se reflejan en todas las áreas de tu vida.",
    "Cada sesión de práctica fortalece tus dedos, tu mente y tu capacidad de concentración.",
    "Una persona que domina la mecanografía puede trabajar más rápido, aprender mejor y comunicarse con más eficiencia.",
    "La mecanografía no solo mejora tu escritura, también mejora tu pensamiento lógico y tu estructura mental.",
    "Cuando escribes sin mirar, tu cerebro trabaja en modo automático y libera espacio para la creatividad.",
    "El hábito de escribir correctamente te ayuda a mantener la calma incluso en tareas repetitivas o exigentes.",
    "Practicar mecanografía con textos reales es la mejor forma de desarrollar una velocidad natural y útil.",
    "Un teclado bien dominado es como una herramienta afinada: responde justo como tú lo imaginas.",
    "Al escribir con fluidez, tus ideas se traducen en palabras con menos esfuerzo y más precisión.",
    "La mecanografía combina la técnica del cuerpo con la velocidad del pensamiento, un equilibrio poderoso.",
    "Cada error corregido en una práctica de mecanografía es una lección que fortalece tu precisión futura.",
    "El dominio de la mecanografía es una señal de disciplina y profesionalismo en cualquier campo laboral.",
    "Una práctica corta pero constante vale más que una larga sesión sin enfoque ni atención.",
    "La mecanografía te ayuda a pensar en estructuras, frases y ritmos, lo que mejora tu escritura en general.",
    "Aprender a escribir sin mirar el teclado es como aprender a conducir sin miedo: libertad total sobre tus movimientos.",
    "Cada minuto que inviertes en mecanografía te devuelve horas de productividad a lo largo de tu vida.",
    "Los mejores programadores, escritores y estudiantes tienen una cosa en común: dominan su teclado a la perfección.",
    "Cuando alcanzas velocidad y precisión, escribir se convierte en un placer, no en una tarea tediosa.",
    "La mecanografía te entrena para actuar sin pensar demasiado, dejando que tu cuerpo y tu mente trabajen en armonía.",
    "La sensación de fluidez al escribir sin errores es una recompensa que motiva a seguir practicando.",
    "Dominar la mecanografía no es cuestión de talento, sino de dedicación constante y buenos hábitos de práctica.",
    "El verdadero reto no es escribir más rápido, sino escribir mejor cada día que practicas."
];
    function seleccionarTexto(){
        let fraseSeleccionada = Math.floor(Math.random()*palabras.length);
        let texto = palabras[fraseSeleccionada];
        return texto;
    }
    //Funcion echa para elegir entre frases dentro de la lista.
    function longitudDeTexto(){
        let palabra = seleccionarTexto();
        const contarLetras = palabra.length;
        return contarLetras;
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
function separarLetraPorLetra() {
    let texto = seleccionarTexto(); // elegimos una frase aleatoria
    let letras = texto.split("");   // la dividimos en cada letra
    return letras;
    console.log(letras)
}

function formatearTexto() {
    let letras = separarLetraPorLetra();
    let contenedor = document.getElementById("palabras");
    contenedor.innerHTML = ""; // limpiamos el contenido anterior
    letras.forEach((letra) => {
        const span = document.createElement("span");
        span.classList.add("letra");
        span.textContent = letra; // asignamos la letra
        contenedor.appendChild(span);
    });
}

function letrasSinAdivinar(){
    let letras = document.getElementById("palabras");
    letras.setAttribute("style", "color: gray;")
}

function nuevoJuegoBoton(){
    seleccionarTexto();
    longitudDeTexto();
    formatearTexto();
}

function compararTexto(){
    input
}

function nuevoJuego(){
    fraseActual =  seleccionarTexto();
    formatearTexto(fraseActual);
    letrasSinAdivinar();
    nuevoJuegoBoton();
}

nuevoJuego();