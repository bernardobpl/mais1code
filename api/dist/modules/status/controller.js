"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusController = void 0;
var express_1 = require("express");
var service_1 = require("./service");
exports.statusController = (0, express_1.Router)();
exports.statusController.get('/', service_1.statusService.getStatus);
