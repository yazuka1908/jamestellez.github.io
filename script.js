document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    emailjs.init("james.tellez1908@gmail.com"); // Reemplaza con tu User ID de EmailJS
    
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
            inicializarEventos(); // Llamar función después de cargar el header
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
        // Esperar a que los elementos existan en el DOM antes de asignar eventos
        setTimeout(() => {
            // Esperar a que los elementos existan en el DOM
            const themeToggle = document.getElementById("theme-toggle");
            const menuToggle = document.getElementById("menu-toggle");
            const navMenu = document.querySelector("nav ul");
            const timelineItems = document.querySelectorAll(".timeline-item");
            const contactForm = document.getElementById("contact-form");
    
            if (themeToggle) {
                themeToggle.addEventListener("click", function () {
                    document.body.classList.toggle("dark-mode");
                });
            }
    
            if (menuToggle && navMenu) {
                menuToggle.addEventListener("click", function () {
                    navMenu.classList.toggle("active");
                });
            } else {
                console.error("menuToggle o navMenu no se encontraron en el DOM.");
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
            if (contactForm) {
                contactForm.addEventListener("submit", function (event) {
                    event.preventDefault();
        
                    //emailjs.sendForm("TU_SERVICE_ID", "TU_TEMPLATE_ID", contactForm)
                    emailjs.sendForm("service_pjov5ma", "template_83ygfoz", contactForm)
                        .then(function () {
                            document.getElementById("form-message").textContent = "¡Mensaje enviado con éxito!";
                            contactForm.reset();
                        }, function (error) {
                            document.getElementById("form-message").textContent = "Error al enviar el mensaje.";
                        });
                });
            }    
                                     
        }, 100); // Pequeño retraso para asegurarse de que el header cargó
    }

    function toggleTheme() {
        document.body.classList.toggle("dark-mode");
        document.body.style.transition = "background-color 0.5s ease, color 0.5s ease";
    }
    
    document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
    
});
