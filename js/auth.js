document.addEventListener('DOMContentLoaded', () => {
  // Referencia a los formularios
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  
  // Login
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      window.location.href = "index.html";
    } catch (error) {
      showError('login-message', error.code);
    }
  });

  // Registro
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = registerForm['register-name'].value;
    const email = registerForm['register-email'].value;
    const password = registerForm['register-password'].value;

    try {
      // Crear usuario
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      
      // Guardar datos adicionales en Firestore
      await db.collection('users').doc(userCredential.user.uid).set({
        name: name,
        email: email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });

      showSuccess('register-message', '¡Registro exitoso! Redirigiendo...');
      setTimeout(() => window.location.href = "index.html", 1500);
    } catch (error) {
      showError('register-message', error.code);
    }
  });

  // Mostrar errores
  function showError(elementId, errorCode) {
    const messages = {
      'auth/invalid-email': 'Correo electrónico inválido',
      'auth/user-not-found': 'Usuario no registrado',
      'auth/wrong-password': 'Contraseña incorrecta',
      'auth/email-already-in-use': 'El correo ya está registrado',
      'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres'
    };
    
    const element = document.getElementById(elementId);
    element.textContent = messages[errorCode] || "Error desconocido";
    element.style.display = 'block';
  }

  // Mostrar éxito
  function showSuccess(elementId, message) {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.style.display = 'block';
  }
});
