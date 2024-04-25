const themeChangerButtom = document.querySelector(".mode-button");
const body = document.body;

themeChangerButtom.addEventListener("click", function() {
    body.classList.toggle("dark-mode");
});