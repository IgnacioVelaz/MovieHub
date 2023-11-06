import { Request, Response } from 'express'

const users = [
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

export const getUsers = (req:Request, res:Response)=>{
    !users ? res.status(404).send("Sorry. The users can't be found.") : 
    users && res.status(200).send(users)
}

export const createUser = (req: Request, res: Response) => {
    if(!req.body.name || req.body.name.length < 3){
        res.status(400).send('Name is required and should be minimum 3 characters')
    }

    const user = {
        id: users.length + 1,
        name: req.body.name,
        age: req.body.age
    }

    users.push(user)
    res.status(201).send(user)
    res.status(201).send(`User created: ${user.name} ${user.name} with id ${user.id}`)
}

export const updateUser = (req: Request, res: Response) => {
    const user = users.find(user => user.id === parseInt(req.params.id))
    !user ? res.status(404).send("Sorry. The user can't be found.") : 
    
    res.status(200).send('User Updated!')
}

export const deleteUser = (req: Request, res: Response) => {
    const user = users.find(user => user.id === parseInt(req.params.id))
    res.status(200).send('User Deleted!')
}

