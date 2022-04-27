import { Request, Response } from "express"
import { db } from "../../.."
import { User } from "../../user/entity"
import { Donation } from "../entity"

export const createDonation = async (req: Request, res: Response) => {
  const newDonation = db.getRepository(Donation).create({...req.body})
  const createdDonation = await db.getRepository(Donation).save(newDonation)

  const user = await db.getRepository(User).findOneBy({id: parseInt(req.body.owner)})

  if(!user) {
    res.send("User not found")
    return
  }

  user.donations = [...user.donations, ...newDonation]
  const userUpdated = await db.getRepository(User).save(user);
  res.json({user: userUpdated, donation: createdDonation})
}