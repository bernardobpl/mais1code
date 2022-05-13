import { Request, Response } from "express";
import { db } from "../../..";
import { Donation } from "../entity";

export const getDonations = async (req: Request, res: Response) => {
  try {
    const donations = await db.getRepository(Donation).find()
  
    res.send(donations)
  } catch(e) {
    console.error("Erro ao tentar buscar doações")
    res.status(404).send("Erro ao tentar buscar doações")
  }
  
}