// Reemplaza el contenido de /js/auth.js con:
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Credenciales de prueba (cámbialas luego)
    const USER = "admin@quiniela.com";
    const PASS = "Quiniela2024!";
    
    if (this.elements[0].value === USER && 
        this.elements[1].value === PASS) {
        
        // 1. Guarda sesión
        localStorage.setItem("quinielaAuth", "true");
        
        // 2. Redirige
        window.location.href = "index.html";
    } else {
        alert("Credenciales incorrectas. Usa:\nEmail: admin@quiniela.com\nClave: Quiniela2024!");
    }
});
