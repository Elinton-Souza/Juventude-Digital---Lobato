import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getFoods = async (req: Request, res: Response) => {
  const foods = await prisma.food.findMany();
  res.json(foods);
};
