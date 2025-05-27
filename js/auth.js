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

function traducirError(errorCode) {
  const errores = {
    'auth/invalid-email': 'Correo electrónico inválido',
    'auth/user-not-found': 'Usuario no registrado',
    'auth/wrong-password': 'Contraseña incorrecta',
    'auth/too-many-requests': 'Demasiados intentos. Intenta más tarde.'
  };
  return errores[errorCode] || "Error al iniciar sesión";
}
