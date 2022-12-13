var selecao = 'Brasil'
console.log(selecao)

if (selecao == 'Brasil') {
    console.log(`${selecao} já ganhou 5 vezes a copa`)
} else if (selecao == 'Argentina' || selecao == 'Uruguai') {
    console.log(`${selecao} Já ganhou 2 vezes a copa`)
} 
else {
    console.log(`${selecao} nunca ganhou uma copa do mundo`)
}