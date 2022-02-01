// imagina que vc é um adolecente de 14 anos com seus amiguinhos
// vcs querem ir para um show
// para entrar, vcs precisam de ter um responsável com 18 anos ou mais
// se na lista de pessoa tiver alguém com 18 anos ou mais, mostre "true", se não, mostre "false" no console

const pessoa0 = {
  nome: "Cleiton",
  idade: 14,
}

const pessoa1 = {
  nome: "Zé",
  idade: 15
}

const pessoa2 = {
  nome: "Adelaide",
  idade: 16
}

const pessoa3 = {
  nome: "Dolores",
  idade: 14
}

const pessoa4 = {
  nome: "Catarina",
  idade: 21
}

const pessoas = [
  pessoa0,
  pessoa1,
  pessoa2,
  pessoa3,
  pessoa4
]

const resultado1 = pessoas.some(pessoa => pessoa.idade >= 18)
console.log("resultado1: ",resultado1)

//------------------------------------------------------
// imagina que vc fez vestibular e saiu a lista dos aprovados
// vc quer verificar se seu nome está na lista
// seu nome é "Maria"
// se estiver na lista, mostra true, se não mostra false

const aprovados = ["Kleber", "Joana", "Geomir", "Matilde"]

const resultado2 = aprovados.includes("Maria")
console.log("resultado2: ", resultado2)

//-----------------------------------------------------
// imagina que vc vai num casamento em época de pandemia
// só pode entrar no casamento se todos da van estiverem com a vacina em dia
// verifique se todos da van estão vacinados para poder entrarem

const van = [
  {
    nome: "Cleiton",
    vacinado: true,
  },  
  {
    nome: "Zé",
    vacinado: true
  },  
  {
    nome: "Adelaide",
    vacinado: false
  },  
  {
    nome: "Dolores",
    vacinado: true
  },  
  {
    nome: "Catarina",
    vacinado: true
  }
]

const resultado3 = van.every(pessoa => pessoa.vacinado)
console.log("resultado3: ", resultado3)

//------------------------------------------------
// em um restaurante você tem 3 motoboys e precisa fazer uma entrega urgente
// para isso vc precisa que um dos motoboys esteja disponível
// se tiver algum motoboy disponível, mostre true, se não mostre false

const motoboys = [
  {
    nome: "Cleiton",
    disponivel: true,
  },  
  {
    nome: "Zé",
    disponivel: true
  },  
  {
    nome: "Adelaide",
    disponivel: false
  },  
]

const resultado4 = motoboys.some(motoboy => motoboy.disponivel )
console.log("resultado4: ", resultado4) 

//------------------------------------------------
// o professor está fazendo chamada e vc entrou na turma depois
// vc não sabe se o seu nome está na lista e quer descobrir
// se seu nome estiver na lista, mostre true, se não mostre false
// seu nome é "Joaquim"

const turma = [
  {
    nome: "Cleiton",
    vacinado: true,
  },  
  {
    nome: "Zé",
    vacinado: true
  },  
  {
    nome: "Adelaide",
    vacinado: false
  },  
  {
    nome: "Dolores",
    vacinado: true
  },  
  {
    nome: "Catarina",
    vacinado: true
  },
]

//errado
// const resultado = turma.some(vacinado=>vacinado.true == true )
// existe algum vacinado na turma, em que o true do vacinado(vacinado.true) seja verdadeiro?

//certo
const resultado5 = turma.some(aluno => aluno.nome == "Joaquim" )
// existe algum aluno na turma, em que o nome do aluno(aluno.nome) seja "Joaquim"?

console.log("resultado5: ", resultado5)