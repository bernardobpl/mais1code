// numa lista de pessoas
// ache apenas as que tem idade maior ou igual a 18
// e mostre no console

const listPessoas = [
  {
    nome: "Cleiton",
    idade: 30,
  },
  {
    nome: "Zé",
    idade: 15
  },
  {
    nome: "Adelaide",
    idade: 18
  },
  {
    nome: "Dolores",
    idade: 10
  },
  {
    nome: "Catarina",
    idade: 21
  }
]

const resultado01= listPessoas.filter(pessoa => pessoa.idade >= 18)
// filtra a lista de pessoas, e pra cada pessoa na lista, compare se a idade da pessoa é maior ou igual a 18

console.log('resultado01: ', resultado01)


//-------------------------------------------
// do resultado de uma corrida 
// foi feita uma lista com os corredores na posição em que chegaram
// mostre a posição da corredora Dolores

const listPoisicaoCorredores = [
  {
    nome: "Cleiton",
    idade: 30,
  },
  {
    nome: "Zé",
    idade: 15
  },
  {
    nome: "Adelaide",
    idade: 18
  },
  {
    nome: "Dolores",
    idade: 10
  },
  {
    nome: "Catarina",
    idade: 21
  }
]

// 1 - posição da lista
const resultado02 = listPoisicaoCorredores.findIndex(corredor => corredor.nome === 'Dolores')
// na lista de corredores, ache o index, do corredor em que o nome do corredor é igual a 'Dolores'
console.log("resultado02: ", resultado02)

// 2 - posição na corrida
const resultado03 = resultado02 + 1
console.log("resultado03: ", resultado03)


//--------------------------------------------------
// em um restaurante você tem 3 motoboys e precisa fazer uma entrega urgente
// para isso vc precisa que um dos motoboys esteja disponível
// mostre uma lista dos motoboys disponíveis para entrega

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
  {
    nome: "Dolores",
    disponivel: false
  },
  {
    nome: "Catarina",
    disponivel: true
  }
]

const resultado04 = motoboys.filter(motoboy => motoboy.disponivel)
console.log('resultado04: ', resultado04)


//--------------------------------------------------
// em uma missa,
// tem várias pessoas na igreja
// ache a pessoa que esta celebrando a missa (padre)

const missa = [
  {
    nome: "Cleiton",
    funcao: 'Fiel',
  },  
  {
    nome: "Zé",
    funcao: 'Fiel'
  },  
  {
    nome: "Adelaide",
    funcao: 'Cantora'
  },
  {
    nome: "Dolores",
    funcao: 'Coroinha'
  },
  {
    nome: "Catarina",
    funcao: 'Padre'
  }
]

const resultado05 = missa.find(pessoa => pessoa.funcao === 'Padre')
console.log('resultado05: ', resultado05)

//--------------------------------------------------
// imagine um restaurante que atende moradores de rua
// cada um deles tem direito a um prato de comida
// liste os que ainda não almoçaram para que possam receber seu rango

const moradoresDeRua = [
  {
    nome: "Cleiton",
    almocou: true,
  },  
  {
    nome: "Zé",
    almocou: false
  },  
  {
    nome: "Adelaide",
    almocou: false
  },
  {
    nome: "Dolores",
    almocou: true
  },
  {
    nome: "Catarina",
    almocou: true
  }
]

const resultado06 = moradoresDeRua.filter(mendigo => !mendigo.almocou)
console.log('resultado06: ', resultado06)

//--------------------------------------------------
// em uma lista de alunos presentes na aula
// ache o aluno Bernardo

const alunosPresentes = [
  {
    nome: "Cleiton",
    almocou: true,
  },  
  {
    nome: "Zé",
    almocou: false
  },  
  {
    nome: "Adelaide",
    almocou: false
  },
  {
    nome: "Dolores",
    almocou: true
  },
  {
    nome: "Catarina",
    almocou: true
  }
]

const resultado07 = alunosPresentes.find(aluno => aluno.nome === 'Bernardo')
console.log('resultado07: ', resultado07)