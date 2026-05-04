const dbConfig = require('../config/db.config');

const mongoose = require('mongoose');
mongoose.Promise = globalThis.Promise;

const db = {
  mongoose: mongoose,
  url: dbConfig.MONGO_URI,
  movies: require('./movies.model'),
};

module.exports = db;
