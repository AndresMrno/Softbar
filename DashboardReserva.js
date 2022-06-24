function Reserva (){

    var clienteR = document.getElementById("clienteR").value;
    var telefonoR = document.getElementById("telefonoR").value;
    var canchaR = document.getElementById("canchaR").value;
    var cantidadR = document.getElementById("cantidadR").value;
    var estadoR = document.getElementById("estadoR").value;
    var fechaR = document.getElementById("fechaR").value;
    var horaR = document.getElementById("horaR").value;
    var tiempoR = document.getElementById("tiempoR").value;

    if( clienteR =="")
    alert("Por favor, ingrese el nombre del cliente")

    if( telefonoR =="")
    alert("Por favor, ingrese el telefono del cliente")

    if( canchaR =="")
    alert("Por favor, ingrese la cancha elegida")

    if( cantidadR =="")
    alert("Por favor, ingrese la cantidad de personas")

    if( estadoR =="")
    alert("Por favor, ingrese el estado de la reserva")

    if( fechaR =="")
    alert("Por favor, ingrese la fecha de la reserva")

    if( horaR =="")
    alert("Por favor, ingrese la hora de la reserva")

    if( tiempoR =="")
    alert("Por favor, ingrese el tiempo de uso de la reserva")

    if ( clienteR == "Willian Perez" && telefonoR == "3125492304" && canchaR == "1" && cantidadR =="3" && estadoR =="1" && fechaR=="21/05/2022" && horaR=="23:30" && tiempoR=="00:30"){
        window.alert ("Reserva agregada con exito")
        return false;
    }
    else(
        alert("Ingrese datos validos")
    )
}

function Reserva1 (){

    var clienteR1 = document.getElementById("clienteR1").value;
    var telefonoR1 = document.getElementById("telefonoR1").value;
    var canchaR1 = document.getElementById("canchaR1").value;
    var cantidadR1 = document.getElementById("cantidadR1").value;
    var estadoR1 = document.getElementById("estadoR1").value;
    var fechaR1 = document.getElementById("fechaR1").value;
    var horaR1 = document.getElementById("horaR1").value;
    var tiempoR1 = document.getElementById("tiempoR1").value;

    if( clienteR1 =="")
    alert("Por favor, ingrese el nombre del cliente")

    if( telefonoR1 =="")
    alert("Por favor, ingrese el telefono del cliente")

    if( canchaR1 =="")
    alert("Por favor, ingrese la cancha elegida")

    if( cantidadR1 =="")
    alert("Por favor, ingrese la cantidad de personas")

    if( estadoR1 =="")
    alert("Por favor, ingrese el estado de la reserva")

    if( fechaR1 =="")
    alert("Por favor, ingrese la fecha de la reserva")

    if( horaR1 =="")
    alert("Por favor, ingrese la hora de la reserva")

    if( tiempoR1 =="")
    alert("Por favor, ingrese el tiempo de uso de la reserva")

    if ( clienteR1 == "Willian Perez" && telefonoR1 == "3125492304" && canchaR1 == "1" && cantidadR1 =="3" && estadoR1 =="1" && fechaR1 =="21/05/2022" && horaR1 =="23:30" && tiempoR1 =="00:30"){
        window.alert ("Reserva editada con exito")
        return false;
    }
    else(
        alert("Ingrese datos validos")
    )
}