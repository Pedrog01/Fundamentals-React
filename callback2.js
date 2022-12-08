const notas = [7.7,6.5,5.2,8.9,3.6,7.1,9.0]

// Sem callback
let notasBaixas1 = []

for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)
    
// com o Callback

const notasBaixas2 = notas.filter(function(notas){
    return notas < 7
})

console.log(notasBaixas2);

// com ArrowFunction

const notasMenorQue7 = nota => notas < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3);


//Conclusão: filter() vai percorrer o array e retorna um valor que seja verdadeiro, se for false ele bão retorna.