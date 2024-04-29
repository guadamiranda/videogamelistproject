"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getUsers_1 = require("../../../application/users/getUsers");
var addUser_1 = require("../../../application/users/addUser");
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get('/', function (res) {
    var allUsers = (0, getUsers_1.getUsers)();
    res.send(allUsers);
});
router.post('/', function (req, res) {
    var user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        userName: req.body.userName
    };
    var addAnUser = (0, addUser_1.addUser)(user);
    res.send(addAnUser);
});
exports.default = router;
