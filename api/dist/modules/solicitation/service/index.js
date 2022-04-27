"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solicitationService = void 0;
var createSolicitation_1 = require("./createSolicitation");
var deleteSolicitation_1 = require("./deleteSolicitation");
var editSolicitation_1 = require("./editSolicitation");
exports.solicitationService = {
    createSolicitation: createSolicitation_1.createSolicitation,
    deleteSolicitation: deleteSolicitation_1.deleteSolicitation,
    editSolicitation: editSolicitation_1.editSolicitation
};
