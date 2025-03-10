document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav ul");

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Cargar Header y Footer dinámicamente en cada página
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
        });

    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
        });
});
