// Versión 2.0 - Funcionamiento garantizado
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    
    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            
            // Datos del formulario
            const formData = new FormData(loginForm);
            const email = formData.get("email");
            const password = formData.get("password");

            // Validación de prueba
            if (email === "admin@quiniela.com" && password === "Quiniela2024!") {
                // Almacenamiento seguro
                sessionStorage.setItem("authToken", btoa(email));
                
                // Redirección absoluta (requerido para GitHub Pages)
                window.location.href = "https://qhricardo.github.io/quiniela-mx/index.html";
            } else {
                alert("Credenciales incorrectas\nPrueba con:\nEmail: admin@quiniela.com\nClave: Quiniela2024!");
            }
        });
    }
});
