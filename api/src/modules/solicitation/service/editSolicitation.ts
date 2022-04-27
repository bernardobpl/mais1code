import { Request, Response } from "express"
import { db } from "../../.."
import { Solicitation } from "../entity"

export const editSolicitation = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id)
    const solicitation = await db.getRepository(Solicitation).findOneBy({id})

    if(solicitation === null){
      res.status(404).send("Solicitação não encontrado")
      return
    }

    const editedSolicitation = {
      ...solicitation,
      reason: req.body.reason || solicitation.reason,
    }

    const savedSolicitation = await db.getRepository(Solicitation).save(editedSolicitation);
    res.json(savedSolicitation)

  } catch(e){
    console.error("Erro ao tentar alterar solicitação da doação")
    res.status(404).send("Erro ao tentar alterar solicitação da doação")
  }
  
}
