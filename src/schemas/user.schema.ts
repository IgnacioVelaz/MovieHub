import { Schema, model, Document } from "mongoose";

export interface UserInterface extends Document{
    name: string,
    email: string,
    password: string, 
    movies?: string[]
    createdAt?: Date,
    updatedAt?: Date
}

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    movies: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


export const userModel = model<UserInterface>("User", UserSchema);
