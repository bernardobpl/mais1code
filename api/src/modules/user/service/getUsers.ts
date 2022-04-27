import { Request, Response } from "express";
import { db } from "../../..";
import { User } from "../entity";

export const getUsers = async (req: Request, res: Response) => {
  const users = await db.getRepository(User).find();
  res.send(users)
} 