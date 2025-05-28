// Verifica autenticación en cada página
firebase.auth().onAuthStateChanged((user) => {
  const currentPage = window.location.pathname.split('/').pop();
  
  // Páginas que no requieren autenticación
  const publicPages = ['login.html', 'register.html'];
  
  if (!user && !publicPages.includes(currentPage)) {
    window.location.href = 'login.html';
  }
  
  if (user && publicPages.includes(currentPage)) {
    window.location.href = 'index.html';
  }
});
