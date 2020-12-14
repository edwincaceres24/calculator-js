//DOM Operants
const operatorbutton_add = document.getElementById("add")
const operatorbutton_substract = document.getElementById("substract")
const operatorbutton_multiply = document.getElementById("multiply")
const operatorbutton_divide = document.getElementById("divide")


//Operants selectors

function firstvalue(first_operant) {
    first_operant=parseInt(prompt('Elige tu 1er número' ));
    return first_operant
}
function secondvalue(second_operant) {
    second_operant=parseInt(prompt('Elige tu 2do número' ));
    //Return para arrojar un resultado
    return second_operant
}


//Operators
function operator_add(A,B) {
    document.getElementById("your_result").innerHTML=(firstvalue(A)+secondvalue(B));
    console.log(A+B)
}
function operator_substract(A,B) {
    document.getElementById("your_result").innerHTML=(firstvalue(A)-secondvalue(B));
    console.log(A+B)
}
function operator_multiply(A,B) {
    document.getElementById("your_result").innerHTML=(firstvalue(A)*secondvalue(B));
    console.log(A+B)
}
function operator_divide(A,B) {
    document.getElementById("your_result").innerHTML=(firstvalue(A)/secondvalue(B));
    console.log(A+B)
}


//Triggers
operatorbutton_add.addEventListener("click",operator_add)
