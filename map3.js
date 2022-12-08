Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i= 0; i<this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }',
]


// Retornar um array apenas com os preços
const paraObjt = json => JSON.parse(json) //JSON.parse converte String para objeto
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjt).map(apenasPreco)

console.log(resultado)