
function registrarse() {
    let usuario_ingresado = document.getElementById("usuario").value
    let contraseña_ingresada = document.getElementById("contraseña").value

    let usuar = {
        usuario: usuario_ingresado,
        contraseña: contraseña_ingresada,
        gusta_usuario:"",
    }
    
    var options = {
        body: JSON.stringify(usuar),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    if (usuario_ingresado && contraseña_ingresada){
        
    
    fetch('https://hertecn.pythonanywhere.com/registrarse', options)

        .then(response => {
            if (response.ok) {
                return response.json();
            } else if (response.status === 409) {
                return response.json().then(data => {
                    alert(data.mensaje);
                });
            } else {
                throw new Error('Error en la solicitud al servidor');
            }
        })
        .then(data => {
            if (data) {
                alert(data.mensaje);
            }
        })
        .catch(err => {
            console.error(err);
            alert("Error al procesar la solicitud");
        });
    }else{
        alert("Error Usuario y Contraseña no puede estar vacio");}
}









function iniciar() {
    // let id = document.getElementById("id").value
    let usuario_ingresado = document.getElementById("usuario").value
    let contraseña_ingresado = document.getElementById("contraseña").value
    // console.log(receta_ingresado);
    // console.log(usuario_ingresado);
    let usuar = {
        usuario: usuario_ingresado,
        contraseña: contraseña_ingresado,


    }

    var options = {
        body: JSON.stringify(usuar),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch('https://hertecn.pythonanywhere.com/entrar', options)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Usuario no encontrado');
        })
        .then(data2 => {
          
            const primerElemento = data2[0];
            const usuario = primerElemento.usuario;
            console.log(usuario); // Accede a la propiedad 'usuario'

        // Redirige a otra página y pasa el dato como parámetro en la URL
            window.location.href = "../tabla_recetas.html?usuario=" +usuario;


           
            alert("Sesión iniciada");
            // window.location.href = "../tabla_recetas2.html";
        })
        .catch(err => {
            console.error(err);
            alert("Error al entrar");
        });



}
