document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    
    // Cargar el Header
    fetch("header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar header.html");
            }
            return response.text();
        })
        .then(data => {
            body.insertAdjacentHTML("afterbegin", data);
        })
        .catch(error => console.error(error));

    // Cargar el Footer
    fetch("footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar footer.html");
            }
            return response.text();
        })
        .then(data => {
            body.insertAdjacentHTML("beforeend", data);
        })
        .catch(error => console.error(error));

    function inicializarEventos() {
        // Esperar a que los elementos existan en el DOM
        const themeToggle = document.getElementById("theme-toggle");
        const menuToggle = document.getElementById("menu-toggle");
        const navMenu = document.querySelector("nav ul");
        const timelineItems = document.querySelectorAll(".timeline-item");

        if (themeToggle) {
            themeToggle.addEventListener("click", function () {
                document.body.classList.toggle("dark-mode");
            });
        }

        if (menuToggle && navMenu) {
            menuToggle.addEventListener("click", function () {
                navMenu.classList.toggle("active");
            });
        }
        
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.2 });

        if (observer) {
            timelineItems.forEach(item => {
                observer.observe(item);
            });
        }
    }
});
