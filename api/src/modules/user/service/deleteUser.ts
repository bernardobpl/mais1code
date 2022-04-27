import { Request, Response } from "express"
import { db } from "../../.."
import { User } from "../entity"

export const deleteUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const userDeleted = await db.getRepository(User).delete({id})
  res.send(userDeleted)
}