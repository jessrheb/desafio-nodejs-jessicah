let movies = require('../models/movies');

exports.getAllMovies = (req, res) => {
  res.status(200).json(movies);
};

exports.getMovie = (req, res) => {
  const movie = movies.find((movie) => movie.id === +req.params.id);
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).send('Movie not found');
  }
};

exports.addMovie = (req, res) => {
  const newMovie = {
    id: movies.length + 1,
    title: req.body.title,
    description: req.body.description,
    year: req.body.year,
    genres: req.body.genres,
    image: req.body.image,
    video: req.body.video,
  };
  movies.push(newMovie);
  res.status(201).json(newMovie);
};

exports.updateMovie = (req, res) => {
  const movieIndex = movies.findIndex((movie) => movie.id === +req.params.id);
  if (movieIndex > -1) {
    movies[movieIndex] = { ...movies[movieIndex], ...req.body };
    res.json(movies[movieIndex]);
  } else {
    res.status(404).send('Movie not found');
  }
};

exports.deleteMovie = (req, res) => {
  movies = movies.filter((movie) => movie.id !== +req.params.id);
  res.status(204).send();
};
