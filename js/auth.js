document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Credenciales válidas (cambia esto en producción)
    const validEmail = "admin@quiniela.com";
    const validPass = "Quiniela2024!";

    const email = this.elements[0].value;
    const password = this.elements[1].value;

    if (email === validEmail && password === validPass) {
        // 1. Guarda sesión
        localStorage.setItem("quinielaAuth", "true");
        
        // 2. Redirección ABSOLUTA (necesario para GitHub Pages)
        window.location.href = "https://qhricardo.github.io/quiniela-mx/index.html";
    } else {
        alert("Credenciales incorrectas. Usa:\nEmail: admin@quiniela.com\nClave: Quiniela2024!");
    }
});
