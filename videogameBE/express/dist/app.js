"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = __importDefault(require("./infraestructure/controllers/users/users"));
var auth_1 = __importDefault(require("./infraestructure/controllers/users/auth"));
var db_1 = __importDefault(require("./infraestructure/repository/config/db"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
var port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, db_1.default)();
app.use('/api/users', users_1.default);
app.use('/api/authenticate', auth_1.default);
//app.use('/api/favorites', favoritesRoute)
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
