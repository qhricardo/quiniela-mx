// Verifica el estado de autenticación al cargar cada página
firebase.auth().onAuthStateChanged((user) => {
    const currentPage = window.location.pathname.split('/').pop();
    
    // Si el usuario no está logueado y no está en la página de login
    if (!user && currentPage !== 'login.html') {
        window.location.href = 'login.html';
    }
    
    // Si el usuario está logueado y está en la página de login
    if (user && currentPage === 'login.html') {
        window.location.href = 'inicio.html';
    }
    
    // Opcional: Mostrar información del usuario en consola
    if (user) {
        console.log('Usuario logueado:', user.email);
    }
});