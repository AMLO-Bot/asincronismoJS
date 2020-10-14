let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
//Using ternary operator instead of if-else block because of redability
const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest()
        xhttp.open('GET', url_api, true)
        xhttp.onreadystatechange = (() => {
        if (xhttp.readyState === 4){
            (xhttp.status === 200)
                ?resolve(JSON.parse(xhttp.responseText))
                :reject(  new Error(`Error ${url_api} couldnt show data`))
                
        }
      })
      xhttp.send()
    })
}

module.exports = fetchData

