"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.donationService = void 0;
var createDonation_1 = require("./createDonation");
var deleteDonation_1 = require("./deleteDonation");
var editDonation_1 = require("./editDonation");
var getDonationsFromUser_1 = require("./getDonationsFromUser");
exports.donationService = {
    createDonation: createDonation_1.createDonation,
    getDonationsFromUser: getDonationsFromUser_1.getDonationsFromUser,
    editDonation: editDonation_1.editDonation,
    deleteDonation: deleteDonation_1.deleteDonation,
};
