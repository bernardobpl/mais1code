import { Request, Response } from "express"
import { db } from "../../.."
import { User } from "../entity"

export const getUserById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id)
    const user = await db.getRepository(User).findOneBy({id})
  
    if(user === null){
      res.send("Usuário não foi encontrado")
    }
    
    res.send(user)

  } catch(e) {
    console.error("Erro ao tentar buscar usuário pelo id")
    res.status(404).send("Erro ao tentar buscar usuário pelo id")
  }
}