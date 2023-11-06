import Express, { Request, Response } from 'express'
import userRoutes from './routes/user.routes'

const app = Express()


app.use(Express.json())
app.use(Express.text())
app.use("/users", userRoutes)

export default app
