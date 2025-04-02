// Función para validar el formulario de registro
function registry() {
    console.log("Función registry llamada");
    // Obtener los valores de los campos
    const username = document.getElementById("username").value.trim();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const retypePassword = document.getElementById("retype-password").value;

    // Validar el nombre de usuario
    if (!username) {
        alert("Por favor, ingrese un nombre de usuario.");
        return false;
    }

    // Validar el nombre completo
    if (name === "") {
        alert("Por favor, ingrese su nombre completo.");
        return false;
    }

    // Validar el email
    if (email === "") {
        alert("Por favor, ingrese un email válido.");
        return false;
    }

    // Validar la contraseña
    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return false;
    }

    // Validar que las contraseñas coincidan
    if (password !== retypePassword) {
        alert("Las contraseñas no coinciden.");
        return false;
    }

    // Si todas las validaciones pasan
    alert("Registro exitoso!");
    return true; // Puedes cambiar esto para enviar el formulario si es necesario

    
}




