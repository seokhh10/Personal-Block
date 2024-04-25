const themeChangerButton = document.querySelector(".mode-button");
const body = document.body;
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const postButton = document.querySelector('.post-button');

themeChangerButton.addEventListener("click", function() {
    body.classList.toggle("dark-mode");
    header.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");
    
});


postButton.addEventListener("click", () => {
    location.href = "./blog.html";
})
