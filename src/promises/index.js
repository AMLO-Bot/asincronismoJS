const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve("Se logro")
        
        } else {
            reject("CHALES")
        }
    })    
}
//La funcion definida en .then es la que substituye al callback placeholder de resolve
//y el .catch es "placeholder" del reject
somethingWillHappen()
  .then((response) => console.log(response))
  .catch((err) => console.error(err))


const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) =>{
        if(true){
            setTimeout(() => {
                resolve(listNumber)
            },2000)
        } else {
            const error = new Error('Something went wrong try again buddy')
            reject(error)
        }
    })
} 

var listNumber = [1, 2, 3, 4, 5, 6, 7, 8, 4, 9, 4, 5, 7, 8, 9,10]
// var sliceListNumber = listNumber.slice(0,round(listNumer.length/2))
somethingWillHappen2()
  .then(response => {for (let index = 0; index < response.length; index++) {
      console.log(response[index])      
}})
  .catch(err => console.error(err))

//Las promesas se pueden concatenar WOOW  
Promise.all([somethingWillHappen(),somethingWillHappen2()])
.then(response => {
    console.log('Array of results',response)
    
.catch(err =>{
    console.error(err)
})  
})

let saludo = "HOLA JULIAN"