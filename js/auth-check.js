firebase.auth().onAuthStateChanged((user) => {
  if (!user && window.location.pathname.includes("index.html")) {
    window.location.href = "login.html";
  }
});
