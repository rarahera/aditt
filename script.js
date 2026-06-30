// ============================
// PINDAH HALAMAN
// ============================

function nextPage(page) {

    document.querySelectorAll(".page").forEach(p => {
        p.classList.remove("active");
    });

    document.getElementById("page" + page).classList.add("active");

    // Kalau masuk page 4 langsung mulai loading
    if(page === 4){
        mulaiLoading();
    }

}

// ============================
// PAGE 2 (TREX MARAH)
// ============================

const trex = document.getElementById("trex");
const marahText = document.getElementById("marahText");
const gangguBtn = document.getElementById("gangguBtn");
const lanjut1 = document.getElementById("lanjut1");

let klik = 0;

const marah = [

"APA SIH!! 😠",

"AKU LAGI BETE TAU!! 😤",

"JANGAN GANGGU!! 😡",

"HUFFFFF!! 💨",

"YAUDAH SIH!! 😤"

];

gangguBtn.onclick = function(){

trex.classList.add("shake");

marahText.innerHTML = marah[klik];

klik++;

if(klik >= marah.length){

trex.classList.remove("shake");

trex.innerHTML = "🦖😮‍💨";

marahText.innerHTML = "Capek juga marah-marah...";

gangguBtn.style.display = "none";

lanjut1.style.display = "inline-block";

}

};

// ============================
// PAGE 3
// ============================

const tebakBtn = document.getElementById("tebakBtn");
const tebakText = document.getElementById("tebakText");

let step = 0;

tebakBtn.onclick = function(){

step++;

if(step==1){

tebakText.innerHTML="Kayaknya T-Rex ini...";

}

else if(step==2){

tebakText.innerHTML="Mirip seseorang deh... 🤔";

}

else if(step==3){

tebakText.innerHTML="Namanya...";

}

else{

nextPage(4);

}

};

// ============================
// PAGE 4
// ============================

function mulaiLoading(){

let persen = 0;

const angka = document.getElementById("percent");

const timer = setInterval(()=>{

persen += 5;

angka.innerHTML = persen + "%";

if(persen>=100){

clearInterval(timer);

setTimeout(()=>{

nextPage(5);

},800);

}

},90);

}

// ============================
// PAGE 6
// ============================

const coklatBtn = document.getElementById("coklatBtn");
const happyText = document.getElementById("happyText");
const endingBtn = document.getElementById("endingBtn");
const trexHappy = document.querySelector(".trexHappy");

coklatBtn.onclick = function(){

trexHappy.innerHTML="🦖🍫";

happyText.innerHTML="Hmm...";

setTimeout(()=>{

happyText.innerHTML="Enak juga ya coklatnya... 🍫";

},1000);

setTimeout(()=>{

trexHappy.innerHTML="🦖😊";

happyText.innerHTML="Udah nggak terlalu bete sekarang.";

},2500);

setTimeout(()=>{

happyText.innerHTML="Makasih ya udah ngasih coklat. 🤍";

endingBtn.style.display="inline-block";

},4200);

coklatBtn.disabled = true;

};
