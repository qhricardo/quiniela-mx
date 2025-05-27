// LÓGICA DE SELECCIÓN
document.querySelectorAll('.pronostico-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remover selección previa en este partido
        this.parentNode.querySelectorAll('.pronostico-btn').forEach(b => {
            b.classList.remove('active');
        });
        
        // Marcar este botón como seleccionado
        this.classList.add('active');
    });
});

// GUARDAR QUINIELA
document.getElementById('guardar').addEventListener('click', () => {
    const pronosticos = [];
    
    document.querySelectorAll('tr').forEach(row => {
        const seleccionado = row.querySelector('.pronostico-btn.active');
        if (seleccionado) {
            pronosticos.push({
                local: row.querySelector('.equipo-local').textContent,
                visitante: row.querySelector('.equipo-visitante').textContent,
                pronostico: seleccionado.textContent
            });
        }
    });
    
    alert('Quiniela guardada!\n' + JSON.stringify(pronosticos, null, 2));
    
    /* 
    // Para conectar a un backend en el futuro:
    fetch('/api/guardar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pronosticos)
    });
    */
});