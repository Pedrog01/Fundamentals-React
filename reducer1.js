const alunos = [
    {nome: "Pedro", nota: 9.8, bolsista: true},
    {nome: "Joao", nota: 7.2, bolsista: false},
    {nome: "Maria", nota: 9.2, bolsista: true},
    {nome: "Gabriel", nota: 8.2, bolsista: false}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador,atual)
    return acumulador + atual
}, 0)

console.log(resultado)