function mostrarMen(){
    alert("Hola, bienvenidos");
}

const form = document.getElementById("contactform");
form.addEventListener("submit", function(event){
    const nombre = document.getElementById("nombre").value;
    const emain = document.getElementById("email").value;

    if(nombre=="" || email==""){
        alert("Por favor llene todo los campos");
        event.preventDefault;
    }
    else{
        alert("Los datos se registraron correctamente")
    }

});

function validarForm(){

}