"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Solicitation = void 0;
var typeorm_1 = require("typeorm");
var entity_1 = require("../donation/entity");
var entity_2 = require("../user/entity");
var Solicitation = /** @class */ (function () {
    function Solicitation() {
        this.is_accepted = false;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Solicitation.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return entity_2.User; }, function (user) { return user.solicitations; }, {
            nullable: false,
        }),
        __metadata("design:type", entity_2.User)
    ], Solicitation.prototype, "owner", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Solicitation.prototype, "reason", void 0);
    __decorate([
        (0, typeorm_1.Column)('boolean', { default: false }),
        __metadata("design:type", Boolean)
    ], Solicitation.prototype, "is_accepted", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Solicitation.prototype, "donationId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return entity_1.Donation; }, function (donation) { return donation.solicitations; }, {
            nullable: false,
        }),
        (0, typeorm_1.JoinColumn)({ name: 'donationId' }),
        __metadata("design:type", entity_1.Donation)
    ], Solicitation.prototype, "donation", void 0);
    Solicitation = __decorate([
        (0, typeorm_1.Entity)()
    ], Solicitation);
    return Solicitation;
}());
exports.Solicitation = Solicitation;
