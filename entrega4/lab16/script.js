function validarForm(){
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let contra = document.getElementById("contra").value;
    let imagen = document.getElementById("imagen").value;

    if(nombre=="" || email=="" || contra=="" || imagen==""){
        alert("Todos los campos son obligatorios")
        return false;
    }
    return true;
}

function mostrarImg(event){
    let imagen=document.getElementById('ver-img');
    imagen.src=URL.createObjectURL(event.target.files[0]);
}
