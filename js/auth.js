// Toggle entre login/registro
document.getElementById('toggle-link').addEventListener('click', (e) => {
    e.preventDefault();
    const loginForm = document.getElementById('login-form');
    const registerSection = document.getElementById('register-section');
    
    if (registerSection.style.display === 'none') {
        loginForm.style.display = 'none';
        registerSection.style.display = 'block';
        document.getElementById('toggle-link').textContent = 'Volver a login';
    } else {
        loginForm.style.display = 'block';
        registerSection.style.display = 'none';
        document.getElementById('toggle-link').textContent = 'Regístrate aquí';
    }
});

// Login
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('form-message');

    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        window.location.href = "index.html";
    } catch (error) {
        messageDiv.textContent = traducirError(error.code);
        messageDiv.style.display = 'block';
    }
});

// Registro
document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const messageDiv = document.getElementById('register-message');

    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        messageDiv.textContent = "¡Registro exitoso! Redirigiendo...";
        messageDiv.className = "success";
        messageDiv.style.display = 'block';
        setTimeout(() => window.location.href = "index.html", 2000);
    } catch (error) {
        messageDiv.textContent = traducirError(error.code);
        messageDiv.className = "error";
        messageDiv.style.display = 'block';
    }
});

// Traducción de errores
function traducirError(errorCode) {
    const errores = {
        'auth/invalid-email': 'Correo electrónico inválido',
        'auth/user-not-found': 'Usuario no registrado',
        'auth/wrong-password': 'Contraseña incorrecta',
        'auth/email-already-in-use': 'El correo ya está registrado',
        'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres'
    };
    return errores[errorCode] || "Error desconocido";
}
