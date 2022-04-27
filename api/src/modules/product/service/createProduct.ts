import { Request, Response } from "express"
import { db } from "../../.."
import { Product } from "../entity"
import { Donation } from "../../donation/entity"

export const createProduct = async (req: Request, res: Response) => {
  try{
    const id = req.body.donation
    const donation = await db.getRepository(Donation).findOneBy({id})

    if(donation === null){
      res.status(404).send("Doação não encontrado")
      return
    }

    const newProduct: Product = {...req.body, available: true}

    const savedProduct = await db.getRepository(Product).save(newProduct)
    
    const editedDonation = {
      ...donation,
      product: savedProduct
    }
    
    const savedDonation= await db.getRepository(Donation).save(editedDonation)

    res.json({donation: savedDonation, product: savedProduct})

  } catch(e) {
    console.error(e)
    console.error("Erro ao tentar criar produto para doação")
    res.status(404).send("Erro ao tentar criar produto para doação")
  }
}