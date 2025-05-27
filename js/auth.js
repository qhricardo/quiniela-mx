document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      window.location.href = "index.html";
    } catch (error) {
      const errorMessage = {
        'auth/user-not-found': 'Usuario no registrado',
        'auth/wrong-password': 'Contraseña incorrecta',
        'auth/invalid-email': 'Correo inválido'
      };
      alert(errorMessage[error.code] || "Error al iniciar sesión");
    }
  });
});
