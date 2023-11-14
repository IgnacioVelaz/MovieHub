import { Request, Response } from "express";
import { GenreModel } from "../models/genre.model";
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
    console.log(error);
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
    console.log(error);

    res.status(500).json(error);
  }
};

// export const getGenreById = async (req: Request, res: Response) => {
//   const { genreId } = req.params;
//   try {
//     const genre = prisma.genres.findUnique({
//       where: { id: genreId },
//     });

//     res.status(200).json(genreId);
//   } catch (error) {
//     console.log(error);

//     res.status(500).json(error);
//   }
// };
