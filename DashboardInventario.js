function registrarProducto(){
    var producto = document.getElementById("producto").value;
    var cantidad =document.getElementById("cantidad").value;
    var fecha = document.getElementById("fecha").value;
    var fecha1 = document.getElementById("fecha1").value;
    var notas = document.getElementById("notas").value;
    var categoria = document.getElementById("categoria").value;
    var tipoProducto =document.getElementById("tipoProducto").value;


    if(producto=="")
    alert("Por favor, ingrese nombre del producto")
    
    if(cantidad=>"")
    alert("Por favor, ingrese cantidad del producto")

    if(fecha=="")
        alert("Por favor, ingresa fecha de ingreso del producto")

    if(fecha1=="")
        alert("Por favor, ingrese fecha de vencimiento del producto")

    if(notas=="")
        alert("Por favor, ingrese novedad del producto")

    if(notas=="")
        alert("Por favor, ingrese categoria del producto")
    
    if(tipoProducto=="")
        alert("Por favor, ingrese tipo del producto")


    if ( producto == "Cerveza Poker" && cantidad == "25" && fecha == "20/05/2022" && fecha1=="25/07/2024" && notas=="Se encuentra activo" && categoria =="1" && tipoProducto=="1"){
            window.alert ("INGRESO EXITOSO")

            return false;
          
        }
}

