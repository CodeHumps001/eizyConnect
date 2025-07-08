const openBtn = document.getElementById("show-socials");
const closeBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("socialModal");
const overlay = document.getElementById("overlay");
const modeChange = document.getElementById("mode");
const hero = document.querySelector(".hero");

// dark mode
function modeChanger() {
  hero.classList.toggle("mode-c");
}
modeChange.addEventListener("click", modeChanger);

openBtn.addEventListener("click", () => {
  modal.classList.add("active");
  overlay.classList.add("active");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
  setTimeout(() => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }, 300);
});

overlay.addEventListener("click", () => {
  closeBtn.click();
});

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.body.classList.add("loaded");
    document.getElementById("main-content").style.display = "block";
  }, 2000);
});
