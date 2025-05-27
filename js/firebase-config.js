// Configuración de Firebase (reemplaza con tus datos)
const firebaseConfig = {
    apiKey: "AIzaSyAAtOcJznIwyH0ZMXXiR4WSGWMC6UcnVqE",
    authDomain: "quiniela-mx-9ef52.firebaseapp.com",
    projectId: "quiniela-mx-9ef52",
    storageBucket: "quiniela-mx-9ef52.appspot.com",
    messagingSenderId: "290980633372",
    appId: "1:1234567890:web:abcd1234..."
};

// Inicializa Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Referencia al servicio de autenticación
const auth = firebase.auth();
