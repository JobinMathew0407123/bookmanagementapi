import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description:String,
  publishedYear:String
});

export const Book = mongoose.model("Book", bookSchema);