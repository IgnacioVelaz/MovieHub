import { Router } from 'express'
import { getAllGenres, getMoviesByGenre } from '../controllers/genre.controllers'

const genreRoutes = Router()

genreRoutes.get('/', getAllGenres)
genreRoutes.get('/:genreId', getMoviesByGenre)


export default genreRoutes