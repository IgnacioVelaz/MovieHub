import { Request, Response } from "express";
import { GenreModel } from "../models/genre.model";

export const getMoviesByGenre = async (req: Request, res: Response) => {
  try {
    const { genreId } = req.params;
    console.log(genreId);
    const moviesByGenre = await GenreModel.findById({_id: genreId}).populate("movies")

    res.status(200).json(moviesByGenre);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllGenres = async (req: Request, res: Response) => {
  try {
    const genres = await GenreModel.find();
    res.status(200).json(genres);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getGenreById = async (req: Request, res: Response) => {
    try {
        const { genreId } = req.params
        const genre = GenreModel.findById(genreId)

        res.status(200).json(genre)
    } catch (error) {
        res.status(500).send(error)
    }
}
