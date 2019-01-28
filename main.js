


function validarFormulario(){


    //var expresionRegularNombre = new RegExp('[0-9]');

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var contratacion = document.getElementById("contratacion").value;
    var telefono = document.getElementById("telefono").value;
    var sueldo = document.getElementById("salario").value;
    var contrasenia = document.getElementById("contrasenia").value;


    if(!validarNombre(nombre))
        alert("error en el nombre");
    
    if(!validarNombre(apellido))
        alert("error en el apellido");

    if(!validarEmail(email))
        alert("error en el correo");
    
    if(!valirFecha(contratacion))
        alert("error en la fecha de contrtacion");

    if(!valirTelefono(telefono))
        alert("error en el telefono");

    if(sueldo < 858,55 || sueldo > 12.000)
        alert("error en el sueldo");

    if(!validarContrasenia(contrasenia))
        alert("error en el telefono");
}

function validarNombre(nombre){

    var expresionRegularNombre = new RegExp('^[A-Za-z]{2,15}');


    if(expresionRegularNombre.test(nombre)){
        //alert("xd");
        return true;
    }else{
        //alert("error en el nombre");
        return false;
    }


}

function validarEmail(email){

    var expresionRegularNombre = new RegExp('@{1}.{1}');

    if(expresionRegularNombre.test(email)){
        //alert("xd");
        return true;
    }else{
        //alert("error en el nombre");
        return true;
    }
    


}


function valirFecha(contratacion){

    var fechaActual = new Date();
    var fechaContrato = new Date(contratacion);

    if(fechaActual.getTime() < fechaContrato.getTime()){
        alert("lolo erroe fecha");
        return false;
    }

    return true;
}

function valirTelefono(telefono){

    var expresionRegularTelefono = new RegExp('^[6-7]{1}+[0-9]{8}');


    if(expresionRegularTelefono.test(telefono)){
        //alert("xd");
        return true;
    }else{
        //alert("error en el nombre");
        return false;
    }

}

function validarContrasenia(contrasenia){

    var expresionRegularContrasenia = new RegExp('+[a-z]+[A-Z]+[0-9]{8,16}+[0-9]{8}');

    

}
