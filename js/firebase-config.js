// Configuración de Firebase (¡Reemplaza con tus datos!)
const firebaseConfig = {
  apiKey: "AIzaSyAAtOcJznIwyH0ZMXXiR4WSGWMC6UcnVqE",                 
  authDomain: "quiniela-mx-9ef52.firebaseapp.com", 
  projectId: "quiniela-mx-9ef52",              
  storageBucket: "quiniela-mx-9ef52.firebasestorage.app",  
  messagingSenderId: "290980633372",         
  appId: "1:290980633372:web:c4b32a64e8e7d2ca6978d9D"                      
};

// Inicialización
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Inicializa Firestore con compatibilidad
const db = firebase.firestore();

// Opcional: Configuración adicional
db.settings({ timestampsInSnapshots: true }); // Para compatibilidad

export { db }; // Si usas módulos
