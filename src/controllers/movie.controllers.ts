import { Request, Response } from "express";
import prisma from "../db/client";
import { MovieModel } from "../models/movie.model";
import { UserModel } from "../models/user.model";
import { GenreModel } from "../models/genre.model";

export const createMovie = async (req: Request, res: Response) => {
  const { name, poster_image, genres, score } = req.body;
  const { userId } = req.params;

  try {
    const movie = await prisma.movies.create({
      data: {
        name,
        poster_image,
        score,
        genres: {
          connect: genres.map((genre: string) => ({ id: genre })),
        },
        user: { connect: { id: userId } },
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
    const user = await prisma.user.findUnique({
      where: { id: userId },
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
    console.log(error);
    res.status(500).json(error);
  }
};

export const getMovieById = async (req: Request, res: Response) => {
  const { movieId } = req.params;

  try {
    const movie = await prisma.movies.findUnique({
      where: { id: movieId },
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
    console.log(error);

    res.status(500).json(error);
  }
};

export const updateMovie = async (req: Request, res: Response) => {
  const { name, poster_image, genresIds, score } = req.body;
  const { movieId } = req.params;

  try {
    const updatedMovie = await prisma.movies.update({
      where: { id: movieId },
      data: {
        name: name,
        poster_image: poster_image,
        score: score,
        genresIds: genresIds,
      },
    });

    res.status(201).json(updatedMovie);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  const { movieId } = req.params;

  try {
    const deletedMovie = await prisma.movies.delete({
      where: { id: movieId },
    });

    res.status(200).json(deletedMovie);
  } catch (error) {
    console.log(error);

    res.status(500).json(error);
  }
};
