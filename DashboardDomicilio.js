
function agregarDomicilio(){
    var cliente2 = document.getElementById("cliente2").value;
    var telefono2 = document.getElementById("telefono2").value;
    var direccion2 = document.getElementById("direccion2").value;
    var fecha2 = document.getElementById("fecha2").value;
    var tiempo2 = document.getElementById("tiempo2").value;
    var estadoDomicilio2 = document.getElementById("estadoDomicilio2").value;
    var valor2 = document.getElementById("valor2").value;

    if(cliente2="")
    alert("Por favor, escriba el nombre del cliente")

    if(telefono2="")
    alert("Por favor, ingrese el telefono del cliente")

    if(direccion2="")
    alert("Por favor, ingrese la direccion del cliente")

    if(fecha2="")
    alert("Por favor, ingrese la fecha del domicilio")
    
    if(tiempo2="")
    alert("Por favor, ingrese la hora del domicilio")

    if(estadoDomicilio2="")
    alert("Por favor, ingrese el estado del domicilio")

    if(valor2="")
    alert("Por favor, ingrese el valor del domicilio")


    if ( cliente2== "Wilman Perez" && telefono2 == "3125492304" && direccion2== "KR 68 #48-80" && fecha2 =="21/05/2022" && tiempo2=="01:30" && estadoDomicilio2 =="2" && valor2=="50000"){
        window.alert ("Domicilio agregado con exito")
        return false;
    }


}