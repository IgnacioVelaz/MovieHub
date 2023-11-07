import { Router } from 'express'
import { createMovie, deleteMovie, updateMovie, getMovies } from '../controllers/movie.controllers'

const movieRoutes = Router()

movieRoutes.get('/', getMovies)

movieRoutes.post('/', createMovie)

movieRoutes.put('/:movieID', updateMovie)

movieRoutes.delete('/:movieID', deleteMovie)

export default movieRoutes