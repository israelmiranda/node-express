import mongoose from 'mongoose';

const schema = mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    author: { type: String, required: true },
  },
  {
    versionKey: false
  }
);

const book = mongoose.model('books', schema);

export default book;