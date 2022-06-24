function agregarUsuario(){
                var nombreU = document.getElementById("nombreU").value;
                var apellidoU=document.getElementById("apellidoU").value;
                var fecha = document.getElementById("fecha").value;
                var edad = document.getElementById("edad").value;
                var direccionU = document.getElementById("direccionU").value;
                var telefonoU = document.getElementById("telefonoU").value;
                var rolU = document.getElementById("rolU").value;
            
                if(nombreU=="")
                alert("Por favor, ingresar el nombre del usuario")
                
                if(apellidoU=="")
                alert("Por favor, ingresar el apellido del usuario")
            
                if(fecha=="")
                    alert("Por favor, ingresar fecha de nacimiento del usuario del usuario")
                
                if(edad=="")
                alert("Por favor, ingresar la edad del usuario")
                
                if(direccionU=="")
                alert("Por favor, ingresar la dirección del usuario")

                if(telefonoU=="")
                alert("Por favor, ingresar el número del usuario")

                if(rolU=="")
                alert("Por favor, ingresar el rol del usuario")
            
            
                    if ( nombreU == "Daniel Santiago" && apellidoU == "Guerrero Salamanca" && fecha == "02/11/1992" && edad =="30" && direccionU =="cll 14 45 B #60-28" && telefonoU=="3206542312" && rolU =="2" ){
                        window.alert ("Usuario registrado con exito")
                        return false;
                    }
                    else(
                        window.alert("Registre datos validos")
                    )
                }

function editarUsuario(){
                    var nombre = document.getElementById("nombre").value;
                    var apellido=document.getElementById("apellido").value;
                    var fecha = document.getElementById("fecha").value;
                    var edad = document.getElementById("edad").value;
                    var direccion = document.getElementById("direccion").value;
                    var telefono = document.getElementById("telefono").value;
                    var rol = document.getElementById("rol").value;
                
                    if(nombre=="")
                    alert("Por favor, ingresar el nombre del usuario")
                    
                    if(apellido=="")
                    alert("Por favor, ingresar el apellido del usuario")
                
                    if(fecha=="")
                        alert("Por favor, ingresar fecha de nacimiento del usuario del usuario")
                    
                    if(edad=="")
                    alert("Por favor, ingresar la edad del usuario")
                    
                    if(direccion=="")
                    alert("Por favor, ingresar la dirección del usuario")
    
                    if(telefono=="")
                    alert("Por favor, ingresar el número del usuario")
    
                    if(rol=="")
                    alert("Por favor, ingresar el rol del usuario")
                
                
                        if ( nombre == "Daniel Santiago" && apellido == "Guerrero Salamanca" && fecha == "02/11/1992" && edad =="30" && direccion =="cll 14 45 B #60-28" && telefono=="3206542312" && rol =="2" ){
                            window.alert ("Usuario registrado con exito")
                            return false;
                        }
                        else(
                            window.alert("Registre datos validos")
                        )
                    }


    


