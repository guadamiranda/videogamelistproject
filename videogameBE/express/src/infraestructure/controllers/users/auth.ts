import { authenticateUser }  from "../../../application/users/authenticateUser";
import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const userUserName = req.body.userName;
  const userPassword = req.body.password;

  const authUser = authenticateUser(userUserName, userPassword);

  res.send(authUser)
});

export default router;
