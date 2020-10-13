//La magia esque si guardamos el script en el package.json va a ser posible
//correr el sript desde la TERMINAL WOOOW con el comando
// npm run nombre_del_script

//callback is a function that recives another function as parameter
function sum(num1,num2){
    return num1 + num2
}

//Por buenas practicas se indica el callback con esa misma palabra
function calc(num1,num2,callback){
    return callback(num1, num2)
}
console.log(calc(6,2,sum))

//Chale no entiendo, dicen que cuando se consumen API abuelita de batman le capiscas
function date(callback){
    console.log(new Date)
    setTimeout(()=>{
        let date = new Date
        callback(date)
    }, 3000)
}

function printDate(dateNow){
    console.log(dateNow)
}

date(printDate)