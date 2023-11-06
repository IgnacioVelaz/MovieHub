import { Router, Request, Response } from 'express'
import { createUser, deleteUser, updateUser, getUsers } from '../controllers/user.controllers'



const userRoutes = Router()

userRoutes.get('/', getUsers)

userRoutes.post('/', createUser)

userRoutes.put('/:userID', updateUser)

userRoutes.delete('/:userID', deleteUser)

export default userRoutes