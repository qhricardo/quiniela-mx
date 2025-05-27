// Base de datos simulada
const usuarios = JSON.parse(localStorage.getItem('quinielaUsers')) || [];

// Registro
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = this.elements[0].value;
    const email = this.elements[1].value;
    const password = this.elements[2].value;

    if (usuarios.some(u => u.email === email)) {
        alert("⚠️ Este correo ya está registrado");
        return;
    }

    usuarios.push({
        nombre,
        email,
        password: btoa(password) // Encriptación básica
    });

    localStorage.setItem('quinielaUsers', JSON.stringify(usuarios));
    alert("✅ ¡Registro exitoso!");
    window.location.href = "login.html";
});

// Login
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.elements[0].value;
    const password = btoa(this.elements[1].value);

    const usuario = usuarios.find(u => 
        u.email === email && 
        u.password === password
    );

    if (usuario) {
        localStorage.setItem('usuarioLogueado', JSON.stringify({
            nombre: usuario.nombre,
            email
        }));
        window.location.href = "index.html";
    } else {
        document.getElementById('errorMsg').textContent = "Credenciales incorrectas";
    }
    // Datos de usuario de prueba
const USUARIO_VALIDO = {
  email: "test@quiniela.com",
  password: "MX2024!" // Contraseña encriptada: "TVgyMDI0IQ=="
};

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const email = this.elements[0].value;
  const password = this.elements[1].value;

  if (email === USUARIO_VALIDO.email && password === USUARIO_VALIDO.password) {
    // 1. Guarda sesión
    localStorage.setItem("sesionActiva", "true");
    
    // 2. Redirige al index
    window.location.href = "index.html";
  } else {
    alert("❌ Credenciales incorrectas. Usa:\nEmail: test@quiniela.com\nContraseña: MX2024!");
  }
});// /js/auth.js
document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Credenciales de prueba
    const CORREO_VALIDO = "admin@quiniela.com";
    const CONTRASEÑA_VALIDA = "Quiniela2024!";
    
    if (e.target[0].value === CORREO_VALIDO && 
        e.target[1].value === CONTRASEÑA_VALIDA) {
        
        localStorage.setItem("autenticado", "true");
        window.location.href = "index.html";
    } else {
        alert("Credenciales incorrectas. Usa:\nadmin@quiniela.com\nQuiniela2024!");
    }
});
});
