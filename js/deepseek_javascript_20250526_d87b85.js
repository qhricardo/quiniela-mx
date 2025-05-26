// quiniela.js
document.querySelectorAll('.pronostico-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.parentElement.querySelectorAll('.pronostico-btn').forEach(b => {
            b.classList.remove('active');
        });
        this.classList.add('active');
    });
});

document.getElementById('quinielaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const pronosticos = [];
    // ... (pega aquí todo el JS del código anterior)
});