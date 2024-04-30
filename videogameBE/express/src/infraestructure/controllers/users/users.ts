import { getUsers } from "../../../application/users/getUsers";
import { addUser } from "../../../application/users/addUser";
import { userModel } from "../../../domain/models/user";
import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  const allUsers = await getUsers();

  res.send(allUsers);
});

router.post("/", async (req, res) => {
  const user: userModel = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    userName: req.body.userName,
  };

  const addAnUser = await addUser(user);
  res.send(addAnUser);
});

export default router;
