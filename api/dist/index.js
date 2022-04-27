"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var express_1 = __importDefault(require("express"));
var typeorm_1 = require("typeorm");
var router_1 = require("./router");
var cors_1 = __importDefault(require("cors"));
var PORT = 8080;
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(router_1.router);
exports.db = new typeorm_1.DataSource({
    type: 'sqlite',
    database: "./src/database.db",
    entities: [__dirname + '/modules/**/entity.js'],
    logging: true,
    synchronize: true
});
exports.db.initialize()
    .then(function () {
    console.log("Conectado ao banco de dados");
    app.listen(PORT, function () { return console.log("\uD83D\uDCBB Servidor rodando na porta ".concat(PORT, " \uD83D\uDCBB")); });
    console.log("Encerrando servidor");
})
    .catch(function () {
    console.log("Falha ao conectar com o banco de dados");
    console.log("Cancelando operação");
});
