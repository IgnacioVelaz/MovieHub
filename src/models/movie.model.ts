import { Document, model, Schema } from 'mongoose'

interface MovieInteface extends Document {
  name: string
  createdAt: Date
  updatedAt: Date
}

const MovieSchema = new Schema<MovieInteface>(
  {
    name: {
      type: String,
      required: [true, "Name is required"]
    }
  }, 
  { timestamps: true, versionKey: false}
)
 
export const MovieModel = model<MovieInteface>('Movie', MovieSchema)
