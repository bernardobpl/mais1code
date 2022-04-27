import { Request, Response } from "express"
import { db } from "../../.."
import { User } from "../entity"

export const createUser = async (req: Request, res: Response) => {
  const newUser = db.getRepository(User).create({...req.body, created_on: new Date()})
  const createdUser = await db.getRepository(User).save(newUser)
  res.send(createdUser)
}