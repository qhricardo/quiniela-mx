// Versión 3.0 - Solución definitiva
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    
    form?.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // 1. Obtener valores
        const email = form.elements['email'].value;
        const password = form.elements['password'].value;

        // 2. Validación (datos de prueba)
        if (email === "admin@quiniela.com" && password === "Quiniela2024!") {
            
            // 3. Guardar token
            sessionStorage.setItem("authToken", btoa(email));
            
            // 4. Redirección ABSOLUTA (crítico para GitHub Pages)
            window.location.href = "https://qhricardo.github.io/quiniela-mx/index.html";
        } else {
            alert("Credenciales incorrectas\nUse:\nEmail: admin@quiniela.com\nClave: Quiniela2024!");
        }
    });
});
