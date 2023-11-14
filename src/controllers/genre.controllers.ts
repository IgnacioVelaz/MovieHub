import { Request, Response } from "express";
import prisma from "../db/client";

export const getMoviesByGenre = async (req: Request, res: Response) => {
  const { genreId } = req.params;
  try {
    const moviesByGenre = await prisma.movies.findMany({
      where: {
        genresIds: {
          has: genreId,
        },
      },
    });

    res.status(200).json(moviesByGenre);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllGenres = async (req: Request, res: Response) => {
  try {
    const genres = await prisma.genres.findMany({
      select: {
        name: true,
        movies: {
          select: {
            name: true,
          },
        },
      },
    });

    res.status(200).json(genres);
  } catch (error) {
    res.status(500).json(error);
  }
};
