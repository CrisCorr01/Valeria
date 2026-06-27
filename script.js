const titulo="Hola, Vale 🌸";

const texto="Gracias por abrir las tres cartas.\n\nTodavía queda un pequeño secreto.\n\nY quiero descubrirlo contigo.";

let i=0;

let j=0;

const h1=document.getElementById("titulo");

const p=document.getElementById("texto");

const btn=document.getElementById("btn");

function escribirTitulo(){

if(i<titulo.length){

h1.innerHTML+=titulo.charAt(i);

i++;

setTimeout(escribirTitulo,90);

}

else{

setTimeout(escribirTexto,500);

}

}

function escribirTexto(){

if(j<texto.length){

if(texto.charAt(j)=="\n"){

p.innerHTML+="<br>";

}else{

p.innerHTML+=texto.charAt(j);

}

j++;

setTimeout(escribirTexto,35);

}

else{

btn.style.opacity=1;

btn.style.pointerEvents="auto";

}

}

escribirTitulo();

/* BOTÓN */

btn.onclick=()=>{

document.getElementById("scene1").style.opacity="0";

setTimeout(()=>{

document.getElementById("scene1").classList.add("hidden");

document.getElementById("scene2").classList.remove("hidden");

document.getElementById("scene2").style.opacity="1";

},900);

};

/* ESTRELLAS */

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

/* PÉTALOS */

function crearPetalo(){

let p=document.createElement("div");

p.className="petal";

p.innerHTML="🌸";

p.style.left=Math.random()*100+"vw";

p.style.animationDuration=Math.random()*6+8+"s";

p.style.fontSize=Math.random()*18+18+"px";

document.body.appendChild(p);

setTimeout(()=>{

p.remove();

},14000);

}

setInterval(crearPetalo,450);
