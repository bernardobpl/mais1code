const listaAlunos = ['Maria', 'Clara', 'Mauricio', 'Jean']
const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const listaNumerosInvertida = listaNumeros.reverse()
const listaAlunosDuplicados = [
  {
    id: 0,
    name: 'Maria'
  },
  {
    id: 1,
    name:'Maria'
  },
  {
    id: 2,
    name:'Maria'
  },
  {
    id: 3,
    name:'Maria'
  },
]

const listaAlunosComplexa = [
  {
    id: 0,
    name: 'Maria',
    idade: 89,
    cidade: 'Sabará',
    mutado: true
  },
  {
    id: 1,
    name:'Clara',
    idade: 27,
    cidade: 'Esmeraldas'
  },
  {
    id: 2,
    name:'Mauricio',
    idade: 25,
    cidade: 'São Paulo'
  },
  {
    id: 3,
    name:'Jean',
    idade: 28,
    cidade: 'São Paulo'
  },
]

//----------------------------------------------

console.log('Método Every')

// verifica se para cada item da lista, a condição passada é verdadeira
// devolve "true" se for verdadeiro para todos os items
// devolve "false" se for falso para pelo menos um dos items

const resultado01 = listaAlunos.every(item => typeof item === 'string')
console.log("resultado01: ", resultado01)

const resultado02 = listaNumeros.every(item => typeof item === 'string')
console.log("resultado02: ", resultado02)

console.log()

//-----------------------------------------------

console.log('Método Some')

// percorre a lista verificando se pelo menos um item da lista satisfaz a condição passada
// se existir, retorna "true"
// se não, retorna "false"

const resultado03 = listaAlunosComplexa.some(item => item.idade < 100)
console.log("resultado03: ", resultado03)

const resultado04 = listaAlunosComplexa.some(item => item.idade > 100)
console.log("resultado04: ", resultado04)

console.log()

//-----------------------------------------------

console.log('Método Includes')

// verifica se a lista possui um item igual ao valor passado
// se possuir o item igual ao valor passado, retorna "true"
// se não, retorna "false"

const resultado05 = listaAlunos.includes('Jean')
console.log("resultado05: ", resultado05)

const resultado06 = listaAlunos.includes('Bernardo')
console.log("resultado06: ", resultado06)

console.log()

//-----------------------------------------------

console.log('Método Filter')

// verifica se para cada item da lista, a condição passada é verdadeira
// devolve uma lista com todos os items em que a condição foi verdadeira
// devolve uma lista vazia caso nenhum item tenha essa condição verdadeira

const resultado07 = listaNumeros.filter(item => item > 5)
console.log("resultado07: ", resultado07)

const resultado08 = listaAlunos.filter(item => item === 'Mauricio')
console.log("resultado08: ", resultado08)

const resultado09 = listaAlunos.filter(item => item === 'Bernardo')
console.log("resultado09: ", resultado09)

console.log()

//-----------------------------------------------

console.log('Método Find')

// percorre a lista tentando achar um item em que a condição passada é verdadeira
// devolve apenas o item ( caso existam mais de dois, devolve sempre o primeiro encontrado )
// caso não encontre nenhum item que satisfaz a condição, retorna "undefined"

const resultado10 = listaAlunosDuplicados.find(item => item.name === 'Maria')
console.log("resultado10: ", resultado10)

const resultado11 = listaAlunosDuplicados.find(item => item.name === 'Bernardo')
console.log("resultado11: ", resultado11)

console.log()

//-----------------------------------------------

console.log('Método FindIndex')

// percorre a lista tentando achar um item em que a condição passada é verdadeira
// devolve o index do primeiro item encontrado que satisfaz a condição
// caso não encontre nenhum item que satisfaz a condição, retorna o index "-1"

const resultado12 = listaAlunosComplexa.findIndex(item => item.name === 'Mauricio')
console.log("resultado12: ", resultado12)

const resultado13 = listaAlunosComplexa.findIndex(item => item.name === 'Bernardo')
console.log("resultado13: ", resultado13)

console.log()

//-----------------------------------------------

console.log('Método IndexOf')

// retorna o index do item da lista que seja igual ao valor passado
// caso nenhum item seja igual ao valor passado, retorna "-1" 

const resultado14 = listaAlunos.indexOf('Jean')
console.log("resultado14: ", resultado14)

const resultado15 = listaAlunos.indexOf('Bernardo')
console.log("resultado15: ", resultado15)

console.log()

//-----------------------------------------------

console.log('Método ForEach')

// percorre a lista executando uma função para cada item da lista
// altera a lista
// sempre devolve "undefined"

const listaAlunosComplexa1 = JSON.parse(JSON.stringify(listaAlunosComplexa))
const resultado16 = listaAlunosComplexa1.forEach(item => {item.idade = item.idade * 2})
console.log("resultado16: ", resultado16)
console.log("listaAlunosComplexa resultado16: ", listaAlunosComplexa1)

console.log()

//-----------------------------------------------

console.log('Método Map')

// percorre a lista toda, executando a função passada pra cada um dos items da lista
// essa função deve retornar um valor pra cada item da lista
// pra cada return é formado um item numa lista nova
// retorna uma lista nova com os valores retornados pela função passada
// não modifica a lista original

const listaAlunosComplexa2 = JSON.parse(JSON.stringify(listaAlunosComplexa))
const resultado17 = listaAlunosComplexa2.map(item => { return {...item, idade: item.idade*2} })
console.log("resultado17: ", resultado17)
console.log("listaAlunosComplexa resultado17: ", listaAlunosComplexa2)

const resultado18 = listaAlunosComplexa2.map((item) => item.idade)
console.log("resultado18: ", resultado18)

console.log()

//-----------------------------------------------

console.log('Método Pop')

// remove o último item da lista
// modifica a lista original
// retorna o item removido

const listaAlunosComplexa3 = JSON.parse(JSON.stringify(listaAlunosComplexa))
const resultado19 = listaAlunosComplexa3.pop()
console.log("resultado19: ", resultado19)
console.log("listaAlunosComplexa resultado19: ", listaAlunosComplexa3)

console.log()

//-----------------------------------------------

console.log('Método Push')

// adiciona um item no final da lista
// modifica a lista original
// retorna o número de items da lista após adicionar o item

const listaAlunosComplexa4 = JSON.parse(JSON.stringify(listaAlunosComplexa))
const bernardo = {
  id: 4,
  name:'Bernardo',
  idade: 24,
  cidade: 'Belo Horizonte'
}
const resultado20 = listaAlunosComplexa4.push(bernardo)
console.log("resultado20: ", resultado20)
console.log("listaAlunosComplexa resultado20: ", listaAlunosComplexa4)

console.log()

//-----------------------------------------------

console.log('Método Shift')

// remove o primeiro item da lista
// altera a lista original
// retorna o item removido

const listaAlunosComplexa5 = JSON.parse(JSON.stringify(listaAlunosComplexa))
const resultado21 = listaAlunosComplexa5.shift()
console.log("resultado21: ", resultado21)
console.log("listaAlunosComplexa resultado21: ", listaAlunosComplexa5)

console.log()

//-----------------------------------------------

console.log('Método Unshift')

// adiciona um item no início da lista
// retorna o tamanho da lista após o item ter sido adicionado

const listaAlunosComplexa7 = JSON.parse(JSON.stringify(listaAlunosComplexa))
const Diorgenes = {
  id: 4,
  name:'Diorgenes',
  idade: 20,
  cidade: 'São Paulo'
}
const resultado22 = listaAlunosComplexa7.unshift(Diorgenes)
console.log("resultado22: ", resultado22)
console.log("listaAlunosComplexa resultado22: ", listaAlunosComplexa7)

//-----------------------------------------------

console.log('Método Slice')

// cria uma lista nova usando itens da lista original
// são passados 2 valores, o index de onde vc quer começar pegar items, e o index de onde vc quer parar de pegar items
// retorna uma lista nova com os itens pegos

const resultado23 = listaAlunosComplexa.slice(0,2)
console.log("resultado23: ", resultado23)

console.log()

//-----------------------------------------------

console.log('Método Splice')

// divide a lista em duas 
// recebe dois números, o primeiro número indica o index de onde deve começar a separar, o segundo indica quantos items a partir daquele index devem ser separados
// retorna uma lista com os itens separados
// alista original é modificada e os itens 0s1e2p3a4 r ados são removidos dela

const listaAlunosComplexa6 = JSON.parse(JSON.stringify(listaAlunosComplexa))

// [s,e,p,a,r,a,d,o,s]
// [r] = [s,e,p,a,a,d,o,s]
const resultado24 = listaAlunosComplexa6.splice(1,2)

console.log("resultado24: ", resultado24)
console.log("listaAlunosComplexa resultado24: ", listaAlunosComplexa6)

console.log()

//-----------------------------------------------

console.log('Método Sort')

// executa uma ordenação da lista de acordo com o retorno da função passada
// a função passada receberá 2 items da lista
// se a função passada retorna 1, o item "a" vem antes do "b"
// se a função passada retorna -1, o item "b" vem antes do "a"
// se a função passada retorna 0, a ordem não importa e não será alterada

const listaNumerosInvertida1 = JSON.parse(JSON.stringify(listaNumerosInvertida))
const resultado25 = listaNumerosInvertida1.sort((a,b) => a-b)
console.log("resultado25: ", resultado25)

console.log()


//-----------------------------------------------

console.log('Método ToString')

// transforma a lista em uma string

const resultado26 = listaNumeros.toString()
console.log("resultado26: ", resultado26)

console.log()

//-----------------------------------------------

console.log('Método Reduce')

// percorre a lista executando a mesma função para cada item da lista
// a função passada deve retornar um valor, e esse valor retornado ficará no acumulador
// para cada vez q a função for executada, o acumulador terá um valor novo
// após a função de loop, é possível passar um valor inicial para o acumulador

const resultado27 = listaNumeros.reduce((somatorio,item) => {
  somatorio += item
  return somatorio
}, 0)
console.log("resultado27: ", resultado27)

console.log()