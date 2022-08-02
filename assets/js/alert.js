let formulario = (document.getElementById('enviar'));


function Enviar(){

    if(formulario === true){
        swal("Tu mensaje se envió correctamente", "success");
    }
    else{
        swal("Algo salió mal", "danger");
    }
}