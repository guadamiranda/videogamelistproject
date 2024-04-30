import favoriteRoute from './infraestructure/controllers/favourites/favourites'
import usersRoute from './infraestructure/controllers/users/users';
import authRoute from './infraestructure/controllers/users/auth';
import initDB from './infraestructure/repository/config/db';
import express from "express";
import cors from "cors"

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

initDB()

app.use('/api/users', usersRoute)

app.use('/api/authenticate', authRoute)

app.use('/api/favorites', favoriteRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});