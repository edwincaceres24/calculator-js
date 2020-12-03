let socios = ["Juancho", "Cala"]

console.log(socios)

let dato = socios.push("Cala")
console.log(dato)

//=> es igual a decir ¿ { return function}
//Declara la función con los parámetros
const currentyear = 2030
const yourfutureage = (a,b) => (a+b)
var myname = prompt('¿Cuál es tu nombre?')
var myage= parseInt( prompt('Cuál es tu edad?'))
//Imprime la función con los parámetros asignados
console.log('Tu edad en diez años será ' + yourfutureage(10,myage))