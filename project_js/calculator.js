//Definimos las variables en el dom
const operant_by_name = document.getElementsByName("data-number")
const operator_by_name = document.getElementsByName("data-operator")
const operatorbutton_add = document.getElementById("add");
const operatorbutton_substract = document.getElementById("substract");
const operatorbutton_multiply = document.getElementById("multiply");
const operatorbutton_divide = document.getElementById("divide");
const operatorbutton_allclear = document.getElementById("allclear");
const operatorbutton_delete = document.getElementById("DEL");
const operator_equals = document.getElementById("operator-equal");
const result = document.getElementById("your_result");
const input= document.getElementById("input");
var first_operant = '';
var second_operant = '';
var operator = '';

//Funciones para capturar los selects mediante click

operant_by_name.forEach(function (number_button) {
    number_button.addEventListener("click", function () {
        if (first_operant.length>0 && operator.length>0 ){
            add_second_value(number_button.innerText)    
        }    
        else {
            add_first_value(number_button.innerText)
            console.log(number_button)
        }
    })
})

operator_by_name.forEach(function (operator_button) {
    operator_button.addEventListener("click", function () {
        operator_add(operator_button.innerText)
    })
})

//Funciones para capturar eventos mediante keyboards

// operant_by_name.forEach( key =>
//     key.addEventListener('keydown', 
//         function(key_pressed) { 
//         // Acá debo agregar la condición que iguale la tecla presionada. La condición está mal
//             if(key_pressed.key in keys && first_operant.length>0 && operator.length>0){ 
//                 add_second_value(key_pressed.key)
//                 console.log('Estás colocando el segundo valor')
//             }
//             else if (key_pressed.key in operant_by_name) {
//                 console.log('Estás colocando el primer valor')
//                 add_first_value(key_pressed.key)
//             }
//         }
//     )   
// )



//Funciones para agregar números y operar

function add_first_value(num) {
    if (first_operant.charAt(0)!=="0"){
        first_operant = first_operant + num
        actualize_display()
    }
    else{
        first_operant=""
    }
}

function add_second_value(num) {
    if (second_operant.charAt(0)!=="0"){
        second_operant = second_operant + num
        actualize_display()
    }
    else{
        second_operant=""
    }
    
}

function delete_value() {
    
    if(result.innerHTML=="Your result") {
        return
    }
    else if (operator==""){
        first_operant=first_operant.slice(0,-1)
        actualize_display()
    }
    else {
        second_operant=second_operant.slice(0,-1)
        actualize_display()
    }
}
function operator_add(val_operator) {
    operator = val_operator
    console.log(first_operant)
    actualize_display_operator()
    //¿Cómo cambiar de valor para que lo que se imprima ahora sea el segundo valor
}
function actualize_display() {
    if (!(first_operant=="") && operator!="") {
        return result.innerHTML = second_operant
    }
    else{
        return result.innerHTML = first_operant
    }
  
}

function actualize_display_operator() {
    return result.innerHTML = first_operant+operator
}

function operator_allclear() {
    result.innerHTML = "Your result";
    first_operant = '';
    second_operant = '';
    operator = '';

}

//Operants Functions


function operator_equal() {
    switch(operator){
        case "+":
            result.innerHTML = parseFloat(first_operant) + parseFloat(second_operant);
            first_operant = result.innerHTML;
            second_operant="";
            break;
        case "-":
            result.innerHTML = parseFloat(first_operant) - parseFloat(second_operant);
            first_operant = result.innerHTML;
            second_operant="";
            break;
        case "*":
            result.innerHTML = parseFloat(first_operant) * parseFloat(second_operant);
            first_operant = result.innerHTML;
            second_operant="";
            break;
        case "%":
            result.innerHTML = parseFloat(first_operant) / parseFloat(second_operant);
            first_operant = result.innerHTML;
            second_operant="";
            break;
        default:
            result.innerHTML = ("Error");
            console.log(operator)
    }

}

//Triggers
//operant_first.addEventListener("click",testvalue)
//operatorbutton_add.addEventListener("click", operator_add)
operatorbutton_allclear.addEventListener("click", operator_allclear);
operatorbutton_delete.addEventListener("click", delete_value);
operator_equals.addEventListener("click", operator_equal);

// console.log(document.querySelector('key'))
// input.addEventListener("keydown",e => {console.log(e)})
