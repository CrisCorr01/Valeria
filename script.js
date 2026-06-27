//=============================
// MENSAJE DE BIENVENIDA
//=============================

const titulo = "Hola, Vale 🌸";

const texto =
`Gracias por abrir las tres cartas.

Todavía queda un pequeño secreto.

Y quiero descubrirlo contigo.`;


let i = 0;
let j = 0;

const h1 = document.getElementById("titulo");
const p = document.getElementById("texto");
const btn = document.getElementById("btn");

const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");

const envelope = document.querySelector(".envelope");
const flap = document.querySelector(".flap");
const front=document.querySelector(".front");
const back=document.querySelector(".back");
const shadow=document.querySelector(".shadow");
const background=document.getElementById("background");
const letter = document.querySelector(".letter");


//=============================
// EFECTO MAQUINA DE ESCRIBIR
//=============================

function escribirTitulo(){

    if(i < titulo.length){

        h1.innerHTML += titulo.charAt(i);

        i++;

        setTimeout(escribirTitulo,90);

    }else{

        setTimeout(escribirTexto,500);

    }

}

function escribirTexto(){

    if(j < texto.length){

        if(texto[j] == "\n"){

            p.innerHTML += "<br>";

        }else{

            p.innerHTML += texto[j];

        }

        j++;

        setTimeout(escribirTexto,35);

    }else{

        btn.style.opacity = "1";
        btn.style.pointerEvents = "auto";

    }

}

escribirTitulo();


//=============================
// CAMBIO DE ESCENA
//=============================

btn.onclick = ()=>{

    gsap.to(scene1,{
        opacity:0,
        duration:1
    });

    setTimeout(()=>{

        scene1.classList.add("hidden");

        scene2.classList.remove("hidden");

        gsap.fromTo(scene2,

        {
            opacity:0,
            scale:.85
        },

        {
            opacity:1,
            scale:1,
            duration:1,
            ease:"power3.out"
        });

    },900);

};


//=============================
// ANIMACIÓN DEL SOBRE
//=============================

let abierto = false;

envelope.addEventListener("click",()=>{

    if(abierto) return;

    abierto = true;

    envelope.style.pointerEvents="none";

    const tl = gsap.timeline();

    // Abre la tapa

    tl.to(flap,{

        rotationX:180,

        duration:1,

        ease:"power2.inOut"

    });

    // La carta asoma

    tl.to(letter,{

        y:-70,

        duration:.8,

        ease:"power2.out"

    });

    // Pausa

    tl.to({},{

        duration:.35

    });

    // Sale completamente

    tl.to(letter,{

        y:-230,

        duration:1.2,

        ease:"power3.out"

    });

    // Rebote

    tl.to(letter,{

        scale:1.02,

        duration:.25,

        yoyo:true,

        repeat:1

    });

    // Agrandar carta

    tl.to(letter,{

        width:"88vw",

        height:"82vh",

        borderRadius:"18px",

        duration:1,

        ease:"power2.inOut"

    });

    // Centrar

    tl.to(letter,{

        x:0,

        y:0,

        duration:.8,

        ease:"power2.inOut"

    });

    // Aquí más adelante escribiremos la carta

    tl.call(()=>{

        console.log("Carta lista.");

    });

});



//=============================
// ESTRELLAS
//=============================

for(let i=0;i<120;i++){

    let star=document.createElement("div");

    star.className="star";

    let size=Math.random()*3+1;

    star.style.width=size+"px";

    star.style.height=size+"px";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDuration=Math.random()*2+1+"s";

    document.body.appendChild(star);

}



//=============================
// PÉTALOS
//=============================

function crearPetalo(){

    let petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML="🌸";

    petal.style.left=Math.random()*100+"vw";

    petal.style.animationDuration=(Math.random()*6+8)+"s";

    petal.style.fontSize=(Math.random()*18+18)+"px";

    document.body.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },14000);

}

setInterval(crearPetalo,450);
