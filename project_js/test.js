// Se pudo dinamizar con el telcado, el problema es que te ejecuta todas las teclas
keys=document.body

// Array.from(document.getElementsByTagName('button'))


// keys.forEach( key =>
//     key.addEventListener('keydown', 
//         function(key_pressed) { 
//         // Acá debo agregar la condición que iguale la tecla presionada. La condición está mal
//             if(key_pressed.key in keys && first_operant.length>0 && operator.length>0){ 
//                 add_second_value(key_pressed.key)
//                 console.log('Estás colocando el segundo valor')
//             }
//             else if (key_pressed.key in operant_by_name && first_operant==="") {
//                 console.log('Estás colocando el primer valor')
//                 console.log(keys)
//                 add_first_value(key_pressed.key)
//             }
//             else{
//                 console.log("Se está aplicando una tercera condición")
//             }
//         }
//     )   
// )

keys.addEventListener('keydown', 
function(key_pressed) { 
// Acá debo agregar la condición que iguale la tecla presionada. La condición está mal
    if(key_pressed.key in operant_by_name && first_operant.length>0 && operator!==false){ 
        add_second_value(key_pressed.key)
        console.log('Estás colocando el segundo valor')
    }
    else if (key_pressed.key in operant_by_name && operator===false) {
        console.log('Estás colocando el primer valor')
        add_value(key_pressed.key)
    }
    else{
        console.log("La tecla ingresada no se puede colocar en la calculadora")
    }
}
)

operator_by_name.forEach(function (operator_button) {
    operator_button.addEventListener("keydown", function () {
        operator_add(operator_button.innerText)
    })
})