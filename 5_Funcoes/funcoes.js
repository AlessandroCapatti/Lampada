function presente (dinheiro, valor) {
    if (dinheiro < valor){
        return 'Não vai dar para comprar...'
    } else {
        return 'Você realemte precisa fazer essa compra?'
    }
}

let x = presente(100, 90)
console.log(x)