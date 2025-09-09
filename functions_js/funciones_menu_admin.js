function login(event){
    event.preventDefault();

    let correo = document.getElementById("staticEmail");
    let password = document.getElementById("inputPassword");
    // Expresiones regulares para validar el correo y la contraseña

    let contra = "Password123";
    let regex_correo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let regex_password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (regex_correo.test(correo.value) && password.value === contra) {
        // Credenciales válidas
        alert("Inicio de sesión exitoso");
        window.location.href="index.html";
    } else {
        // Credenciales inválidas
        alert("Correo o contraseña incorrectos, pendejo");
    }
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

// function registrarse(){
//     alert("Nombres registrados:");
//     alert("Apellidos registrados:");
//     alert("Emal registrado:");
//     alert("Telefono registrado:");
//     alert("Nombres registrados:");
// }