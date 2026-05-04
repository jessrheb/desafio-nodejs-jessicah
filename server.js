const express = require('express');
const moviesRoutes = require('./app/routes/movies.routes');

const app = express();

app.use(express.json());
app.use('/movies', moviesRoutes);

const db = require('./app/models/');

db.mongoose
  .connect(db.url)
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((error) => {
    console.log('Cannot connect to the database!', error);
    process.exit();
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
