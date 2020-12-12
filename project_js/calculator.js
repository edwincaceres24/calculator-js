

var number;
function expected_result(number) {
    number = prompt('Coloca un número ')
    document.getElementById("your_result").innerHTML=number;
    console.log(number)
}

expected_result(number)