"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var UserScheme = new mongoose_1.default.Schema({
    name: String,
    email: String,
    password: String,
    userName: String,
});
exports.default = mongoose_1.default.model("user", UserScheme);
