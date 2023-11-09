import { Request, Response } from 'express'

const genres = [
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

export const getGenres = (req:Request, res:Response)=>{
    !genres ? res.status(404).send("Sorry. The genres can't be found.") : 
    genres && res.status(200).send(genres)
}

export const createGenre = (req: Request, res: Response) => {
    if(!req.body.name || req.body.name.length < 3){
        res.status(400).send('Name is required and should be minimum 3 characters')
    }
    
    const genre = {
        id: genres.length + 1,
        name: req.body.name,
        age: req.body.age
    }

    genres.push(genre)
    res.status(201).send(genre)
    res.status(201).send(`Genre created: ${genre.name} ${genre.name} with id ${genre.id}`)
}

export const updateGenre = (req: Request, res: Response) => {
    const genre = genres.find(genre => genre.id === parseInt(req.params.id))
    !genre ? res.status(404).send("Sorry. The genre can't be found.") : 
    
    res.status(200).send('Genre Updated!')
}

export const deleteGenre = (req: Request, res: Response) => {
    const genre = genres.find(genre => genre.id === parseInt(req.params.id))
    res.status(200).send('Genre Deleted!')
}

