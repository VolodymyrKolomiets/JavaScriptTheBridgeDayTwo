//Booleanos


booleano1 = true
booleano2 = false

//Crear variable booleanoAnd cuyo valor sea la comparación booleana booleano1 AND booleano2

let booleanX = booleano1 && booleano2
console.log(booleanX)

//Crear variable booleanoOr cuyo valor sea la comparación booleana booleano1  OR booleano2

let booleanoOr = booleano1 || booleano2
console.log(booleanoOr)

//Crear variable booleanoNot cuyo valor sea la comparación booleana no booleano1

let booleanoNot = !booleano1 
console.log(booleanoNot)

////Crear variable booleanoMix0 cuyo valor sea la comparación booleana (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)

let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2))
console.log(booleanoMix0)


//Operadores


//Crear variable valorDivision cuyo valor sea la división de 17 entre 3 y que solo muestre 2 decimales en el resultado

let valorDivision = (17/3).toFixed(2)
console.log(valorDivision)


//Crear variable valorResto cuyo valor sea el resto de 17 entre 7

let valorResto = 17%7
console.log(valorResto)

//Lógica de programación


//Crea una variable A cuyo valor sea el número 9, después Crea una variable B cuyo valor sea un string con el número 9, desarrolla la lógica para que cuando A == B muestre por consola “Son iguales”, ¿qué pasa si en vez de tener A == B, comprobamos que A === B?

let a = 9
let b = '9'
///////////////////0PCION2////////////////////////////
if (a == b) {
    console.log('Son iguales')
} else {
    console.log('No son iguales')
}
//////////////////OPCION2//////////////////////////////////
let a_b = a == b ? "Son iguales" : "No son iguales"
console.log(a_b)

//Crea una variable mochila que sea un array de elementos, desarrolla la lógica para que sí mochila tiene más de 10 elementos muestre por consola el mensaje “No puedo cargar con tantas cosas”, sí mochila contiene entre 10 y 2 elementos se muestre por consola “Que bien voy con mi mochila” y si no muestre por consola “Creo q no necesito una mochila”

let backpack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

if (backpack.length > 10) {
    console.log('No puedo cargar con tantas cosas')
} else if(backpack.length <=10 && backpack.length >= 2) {
    console.log('Que bien voy con mi mochila')
} else {
    console.log('Creo q no necesito una mochila')
}

//Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle hasta que se verifique que contarHasta10 === 10

let numberOfTen = 0

for (let i = 0; i < 10; i++) {
    numberOfTen++
    }
console.log(numberOfTen===10)

//Crea una variable diaFestivo que sea de tipo boolean. //Crea un ternario que si diaFestivo es true devuelve un console.log de ‘Hoy no trabajo’ y  si es false ‘Hoy trabajo’

let brthDay = true
 
brthDay === true? console.log('Hoy no trabajo'): console.log('Hoy tabajo') 


//Crea una variable arrayBucle tipo array vacía, rellénala con números del 4 al 18 utilizando un bucle

const arrayBucle = []

for (let index = 4; index < 19; index++) {
    arrayBucle.push(index) 
}

//Recorre la variable

console.log(arrayBucle)

//Creada anteriormente arrayBucle ,suma todos sus elementos y guárdalos en una variable de nombre resultado

let result = 0

for (i = 0; i < arrayBucle.length; i++) {
    result  += arrayBucle[i];
}

console.log(result)

//Dado el siguiente array, [‘Con’, ‘Sofia’, ‘aprendiendo’, ‘bucles’], recorrelo utilizando el bucle “for of” y muestra por consola todos sus elementos, después recórrelo utilizando el bucle “for in” mostrando también por consola todos sus elementos

const arrayStr= ['Con', 'Sofia', 'aprendiendo', 'bucles']

for ( word of arrayStr) {
    console.log(word)
}

for ( wrd in arrayStr) {
    if (Object.hasOwnProperty.call(arrayStr, wrd)) {
        const element = arrayStr[wrd]
        console.log(wrd)
    }
}

//Crea un bucle utilizando “while” que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3

let z = 1 

while(z<20) { 
    if(z % 3 == 0){ 
      console.log(`${z} patata`) 
     } 
     z++ 
 }
