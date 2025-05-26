/ Toggle entre Login/Registro
document.querySelectorAll('.auth-tabs button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.auth-tabs button.active').classList.remove('active');
        button.classList.add('active');
        
        document.querySelectorAll('.auth-form').forEach(form => {
            form.classList.add('hidden');
        });
        
        const formId = `form-${button.id.replace('tab-', '')}`;
        document.getElementById(formId).classList.remove('hidden');
    });
});

// Validación de Alias Único (simulación con API)
document.querySelector('input[placeholder="Alias*"]')?.addEventListener('blur', async (e) => {
    const alias = e.target.value;
    if (alias.length < 3) return;
    
    // Simula consulta a backend
    const isAvailable = await checkAliasAvailability(alias);
    e.target.style.borderColor = isAvailable ? '#2ecc71' : '#e74c3c';
});

async function checkAliasAvailability(alias) {
    // En producción, reemplazar con fetch() a tu API
    console.log(`Verificando alias: ${alias}`);
    return new Promise(resolve => {
        setTimeout(() => resolve(!['admin', 'root', 'quiniela'].includes(alias.toLowerCase())), 500);
    });
}

// Login con Redes Sociales (ejemplo con Firebase)
function initSocialAuth() {
    // Configuración para Firebase (debes incluir su SDK)
    const fbBtn = document.querySelector('.fb-btn');
    const googleBtn = document.querySelector('.google-btn');
    
    fbBtn?.addEventListener('click', () => {
        console.log('Iniciando con Facebook');
        // firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider());
    });
    
    googleBtn?.addEventListener('click', () => {
        console.log('Iniciando con Google');
        // firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
    });
}

initSocialAuth();
