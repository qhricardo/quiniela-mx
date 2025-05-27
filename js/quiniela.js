// Simulación de base de datos
const usuarios = [
    { email: "usuario@example.com", password: "123456", nombre: "Juan Pérez" }
];

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.elements[0].value;
    const password = this.elements[1].value;
    
    const usuario = usuarios.find(u => u.email === email && u.password === password);
    
    if (usuario) {
        localStorage.setItem('usuario', JSON.stringify(usuario));
        window.location.href = "index.html";
    } else {
        alert("Credenciales incorrectas");
    }
});

// Cargar usuario en páginas
if (localStorage.getItem('usuario')) {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    document.querySelectorAll('#userName').forEach(el => {
        el.textContent = usuario.nombre;
    });
}