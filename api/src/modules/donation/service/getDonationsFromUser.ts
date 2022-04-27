import { Request, Response } from "express";
import { db } from "../../..";
import { User } from "../../user/entity";

export const getDonationsFromUser = async (req: Request, res: Response) => {
  try {
    if(!(typeof req.query.userId === "string")) {
      res.send("UserId is not a string")
      return
    }
  
    const userId = parseInt(req.query.userId as string)
  
    const user = await db.getRepository(User).findOneBy({id: userId})
  
    if(!user) {
      res.send("User not found")
      return
    }
  
    res.send(user.donations)
  } catch(e) {
    console.error("Erro ao tentar buscar doações do usuário")
    res.status(404).send("Erro ao tentar buscar doações do usuário")
  }
  
}