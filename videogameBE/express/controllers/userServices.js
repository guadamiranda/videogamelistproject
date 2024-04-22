const model = require("../models/user");

const getUsers = async (res) => {
  const allUsers = await model.find();
  res.send(allUsers);
};

const addUser = async (req, res) => {
  res.send(
    await model.create({
      name: req.name,
      email: req.email,
      password: req.password,
      userName: req.username,
    })
  );
};

const deleteUser = async (req, res) => {
  res.send(
    await model.find({_id:req._id}).deleteOne()
  )
}

module.exports = { getUsers, addUser, deleteUser };
