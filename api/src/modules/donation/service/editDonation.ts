import { Request, Response } from "express"
import { db } from "../../.."
import { Donation } from "../entity"

export const editDonation = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const donation = await db.getRepository(Donation).findOneBy({id})

  if(donation === null){
    res.status(404).send("Doação não encontrado")
    return
  }

  const editedDonation = {
    ...donation,
    name: req.body.name || donation.name,
    description: req.body.description || donation.description,
    product: req.body.product || donation.product,
  }

  const savedDonation = await db.getRepository(Donation).save(editedDonation);
  res.json(savedDonation)
}
