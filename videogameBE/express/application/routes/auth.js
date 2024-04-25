const { authenticateUser } = require("../controllers/authServices");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  authenticateUser(req, res);
});

module.exports = router;
