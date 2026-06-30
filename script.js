function nextPage(){

document.getElementById("page1").style.display="none";

document.getElementById("page2").style.display="block";

}

const trex=document.querySelector(".trex");

const dialog=document.getElementById("dialog");

const poke=document.getElementById("poke");

const next=document.getElementById("next");

let marah=0;

const kata=[

"GRRRR!!! 😤",

"APA SIHHH 😡",

"JANGAN GANGGU!! 😤",

"HUFTTT 😠",

"AKU LAGI BETE TAU!!",

"AAAAAAAAA!!!"

];

poke.onclick=function(){

trex.classList.add("shake");

dialog.innerHTML=kata[marah];

buatAsap();

marah++;

if(marah>=kata.length){

trex.classList.remove("shake");

trex.innerHTML="🦖😮‍💨";

dialog.innerHTML="Huft... capek juga marah-marah.";

poke.style.display="none";

next.style.display="inline-block";

}

}

function buatAsap(){

let asap=document.createElement("div");

asap.className="smoke";

asap.innerHTML="💨";

asap.style.left=(window.innerWidth/2+80)+"px";

asap.style.top=(window.innerHeight/2-120)+"px";

document.body.appendChild(asap);

setTimeout(()=>{

asap.remove();

},1000);

}
