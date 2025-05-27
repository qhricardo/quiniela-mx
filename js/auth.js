document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerLink = document.getElementById('register-link');
    const messageDiv = document.getElementById('form-message');

    // Login con email/password
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        try {
            const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
            // Redirigir a página principal después de login exitoso
            window.location.href = "inicio.html";
        } catch (error) {
            showError(error.code);
        }
    });

    // Registro de nuevo usuario
    registerLink.addEventListener('click', async (e) => {
        e.preventDefault();
        const email = prompt("Ingresa tu correo electrónico:");
        if (!email) return;
        
        const password = prompt("Ingresa una contraseña segura (mínimo 6 caracteres):");
        if (!password || password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres");
            return;
        }

        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
        } catch (error) {
            showError(error.code);
        }
    });

    // Mostrar errores
    function showError(errorCode) {
        const messages = {
            'auth/invalid-email': 'Correo electrónico inválido',
            'auth/user-disabled': 'Cuenta deshabilitada',
            'auth/user-not-found': 'Usuario no encontrado',
            'auth/wrong-password': 'Contraseña incorrecta',
            'auth/email-already-in-use': 'El correo ya está registrado',
            'auth/weak-password': 'La contraseña es muy débil',
            'auth/too-many-requests': 'Demasiados intentos. Intenta más tarde.'
        };

        messageDiv.textContent = messages[errorCode] || 'Error desconocido';
        messageDiv.style.display = 'block';
        
        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }
});