import { Request, Response } from "express"
import { db } from "../../.."
import { Product } from "../entity"

export const editProduct = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id)
    const product = await db.getRepository(Product).findOneBy({id})

    if(product === null){
      res.status(404).send("Produto não encontrado")
      return
    }

    const editedProduct = {
        ...product,
        name: req.body.name || product.name,
        description: req.body.description || product.description
    }

    const savedProduct = await db.getRepository(Product).save(editedProduct);
    res.json(savedProduct)

  } catch(e){
    console.error("Erro ao tentar alterar produto da doação")
    res.status(404).send("Erro ao tentar alterar produto da doação")
  }
  
}
