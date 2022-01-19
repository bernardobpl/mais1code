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

const resultado01 = listaAlunos.every(item => typeof item === 'string')
console.log("resultado01: ", resultado01)

const resultado02 = listaNumeros.every(item => typeof item === 'string')
console.log("resultado02: ", resultado02)

//-----------------------------------------------

const resultado03 = listaNumeros.filter(item => item > 5)
console.log("resultado03: ", resultado03)

const resultado04 = listaAlunos.filter(item => item === 'Mauricio')
console.log("resultado04: ", resultado04)

const resultado05 = listaAlunos.filter(item => item === 'Bernardo')
console.log("resultado05: ", resultado05)

//-----------------------------------------------

const resultado06 = listaAlunosDuplicados.find(item => item.name === 'Maria')
console.log("resultado06: ", resultado06)

const resultado07 = listaAlunosDuplicados.find(item => item.name === 'Bernardo')
console.log("resultado07: ", resultado07)

//-----------------------------------------------

const resultado08 = listaAlunosComplexa.findIndex(item => item.name === 'Mauricio')
console.log("resultado08: ", resultado08)

const resultado09 = listaAlunosComplexa.findIndex(item => item.name === 'Bernardo')
console.log("resultado09: ", resultado09)

//-----------------------------------------------

const listaAlunosComplexa1 = JSON.parse(JSON.stringify(listaAlunosComplexa))
const resultado10 = listaAlunosComplexa1.forEach(item => {item.idade = item.idade * 2})
console.log("resultado10: ", resultado10)
console.log("listaAlunosComplexa resultado10: ", listaAlunosComplexa1)

//-----------------------------------------------

const resultado11 = listaAlunos.includes('Jean')
console.log("resultado11: ", resultado11)

const resultado12 = listaAlunos.includes('Bernardo')
console.log("resultado12: ", resultado12)

//-----------------------------------------------

const resultado13 = listaAlunos.indexOf('Jean')
console.log("resultado13: ", resultado13)

const resultado14 = listaAlunos.indexOf('Bernardo')
console.log("resultado14: ", resultado14)

//-----------------------------------------------

const listaAlunosComplexa2 = JSON.parse(JSON.stringify(listaAlunosComplexa))
const resultado15 = listaAlunosComplexa2.map(item => { return {...item, idade: item.idade*2} })
console.log("resultado15: ", resultado15)
console.log("listaAlunosComplexa resultado15: ", listaAlunosComplexa2)

const resultado16 = listaAlunosComplexa2.map((item) => item.idade)
console.log("resultado16: ", resultado16)

//-----------------------------------------------

const listaAlunosComplexa3 = JSON.parse(JSON.stringify(listaAlunosComplexa))
const resultado17 = listaAlunosComplexa3.pop()
console.log("resultado17: ", resultado17)
console.log("listaAlunosComplexa resultado17: ", listaAlunosComplexa3)

//-----------------------------------------------

const listaAlunosComplexa4 = JSON.parse(JSON.stringify(listaAlunosComplexa))
const bernardo = {
  id: 4,
  name:'Bernardo',
  idade: 24,
  cidade: 'Belo Horizonte'
}
const resultado18 = listaAlunosComplexa4.push(bernardo)
console.log("resultado18: ", resultado18)
console.log("listaAlunosComplexa resultado18: ", listaAlunosComplexa4)

//-----------------------------------------------

const resultado19 = listaNumeros.reduce((somatorio,item) => {
  somatorio += item
  return somatorio
}, 0)
console.log("resultado19: ", resultado19)

//-----------------------------------------------

const listaAlunosComplexa5 = JSON.parse(JSON.stringify(listaAlunosComplexa))
const resultado20 = listaAlunosComplexa5.shift()
console.log("resultado20: ", resultado20)
console.log("listaAlunosComplexa resultado20: ", listaAlunosComplexa5)

//-----------------------------------------------

const resultado21 = listaAlunosComplexa.slice(0,2)
console.log("resultado21: ", resultado21)

//-----------------------------------------------

const resultado22 = listaAlunosComplexa.some(item => item.idade < 100)
console.log("resultado22: ", resultado22)

const resultado23 = listaAlunosComplexa.some(item => item.idade > 100)
console.log("resultado23: ", resultado23)

//-----------------------------------------------

const listaNumerosInvertida1 = JSON.parse(JSON.stringify(listaNumerosInvertida))
const resultado24 = listaNumerosInvertida1.sort((a,b) => a-b)
console.log("resultado24: ", resultado24)

//-----------------------------------------------

const listaAlunosComplexa6 = JSON.parse(JSON.stringify(listaAlunosComplexa))
const resultado25 = listaAlunosComplexa6.splice(1,2)
console.log("resultado25: ", resultado25)
console.log("listaAlunosComplexa resultado25: ", listaAlunosComplexa6)

//-----------------------------------------------

const resultado26 = listaNumeros.toString()
console.log("resultado26: ", resultado26)

//-----------------------------------------------

const listaAlunosComplexa7 = JSON.parse(JSON.stringify(listaAlunosComplexa))
const Diorgenes = {
  id: 4,
  name:'Diorgenes',
  idade: 20,
  cidade: 'São Paulo'
}
const resultado27 = listaAlunosComplexa7.unshift(Diorgenes)
console.log("resultado27: ", resultado27)
console.log("listaAlunosComplexa resultado27: ", listaAlunosComplexa7)