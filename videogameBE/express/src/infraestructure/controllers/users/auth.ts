import { authenticateUser }  from "../../../application/users/authenticateUser";
import express from "express";

const router = express.Router();

router.post("/", async(req, res) => {
  const userUserName = req.body.userName;
  const userPassword = req.body.password;

  const authUser = await authenticateUser(userUserName, userPassword);

  res.send(authUser)
});

export default router;
