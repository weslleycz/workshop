// Criando um array vazio
let array = []

//Criando um array com itens
let array2 = ['Cajazeiras', 4 , true]
let numeros = [1,2,3,4]

// Desestruturando um array
let [num1, num2, num3 ,num4] = numeros

// Método forEach: Ele recebe até três parâmetros.
// 1. O item que está sendo pego
// 2. O indice do item
// 3. O array em questão
array2.forEach((item, index)=>{
    console.log(item, index)

})

// Método push: Adiciona um item no final de um array
array.push(1, "São José", false)

console.log(array)

// Método pop: Remove um item do final do array
array.pop()
console.log(array)

// Método indexOf: Procura o indice de um item dentro de um array
console.log(array.indexOf("São José"))

// Método splice: Recebe três(ou mais) parâmetros
// 1. O item que você quer que a partir dele (contando com ele) seja removido
// 2. A quantidade de itens a serem removidos
// 3. O (ou os) item(ens) que será adicionado a partir da remoção
array.splice(1, 1, "asdf")
console.log(array)

// O método map: Cria um novo array com base na configuração da função
let copyArray = numeros.map((item)=>{
    return item * 2;
})
console.log(numeros)
console.log(copyArray)

