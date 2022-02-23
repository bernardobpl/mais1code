const express = require('express');
const { alunos, receitas, ingredientes, preparo } = require('./dados');

const app = express()

app.get('/', (req, res) => {
  console.log('opa, bateu aqui')
  return res.json({msg: 'xia'})
})

app.get('/alunos', (req, res) => {
  return res.json({alunos: alunos})
})

app.get('/receitas', (req, res) => {
  console.log('Bateu na rota /receitas ')
  return res.json({receitas: receitas})
})

app.get('/receitas/:id', (req,res) => {
  const id = req.params.id
  console.log('Bateu na rota /receitas/',receitas[id-1].name)
  return res.json({
    receita: receitas[id-1].name,
    ingredientes: ingredientes,
    preparo: preparo
  })
})

app.get('/receitas/strogonoff/preparo', (req,res) => {
  console.log('Bateu na rota /receitas/strogonoff/preparo')
  return res.json({
    preparo: preparo
  })
})

app.get('/receitas/strogonoff/preparo/:id', (req,res) => {
  const id = req.params.id;
  console.log('Bateu na rota /receitas/strogonoff/preparo com id: ', id)
  return res.json({
    passo: preparo[id-1]
  })
})

app.get('/receitas/strognoff/ingredientes', (req, res) => {
  console.log('Bateu na rota /receitas/strogonoff/ingredientes')
  return res.json({ingredientes: ingredientes})
})

app.get('/receitas/strognoff/ingredientes/:id', (req, res) => {
  const id = parseInt(req.params.id)
  console.log('Bateu na rota /receitas/strogonoff/ingredientes com id: ', id)
  console.log(ingredientes.find(ing => ing.id === id))
  return res.json({ingrediente: ingredientes.find(ing => ing.id === id)})
})

app.listen(3000, () => console.log('💻 Servidor executando na prta 3000 💻'))