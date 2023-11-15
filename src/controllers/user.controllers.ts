import { Request, Response } from "express";
import { prismaClient } from "../db/client";
import { convertToType } from "../helpers/utils";

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    const newUser = await prismaClient.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const user = await prismaClient.user.findUnique({
      where: { id: convertToType(userId) },
      select: {
        email: true,
        name: true,
        movies: {
          select: {
            name: true,
            poster_image: true,
            score: true,
            genres: {
              select: { name: true },
            },
          },
        },
      },
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { name, email } = req.body;
  try {
    const user = await prismaClient.user.update({
      where: { id: convertToType(userId) },
      data: { name: name, email: email },
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const deletedUser = await prismaClient.user.delete({
      where: { id: convertToType(userId) },
    });
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};
