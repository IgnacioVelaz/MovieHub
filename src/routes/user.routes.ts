import { Router } from "express";
import {
  deleteUser,
  getUserByEmailAddress,
  getUserById,
  updateUser,
} from "../controllers/user.controllers";
import { jwtCheckMiddleware } from "../middlewares/jwtCheck";

const userRoutes = Router();

userRoutes.get("/:userId", getUserById);

userRoutes.post("/", jwtCheckMiddleware, getUserByEmailAddress);

userRoutes.patch("/:userId", updateUser);

userRoutes.delete("/:userId", deleteUser);

export default userRoutes;
