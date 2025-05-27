// Base de datos simulada
const usuariosRegistrados = [
    { email: "usuario@example.com", password: "Quiniela123", nombre: "Apostador MX" }
];

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.elements[0].value;
    const password = this.elements[1].value;
    
    // Validar credenciales
    const usuario = usuariosRegistrados.find(u => 
        u.email === email && u.password === password
    );

    if (usuario) {
        // Guardar sesión
        localStorage.setItem('usuarioLogueado', JSON.stringify({
            email: usuario.email,
            nombre: usuario.nombre,
            fechaLogin: new Date()
        }));
        
        // Redirigir a quiniela
        window.location.href = "index.html";
    } else {
        alert("❌ Credenciales incorrectas. Intenta nuevamente.");
    }
});
const usuario = usuariosRegistrados.find(u => 
    u.email === email && 
    u.password === btoa(password) // Contraseña en base64
);
const usuarioData = {
    ...usuario,
    expires: new Date().getTime() + 24 * 60 * 60 * 1000
};
localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioData));

// Opcional: Registro básico
document.getElementById('registerLink')?.addEventListener('click', function(e) {
    e.preventDefault();
    const email = prompt("Ingresa tu correo electrónico:");
    const password = prompt("Crea una contraseña segura:");
    
    if (email && password) {
        usuariosRegistrados.push({
            email,
            password,
            nombre: email.split('@')[0]
        });
        alert("✅ Registro exitoso. Ahora puedes iniciar sesión.");
    }
});
// Lógica de quinielas + resultados
const partidos = [
    { id: 1, local: "América", visitante: "Chivas", resultado: "2-1" },
    // ... agregar los 10 partidos
];

// Guardar en localStorage
function guardarPronosticos(pronosticos) {
    localStorage.setItem('pronosticosJ15', JSON.stringify(pronosticos));
}

// Cargar resultados
function cargarResultados() {
    const pronosticos = JSON.parse(localStorage.getItem('pronosticosJ15')) || [];
    
    let puntos = 0;
    const tabla = document.querySelector('.resultados-table');
    
    partidos.forEach(partido => {
        const pronostico = pronosticos.find(p => p.id === partido.id);
        const fila = document.createElement('tr');
        
        if (pronostico) {
            const acierto = pronostico.pronostico === "G" && partido.resultado.startsWith(partido.local);
            // ... lógica de puntuación
            
            fila.innerHTML = `
                <td>${partido.local} vs ${partido.visitante}</td>
                <td>${partido.resultado}</td>
                <td>${pronostico.pronostico}</td>
                <td>${acierto ? '3' : '0'} pts</td>
            `;
            
            fila.classList.add(acierto ? 'acierto' : 'error');
            puntos += acierto ? 3 : 0;
        }
        
        tabla.appendChild(fila);
    });
    
    document.getElementById('puntosTotales').textContent = puntos;
}

// Inicializar
if (document.querySelector('.resultados-table')) {
    cargarResultados();
}
