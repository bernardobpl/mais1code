import { Request, Response } from "express"
import { db } from "../../.."
import { User } from "../entity"

export const editUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const userList = await db.getRepository(User).findBy({id})

  if(userList.length > 0){
    const editedUser = {
      ...userList[0], 
      name: req.body.name || userList[0].name,
      age: req.body.age || userList[0].age
    }

    const result = await db.getRepository(User).save(editedUser)
    res.send(result)
  }

  res.status(404).send("Usuário não encontrado")
}