// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAtOcJznIwyH0ZMXXiR4WSGWMC6UcnVqE",
  authDomain: "quiniela-mx-9ef52.firebaseapp.com",
  databaseURL: "https://quiniela-mx-9ef52-default-rtdb.firebaseio.com",
  projectId: "quiniela-mx-9ef52",
  storageBucket: "quiniela-mx-9ef52.firebasestorage.app",
  messagingSenderId: "290980633372",
  appId: "1:290980633372:web:c4b32a64e8e7d2ca6978d9",
  measurementId: "G-9SVDHK680L"
};

// Inicialización segura
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Exporta el módulo de autenticación
const auth = firebase.auth();
