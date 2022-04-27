import { Request, Response } from "express"
import { db } from "../../.."
import { Donation } from "../entity"

export const deleteDonation = async (req: Request, res: Response) => {
  try{
    const id = parseInt(req.params.id)
    const donation = await db.getRepository(Donation).findOneBy({id})

    if(donation === null){
      res.status(404).send("Doação não encontrado")
      return
    }

    const donationDeleted = await db.getRepository(Donation).delete({id})
    res.send(donationDeleted)
  } catch(e) {
    console.error("Erro ao tentar deletar doação pelo id")
    res.status(404).send("Erro ao tentar deletar doação pelo id")
  }
}