function editar() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var direccion = document.getElementById("direccion").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;


    if (nombre == "")
        alert("Por favor, ingrese su nombre")

    if (apellido == "")
        alert("Por favor, ingrese su apellido")

    if (direccion == "")
        alert("Por favor, ingrese su direccion")

    if (telefono == "")
        alert("Por favor, ingrese su telefono")

    if (correo == "")
        alert("Por favor, ingrese su correo")



    if (nombre == "Andres" && apellido == "Moreno" && direccion == "Calle" && telefono == "3134545746" && correo == "andresfel2108@gmail.com") {
        window.alert("DATOS CAMBIADOS CON EXITO")
        return false;
    }


    // deshabilita cuando cumpla tres intentos es decir llegue a cero opciones
    if (attempt == 0) {
        document.getElementById("correo").disabled = true;
        document.getElementById("contraseña").disabled = true;
        document.getElementById("rol").disabled = true;
        document.getElementById("ingresar").disabled = true;
        return false;
    }
}


function compra() {
    var nombre1 = document.getElementById("nombre1").value;
    var apellido1 = document.getElementById("apellido1").value;
    var direccion1 = document.getElementById("direccion1").value;
    var telefono1 = document.getElementById("telefono1").value;
    var metodo1 = document.getElementById("metodo1").value;


    if (nombre1 == "")
        alert("Por favor, ingrese su nombre")

    if (apellido1 == "")
        alert("Por favor, ingrese su apellido")

    if (direccion1 == "")
        alert("Por favor, ingrese su direccion")

    if (telefono1 == "")
        alert("Por favor, ingrese su telefono")

    if (metodo1 == "")
        alert("Por favor, ingrese metodo de pago")



    if (nombre1 == "Andres" && apellido1 == "Moreno" && direccion1 == "Calle" && telefono1 == "3134545746" && metodo1 == "2") {
        window.location = "moduloDomicilio.html?nombre1=Andres";
        window.alert("Compra realizada")
        return false;
    }
}