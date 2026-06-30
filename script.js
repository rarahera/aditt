// ===============================
// Ambil semua elemen
// ===============================

const pages = document.querySelectorAll(".page");

function showPage(id){
    pages.forEach(page=>{
        page.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}

// ===============================
// PAGE 1
// ===============================

document.getElementById("lihatBtn").addEventListener("click", function(){

    showPage("page2");

});

// ===============================
// PAGE 2
// ===============================

const dialog = document.getElementById("dialog");
const trex = document.getElementById("trex");
const gangguBtn = document.getElementById("gangguBtn");

let marah = 0;

const kata = [

"APA SIH!! 😠",

"AKU LAGI BETE!! 😤",

"JANGAN GANGGU!! 😡",

"HUFFFFF!! 💨",

"Capek juga marah-marah... 😮‍💨"

];

gangguBtn.addEventListener("click", function(){

    if(marah < 4){

        dialog.innerHTML = kata[marah];

        trex.classList.add("shake");

        setTimeout(()=>{

            trex.classList.remove("shake");

        },300);

        marah++;

    }

    else{

        dialog.innerHTML = kata[4];

        trex.innerHTML = "🦖😮‍💨";

        gangguBtn.innerHTML = "Lanjut ➜";

        gangguBtn.onclick = function(){

            showPage("page3");

        }

    }

});

// ===============================
// PAGE 3
// ===============================

const tebak = document.getElementById("tebak");
const tebakBtn = document.getElementById("tebakBtn");

let step = 0;

tebakBtn.addEventListener("click",function(){

    step++;

    if(step==1){

        tebak.innerHTML="Kayaknya T-Rex ini...";

    }

    else if(step==2){

        tebak.innerHTML="Mirip seseorang deh... 🤔";

    }

    else if(step==3){

        tebak.innerHTML="Namanya...";

    }

    else{

        showPage("page4");

        loading();

    }

});

// ===============================
// PAGE 4
// ===============================

function loading(){

    const persen=document.getElementById("loading");

    let angka=0;

    const timer=setInterval(function(){

        angka+=10;

        persen.innerHTML=angka+"%";

        if(angka>=100){

            clearInterval(timer);

            setTimeout(function(){

                showPage("page5");

            },500);

        }

    },150);

}

// ===============================
// PAGE 5
// ===============================

document.getElementById("lanjutCoklat").addEventListener("click",function(){

    showPage("page6");

});

// ===============================
// PAGE 6
// ===============================

const happyTrex=document.getElementById("happyTrex");
const happyText=document.getElementById("happyText");

document.getElementById("coklatBtn").addEventListener("click",function(){

    happyTrex.innerHTML="🦖🍫";

    happyText.innerHTML="Hmm...";

    setTimeout(function(){

        happyText.innerHTML="Enak juga ya coklatnya 🍫";

    },1000);

    setTimeout(function(){

        happyTrex.innerHTML="🦖😊";

        happyText.innerHTML="Udah nggak bete lagi 😆";

    },2500);

    setTimeout(function(){

        showPage("page7");

    },4200);

});
