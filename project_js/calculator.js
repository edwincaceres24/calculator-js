//DOM Operants
//const operant_first = document.getElementsByTagName("button").value
const operant_first = document.getElementById("number_7")
const operatorbutton_add = document.getElementById("add")
const operatorbutton_substract = document.getElementById("substract")
const operatorbutton_multiply = document.getElementById("multiply")
const operatorbutton_divide = document.getElementById("divide")
const operatorbutton_allclear = document.getElementById("allclear")
const operant_by_name = document.getElementsByName("data-number")

console.log(operant_by_name)

function selector_by_name() {
    operant_by_name.forEach(number_button => {console.log(number_button.innerText)})
}
//console.log(operant_first)
//Operants selectors

function testvalue() {
    test_operant = parseInt(operant_first.innerHTML)
    document.getElementById("your_result").innerHTML=test_operant
    return test_operant
}

function firstvalue() {
    first_operant = parseInt(prompt('Elige tu 1er número'));
    return first_operant

    //first_operant=first_operant.addEventListener("click",console.log(first_operant))

}

function secondvalue(second_operant) {
    second_operant = parseInt(prompt('Elige tu 2do número'));
    //Return para arrojar un resultado
    return second_operant
}


//Operators
function operator_add(A, B) {
    //Colocas la variable que se imprime en la primera función
    if (typeof(test_operant)!= "object") {
        document.getElementById("your_result").innerHTML = (test_operant + secondvalue(B));
        console.log(test_operant + B)
    }
    else {
        document.getElementById("your_result").innerHTML = ("Selecciona un número primero");    
    }
}

function operator_substract(A, B) {
    document.getElementById("your_result").innerHTML = (firstvalue(A) - secondvalue(B));
    console.log(A - B)
}

function operator_multiply(A, B) {
    document.getElementById("your_result").innerHTML = (firstvalue(A) * secondvalue(B));
    console.log(A * B)
}

function operator_divide(A, B) {
    document.getElementById("your_result").innerHTML = (firstvalue(A) / secondvalue(B));
    console.log(A / B)
}
function operator_allclear() {
    document.getElementById("your_result").innerHTML = 0;
    test_operant= null;
}


//Triggers
operant_by_name.addEventListener("click",selector_by_name)
operant_first.addEventListener("click",testvalue)
operatorbutton_add.addEventListener("click", operator_add)
operatorbutton_substract.addEventListener("click", operator_substract)
operatorbutton_multiply.addEventListener("click", operator_multiply)
operatorbutton_divide.addEventListener("click", operator_divide)
operatorbutton_allclear.addEventListener("click", operator_allclear)
