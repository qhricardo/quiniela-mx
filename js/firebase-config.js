// Configuración de Firebase (reemplaza con tus datos)
const firebaseConfig = {
    apiKey: "AIzaSyA1x...",
    authDomain: "quiniela-mx.firebaseapp.com",
    projectId: "quiniela-mx",
    storageBucket: "quiniela-mx.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcd1234..."
};

// Inicializa Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Referencia al servicio de autenticación
const auth = firebase.auth();