function reservas() {

    var cliente = document.getElementById("cliente").Value;
    var telefono = document.getElementById("telefono").Value;
    var cancha = document.getElementById("cancha").Value;
    var cantidad = document.getElementById("cantidad").Value;
    var fecha = document.getElementById("fecha").Value;
    var hora = document.getElementById("hora").Value;
    var tiempo = document.getElementById("tiempo").Value;

    if (cliente == "")
        alert("Por favor, ingresa un correo")

    if (telefono == "")
        alert("Por favor, ingresa contraseña")

    if (cancha == "0")
        alert("Por favor, ingresa un rol")

    if (cantidad == "")
        alert("Por favor, ingresa un rol")

    if (fecha == "")
        alert("Por favor, ingresa contraseña")

    if (hora == "")
        alert("Por favor, ingresa contraseña")

    if (tiempo == "")
        alert("Por favor, ingresa contraseña")


    if (cliente == "Willian Perez" && telefono == "3125492304" && cancha == "1" && cantidad == "2" && fecha == "19/06/2022" && hora == "20:00" && tiempo == "00:30") {
        window.alert("Reserva registrada con exito");
    } else(

        alert("Reserva agendada con exito")
    )


}