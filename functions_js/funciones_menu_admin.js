// Log In: muestra usuario y contraseña por consola
function login(event) {
    event.preventDefault();
    const usuario = document.getElementById("staticEmail").value.trim();
    const password = document.getElementById("inputPassword").value.trim();
    if (!usuario || !password) {
        alert("Por favor ingrese usuario y contraseña.");
        return;
    }
    console.log("Usuario:", usuario);
    console.log("Contraseña:", password);
    alert("Datos enviados a consola.");
}

function logout(){
    alert("Cierre de sesión exitoso");
    window.location.href="login.html";
}

function signup(){
    window.location.href="sign_up.html";
}


// funciones para el sign up//
function cancelar(event){
    event.preventDefault();
    window.location.href="index.html";
}
