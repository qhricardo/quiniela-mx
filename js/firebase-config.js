// Configuración de Firebase (reemplaza con tus datos)
const firebaseConfig = {
    apiKey: "AIzaSyAAtOcJznIwyH0ZMXXiR4WSGWMC6UcnVqE",
    authDomain: "quiniela-mx-9ef52.firebaseapp.com",
    projectId: "quiniela-mx-9ef52",
    storageBucket: "quiniela-mx-9ef52.appspot.com",
    messagingSenderId: "290980633372",
    appId: "1:290980633372:web:c4b32a64e8e7d2ca6978d9"
};

// Inicializa Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Referencia al servicio de autenticación
const auth = firebase.auth();
