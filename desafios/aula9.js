// imagine que vc ta fazendo uma compra
// no seu carrinho tem vários itens e cada item tem um preço
// por causa do biroliro o preço de todos os items subiu em 10%

// crie uma lista nova e mostre no console essa lista com os preços atualizados

// soma o preço total com o ajuste dos 10% da sua compra e mostre no console também

const compra = [
  {
    name: 'cerveja',
    preço: 3.5
  },
  {
    name: 'cachaça',
    preço: 20.00
  },
  {
    name: 'linguiça',
    preço: 15.00
  },
  {
    name: 'contra-filé',
    preço: 40.00
  },
  {
    name: 'carvão',
    preço: 10.00
  },
  {
    name: 'coca-cola',
    preço: 12.00
  },
]
// total: 100.5
// total com 10% a mais: 110,55

//10 * 1 = 10
//10 * 100% = 10

//10 * 1.1 = 11
//10 * 110% = 10


// const compra2 = 
// const precoTotal1 = 3.5 + 20 + 15 + 40 + 10 + 12
// const precoTotal2 = compra[0].preço + compra[1].preço + compra[2].preço + compra[3].preço + compra[4].preço + compra[6].preço

// const precoTotal = compra.reduce((somatorio,item) => {
//   somatorio += item.preço
//   return somatorio
// }, 0)
  
  
// let precoTotal = 0
// const compra2 = compra.map(item => {
//   let newItem = {...item}
//   newItem.preço = newItem.preço*1.1
//   return newItem
// })

// console.log(compra)
// console.log(compra2)

// const x = compra.forEach(item => {
//   precoTotal += item.preço
// })

// const totalComDezPorcento = precoTotal*1.1

// console.log(totalComDezPorcento)


let listaNumero = [5, 10, 15, 20]
const listaNumeroObjetos = [ {num: 5}, {num: 10}, {num: 15}, {num: 20} ]

const listaDobroDosValores = listaNumero.map(item => {
  return item * 2
})

const teste = listaNumeroObjetos.forEach(item => {
  item.num = item.num*2
})

console.log(listaNumeroObjetos)
// console.log(listaDobroDosValores)