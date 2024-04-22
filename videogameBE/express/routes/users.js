const { getUsers, deleteUser, addUser } = require('../controllers/userServices');
const express = require("express");
const router = express.Router()

router.get('/', (req, res) => {
    getUsers(res)
})

router.post('/', (req, res) => {
    addUser(req, res)
})

router.put('/', (req, res) => {
    res.send(editUser())
})

router.delete('/', (req, res) => {
    deleteUser(req, res)
})

module.exports = router