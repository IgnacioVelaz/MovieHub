import { Document, model, Schema } from "mongoose";

interface GenreInterface extends Document {
    name: String, 
    movies: String[]
}

const GenreSchema = new Schema<GenreInterface>({
    name: {type: String, required: [true, "Name is required"]},
    movies: [{ type: Schema.Types.ObjectId, ref: "Movie" }],
})

export const GenreModel = model<GenreInterface>("Genre", GenreSchema)


