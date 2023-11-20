import Express from "express";
import helmet from "helmet";
import userRoutes from "./routes/user.routes";
import movieRoutes from "./routes/movie.routes";
import genreRoutes from "./routes/genre.routes";
import { jwtCheckMiddleware } from "./middlewares/jwtCheck";
const cors = require("cors");

const app = Express();

app.use(cors());
app.use(helmet());
app.use(Express.json());

app.use("/users", jwtCheckMiddleware, userRoutes);
app.use("/movies", jwtCheckMiddleware, movieRoutes);
app.use("/genres", jwtCheckMiddleware, genreRoutes);

export default app;
