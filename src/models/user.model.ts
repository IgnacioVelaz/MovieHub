import { Schema, model, Document } from "mongoose";

export interface UserInterface extends Document {
  name: string;
  email: string;
  password: string;
  movies?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

const UserSchema = new Schema<UserInterface>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
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
    movies: [{ type: Schema.Types.ObjectId, ref: "Movie" }],
  },
  { timestamps: true, versionKey: false }
);

export const UserModel = model<UserInterface>("User", UserSchema);
