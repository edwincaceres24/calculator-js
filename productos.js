const mostrarMenu2 = () => {
    console.log("Código - Nombre - Costo")
    for (let producto of productos) {
        //se coloca "producto" en lugar de menu ya que es el nuevo parámetro
        console.log(`${producto.codigo} - ${producto.comida} - ${producto.costo}`)
    }
    
}