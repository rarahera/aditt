document.addEventListener("DOMContentLoaded", () => {

  const pages = document.querySelectorAll(".page");

  function showPage(id){
    pages.forEach(p => p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  }

  const btnSiapa = document.getElementById("btnSiapa");
  const btnNext = document.getElementById("btnNext");
  const btnCoklat = document.getElementById("btnCoklat");

  // PAGE 1
  btnSiapa.addEventListener("click", () => {
    showPage("page2");
  });

  // PAGE 2
  btnNext.addEventListener("click", () => {
    document.getElementById("transformText").innerText =
      "eh ternyata dia lagi berubah... 🧬";

    setTimeout(() => {
      showPage("page3");
    }, 800);
  });

  // PAGE 3
  btnCoklat.addEventListener("click", () => {
    showPage("loadingPage");

    let text = document.getElementById("loadingText");
    let dots = 0;

    let interval = setInterval(() => {
      dots = (dots + 1) % 4;
      text.innerText = "memproses mood stabilizer" + ".".repeat(dots);
    }, 400);

    setTimeout(() => {
      clearInterval(interval);
      showPage("pageFinal");
    }, 3500);
  });

});
