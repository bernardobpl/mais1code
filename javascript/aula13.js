// exemplo 1 MÉTODO PUSH - adicionar um elemento ao final da lista
const ex1Lista = [
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

const ex1NovoItem = {
    nome: "Adelaide",
    salario: 4500,
    anoDoNascimento: 1982,
}

const ex1resultado = ex1Lista.push(ex1NovoItem);
console.log('ex1resultado: ', ex1resultado)
console.log('ex1Lista: ', ex1Lista)


//-----------------------------------------------
// exemplo 2 MÉTODO UNSHIFT - adicionar um elemento ao início da lista
const ex2Lista = [
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

const ex2NovoItem = {
    nome: "Adelaide",
    salario: 4500,
    anoDoNascimento: 1982,
}

const ex2resultado = ex2Lista.unshift(ex2NovoItem);
console.log('ex2resultado: ', ex2resultado)
console.log('ex2Lista: ', ex2Lista)

//-----------------------------------------------
// exemplo de splice - remover vários elementos de uma lista
const ex3Lista = [
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

// const nome = 'Cleiton'
// const index = ex3Lista.findIndex(pessoa => pessoa.nome === nome)
const anoDoNascimento = 1982
const index = ex3Lista.findIndex(pessoa => pessoa.anoDoNascimento === anoDoNascimento)

if(index != -1){
  const ex3resultado = ex3Lista.splice(index,1);
  console.log('ex3resultado: ', ex3resultado)
}
console.log('ex3Lista: ', ex3Lista)

//-----------------------------------------------
// exemplo de filter - remover elementos de uma lista (forma simplificada)
const ex4Lista = [
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
console.log('ex4Lista: ', ex4Lista)

const id = ex4Lista[1].id

const ex4resultado = ex4Lista.filter(pessoa => pessoa.id !== id )
console.log('ex4resultado: ', ex4resultado)