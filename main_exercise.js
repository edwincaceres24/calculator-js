/*- [x]  Mostrar el menú disponible
- [x]  EL usuario pueda pedir el menú
- [ ]  Mostrar el costo total que debe pagar
- [ ]  Reportar el monto total de ventas*/

/* Productos es un array con varios valores*/
const usuario = {
    nombre: "Edwin",
    edad: 29,
    deuda: 0
}
const productos = [{
        comida: "Cena",
        costo: 20,
        codigo: "h100"
    },
    {
        comida: "Almuerzo",
        costo: 18,
        codigo: "h200"
    },
    {
        comida: "Desayuno",
        costo: 12,
        codigo: "h300"
    },
]

// Se define pedido como objeto

const pedido= []


const mostrarMenu = () => {
    productos.map(menu => console.log(`${menu.comida}`))
}
const mostrarMenu1 = () => {
    console.log("Código - Nombre - Costo")
    productos.map(menu => console.log(`${menu.codigo} - ${menu.comida} - ${menu.costo}`))
}



document.write("<h1>Buenos días, este es el menú</h1>");
document.write("<p>Código - Nombre - Costo</p>")


let mostrarMenu4 = () => {
    for (let menucito of productos) {
        
        document.write(`${menucito.codigo} - ${menucito.comida} - ${menucito.costo}</br>`)

        }
}

mostrarMenu4()

const pedirProducto = cod => {
    // Si la variable pedirproducto no está definida imprime mensaje
    if (!cod) {
        return "Ingrese un código válido"
    }
    // Se define pedido como objeto
    const productoEncontrado = productos.find(producto => producto.codigo === cod) 
    if (!productoEncontrado) return "El producto no existe"
    pedido.push(productoEncontrado)
    console.log("Su producto ha sido agregado a su pedido. Su pedido es: ")
    return pedido
    
}


/*// .map me entrega un nuevo array que se llena con el retorno al usar .map */