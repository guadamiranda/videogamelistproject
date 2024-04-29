"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var authenticateUser_1 = require("../../../application/users/authenticateUser");
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.post("/", function (req, res) {
    var userUserName = req.body.userName;
    var userPassword = req.body.password;
    var authUser = (0, authenticateUser_1.authenticateUser)(userUserName, userPassword);
    res.send(authUser);
});
exports.default = router;
