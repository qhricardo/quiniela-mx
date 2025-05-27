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