import { Request, Response } from "express";
import { db } from "../../..";
import { Status } from "../entity";

export const getStatus = async (req: Request, res: Response) => {
  try {
    const status = await db.getRepository(Status).find()
    res.send(status)
  } catch(e) {
    console.error("Erro ao tentar buscar Status")
    res.status(404).send("Erro ao tentar buscar Status")
  }
}