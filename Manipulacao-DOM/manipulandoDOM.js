// Pegando um elemento da página (usando a notação de id)
let adicionaElemento = document.querySelector("#createElement")

//Criando um novo elemento html
let div = document.createElement("div")
let p = document.createElement("p")

//Adicionando um valor dentro desse elemento
p.innerHTML = "Hello World"

//Adicionando um elementro dentro de outro elemento
div.append(p)

adicionaElemento.append(div)

// Adicionando itens no localStorage
let objeto = {
    name: "Matheus",
    age: 20
}

// Transformando um objeto para um JSON
let objString = JSON.stringify(objeto)

// Salvando no localStorage o JSON criado
localStorage.setItem("Pessoa",objString )

// Pegando valor salvo no localStorage
let valor = JSON.parse(localStorage.getItem("Pessoa"))

// Liberando o espaço criado no localStorage
/* localStorage.clear() */

//Adicionando evento de click para um botão
let button = document.querySelector("#button")

console.log(button)

button.addEventListener("click", ()=>{
    console.log("Clicou!")
})