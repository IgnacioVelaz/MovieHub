import { Document, model, Schema } from "mongoose";

interface MovieInteface extends Document {
  name: string;
  poster_image: string;
  score: number;
  genre: string[];
  createdAt: Date;
  updatedAt: Date;
}

const MovieSchema = new Schema<MovieInteface>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    poster_image: String,
    score: Number,
    genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],  
  },
  { timestamps: true, versionKey: false }
);

export const MovieModel = model<MovieInteface>("Movie", MovieSchema);
