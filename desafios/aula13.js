// desafio 1 MÉTODO PUSH - adicionar um elemento ao final da lista
const lista1 = [
  {
    nome: "Cleiton",
    salario: 3000,
    anoDoNascimento: 2003,
  },  
  {
    nome: "Zé",
    salario: 1200,
    anoDoNascimento: 1995,
  },  
]


//-----------------------------------------------
// desafio 2 MÉTODO UNSHIFT - adicionar um elemento ao início da lista
const lista2 = [
  {
    nome: "Cleiton",
    salario: 3000,
    anoDoNascimento: 2003,
  },  
  {
    nome: "Zé",
    salario: 1200,
    anoDoNascimento: 1995,
  },  
]


//-----------------------------------------------
// desafio de splice - remover vários elementos de uma lista
const lista3 = [
  {
    nome: "Cleiton",
    salario: 3000,
    anoDoNascimento: 2003,
  },  
  {
    nome: "Zé",
    salario: 1200,
    anoDoNascimento: 1995,
  },  
  {
    nome: "Adelaide",
    salario: 4500,
    anoDoNascimento: 1982,
  }
]


//-----------------------------------------------
// desafio de filter - remover elementos de uma lista (forma simplificada)
const lista4 = [
  {
    id: Math.random(),
    nome: "Cleiton",
    salario: 3000,
    anoDoNascimento: 2003,
  },  
  {
    id: Math.random(),
    nome: "Zé",
    salario: 1200,
    anoDoNascimento: 1995,
  },  
  {
    id: Math.random(),
    nome: "Adelaide",
    salario: 4500,
    anoDoNascimento: 1982,
  },
  {
    id: Math.random(),
    nome: "Cleiton",
    salario: 15000,
    anoDoNascimento: 1970,
  }, 
]

const listaSemCleiton2 = lista4.filter(pessoa => pessoa.anoDoNascimento !== 1970 )
console.log(listaSemCleiton2)