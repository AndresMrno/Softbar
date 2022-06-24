

function registro (){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
	var fecha = document.getElementById("fecha").value;
    var edad = document.getElementById("edad").value;
    var rol = document.getElementById("rol").value;
	var ciudad = document.getElementById("ciudad").value;
    var direccion = document.getElementById("direccion").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
	var contraseña = document.getElementById("contraseña").value;
	var contraseña1 = document.getElementById("contraseña1").value;


    if(nombre=="")
    alert("Por favor, ingresa un correo")

	if(apellido=="")
    alert("Por favor, ingresa un correo")

    if(fecha=="")
    alert("Por favor, ingresa un correo")

    if(edad<="17")
    alert("Por favor, tiene que ser mayor de edad")
    
    if(rol=="0")
    alert("Por favor, ingresa contraseña")

    if(ciudad=="0")
        alert("Por favor, ingresa un rol")
    
    if(direccion=="")
        alert("Por favor, ingresa un rol")

    if(telefono=="")
        alert("Por favor, ingresa un rol")

    if(correo=="")
        alert("Por favor, ingresa un rol")

    if(contraseña=="")
        alert("Por favor, ingresa un rol")
    
    if(contraseña1=="")
        alert("Por favor, ingresa un rol")



        if ( nombre == "Wilman Oswaldo " && apellido == "Perez Garcia" && fecha == "20/05/1980" && edad =="42" && rol=="1" && ciudad=="1" && direccion=="KR 68 #48-80" && telefono=="3125492304" && correo=="Wilman21@gmail.com" && contraseña=="wilman22" && contraseña1=="wilman22"){
            window.alert ("INGRESO EXITOSO")
            return false;
        }

            
            // deshabilita cuando cumpla tres intentos es decir llegue a cero opciones
            if( attempt == 0){
            document.getElementById("correo").disabled = true;
            document.getElementById("contraseña").disabled = true;
            document.getElementById("rol").disabled = true;
            document.getElementById("ingresar").disabled = true;
            return false;
            }
            }
            
