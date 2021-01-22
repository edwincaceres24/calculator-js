// Se pudo dinamizar con el telcado, el problema es que te ejecuta todas las teclas
keys_number= [].map.call(operant_by_name,
    function(obj){
        return obj.textContent
    }
)

keys_operator=[].map.call(operator_by_name, obj => obj.textContent)

// console.log(keys_number)
// console.log(keys_operator)

// document.body.addEventListener("keydown", e=> console.log(e.keyCode))

// Funciones para detectar teclas

document.body.addEventListener("keydown", function (number_button) {
    if(keys_number.includes(number_button.key) && first_operant!==undefined && first_operant.length>0 && operator.length>0) {
        console.log(`La tecla que presionaste es ${number_button.key}`)
        add_second_value(number_button.key)
    }
    else if (keys_number.includes(number_button.key)){
        add_value(number_button.key)
    }
    else {
        console.log(`La tecla ${number_button.key} no está disponible en el array`)
    }
})

document.body.addEventListener("keydown", function (number_button){
    if(keys_operator.includes(number_button.key)){
        operator_add(number_button.key)
    }
}
)

document.body.addEventListener("keydown", function(button){
  if(button.keyCode==13){
      operator_equal()
  } 
})

document.getElementsByTagName(iframe")

// operant_by_name.forEach(function (number_button) {
//     number_button.addEventListener("keydown", function () {
//         if(keys.includes(number_button.textContent)) {
//             console.log(`La tecla que presionaste es ${number_button.textContent}`)
//             console.log(number_button.textContent)
//             add_value(number_button.innerText)
//         }
//         else{
//             console.log(`La tecla ${number_button.textContent} no está disponible en el array`)

            
//         }
//     })
// })


