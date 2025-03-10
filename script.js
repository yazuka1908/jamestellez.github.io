document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav ul");
    const timelineItems = document.querySelectorAll(".timeline-item");

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    timelineItems.forEach(item => {
        observer.observe(item);
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
