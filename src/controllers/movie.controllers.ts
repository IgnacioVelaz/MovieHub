import { Request, Response } from "express";
import { prismaClient } from "../db/client";
import { convertToType } from "../helpers/utils";

export const createMovie = async (req: Request, res: Response) => {
  const { name, poster_image, genres, score } = req.body;
  const { userId } = req.params;

  try {
    const movie = await prismaClient.movies.create({
      data: {
        name,
        poster_image,
        score,
        genres: {
          connect: genres.map((genre: string) => ({
            id: convertToType(genre),
          })),
        },
        user: { connect: { id: convertToType(userId) } },
      },
    });

    res.status(201).send(movie);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getMoviesByUserId = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const user = await prismaClient.user.findUnique({
      where: { id: convertToType(userId) },
      select: {
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

export const getMovieById = async (req: Request, res: Response) => {
  const { movieId } = req.params;

  try {
    const movie = await prismaClient.movies.findUnique({
      where: { id: convertToType(movieId) },
      select: {
        name: true,
        poster_image: true,
        score: true,
        genres: {
          select: { name: true },
        },
      },
    });

    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateMovie = async (req: Request, res: Response) => {
  const { name, poster_image, genresIds, score } = req.body;
  const { movieId } = req.params;

  try {
    const updatedMovie = await prismaClient.movies.update({
      where: { id: convertToType(movieId) },
      data: {
        name: name,
        poster_image: poster_image,
        score: score,
        genresIds: genresIds.map((genre: string) => convertToType(genre)),
      },
    });

    res.status(201).json(updatedMovie);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  const { movieId } = req.params;

  try {
    const deletedMovie = await prismaClient.movies.delete({
      where: { id: convertToType(movieId) },
    });

    res.status(200).json(deletedMovie);
  } catch (error) {
    res.status(500).json(error);
  }
};
