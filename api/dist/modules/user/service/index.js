"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
var createUser_1 = require("./createUser");
var deleteUser_1 = require("./deleteUser");
var editUser_1 = require("./editUser");
var getUserById_1 = require("./getUserById");
var getUsers_1 = require("./getUsers");
exports.userService = {
    getUsers: getUsers_1.getUsers,
    getUserById: getUserById_1.getUserById,
    createUser: createUser_1.createUser,
    editUser: editUser_1.editUser,
    deleteUser: deleteUser_1.deleteUser,
};
