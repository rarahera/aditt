const pages = document.querySelectorAll(".page");

function showPage(id){
  pages.forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// PAGE 1 -> PAGE 2
document.getElementById("btnSiapa").addEventListener("click", () => {
  showPage("page2");
});

// PAGE 2 story
document.getElementById("btnNext").addEventListener("click", () => {
  document.getElementById("transformText").innerText =
    "eh ternyata dia lagi berubah... 🧬";
  
  setTimeout(() => {
    showPage("page3");
  }, 1000);
});

// PAGE 3 -> loading
document.getElementById("btnCoklat").addEventListener("click", () => {
  showPage("loadingPage");

  let text = document.getElementById("loadingText");
  let dots = 0;

  let interval = setInterval(() => {
    dots++;
    text.innerText = "memproses mood stabilizer" + ".".repeat(dots);
    if(dots === 3) dots = 0;
  }, 500);

  setTimeout(() => {
    clearInterval(interval);
    showPage("pageFinal");
  }, 4000);
});
