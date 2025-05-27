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
});
