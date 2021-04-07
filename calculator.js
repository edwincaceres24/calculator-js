//Definimos las variables en el dom
const numbers = document.getElementsByName("data-number"),
    keynumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    keyOperators = ["+", "-", "*", "/"],
    operators = document.getElementsByName("data-operator"),
    operatorbutton_add = document.getElementById("add"),
    operatorbutton_substract = document.getElementById("substract"),
    operatorbutton_multiply = document.getElementById("multiply"),
    operatorbutton_divide = document.getElementById("divide"),
    operatorbutton_allclear = document.getElementById("allclear"),
    operatorbutton_delete = document.getElementById("DEL"),
    operator_equals = document.getElementById("operator-equal"),
    result = document.getElementById("your_result"),
    input = document.getElementById("input");
let first_operant = '',
    second_operant = '',
    operator = false,
    inputForKey = '';

//Functions
const printKeyOnScreenByClick = function (number) {
        number.addEventListener("click", setValueOnScreen)
    },
    printOperatorOnScreenByClick = function (operator_button) {
        operator_button.addEventListener("click", setOperatorOnScreen)
    },
    printKeyOnScreenByKey = (e) => {
        inputForKey = parseInt(e.key);
        if (keynumbers.includes(inputForKey)) {
            console.log(inputForKey)
            setValueOnScreenByKey(inputForKey)

        } else if (e.key == "Enter") {
            console.log(e.key)

        }
    },
    printKeyOperatorsByKey = (e) => {
        let value = e.key;
        if (keyOperators.includes(value)) {
            console.log(value)
            setOperatorOnScreenByKey(value)

        }
    },
    setValueOnScreen = function () {
        let num = this
        if (first_operant !== undefined && first_operant.length > 0 && operator.length > 0) {
            add_second_value(num.innerText)
        } else {
            add_value(num.innerText)
        }
        console.log(num.innerText)
    },
    setValueOnScreenByKey = function (num) {
        if (first_operant !== undefined && first_operant.length > 0 && operator.length > 0) {
            add_second_value(num)
        } else {
            add_value(num)
        }
        console.log(num)
    },
    setOperatorOnScreen = function () {
        let operator_button = this;
        operator_add(operator_button.innerText)
    },
    setOperatorOnScreenByKey = (key) => {
        //let operator_button= this;
        operator_add(key)
    };


//Functions to add numbers

function add_value(num) {
    //Este es el primver valor que va asignar al resultado
    if (first_operant.charAt(0) == "0") {
        console.log("Cero no puede ser el primer carácter de un número")
        first_operant = ""
    } else {
        first_operant = first_operant + num
        actualize_display()
    }
}

function add_second_value(num) {
    if (second_operant.charAt(0) !== "0") {
        second_operant = second_operant + num
        actualize_display()
    } else {
        second_operant = ""
    }

}

function delete_value() {

    if (result.innerHTML == "Your result") {
        return
    } else if (operator == "") {
        first_operant = first_operant.slice(0, -1)
        actualize_display()
    } else {
        second_operant = second_operant.slice(0, -1)
        actualize_display()
    }
}

function operator_add(val_operator) {
    operator = ""
    operator = val_operator
    console.log(first_operant)
    actualize_display_operator()
    //¿Cómo cambiar de valor para que lo que se imprima ahora sea el segundo valor
}

function actualize_display() {
    if ((first_operant != "") && operator != "") {
        return result.innerHTML = second_operant
    } else {
        return result.innerHTML = first_operant
    }

}

function actualize_display_operator() {
    return result.innerHTML = first_operant + operator
}

function operator_allclear() {
    result.innerHTML = "Your result";
    first_operant = '';
    second_operant = '';
    operator = '';

}

//Operants Functions


const operator_equal = function () {
        switch (operator) {
            case "+":
                result.innerHTML = parseFloat(first_operant) + parseFloat(second_operant);
                first_operant = result.innerHTML;
                second_operant = "";
                break;
            case "-":
                result.innerHTML = parseFloat(first_operant) - parseFloat(second_operant);
                first_operant = result.innerHTML;
                second_operant = "";
                break;
            case "*":
                result.innerHTML = parseFloat(first_operant) * parseFloat(second_operant);
                first_operant = result.innerHTML;
                second_operant = "";
                break;
            case "/":
                result.innerHTML = parseFloat(first_operant) / parseFloat(second_operant);
                first_operant = result.innerHTML;
                second_operant = "";
                break;
            default:
                result.innerHTML = ("Error");
                console.log(operator)
        }

    },
    setKeyResult = function (keydown) {
        switch (keydown.key) {
            case "Enter":
                operator_equal()
                break;

            case "Backspace":
                delete_value()
                break;
            case "c":
                operator_allclear()
                break;
            default:
                console.log(keydown)
        }};


        //Initializing
        numbers.forEach(printKeyOnScreenByClick)
        operatorbutton_allclear.addEventListener("click", operator_allclear);
        operatorbutton_delete.addEventListener("click", delete_value);
        operators.forEach(printOperatorOnScreenByClick)
        operator_equals.addEventListener("click", operator_equal);
        window.addEventListener("keydown", printKeyOperatorsByKey)
        window.addEventListener("keydown", printKeyOnScreenByKey)
        window.addEventListener("keydown", setKeyResult )