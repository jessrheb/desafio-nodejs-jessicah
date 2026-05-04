const mongoose = require('mongoose');

const db = require('../models');
const Movie = db.movies;

exports.getAllMovies = (req, res) => {
  Movie.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

exports.getMovie = (req, res) => {
  Movie.findById(req.params.id)
    .then((data) => {
      if (data) res.send(data);
      else res.status(404).send();
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

exports.addMovie = (req, res) => {
  const newMovie = new Movie({
    title: req.body.title,
    description: req.body.description,
    year: req.body.year,
    genres: req.body.genres,
    image: req.body.image,
    video: req.body.video,
  });

  newMovie
    .save(newMovie)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

exports.updateMovie = (req, res) => {
  Movie.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => {
      if (data) res.send(data);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

exports.deleteMovie = (req, res) => {
  Movie.findByIdAndDelete(req.params.id)
    .then((data) => {
      if (data) res.status(204).send();
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};
