// Guardar pronósticos
async function guardarPronosticos() {
  const user = firebase.auth().currentUser;
  if (!user) return alert("Debes iniciar sesión");

  const pronosticos = {
    usuario: user.email,
    fecha: firebase.firestore.FieldValue.serverTimestamp(),
    partidos: [
      {
        local: "América",
        visitante: "Guadalajara",
        golesLocal: parseInt(document.getElementById('partido1-local').value),
        golesVisitante: parseInt(document.getElementById('partido1-visitante').value)
      },
      // Repite para los otros 4 partidos...
    ]
  };

  try {
    await db.collection("pronosticos").add(pronosticos);
    alert("¡Guardado en Firestore!");
    console.log("Documento ID: ", docRef.id);
  } catch (error) {
    console.error("Error: ", error);
    alert("Error al guardar: " + error.message);
  }
}

// Cargar pronósticos existentes
async function cargarPronosticos() {
  const user = firebase.auth().currentUser;
  if (!user) return;

  const querySnapshot = await db.collection("pronosticos")
    .where("usuario", "==", user.email)
    .orderBy("fecha", "desc")
    .limit(1)
    .get();

  if (!querySnapshot.empty) {
    const ultimoPronostico = querySnapshot.docs[0].data();
    ultimoPronostico.partidos.forEach((partido, index) => {
      document.getElementById(`partido${index+1}-local`).value = partido.golesLocal;
      document.getElementById(`partido${index+1}-visitante`).value = partido.golesVisitante;
    });
  }
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) cargarPronosticos();
  });
});