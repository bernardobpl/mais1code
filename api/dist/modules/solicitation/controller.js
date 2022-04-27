"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solicitationController = void 0;
var express_1 = require("express");
var service_1 = require("./service");
exports.solicitationController = (0, express_1.Router)();
exports.solicitationController.post('/create', service_1.solicitationService.createSolicitation);
exports.solicitationController.put('/edit/:id', service_1.solicitationService.editSolicitation);
exports.solicitationController.delete('/delete/:id', service_1.solicitationService.deleteSolicitation);
