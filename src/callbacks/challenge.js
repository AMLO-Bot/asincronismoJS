// //Hay que tratar de implementarlo con GuardClauses seguro se puede


// //Objetivo: Conseguir la dimension del primer personaje que aparece en la API
// //La petición no es directa, necesitamos dar con el primer personaje, en location 
// //y seguir la petición para saber la dimension


// //instalando dependencia para que jale el node httpandxmlrequest, es un objeto
// //Creado por Microsoft
<<<<<<< HEAD
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
let API = "https://rickandmortyapi.com/api/character/"
=======
// let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
>>>>>>> 48531d1e8b6209ebcfb9b504c1579a7018289f2f

// //Chale sigo sin entender que queremos o que esta pasando
// function fetchData(url_api, callback){

//     //Aqui es para crear una nueva estancia de la dependencia de xmlhttprequest
//     let xhttp = new XMLHttpRequest()
//     //Ejecutamos un método GET a la URL del API (el json con los personajes de Rick y Morty)
//     //Añadimos el parámetro true para activar el asincronismo con HttpReq
//     //For documentation on XHR https://www.tutorialspoint.com/ajax/what_is_xmlhttprequest.htm
//     xhttp.open('GET', url_api, true)
//     //Agregamos como un event listener para checar si cambia el state
//     //Sirve como validacion, se ejecuta en el cambio de estado (0. 1 2 3 4)
//     xhttp.onreadystatechange = function(event){
//         //Okey, nos proceso la petición, ¿en que estado llego?
//         //Si es 4, req COMPLETED, el .readyState es type num
//         //For more info on req states n status https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest
//         if (xhttp.readyState === 4){
//             //Si el status es 200 is Success Answer YEY
//             //https://developer.mozilla.org/es/docs/Web/HTTP/Status
//             if(xhttp.status === 200){
//                 //Ya que validamos toda la peticion, es decir,
//                 //La abrimos (.open), esperamos a que se ejecutara(.onreadystate),
//                 // se completo(..readyState), y llego bien (.status)
//                 //Ahora ejecutamos el código que queriamos
                
//                 //null porque el estandar dice que el primer parametro de un callback es
//                 //el mensaje de error
//                 //JSON.parse, porque recibimos puro texto y lo queremos 'formatear/pasrsear'
//                 //para pasar de string a un objeto json iterable
//                 callback(null, JSON.parse(xhttp.responseText))
//             } else {
//                  //Para que nos marcque en caso de exixta error
//                 const error = new Error(`Error ${url_api}`)
//                 return callback(error, null)
//             }


//         }
//     }
//     //Despues de todo el chorote mandamos el resultado de la peticion (el json) al servidor
//     xhttp.send()
// }




//Esta es la version sin comentarios
function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest()
    xhttp.open('GET', url_api, true)
<<<<<<< HEAD
    xhttp.onreadystatechange = (event) => {
=======
>>>>>>> 48531d1e8b6209ebcfb9b504c1579a7018289f2f
    if (xhttp.readyState === 4){
        if(xhttp.status === 200){
            callback(null, JSON.parse(xhttp.responseText))
        } else {
            const error = new Error(`Error ${url_api}`)
            return callback(error, null)
        }
 
<<<<<<< HEAD
        
    }
  }
  xhttp.send()
}

//Si se procesasn todas las peticiones entonces si imprime el resultado
//Desventajas: Hay que validarlo en cada llamada al callback, cheap ticket to callback hell
fetchData(API, (error1, data1) => {
    if (error1) return console.error(error1)
    fetchData(API + data1.results[0].id, (error2, data2) => {
        if(error2) return console.error(error2)
        fetchData(data2.origin.url, (error3, data3) => {
            if (error3) return console.error(error3)
            console.log(data1.info.count)
            console.log(data2.name)
            console.log(data3.dimension)
        })
    })
})
=======
    }
}
>>>>>>> 48531d1e8b6209ebcfb9b504c1579a7018289f2f
