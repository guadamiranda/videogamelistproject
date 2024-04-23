const usersRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const initDB = require('./config/db');
const express = require("express");
const cors = require("cors")
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.use('/api/users', usersRoute)

app.use('/api/authenticate', authRoute)

app.use('/api/favorites', favoritesRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

initDB()