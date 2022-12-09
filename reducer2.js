const alunos = [
    {nome: "Pedro", nota: 9.8, bolsista: true},
    {nome: "Joao", nota: 7.2, bolsista: false},
    {nome: "Maria", nota: 9.2, bolsista: true},
    {nome: "Gabriel", nota: 8.2, bolsista: false}
]

// Deafio 1: Todos os alunos são bolsista ?
const todosBolsista = (resultado,bolsista) => resultado && bolsista
console,log(alunos.map(a => a.bolsista).reduce(todosBolsista))

// Desafio 2: Algum aluno ée bolsista ?
const algumBolista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolista))