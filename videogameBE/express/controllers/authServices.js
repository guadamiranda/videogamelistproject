const model = require("../models/user");

const authenticateUser = async(req, res) => {
    const userFind = await model.find({ $and: [{ name: req.body.user }, { password: req.body.password }] })
    console.log(userFind)
    res.send(userFind)
    
}

module.exports = { authenticateUser }