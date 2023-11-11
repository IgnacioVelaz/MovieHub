import Express from "express";
import helmet from "helmet";
import userRoutes from "./routes/user.routes";
import movieRoutes from "./routes/movie.routes";
import genreRoutes from "./routes/genre.routes";
const morgan = require('morgan')

const app = Express();

app.use(helmet())
app.use(Express.json());


app.use("/users", userRoutes);
app.use("/movies", movieRoutes);
app.use("/genres", genreRoutes)

export default app;
