


function validarFormulario(){


    var expresionRegularNombre = new RegExp('^[A-Za-z]{2,15}$');
    //var expresionRegularNombre = new RegExp('[0-9]');
    var nombre = document.getElementById("nombre").value;
    if(expresionRegularNombre.test(nombre)){
        alert("xd");
    }else{
        alert("error en el nombre");
    }




}