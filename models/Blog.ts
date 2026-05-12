import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String, // URL
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  isPublished: {
    type: Boolean,
    default: false,
  },
  slug:{
    type: String,
    required: true
  },
  author: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Blog ||
  mongoose.model("Blog", BlogSchema);