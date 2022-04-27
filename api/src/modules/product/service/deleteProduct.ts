import { Request, Response } from "express"
import { db } from "../../.."
import { Product } from "../entity"
import { Donation } from "../../donation/entity"

export const deleteProduct = async (req: Request, res: Response) => {
  try{
    const id = parseInt(req.params.id)
    const product = await db.getRepository(Product).findOneBy({id})

    if(product === null){
      res.status(404).send("Produto não encontrado")
      return
    }

    const donation = await db.getRepository(Donation).findOneBy({id: product.donationId})

    if(donation === null){
      res.status(404).send("Doação não encontrado")
      return
    }

    const editedDonation = {
      ...donation,
      product: null
    }
    
    const savedDonation = await db.getRepository(Donation).save(editedDonation);

    const deletedProduct = await db.getRepository(Product).delete({id})

    res.json({donation: savedDonation, product: deletedProduct})

  } catch(e) {
    console.log(e)
    console.error("Erro ao tentar deletar produto da doação")
    res.status(404).send("Erro ao tentar deletar produto da doação")
  }
}