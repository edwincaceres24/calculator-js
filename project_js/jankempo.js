const valores = [{
        id: 1,
        valor: "Piedra"
    },
    {
        id: 2,
        valor: "Papel"
    },
    {
        id: 3,
        valor: "Tijera"
    }
]

intento_de_juego =valores.forEach(function (opcion) {
    console.log(opcion.valor)
}
)

console.log(valores[0].valor)
console.log(intento_de_juego)