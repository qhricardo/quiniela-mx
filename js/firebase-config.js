// Configuración de Firebase (¡Reemplaza con tus datos!)
const firebaseConfig = {
  apiKey: "AIzaSyAAtOcJznIwyH0ZMXXiR4WSGWMC6UcnVqE",                 // Ej: "AIzaSyD123..."
  authDomain: "quiniela-mx-9ef52.firebaseapp.com", // Ej: "quiniela-mx-12345.firebaseapp.com"
  projectId: "quiniela-mx-9ef52",               // Ej: "quiniela-mx-12345"
  storageBucket: "quiniela-mx-9ef52.firebasestorage.app",  // Ej: "quiniela-mx-12345.appspot.com"
  messagingSenderId: "290980633372",         // Ej: "1234567890"
  appId: "1:290980633372:web:c4b32a64e8e7d2ca6978d9D"                        // Ej: "1:1234567890:web:abcd1234..."
};
firebase.auth().onAuthStateChanged((user) => {
  const currentPage = window.location.pathname.split('/').pop();
  if (!user && currentPage !== 'login.html') {
    window.location.href = 'login.html';
  }
});
// Inicialización segura
if (typeof firebase !== 'undefined') {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
} else {
  console.error("Error: Firebase SDK no cargado");
}

// Exporta el módulo de autenticación
const auth = firebase.auth();
