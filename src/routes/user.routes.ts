import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/user.controllers";

const userRoutes = Router();

userRoutes.get("/:userId", getUserById);

userRoutes.post("/", createUser);

userRoutes.patch("/:userId", updateUser);

userRoutes.delete("/:userId", deleteUser);

export default userRoutes;
