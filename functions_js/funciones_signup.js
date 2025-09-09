// Validaciones y registro para el formulario de sign up
function registrarse() {
    // Obtener valores
    const nombres = document.querySelector('.name_lastname #inputEmail4').value.trim();
    const apellidos = document.querySelector('.name_lastname #inputPassword4').value.trim();
    const email = document.querySelector('.email_phone #inputEmail4').value.trim();
    const telefono = document.querySelector('.email_phone #inputPassword4').value.trim();
    const estrato = document.querySelector('.estrato_dob_sangre #inputAddress').value.trim();
    const fechaNacimiento = document.querySelector('.estrato_dob_sangre #inputAddress2').value;
    const grupoSanguineo = document.querySelector('.estrato_dob_sangre select').value;
    const genero = document.querySelector('input[name="gridRadios"]:checked').nextElementSibling.textContent.trim();
    
    // Actividades favoritas
    const actividades = Array.from(document.querySelectorAll('.check_actv_fav .form-check-input:checked'))
        .map(chk => chk.nextElementSibling.textContent.trim());

    // Expresiones regulares
    const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$/;
    const apellidoRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$/;
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const telefonoRegex = /^\d{7,10}$/;
    const estratoRegex = /^[1-6]$/;

    // Validaciones
    if (!nombreRegex.test(nombres)) {
        alert('Ingrese un nombre válido (solo letras, mínimo 2 caracteres).');
        return;
    }
    if (!apellidoRegex.test(apellidos)) {
        alert('Ingrese un apellido válido (solo letras, mínimo 2 caracteres).');
        return;
    }
    if (!emailRegex.test(email)) {
        alert('Ingrese un email válido.');
        return;
    }
    if (!telefonoRegex.test(telefono)) {
        alert('Ingrese un teléfono válido (7-10 dígitos).');
        return;
    }
    if (!estratoRegex.test(estrato)) {
        alert('Estrato debe ser un número entre 1 y 6.');
        return;
    }
    if (!fechaNacimiento) {
        alert('Seleccione la fecha de nacimiento.');
        return;
    }
    if (grupoSanguineo === 'Select') {
        alert('Seleccione el grupo sanguíneo.');
        return;
    }
    if (!genero) {
        alert('Seleccione el género.');
        return;
    }
    if (actividades.length === 0) {
        alert('Seleccione al menos una actividad favorita.');
        return;
    }

    // Mostrar datos ingresados
    let info = `Nombres: ${nombres}\n` +
        `Apellidos: ${apellidos}\n` +
        `Email: ${email}\n` +
        `Teléfono: ${telefono}\n` +
        `Estrato: ${estrato}\n` +
        `Fecha de Nacimiento: ${fechaNacimiento}\n` +
        `Grupo Sanguíneo: ${document.querySelector('.estrato_dob_sangre select option:checked').textContent}\n` +
        `Género: ${genero}\n` +
        `Actividades Favoritas: ${actividades.join(', ')}`;
    alert(info);
}

function cancelar(event) {
    event.preventDefault();
    window.location.href = 'menu_admin.html';
}
