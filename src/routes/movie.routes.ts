import { Router } from "express";
import {
  createMovie,
  deleteMovie,
  getMovieById,
  getMoviesByUserId,
  updateMovie,
} from "../controllers/movie.controllers";

const movieRoutes = Router();

movieRoutes.get("/:userId", getMoviesByUserId);
movieRoutes.post("/:userId", createMovie);

movieRoutes.get("/:userId/:movieId", getMovieById);
movieRoutes.patch("/:movieId", updateMovie);
movieRoutes.delete("/:userId/:movieId", deleteMovie);

export default movieRoutes;
