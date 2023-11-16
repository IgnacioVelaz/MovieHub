import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/user.controllers";
import { jwtCheckMiddleware } from "../middlewares/jwtCheck";

const userRoutes = Router();

userRoutes.get("/:userId", jwtCheckMiddleware, getUserById);

userRoutes.post("/", createUser);

userRoutes.patch("/:userId", updateUser);

userRoutes.delete("/:userId", deleteUser);

export default userRoutes;
