const object = document.getElementById("object"),
    list = document.getElementById("main-list"),
    values = list.querySelectorAll('li'),
    nodeList = document.querySelectorAll('li'),
    // Convierte en array el objecto nodeList
    nodeList_array= Array.from(document.querySelectorAll('li')),
    main_title = document.getElementById('main-title'),
    elementList = document.getElementsByTagName('li'),
    profesor = document.createElement('h2'), //Lo crea en memoria
    profesorContainer= document.getElementById('teacher'),
    holaMundo = e => alert(e.target.textContent);

// Imprime todo el html con el id
console.log(list) 
console.log(elementList) 
console.log(nodeList) 
// Improme un nodo con todas las etiquetas
console.log(list.querySelectorAll('li'))
// Imprime un nodo con los valores del html
values.forEach(function(value){
        values_html = value.innerHTML
        return console.log(values_html)
    } 
        )
function values_function()  {values.forEach( value => console.log(value.innerHTML)) }
function values_content() {

}

//Colecciones
//Node List no son arrays
console.log(typeof(nodeList)) // No se considera array
console.log(nodeList_array[0].innerHTML)

// Imprimiendo atributos
main_title.style.backgroundColor = 'yellow'

//*******Creando elementos en el DOM****************

profesor.textContent = 'Edwin'

if (profesorContainer){
    profesorContainer.querySelector('span').appendChild(profesor)
}
else {
    document.body.appendChild(profesor)
    console.log("Hola")
}

//********* Eventos *//
console.log(values) 

// Imprime el contenido de cada elemnto en "values"
values.forEach(function values(value){
    value.addEventListener('click', e => { 
        holaMundo(e)} )
})

const   nodo= document.getElementById('main-list'),
        ad = document.createElement('div');

ad.id='GoLive';
ad.textContent='Soy Edwin';


nodo.insertAdjacentHTML('beforebegin',`<h2>Soy el CEO de esta empresa</h2>`)
// console.log("Mira esto Perro")
// nodeList_array.forEach(e => console.log(Array.from(e.textContent)))
// var value=[].map.call(nodeList,
//     function (obj){
//             return obj.textContent
//         }
//     );
// console.log(value)

// nodeList_array.forEach(e => e )