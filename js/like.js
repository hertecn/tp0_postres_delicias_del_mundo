

function gusto(postreId) {
    let usuario_gusta = document.getElementById("usuario").value
    
    console.log(usuario_gusta)
    console.log(postreId)
    let variable = {
        usuario: usuario_gusta,
        gusta: postreId,
        
    }
  
    var options = {
        body: JSON.stringify(variable),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch('https://hertecn.pythonanywhere.com/gusta', options)
        .then(function () {
            alert("Registro grabado")
            window.location.href = "../tabla_recetas.html";
        })
        .catch(err => {
            console.error(err);
            alert("Error al Grabarr")

        })
}