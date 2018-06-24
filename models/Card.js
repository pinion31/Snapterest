const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema(
  {
    id: String,
    imageLink: String,
    owner: String,
    title: String,
    description: String,
    likes: Number,
    isPublic: Boolean,
  }
);

const Card = mongoose.model('cards', CardSchema);

module.exports = Card;