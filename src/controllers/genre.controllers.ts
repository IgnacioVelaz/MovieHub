import { Request, Response } from "express";
import { prismaClient } from "../db/client";
import { convertToType } from "../helpers/utils";

export const getMoviesByGenre = async (req: Request, res: Response) => {
  const { genreId } = req.params;
  try {
    const moviesByGenre = await prismaClient.movies.findMany({
      where: {
        genresIds: {
          has: convertToType(genreId),
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
    const genres = await prismaClient.genres.findMany({
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
