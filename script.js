/*==================================================
                PROYECTO
            LAS TRES CARTAS
==================================================*/

/*==================================================
                TEXTOS
==================================================*/

const bienvenida = {

    titulo: "Hola, Vale 🌸",

    mensaje:
`Si llegaste hasta aquí...

significa que abriste las tres cartas.

Gracias por dedicarme un pedacito de tu tiempo.

Quise que este puente tuviera un pequeño detalle esperándote.`

};


/*==================================================
                REFERENCIAS
==================================================*/

// Escenas

const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const scene3 = document.getElementById("scene3");
const scene4 = document.getElementById("scene4");
const scene5 = document.getElementById("scene5");


// Bienvenida

const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");
const btn = document.getElementById("btn");


// Sobre

const envelope = document.querySelector(".envelope");
const flap = document.querySelector(".flap");
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const shadow = document.querySelector(".shadow");
const miniLetter = document.querySelector(".letter-mini");


// Carta

const letterTitle = document.getElementById("letterTitle");
const letterText = document.getElementById("letterText");
const continueBtn = document.getElementById("continueBtn");


// Pista

const hintTitle = document.getElementById("hintTitle");
const hintText = document.getElementById("hintText");
const gameBtn = document.getElementById("gameBtn");


// Final

const finalTitle = document.getElementById("finalTitle");
const finalMessage = document.getElementById("finalMessage");


/*==================================================
                VARIABLES
==================================================*/

let indiceTitulo = 0;
let indiceTexto = 0;

let sobreAbierto = false;

/*==================================================
                FASE 1
            BIENVENIDA
==================================================*/

window.addEventListener("load",()=>{

    escribirTitulo();

});


/*==================================================
            ESCRIBIR TÍTULO
==================================================*/

function escribirTitulo(){

    if(indiceTitulo < bienvenida.titulo.length){

        titulo.innerHTML += bienvenida.titulo.charAt(indiceTitulo);

        indiceTitulo++;

        setTimeout(escribirTitulo,90);

    }

    else{

        setTimeout(escribirMensaje,600);

    }

}


/*==================================================
            ESCRIBIR MENSAJE
==================================================*/

function escribirMensaje(){

    if(indiceTexto < bienvenida.mensaje.length){

        const letra = bienvenida.mensaje.charAt(indiceTexto);

        if(letra === "\n"){

            texto.innerHTML += "<br>";

        }

        else{

            texto.innerHTML += letra;

        }

        indiceTexto++;

        setTimeout(escribirMensaje,35);

    }

    else{

        mostrarBoton();

    }

}


/*==================================================
            MOSTRAR BOTÓN
==================================================*/

function mostrarBoton(){

    gsap.to(btn,{

        opacity:1,

        duration:.8,

        ease:"power2.out",

        onComplete:()=>{

            btn.style.pointerEvents="auto";

        }

    });

}


/*==================================================
            IR AL SOBRE
==================================================*/

btn.addEventListener("click",()=>{

    cambiarEscena(scene1,scene2);

});
/*==================================================
                FASE 2
                EL SOBRE
==================================================*/

envelope.addEventListener("click",abrirSobre);

function abrirSobre(){

    if(sobreAbierto) return;

    sobreAbierto = true;

    envelope.style.pointerEvents="none";

    const tl = gsap.timeline();

    // Abrir la tapa

    tl.to(flap,{

        rotationX:180,

        duration:.9,

        ease:"power2.inOut"

    });

    // La carta asoma

    tl.to(miniLetter,{

        y:-55,

        duration:.8,

        ease:"power2.out"

    },"-=0.15");

    // Espera un momento

    tl.to({},{

        duration:.35

    });

    // Sale completamente

    tl.to(miniLetter,{

        y:-230,

        duration:1,

        ease:"power3.out"

    });

    // Pequeño rebote

    tl.to(miniLetter,{

        scale:1.02,

        duration:.20,

        yoyo:true,

        repeat:1

    });

    // El sobre desaparece

    tl.to(

        [front,back,flap,shadow],

        {

            opacity:0,

            duration:.6,

            ease:"power2.out"

        }

    );

    // Espera

    tl.to({},{

        duration:.4

    });

    // Cambia de escena

    tl.call(()=>{

        cambiarEscena(scene2,scene3);

        iniciarCarta();

    });

}
/*==================================================
                FASE 3
                CARTA
==================================================*/

const carta = {

titulo:"La cuarta carta 🌸",

texto:

`Si estás leyendo esto...

significa que las tres cartas llegaron a su destino.

Durante este puente no podía hacer mucho para acompañarte...

pero sí podía dejarte una pequeña sorpresa.

Por eso esta no es una carta cualquiera.

Es la cuarta.

La única que no podía escribir sobre papel.

Quería que hicieras un pequeño recorrido.

Que cada paso te llevara al siguiente.

Y que, al final, descubrieras algo que estuvo escondido desde el principio.

Porque las cosas bonitas...

a veces se disfrutan más cuando se descubren poco a poco.

Y todavía queda un último paso.

¿Me acompañas? ❤️`

};

let indiceCartaTitulo=0;

let indiceCartaTexto=0;


/*==================================================
            INICIAR CARTA
==================================================*/

function iniciarCarta(){

    letterTitle.innerHTML="";

    letterText.innerHTML="";

    continueBtn.style.opacity=0;

    continueBtn.style.pointerEvents="none";

    indiceCartaTitulo=0;

    indiceCartaTexto=0;

    escribirTituloCarta();

}


/*==================================================
            TÍTULO
==================================================*/

function escribirTituloCarta(){

    if(indiceCartaTitulo<carta.titulo.length){

        letterTitle.innerHTML+=carta.titulo.charAt(indiceCartaTitulo);

        indiceCartaTitulo++;

        setTimeout(escribirTituloCarta,80);

    }

    else{

        setTimeout(escribirTextoCarta,500);

    }

}


/*==================================================
            TEXTO
==================================================*/

function escribirTextoCarta(){

    if(indiceCartaTexto<carta.texto.length){

        const letra=carta.texto.charAt(indiceCartaTexto);

        if(letra=="\n"){

            letterText.innerHTML+="<br>";

        }

        else{

            letterText.innerHTML+=letra;

        }

        indiceCartaTexto++;

        setTimeout(escribirTextoCarta,28);

    }

    else{

        gsap.to(continueBtn,{

            opacity:1,

            duration:.8,

            onComplete:()=>{

                continueBtn.style.pointerEvents="auto";

            }

        });

    }

}


/*==================================================
        CONTINUAR
==================================================*/

continueBtn.addEventListener("click",()=>{

    cambiarEscena(scene3,scene4);

    iniciarPista();

});
/*==================================================
                FASE 4
                LA PISTA
==================================================*/

const pista={

titulo:"Antes de terminar...",

texto:

`Las tres cartas escondían un pequeño secreto.

No estaba escrito al principio.

Tampoco al final.

Siempre estuvo ahí.

Esperando a que alguien suficientemente curioso lo encontrara.

Solo necesitas volver a leerlas.

Pero esta vez...

observa únicamente las letras MAYÚSCULAS.

Ellas llevan escondido el verdadero mensaje.

Nos vemos aquí cuando lo descubras. ❤️`

};

let indicePistaTitulo = 0;
let indicePistaTexto = 0;


/*==================================================
            INICIAR PISTA
==================================================*/

function iniciarPista(){

    hintTitle.innerHTML = "";
    hintText.innerHTML = "";

    gameBtn.style.opacity = 0;
    gameBtn.style.pointerEvents = "none";

    indicePistaTitulo = 0;
    indicePistaTexto = 0;

    escribirTituloPista();

}


/*==================================================
            TÍTULO
==================================================*/

function escribirTituloPista(){

    if(indicePistaTitulo < pista.titulo.length){

        hintTitle.innerHTML += pista.titulo.charAt(indicePistaTitulo);

        indicePistaTitulo++;

        setTimeout(escribirTituloPista,70);

    }

    else{

        setTimeout(escribirTextoPista,500);

    }

}


/*==================================================
            TEXTO
==================================================*/

function escribirTextoPista(){

    if(indicePistaTexto < pista.texto.length){

        const letra = pista.texto.charAt(indicePistaTexto);

        if(letra == "\n"){

            hintText.innerHTML += "<br>";

        }

        else{

            hintText.innerHTML += letra;

        }

        indicePistaTexto++;

        setTimeout(escribirTextoPista,28);

    }

    else{

        gsap.to(gameBtn,{

            opacity:1,

            duration:.8,

            onComplete:()=>{

                gameBtn.style.pointerEvents="auto";

            }

        });

    }

}


/*==================================================
            CONTINUAR
==================================================*/

gameBtn.addEventListener("click",()=>{

    cambiarEscena(scene4,scene5);

    iniciarFinal();

});
/*==================================================
                FASE 5
                FINAL
==================================================*/

const final = {

titulo:"Ahora ya lo sabes... ❤️",

mensaje:

`Si llegaste hasta aquí...

es porque descubriste el pequeño secreto escondido entre las tres cartas.

La verdad es que nunca fue solamente un juego.

Fue una forma distinta de acompañarte durante estos días en los que no podíamos vernos.

Y si después de todo este recorrido logré sacarte aunque fuera una sonrisa...

entonces todo valió la pena.

Gracias por abrir las cartas.

Gracias por llegar hasta aquí.

Y, sobre todo...

gracias por ser tú.

🌸❤️`

};

let indiceFinalTitulo = 0;
let indiceFinalTexto = 0;


/*==================================================
            INICIAR FINAL
==================================================*/

function iniciarFinal(){

    finalTitle.innerHTML = "";
    finalMessage.innerHTML = "";

    indiceFinalTitulo = 0;
    indiceFinalTexto = 0;

    escribirTituloFinal();

}


/*==================================================
            TÍTULO
==================================================*/

function escribirTituloFinal(){

    if(indiceFinalTitulo < final.titulo.length){

        finalTitle.innerHTML += final.titulo.charAt(indiceFinalTitulo);

        indiceFinalTitulo++;

        setTimeout(escribirTituloFinal,70);

    }

    else{

        setTimeout(escribirTextoFinal,500);

    }

}


/*==================================================
            TEXTO
==================================================*/

function escribirTextoFinal(){

    if(indiceFinalTexto < final.mensaje.length){

        const letra = final.mensaje.charAt(indiceFinalTexto);

        if(letra == "\n"){

            finalMessage.innerHTML += "<br>";

        }

        else{

            finalMessage.innerHTML += letra;

        }

        indiceFinalTexto++;

        setTimeout(escribirTextoFinal,28);

    }

}
/*==================================================
                FASE 5
                FINAL
==================================================*/

const final = {

titulo:"Ahora ya lo sabes... ❤️",

mensaje:

`Si llegaste hasta aquí...

es porque descubriste el pequeño secreto escondido entre las tres cartas.

La verdad es que nunca fue solamente un juego.

Fue una forma distinta de acompañarte durante estos días en los que no podíamos vernos.

Y si después de todo este recorrido logré sacarte aunque fuera una sonrisa...

entonces todo valió la pena.

Gracias por abrir las cartas.

Gracias por llegar hasta aquí.

Y, sobre todo...

gracias por ser tú.

🌸❤️`

};

let indiceFinalTitulo = 0;
let indiceFinalTexto = 0;


/*==================================================
            INICIAR FINAL
==================================================*/

function iniciarFinal(){

    finalTitle.innerHTML = "";
    finalMessage.innerHTML = "";

    indiceFinalTitulo = 0;
    indiceFinalTexto = 0;

    escribirTituloFinal();

}


/*==================================================
            TÍTULO
==================================================*/

function escribirTituloFinal(){

    if(indiceFinalTitulo < final.titulo.length){

        finalTitle.innerHTML += final.titulo.charAt(indiceFinalTitulo);

        indiceFinalTitulo++;

        setTimeout(escribirTituloFinal,70);

    }

    else{

        setTimeout(escribirTextoFinal,500);

    }

}


/*==================================================
            TEXTO
==================================================*/

function escribirTextoFinal(){

    if(indiceFinalTexto < final.mensaje.length){

        const letra = final.mensaje.charAt(indiceFinalTexto);

        if(letra == "\n"){

            finalMessage.innerHTML += "<br>";

        }

        else{

            finalMessage.innerHTML += letra;

        }

        indiceFinalTexto++;

        setTimeout(escribirTextoFinal,28);

    }

}
/*==================================================
            CAMBIO DE ESCENA
==================================================*/

function cambiarEscena(actual,siguiente){

    gsap.to(actual,{

        opacity:0,

        duration:.8,

        ease:"power2.out",

        onComplete:()=>{

            actual.classList.remove("active");
            actual.classList.add("hidden");

            siguiente.classList.remove("hidden");
            siguiente.classList.add("active");

            gsap.fromTo(

                siguiente,

                {

                    opacity:0

                },

                {

                    opacity:1,

                    duration:.8,

                    ease:"power2.out"

                }

            );

        }

    });

}


/*==================================================
                EFECTO ESCRIBIR
==================================================*/

function escribirTexto(elemento,texto,velocidad,callback){

    let i=0;

    elemento.innerHTML="";

    function escribir(){

        if(i<texto.length){

            if(texto[i]=="\n"){

                elemento.innerHTML+="<br>";

            }

            else{

                elemento.innerHTML+=texto[i];

            }

            i++;

            setTimeout(escribir,velocidad);

        }

        else{

            if(callback){

                callback();

            }

        }

    }

    escribir();

}


/*==================================================
                REINICIAR
==================================================*/

function reiniciarIndices(){

    indiceTitulo=0;
    indiceTexto=0;

    indiceCartaTitulo=0;
    indiceCartaTexto=0;

    indicePistaTitulo=0;
    indicePistaTexto=0;

    indiceFinalTitulo=0;
    indiceFinalTexto=0;

}


/*==================================================
            MENSAJE FINAL
==================================================*/

setTimeout(()=>{

    console.log("Proyecto iniciado correctamente ❤️");

},500);
