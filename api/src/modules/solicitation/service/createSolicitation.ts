import { Request, Response } from "express"
import { db } from "../../.."
import { Solicitation } from "../entity"
import { Donation } from "../../donation/entity"

export const createSolicitation = async (req: Request, res: Response) => {
  try{
    const id = req.body.donation
    const donation = await db.getRepository(Donation).findOneBy({id})

    if(donation === null){
      res.status(404).send("Doação não encontrado")
      return
    }

    const newSolicitation: Solicitation = {...req.body, available: true}

    const savedSolicitation = await db.getRepository(Solicitation).save(newSolicitation)
    
    const editedDonation = {
      ...donation,
      solicitations: [...donation.solicitations, savedSolicitation]
    }

    const savedDonation= await db.getRepository(Donation).save(editedDonation)

    res.json({donation: savedDonation, solicitation: savedSolicitation})

  } catch(e) {
    console.error(e)
    console.error("Erro ao tentar criar solicitação para doação")
    res.status(404).send("Erro ao tentar criar solicitação para doação")
  }
}