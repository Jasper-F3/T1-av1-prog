const catnavbar = document.querySelector(".catnavbar");
const cat = document.querySelector(".cat");

cat.addEventListener("click", () => {
  catnavbar.classList.toggle("active");
});
