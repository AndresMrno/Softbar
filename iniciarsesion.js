function validate() {
    //validacion de usuario
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var rol = document.getElementById("rol").value;

    //verificacion de campos
    if (email == "")
        alert("Digite su nombre de usuario o documento")

    if (password == "")
        alert("Digite su contraseña")

    if (rol == "")
        alert("Por favor seleccione su rol")


    if (email == "andresfel2108@gmail.com" && password == "andres21" && rol == "Cliente") {
        alert("Ingreso exitoso");
        window.location.href = "vistaCliente.html";
        return false;
    }

    if (email == "andres@gmail.com" && password == "felipe21" && rol == "Empleado") {
        alert("Ingreso exitoso");
        window.location.href = "Dashboard.html";
        return false;
    }

    if (email == "felipeortiz@gmail.com" && password == "andres22" && rol == "Administrador") {
        alert("Ingreso exitoso");
        window.location.href = "Dashboard.html";
        return false;
    } else(
        window.alert("INGRESE DATOS REGISTRADOS")
    )

}