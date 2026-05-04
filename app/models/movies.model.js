const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  year: Number,
  genres: Array,
  image: String,
  video: String,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
