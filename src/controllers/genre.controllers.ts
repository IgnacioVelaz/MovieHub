import { Request, Response } from "express";
import { MovieModel } from "../models/movie.model";

export const getMoviesByGenre = async (req:Request, res:Response) => {
    try{
        const { genreId } = req.params
        const moviesByGenre = await MovieModel.find({ genre: genreId })
        res.status(200).json(moviesByGenre)
    } catch (error){
        res.status(500).json(error)
    }
}

