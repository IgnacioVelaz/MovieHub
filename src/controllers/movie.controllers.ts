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
    const movies = await UserModel.findById(
      { _id: userId },
      { movies: 1, _id: 0 }
    ).populate("movies");
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getMovieById = async (req: Request, res: Response) => {
  try {
    const { movieId } = req.params;
    const movie = await MovieModel.findById({ _id: movieId }).populate("genre");
    res.status(200).json(movie);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const updateMovie = async (req: Request, res: Response) => {
  try {
    const { movieId } = req.params;
    const { name, poster_image, genre, score } = req.body;

    const updatedMovie = await MovieModel.findByIdAndUpdate(
      { _id: movieId },
      {
        $set: {
          name: name,
          poster_image: poster_image,
          genre: genre,
          score: score,
        },
      },
      { new: true }
    );
    res.status(201).json(updatedMovie);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  try {
    const { movieId } = req.params;
    const deletedMovie = await MovieModel.findByIdAndDelete({ _id: movieId });

    await UserModel.updateMany(
      { movies: movieId },
      { $pull: { movies: movieId } }
    );
    await GenreModel.updateMany(
      { movies: movieId },
      { $pull: { movies: movieId } }
    );

    res.status(200).json(deletedMovie);
  } catch (error) {
    res.status(500).json(error);
  }
};
