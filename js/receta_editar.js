
let cadena = location.search;//cadena con simbolos & y =


let datos = new URLSearchParams(cadena);



let resultado = {};
for (const [nombre, valor] of datos) {
    resultado[nombre] = valor;
}


document.getElementById("id").value = resultado["id"]
document.getElementById("nombre").value = resultado["nombre"]
document.getElementById("descripcion").value = resultado["descripcion"]
 document.getElementById("rec").value = resultado["receta"]
document.getElementById("imagen").value = resultado["imagen"]


function modificar() {
    let id = document.getElementById("id").value
    let nombre_ingresado = document.getElementById("nombre").value
    let descripcion_ingresado = document.getElementById("descripcion").value
    let receta_ingresado = document.getElementById("rec").value
    let imagen_ingresado = document.getElementById("imagen").value
    // console.log(receta_ingresado);
    let postre = {
        nombre: nombre_ingresado,
        descripcion: descripcion_ingresado,
        receta: receta_ingresado,
        imagen: imagen_ingresado
        
    }

    var options = {
        body: JSON.stringify(postre),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch('https://hertecn.pythonanywhere.com/editar/' + id, options)
        .then(function () {
            alert("Registro modificado")
            window.location.href = "../tabla_recetas.html";
        })
        .catch(err => {
            console.error(err);
            alert("Error al Modificar")
        })
}
