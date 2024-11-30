const prompt = require('prompt-sync')();
const data  = require('./data')
const result  = require('./result')


catalogo = data.arrayData();


let names =[];

for (i=0; i<catalogo.length; i++){
    for (var key in catalogo[i]){
        if (catalogo[i].hasOwnProperty(key) && key === 'marca'){
            names.push(catalogo[i][key])
        }
    }
}

console.log('CATALOGO DE AUTOS: ')
for (i=0; i<names.length; i++){
    
    let msg = i + ' ' + names[i]
    console.log(msg)
}

let car = parseInt(prompt('Digitar numero del auto: '));

result.Result(car)