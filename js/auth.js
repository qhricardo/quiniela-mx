document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            
            // Credenciales válidas (para pruebas)
            const validCredentials = {
                email: "admin@quiniela.com",
                password: "Quiniela2024!"
            };

            const email = this.elements[0].value;
            const password = this.elements[1].value;

            if (email === validCredentials.email && password === validCredentials.password) {
                // Guarda el estado de autenticación
                sessionStorage.setItem("isAuthenticated", "true");
                
                // Redirección absoluta (necesaria para GitHub Pages)
                window.location.href = "https://qhricardo.github.io/quiniela-mx/index.html";
            } else {
                alert("Credenciales incorrectas. Usa:\nEmail: admin@quiniela.com\nClave: Quiniela2024!");
            }
        });
    }
});
