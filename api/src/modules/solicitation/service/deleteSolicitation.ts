import { Request, Response } from "express"
import { db } from "../../.."
import { Solicitation } from "../entity"
import { Donation } from "../../donation/entity"

export const deleteSolicitation = async (req: Request, res: Response) => {
  try{
    const id = parseInt(req.params.id)
    const solicitation = await db.getRepository(Solicitation).findOneBy({id})

    if(solicitation === null){
      res.status(404).send("Solicitação não encontrado")
      return
    }

    const donation = await db.getRepository(Donation).findOneBy({id: solicitation.donationId})

    if(donation === null){
      res.status(404).send("Doação não encontrado")
      return
    }

    const editedDonation = {
      ...donation,
      solicitations: donation.solicitations.filter(sol => sol.id !== solicitation.id)
    }
    
    await db.getRepository(Solicitation).delete({id})
    
    const savedDonation = await db.getRepository(Donation).save(editedDonation);


    res.json({donation: savedDonation})

  } catch(e) {
    console.log(e)
    console.error("Erro ao tentar deletar solicitação da doação")
    res.status(404).send("Erro ao tentar deletar solicitação da doação")
  }
}