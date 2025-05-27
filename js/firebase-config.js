// Configuración de Firebase (REEMPLAZA CON TUS DATOS)
const firebaseConfig = {
  apiKey: "AIzaSyAAtOcJznIwyH0ZMXXiR4WSGWMC6UcnVqE",
  authDomain: "quiniela-mx-9ef52.firebaseapp.com",
  projectId: "quiniela-mx-9ef52",
  storageBucket: "quiniela-mx-9ef52.firebasestorage.app",
  messagingSenderId: "290980633372",
  appId: "1:290980633372:web:c4b32a64e8e7d2ca6978d9"
};

// Inicialización segura
if (typeof firebase !== 'undefined') {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // Usa la app ya inicializada
  }
} else {
  console.error("Firebase SDK no está cargado");
}

// Exporta para uso en otros archivos
const auth = firebase.auth();
export { auth };  // Elimina esta línea si no usas módulos ES6
