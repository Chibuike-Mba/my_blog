let button = document.getElementById("oop");

window.addEventListener("DOMContentLoaded", function load() {
        button.addEventListener("click", function backgroundParagraphColor() {
        const paragraph = document.getElementsByTagName("p")[0].classList.toggle("background-color");
    });
});