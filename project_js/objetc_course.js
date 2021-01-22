const businessProducts=[
    {name: 'Product Name',
    size: ['Tamaño 1', 'Tamaño 2', 'Tamaño 3'] },
    {name: 'Product Name II',
    size: ['Tamaño 1', 'Tamaño 2', 'Tamaño 3'] },
    {name: 'Product Name III',
    Edad: ['2 a 4 años', '4 a 6 años', 'Mayor a 6 años'] },

]


const productSelected = document.querySelectorAll(".product-card"),
    mainSelect=document.getElementById("main-select")
    mainSelectChild=mainSelect.childNodes.getElementsByName
    productNameSelected = document.querySelectorAll(".product-info h5"),
    imageSelected = document.querySelectorAll(".product-image"),
    optionSelected = document.getElementById("main-select"),
    optionSelectedArray = Array.from(optionSelected),
    firstOptionSelected = Array.from(document.getElementsByName("first-option")),
    secondOptionSelected = Array.from(document.getElementsByName("second-option")),
    thirdOptionSelected = Array.from(document.getElementsByName("third-option")),
    inputs = [],
    recomProduct=document.getElementById("recommended-product");
let firstAnswer = '',
    secondAnswer = '';


// Funciones primarias

//Events

productSelected.forEach(function (productClick) {
            productClick.addEventListener("click",
            function (e){
                firstAnswer= e.currentTarget.querySelector(".product-info h5").textContent
                console.log(`Has seleccionado el producto ${firstAnswer}`)
                secondQuestion ()
                return firstAnswer
            }
            )
                })


optionSelected.addEventListener("change", //se usa el evento change ya que funciona mejor con etiquetas select
        function () {
            //se usa el objeto "optionSelected" y los métodos "option" "selectIndex" para obtener el valor deseado
            secondAnswer=optionSelected.options[optionSelected.selectedIndex].textContent;
            console.log(secondAnswer)
            console.log(`Tu respuesta a la pregunta dos es ${secondAnswer}`)
            createProduct()
        })

// let variable=optionSelected.options[optionSelected.selectedIndex].value;
// console.log(variable)


// Funciones


function secondQuestion (){
    switch (firstAnswer) {

        case ('Product Name'):
            // mainSelectChild.forEach(e=>console.log(e))
            firstOptionSelected.forEach(e=>e.classList.add("show-option"))
            secondOptionSelected.forEach(e=>e.classList.remove("show-option"))
            thirdOptionSelected.forEach(e=>e.classList.remove("show-option"))
            console.log('Se cambió al primer valor')
            break
        case ('Product Name II'):
            // mainSelectChild.forEach(e=>console.log(e))
            firstOptionSelected.forEach(e=>e.classList.remove("show-option"))
            secondOptionSelected.forEach(e=>e.classList.add("show-option"))
            thirdOptionSelected.forEach(e=>e.classList.remove("show-option"))
            console.log('Se cambió al primer valor')
            break
        case ('Product Name III'):
            // mainSelectChild.forEach(e=>console.log(e))
            firstOptionSelected.forEach(e=>e.classList.remove("show-option"))
            secondOptionSelected.forEach(e=>e.classList.remove("show-option"))
            thirdOptionSelected.forEach(e=>e.classList.add("show-option"))
            console.log('Se cambió al primer valor')
            break
        default:
            console.log(`Ningún valor como segunda opción`)
    }
}


//Recommending Products
function createProduct(){
    const product = document.createElement("div.product-card");
    product.innerHTML=`<h6>Compra Lanas Perro</h6>`
    recomProduct.appendChild(product)        
}
