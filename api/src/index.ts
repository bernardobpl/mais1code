import express from 'express'
import { DataSource } from 'typeorm'
import { router } from './router'
import cors from 'cors'

const PORT = 8080

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

export const db = new DataSource({
  type: 'sqlite',
  database: "./src/database.db",
  entities: [__dirname + '/modules/**/entity.js'],
  logging: true,
  synchronize: true
})

db.initialize()
  .then(() => {
    console.log("Conectado ao banco de dados")
    app.listen(PORT, () => console.log(`💻 Servidor rodando na porta ${PORT} 💻`))
    console.log("Encerrando servidor")
  })
  .catch(() => {
    console.log("Falha ao conectar com o banco de dados")
    console.log("Cancelando operação")
  })
