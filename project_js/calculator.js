//Definimos las variables en el dom
const operant_by_name = document.getElementsByName("data-number")
const operator_by_name = document.getElementsByName("data-operator")
const operatorbutton_add = document.getElementById("add");
const operatorbutton_substract = document.getElementById("substract");
const operatorbutton_multiply = document.getElementById("multiply");
const operatorbutton_divide = document.getElementById("divide");
const operatorbutton_allclear = document.getElementById("allclear");
const operator_equals = document.getElementById("operator-equal");
const result = document.getElementById("your_result");
var first_operant = '';
var second_operant = '';
var operator = '';

//Funciones para capturar los selects

operant_by_name.forEach(function (number_button) {
    number_button.addEventListener("click", function () {
        if (first_operant.length>0 && operator.length>0 ){
            add_second_value(number_button.innerText)    
        }    
        else {
            add_first_value(number_button.innerText)
        }
    })
})

operator_by_name.forEach(function (operator_button) {
    operator_button.addEventListener("click", function () {
        operator_add(operator_button.innerText)
    })
})

//Funciones para agregar números y operar

function add_first_value(num) {
    first_operant = first_operant + num
    actualize_display()
}

function add_second_value(num) {
    second_operant = second_operant + num
    actualize_display_2()
}

function operator_add(val_operator) {
    operator = val_operator
    console.log(first_operant)
    actualize_display_operator()
    //¿Cómo cambiar de valor para que lo que se imprima ahora sea el segundo valor
}
function actualize_display() {
    return result.innerHTML = first_operant
    console.log('Tu primer número es ' + first_operant)
}
function actualize_display_2() {
    return result.innerHTML = second_operant
    console.log('Tu segundo número es ' + second_operant)
}
function actualize_display_operator() {
    return result.innerHTML = first_operant+operator
}

function operator_allclear() {
    result.innerHTML = 0;
    first_operant = '';
    second_operant = '';
    operator = '';

}

//Operants Functions


function operator_equal() {
    switch(operator){
        case "+":
            result.innerHTML = parseInt(first_operant) + parseInt(second_operant);
            console.log("Hola_1")
            break;
        case "-":
            result.innerHTML = parseInt(first_operant) + parseInt(second_operant);
            console.log("Hola_2")
            break;
        case "*":
            result.innerHTML = parseInt(first_operant) * parseInt(second_operant);
            console.log("Hola_3")
            break;
        case "/":
            result.innerHTML = parseInt(first_operant) / parseInt(second_operant);
            console.log("Hola_4")
            break;
        default:
            result.innerHTML = ("Error");
            console.log(operator)
    }

}

//Triggers
//operant_first.addEventListener("click",testvalue)
//operatorbutton_add.addEventListener("click", operator_add)
operatorbutton_allclear.addEventListener("click", operator_allclear)
operator_equals.addEventListener("click", operator_equal)
