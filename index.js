const express = require('express');
const moviesRoutes = require('./routes/moviesRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/movies', moviesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
