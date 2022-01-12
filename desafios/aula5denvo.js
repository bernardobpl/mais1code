// imagina que você está indo para um show em uma van com pessoas aleatórias
// cada pessoa será representada por um objeto contendo nome e idade
// as pessoas dentro da van serão representadas por uma lista(array) de pessoas
// ao chegar no show, apenas as pessoas que tem 18 anos ou mais podem entrar 
// mostre no terminal/console o nome das pessoas que poderão entrar no show

// para se referir à alguma característica(chave) de um objeto usa a seguinte forma exemplo:   pessoa.nome
// para se referir à algum item de uma lista usa a seguinte forma exemplo: pessoas[3]
// lembre-se q o primeiro item de uma lista é o item 0, sendo assim para acessar esse item usa: pessoas[0]
// para fazer uma condição "se isso, então faz isso", usamos o comando "if"

// comparadores de valores
// x == y , se X for igual a Y independente do tipo de variável. Exemplo: 1 == "1" (verdadeiro)
// x === y , se X for igual a Y e o tipo da variável também for igual. Exemplo: 1 === "1" (falso)
// x !== y , se X for diferente de Y 
// x > y , se X for maior que Y
// x < y , se X for menor que Y
// x >= Y , se X for maior ou igual a Y
// x <= Y , se X for menor ou igual a Y

// vou deixar como exemplo
// como usar um item de uma lista
// como usar o valor de uma propriedade(chave) de um objeto
// como usar o comando "if" e um comparador para fazer uma decisão

const pessoa0 = {
  nome: "Cleiton",
  idade: 16,
}

const pessoa1 = {
  nome: "Zé",
  idade: 60
}

const pessoa2 = {
  nome: "Adelaide",
  idade: 50
}

const pessoa3 = {
  nome: "Dolores",
  idade: 17
}

const pessoa4 = {
  nome: "Catarina",
  idade: 18
}

const pessoas = [
  pessoa0,
  pessoa1,
  pessoa2,
  pessoa3,
  pessoa4
]

const podeIrAoShow = (pessoa) => {
  if(pessoa.idade >= 18){
    return true
  } 
  return false
}

if(podeIrAoShow(pessoa0)){
  console.log(pessoa0.nome, 'pode ir ao show')
}
