const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema(
  {
    imageLink: String,
    owner: String,
    title: String,
    description: String,
  }
);

const Card = mongoose.model('cards', CardSchema);

module.exports = Card;