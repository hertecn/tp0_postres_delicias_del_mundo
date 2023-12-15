let cadena = window.location.search;//cadena con simbolos & y =

let datos = new URLSearchParams(cadena);

let resultado = {};
if (cadena) {
    for (const [nombre, valor] of datos) {
        resultado[nombre] = valor || '';
    }

    document.getElementById("usuario").value = resultado["usuario"]
    // document.getElementById("nombre").value = resultado["nombre"]
} else {
    resultado[usuario] = "";
}



const { createApp } = Vue
createApp({
    data() {
        return {
            recetas: [],
            url: 'https://hertecn.pythonanywhere.com/postres',
            // si el backend esta corriendo local usar localhost 5000(si no lo subieron a pythonanywhere)
            // url: 'http://mcerda.pythonanywhere.com/recetas', // si ya lo subieron a pythonanywhere
            error: false,
            cargando: true,
            /*atributos para el guardar los valores del formulario */
            id: 0,
            nombre: "",
            imagen: "",
            receta: "",
            descripcion: "",

            likes: [],
            urlUsuarios: 'https://hertecn.pythonanywhere.com/todos',
            id_receta: 0,
            valor: "",

            likesPorReceta: {},
        }
    },


    computed: {
        recetasConLikes() {
            const likesPorReceta = {};
            this.likes.forEach(like => {
                if (!likesPorReceta[like.id_receta]) {
                    likesPorReceta[like.id_receta] = like;
                }
            });

            return this.recetas.map(postre => {
                const like = likesPorReceta[postre.id];
                return {
                    ...postre,
                    likeValor: like ? like.valor : null
                };
            });
        }
    },

    methods: {
        fetchData(url) {
            fetch(url)

                .then(response => response.json())

                // if (url === this.url) {
                //     this.recetas = data; // Guardar datos de la tabla recetas
                // } else if (url === this.urlUsuarios) {
                //     this.usuarios = data; // Guardar datos de la tabla usuarios
                // }
                .then(data => {
                    if (url === this.url) {
                        this.recetas = data; // Guardar datos de la tabla recetas
                    } else if (url === this.urlUsuarios) {
                        this.likes = data; // Guardar datos de la tabla usuarios
                        // this.organizarLikesPorReceta();
                    }
                    // this.recetas = data;
                    this.cargando = false


                    // fetch('http://localhost:5000/todos') 
                    //     .then(response => response.json())
                    //     .then(data2 => {

                    //         this.likes = data2;
                    //         const boton_like = document.getElementById('like');
                    //         const span_like = document.getElementById('likeSpan');


                    //         console.log("data2")
                    //         console.log(this.likes)

                    //         console.log("data1")
                    //         console.log(this.recetas)




                    //     })

                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        // organizarLikesPorReceta() {
        //     this.likes.forEach(like => {
        //         if (!this.likesPorReceta[like.id_receta]) {
        //             this.likesPorReceta[like.id_receta] = like.valor;
        //         } else {
        //             this.likesPorReceta[like.id_receta] += like.valor;
        //         }
        //     });
        // },



        logInfo(postre) {
            console.log('Información de la receta:', postre);
        },

        eliminar(id) {
            const url = 'https://hertecn.pythonanywhere.com/borrar/' + id; //   const url = this.url + '/borrar/' + receta;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
                    location.reload();
                })
        },
        grabar() {
            let nombre_ingresado = document.getElementById("nombre").value
            let descripcion_ingresado = document.getElementById("descripcion").value
            let receta_ingresado = document.getElementById("receta").value
            let imagen_ingresado = document.getElementById("imagen").value




            console.log(nombre_ingresado);
            let receta = {
                nombre: nombre_ingresado,
                descripcion: descripcion_ingresado,
                receta: receta_ingresado,
                imagen: imagen_ingresado
            }
            let url = "https://hertecn.pythonanywhere.com/postre"
            var options = {
                body: JSON.stringify(receta),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "../tabla_recetas.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabarr")

                })
        },

        gusto(postreId) {
            let usuario_gusta = document.getElementById("usuario").value

            console.log(usuario_gusta)
            console.log(postreId)
            let variable = {
                usuario: usuario_gusta,
                gusto: postreId,

            }

            var options = {
                body: JSON.stringify(variable),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch('https://hertecn.pythonanywhere.com/gusta', options)
                .then(function () {

                    // window.location.href = "../tabla_recetas2.html";
                })
                .then(function (data) {
                    // 'data' contiene la información recibida desde el servidor (puede ser un objeto JSON)
                    // Puedes manipular 'data' y usarlo para actualizar tu HTML
                    

                    // Configurar la función para restaurar la posición del scroll después de la recarga
                   

                    // Recargar la página
                   
                    window.location.reload();
                    // Por ejemplo, si 'data' es un objeto con un campo 'dato' que quieres mostrar en tu HTML:
                    //  var dato = data.dato;

                    // Aquí puedes actualizar tu HTML con el dato recibido
                    //  document.getElementById('like').innerText = dato; // Cambia 'miElementoHTML' al ID de tu elemento HTML donde quieras mostrar el dato
                })
                .catch(err => {
                    console.error(err);


                })
        },

        enviarGusto(postreId) {
            // Emitir el evento 'gusto' con el dato postreId

            this.$emit('gusto', postreId);

        }


    },
    // computed: {
    //     recetasConLikes() {
    //         const recetasConLikes = this.recetas.map(postre => {
    //             return {
    //                 ...postre,
    //                 likeValor: this.likesPorReceta[postre.id] || 0 // Asigna el número de likes correspondiente a cada receta
    //             };
    //         });

    //         return recetasConLikes;
    //     }
    // },
    created() {
        this.fetchData(this.url)
        // Cargar datos de la otra tabla usando otra URL
        this.fetchData(this.urlUsuarios);
    },
}).mount('#app')




// function gusto(postreId) {
//     let usuario_gusta = document.getElementById("usuario").value

//     console.log(usuario_gusta)
//     console.log(postreId)
//     let variable = {
//         usuario: usuario_gusta,
//         gusta: postreId,

//     }

//     var options = {
//         body: JSON.stringify(variable),
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         redirect: 'follow'
//     }
//     fetch('http://localhost:5000/gusta', options)
//         .then(function () {
//             alert("Registro grabado")
//             window.location.href = "../tabla_recetas2.html";
//         })
//         .catch(err => {
//             console.error(err);
//             alert("Error al Grabarr")

//         })
// }




// const appTabla2 = Vue.createApp({

//     data() {
//         return {
//             datosTabla2: [], // Nombre de los datos para la segunda tabla
//             url: 'http://localhost:5000/todos', // URL para la segunda tabla
//             id_usuario: 0,
//             usuario: "",
//             contraseña: "",

//             // ... otros datos o propiedades necesarias para la segunda tabla
//         }
//     },
//     methods: {

//         fetchDataTabla2(url) {
//             fetch(url)
//                 .then(response => response.json())
//                 .then(data => {
//                     this.datosTabla2 = data;
//                     // ... lógica adicional si es necesaria para la segunda tabla
//                 })
//                 .catch(err => {
//                     console.error(err);
//                     // ... manejo de errores para la segunda tabla
//                 })
//         },
//         // ... otros métodos necesarios para la segunda tabla

//         // gusto(postreId) {
//         //     let usuario_gusta = document.getElementById("usuario").value

//         //     console.log(usuario_gusta)
//         //     let variable = {
//         //         usuario: usuario_gusta,
//         //         gusta: postreId,

//         //     }
//         //     let url = "http://localhost:5000/gusta"
//         //     var options = {
//         //         body: JSON.stringify(variable),
//         //         method: 'POST',
//         //         headers: { 'Content-Type': 'application/json' },
//         //         redirect: 'follow'
//         //     }
//         //     fetch(url, options)
//         //         .then(function () {
//         //             alert("Registro grabado")
//         //             window.location.href = "../tabla_recetas2.html";
//         //         })
//         //         .catch(err => {
//         //             console.error(err);
//         //             alert("Error al Grabarr")

//         //         })
//         // }


//     },
//     created() {
//         this.fetchDataTabla2(this.url); // Llama al método para cargar datos de la segunda tabla al iniciar
//     },
// }).mount('#appTabla2'); // Monta esta instancia en un nuevo elemento HTML, por ejemplo, #appTabla2




