//Criando um objeto vazio
let objeto2 = {}

//Criando um objeto com propriedades e valores
let pessoa = {
    name: "matheus",
    idade: 20,
    array: [],
    objeto: {},
    func: ()=>{}
}

// Acessando as propriedades desse objeto
console.log(pessoa.name)
console.log(pessoa["idade"])

// Retornando todas as propriedades de um objeto
let keys = Object.keys(pessoa)
console.log(keys)

// Desestruturando um objeto
let {name, idade,array,func, objeto} = pessoa

console.log(name, idade)

let carro = {
    nome: "Fiat",
    placa: "brt-1231",
    valor: 20,
    cor: "vermelho",
}

/* carro.nome
carro["cor"] */

let { nome, valor,cor } = carro

console.log(nome, valor, cor)