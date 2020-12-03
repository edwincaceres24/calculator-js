// Replace random.randint in python
var guess = Math.floor(Math.random() * 20) + 1;
//console.log(guess)
//Define el bucle
for (let tries = 1; tries < 8; tries++) {
    var myguess = parseInt(prompt('Elige un número'))
    var intentos = 7 - tries;
    //Indica las condicionales para responder
    if (intentos < 1) {
        alert('Perdiste. El número que tengo es ' + guess)
    } else if (myguess > guess) {
        alert('Tu número es mayor al mío. Te quedan ' + (intentos) + ' intentos')
    } else if (myguess < guess) {
        alert('Tu número es menor al mío. Te quedan ' + (intentos) + ' intentos')
    }
}

if (myguess == guess){
    alert('Atinaste! Mi número es ' + guess)}

