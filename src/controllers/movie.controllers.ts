import { Request, Response } from 'express'

const movies = [
    {
        id: 1,
        name: "Ford",
        age: 31
    },
    {
        id: 2,
        name:"Artur",
        age: 30
    }
]

export const getMovies = (req:Request, res:Response)=>{
    !movies ? res.status(404).send("Sorry. The movies can't be found.") : 
    movies && res.status(200).send(movies)
}

export const createMovie = (req: Request, res: Response) => {
    if(!req.body.name || req.body.name.length < 3){
        res.status(400).send('Name is required and should be minimum 3 characters')
    }

    const movie = {
        id: movies.length + 1,
        name: req.body.name,
        age: req.body.age
    }

    movies.push(movie)
    res.status(201).send(movie)
    res.status(201).send(`Movie created: ${movie.name} ${movie.name} with id ${movie.id}`)
}

export const updateMovie = (req: Request, res: Response) => {
    const movie = movies.find(movie => movie.id === parseInt(req.params.id))
    !movie ? res.status(404).send("Sorry. The movie can't be found.") : 
    
    res.status(200).send('Movie Updated!')
}

export const deleteMovie = (req: Request, res: Response) => {
    const movie = movies.find(movie => movie.id === parseInt(req.params.id))
    res.status(200).send('Movie Deleted!')
}

