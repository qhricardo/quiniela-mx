document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    await firebase.auth().signInWithEmailAndPassword(
      document.getElementById('email').value,
      document.getElementById('password').value
    );
    window.location.href = "index.html"; // Redirección corregida
  } catch (error) {
    document.getElementById('form-message').textContent = 
      error.code === 'auth/wrong-password' ? "Contraseña incorrecta" : "Usuario no encontrado";
  }
});
