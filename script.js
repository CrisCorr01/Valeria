const titulo="Hola, Vale 🌸";

const texto="Gracias por abrir las tres cartas.\n\nTodavía queda un pequeño secreto.\n\nY quiero descubrirlo contigo.";

let i=0;
let j=0;

const h1=document.getElementById("titulo");
const p=document.getElementById("texto");
const btn=document.getElementById("btn");

const scene1=document.getElementById("scene1");
const scene2=document.getElementById("scene2");

const envelope=document.querySelector(".envelope");
const flap=document.querySelector(".flap");
const letter=document.querySelector(".letter");

const letterTitle=document.getElementById("letterTitle");
const letterText=document.getElementById("letterText");
const continueBtn=document.getElementById("continueBtn");

const mensajeCarta=`Hola, Vale.

Si estás leyendo esto...

Significa que abriste las tres cartas.

Gracias por seguir este pequeño juego.

Pero todavía queda un secreto.

Uno que ha estado contigo desde la primera carta.

Solo necesitabas una pequeña pista para descubrirlo.

¿Lista para encontrarlo?`;

function escribirCarta(){

letterTitle.innerHTML="";

letterText.innerHTML="";

letterTitle.textContent="Hola, Vale ❤️";

let i=0;

function escribir(){

if(i<mensajeCarta.length){

letterText.innerHTML+=mensajeCarta.charAt(i);

i++;

setTimeout(escribir,28);

}
else{

continueBtn.style.opacity=1;
continueBtn.style.pointerEvents="auto";

}

}

setTimeout(escribir,500);

}

function escribirTitulo(){

    if(i<titulo.length){

        h1.innerHTML+=titulo.charAt(i);

        i++;

        setTimeout(escribirTitulo,90);

    }else{

        setTimeout(escribirTexto,500);

    }

}

function escribirTexto(){

    if(j<texto.length){

        if(texto[j]=="\n")

            p.innerHTML+="<br>";

        else

            p.innerHTML+=texto[j];

        j++;

        setTimeout(escribirTexto,35);

    }else{

        btn.style.opacity=1;
        btn.style.pointerEvents="auto";

    }

}

escribirTitulo();

btn.onclick=()=>{

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
            duration:1.2,
            ease:"power3.out"
        });

    },1000);

}

/* SOBRE */

envelope.addEventListener("click",()=>{

    envelope.style.pointerEvents="none";

    let tl=gsap.timeline();

    tl.to(flap,{
        rotationX:180,
        duration:1,
        ease:"power2.inOut"
    });

    tl.to(letter,{
        y:-180,
        duration:1.3,
        ease:"power3.out"
    },"-=0.2");

    tl.add(()=>{
    
    document.querySelector(".back").classList.add("blur");
    document.querySelector(".front").classList.add("blur");
    document.querySelector(".flap").classList.add("blur");
    
    gsap.to(letter,{
    
    duration:1.1,
    
    width:"90vw",
    
    height:"85vh",
    
    ease:"power3.inOut",
    
    onComplete:()=>{
    
    letter.classList.add("fullscreen");
    
    escribirCarta();
    
    }
    
    });
    
    });

    continueBtn.onclick=()=>{

    gsap.to(letter,{
    
    opacity:0,
    
    scale:.95,
    
    duration:.8,
    
    onComplete:()=>{
    
    alert("Aquí empezará la escena del juego de las letras ocultas.");
    
    }
    
    });
    
    };

});
