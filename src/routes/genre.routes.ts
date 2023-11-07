import { Router } from 'express'
import { createGenre, deleteGenre, updateGenre, getGenres } from '../controllers/genre.controllers'

const genreRoutes = Router()

genreRoutes.get('/', getGenres)

genreRoutes.post('/', createGenre)

genreRoutes.put('/:genreID', updateGenre)

genreRoutes.delete('/:genreID', deleteGenre)

export default genreRoutes