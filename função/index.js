import api from "axios";

function hello() {
  console.log("Hello World!");
}

function soma(n1, n2) {
  return n1 + n2;
}

function print(palavra) {
  for (let index = 0; index < palavra.length; index++) {
    console.log(palavra[index]);
  }
}

const teste = () => {
  console.log(1234);
};

const printf = (n) => {
  console.log(n);
};

const pokemon = async (n) => {
  const data = await api.get(`https://pokeapi.co/api/v2/pokemon/${n}`);
  console.log(data.data);
};

//const data = await api.get("https://pokeapi.co/api/v2/pokemon/ditto")

console.log(pokemon(1));

//localStorage.setItem("kay", "valor");
//const cat = localStorage.getItem("kay");
//localStorage.removeItem("kay");
//localStorage.clear();