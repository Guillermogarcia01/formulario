


function validarFormulario(){


    //var expresionRegularNombre = new RegExp('[0-9]');

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var contratacion = document.getElementById("contratacion").value;
    var telefono = document.getElementById("telefono").value;
    var sueldo = document.getElementById("salario").value;
    var contrasenia = document.getElementById("contrasenia").value;
    var contraseniaConfirmacion = document.getElementById("contraseniaConfirmacion").value;
    var todoCorrecto = true;
    document.getElementById("nombreError").style.visibility = "hidden";
    document.getElementById("apellidoError").style.visibility = "hidden";
    document.getElementById("emailError").style.visibility = "hidden";
    document.getElementById("fechaContratoError").style.visibility = "hidden";
    document.getElementById("telefonoError").style.visibility = "hidden";
    document.getElementById("salarioError").style.visibility = "hidden";
    document.getElementById("contraseniaError").style.visibility = "hidden";
    document.getElementById("contraseniaConfirmacionError").style.visibility = "hidden";
    document.getElementById("usuarioCreado").style.visibility = "hidden";


    if(!validarNombre(nombre)){
        document.getElementById("nombreError").style.visibility = "visible";
        document.getElementById("nombreError").innerHTML = "Error en el nombre";
        todoCorrecto = false;
    }
    
    if(!validarNombre(apellido)){
        document.getElementById("apellidoError").style.visibility = "visible";
        document.getElementById("apellidoError").innerHTML = "Error en el apellido";
        todoCorrecto = false;
    }

    if(!validarEmail(email)){
        document.getElementById("emailError").style.visibility = "visible";
        document.getElementById("emailError").innerHTML = "Error en el correo";
        todoCorrecto = false;
    }
    
    if(!valirFecha(contratacion) || contratacion == ""){
        document.getElementById("fechaContratoError").style.visibility = "visible";
        document.getElementById("fechaContratoError").innerHTML = "Error en la contrtacion";
        todoCorrecto = false;
    }
    
    if(!valirTelefono(telefono) && telefono != ""){
        document.getElementById("telefonoError").style.visibility = "visible";
        document.getElementById("telefonoError").innerHTML = "Error en el telefono";
        todoCorrecto = false;
    }

    if(parseInt(sueldo) < 858.55 || parseInt(sueldo) > 12000 || sueldo == "") {
        document.getElementById("salarioError").style.visibility = "visible";
        document.getElementById("salarioError").innerHTML = "Error en el salario";
        todoCorrecto = false;
    }

    if(!validarContrasenia(contrasenia)){
        document.getElementById("contraseniaError").style.visibility = "visible";
        document.getElementById("contraseniaError").innerHTML = "error en el formato de la contraseña";
        todoCorrecto = false;
    }

    if(contrasenia != contraseniaConfirmacion){
        document.getElementById("contraseniaConfirmacionError").style.visibility = "visible";
        document.getElementById("contraseniaConfirmacionError").innerHTML = "las contraseñas no coinciden";
        todoCorrecto = false;
    }

    if(todoCorrecto){
        setCookie('cookieEmail', email);
        setCookie('cookieContrasenia', contrasenia);
        document.getElementById("usuarioCreado").style.visibility = "visible";
        document.getElementById("usuarioCreado").innerHTML = "Usuario creado correctamente";

    }
    
}

function setCookie(cname, cvalue) {
    var exdays = 1;
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function validarNombre(nombre){

    var expresionRegularNombre = new RegExp('^[A-Za-z]{2,15}$');


    if(expresionRegularNombre.test(nombre)){
        return true;
    }else{
        return false;
    }


}

function validarEmail(email){

    var expresionRegularNombre = new RegExp('^[a-zA-Z0-9]*?.+@pufo\.es$');

    if(expresionRegularNombre.test(email)){
        return true;
    }else{
        return false;
    }
    


}


function valirFecha(contratacion){

    var fechaActual = new Date();
    var fechaContrato = new Date(contratacion);

    if(fechaActual.getTime() < fechaContrato.getTime()){
        return false;
    }

    return true;
}

function valirTelefono(telefono){

    var expresionRegularTelefono = new RegExp('^[6|7]{1}[0-9]{8}$');


    if(expresionRegularTelefono.test(telefono)){
        return true;
    }else{
        return false;
    }

}

function validarContrasenia(contrasenia){

    var expresionRegularContrasenia = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#.?¿!@$%^&*-¡]).{8,}$');
    if(expresionRegularContrasenia.test(contrasenia)){
        return true;
    }else{
        return false;
    }
    

}


function logearse(){
    location.href ="login.html";
}