// Obtener los botones
const boton1 = document.getElementById('button1');
const boton2 = document.getElementById('button2');
const boton3 = document.getElementById('button3');
const boton4 = document.getElementById('button4');
const boton5 = document.getElementById('button5');
const boton6 = document.getElementById('button6');

console.log("toco");
// Agregar eventos de clic a los botones
boton1.addEventListener('click', function () {
  boton1.classList.add('active'); // Activar el botón 1
  boton2.classList.remove('active'); // Desactivar el botón 2
  boton3.classList.remove('active'); // Desactivar el botón 3
  boton4.classList.remove('active'); // Desactivar el botón 4
  boton5.classList.remove('active'); // Desactivar el botón 5
  boton6.classList.remove('active'); // Desactivar el botón 6
  aside.classList.remove("aside-visible");
});

boton2.addEventListener('click', function () {
  boton1.classList.remove('active'); // desactivar el botón 1
  boton2.classList.add('active'); // activar el botón 2
  boton3.classList.remove('active'); // Desactivar el botón 3
  boton4.classList.remove('active'); // Desactivar el botón 4
  boton5.classList.remove('active'); // Desactivar el botón 5
  boton6.classList.remove('active'); // Desactivar el botón 6
  aside.classList.remove("aside-visible");
});
boton3.addEventListener('click', function () {
  boton1.classList.remove('active'); // Desactivar el botón 1
  boton2.classList.remove('active'); // Desactivar el botón 2
  boton3.classList.add('active'); // activar el botón 3
  boton4.classList.remove('active'); // Desactivar el botón 4
  boton5.classList.remove('active'); // Desactivar el botón 5
  boton6.classList.remove('active'); // Desactivar el botón 6
  aside.classList.remove("aside-visible");
});

boton4.addEventListener('click', function () {
  boton1.classList.remove('active'); // desactivar el botón 1
  boton2.classList.remove('active'); // Desactivar el botón 2
  boton3.classList.remove('active'); // Desactivar el botón 3
  boton4.classList.add('active'); // activar el botón 4
  boton5.classList.remove('active'); // Desactivar el botón 5
  boton6.classList.remove('active'); // Desactivar el botón 6
  aside.classList.remove("aside-visible");
});
boton5.addEventListener('click', function () {
  boton1.classList.remove('active'); // desactivar el botón 1
  boton2.classList.remove('active'); // Desactivar el botón 2
  boton3.classList.remove('active'); // Desactivar el botón 3
  boton4.classList.remove('active'); // Desactivar el botón 4
  boton5.classList.add('active'); // activar el botón 5
  boton6.classList.remove('active'); // Desactivar el botón 6
  aside.classList.remove("aside-visible");
});
boton6.addEventListener('click', function () {
  boton1.classList.remove('active'); // desactivar el botón 1
  boton2.classList.remove('active'); // Desactivar el botón 2
  boton3.classList.remove('active'); // Desactivar el botón 3
  boton4.classList.remove('active'); // Desactivar el botón 4
  boton5.classList.remove('active'); // desactivar el botón 5
  boton6.classList.add('active'); // activar el botón 6
  aside.classList.remove("aside-visible");
});

//despliega receta1
const btnreceta1 = document.getElementById('btn-receta1');
const receta1 = document.getElementById('texto-receta');
btnreceta1.addEventListener('click', function () {
  if (receta1.style.display === 'none' || receta1.style.display === '') {
    receta1.style.display = 'block';
  } else {
    receta1.style.display = 'none';
  }

});
//despliega receta2
const btnreceta2 = document.getElementById('btn-receta2');
const receta2 = document.getElementById('texto-receta2');
btnreceta2.addEventListener('click', function () {
  if (receta2.style.display === 'none' || receta2.style.display === '') {
    receta2.style.display = 'block';
  } else {
    receta2.style.display = 'none';
  }

});

//despliega receta3
const btnreceta3 = document.getElementById('btn-receta3');
const receta3 = document.getElementById('texto-receta3');
btnreceta3.addEventListener('click', function () {
  if (receta3.style.display === 'none' || receta3.style.display === '') {
    receta3.style.display = 'block';
  } else {
    receta3.style.display = 'none';
  }

});

//despliega receta4
const btnreceta4 = document.getElementById('btn-receta4');
const receta4 = document.getElementById('texto-receta4');
btnreceta4.addEventListener('click', function () {
  if (receta4.style.display === 'none' || receta4.style.display === '') {
    receta4.style.display = 'block';
  } else {
    receta4.style.display = 'none';
  }

});

//despliega receta5
const btnreceta5 = document.getElementById('btn-receta5');
const receta5 = document.getElementById('texto-receta5');

btnreceta5.addEventListener('click', function () {
  if (receta5.style.display === 'none' || receta5.style.display === '') {
    receta5.style.display = 'block';
  } else {
    receta5.style.display = 'none';
  }

});


//despliega historia
const btnhistoria = document.getElementById('btn-historia');
const textohistoria = document.getElementById('texto-historia');
btnhistoria.addEventListener('click', function () {
  if (textohistoria.style.display === 'none' || textohistoria.style.display === '') {
    textohistoria.style.display = 'block';
  } else {
    textohistoria.style.display = 'none';
  }

});






//valida datos del formulario
function validarFormulario() {
  let nombre = document.getElementById("Nombre").value.trim()
  let correo = document.getElementById("Correo_electronico").value.trim()
  let incompleto = false;

  Nombre.style.borderColor = "black";
  Correo_electronico.style.borderColor = "black";

  if (nombre === "") {
    marcarIncompleto(Nombre);
  }

  if (correo === "") {
    marcarIncompleto(Correo_electronico);
  }

  if (incompleto === true) {
    alert("Complete el formulario")
    return false;
  }


  function marcarIncompleto(item) {
    item.style.borderColor = "red";
    incompleto = true;
  }

  return true;

}