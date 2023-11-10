import { Request, Response } from 'express'
import { MovieModel } from '../models/movie.model'


export const createMovie = async(req: Request, res: Response) => {
    const { name } = req.body
    const { userId } = req.params

    try{
        const movie = await MovieModel.create({ name, userId })

        res.status(201).json(movie)
    } catch(error){
        res.status(500).json(error)
    }
}

