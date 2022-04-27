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
exports.Donation = void 0;
var typeorm_1 = require("typeorm");
var entity_1 = require("../product/entity");
var entity_2 = require("../solicitation/entity");
var entity_3 = require("../status/entity");
var entity_4 = require("../user/entity");
var Donation = /** @class */ (function () {
    function Donation() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Donation.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Donation.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Donation.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return entity_3.Status; }, function (status) { return status.donations; }, { nullable: false, eager: true }),
        __metadata("design:type", entity_3.Status)
    ], Donation.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Number)
    ], Donation.prototype, "productId", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return entity_1.Product; }, function (product) { return product.donation; }, { nullable: true, eager: true, cascade: true }),
        (0, typeorm_1.JoinColumn)({ name: "productId" }),
        __metadata("design:type", entity_1.Product)
    ], Donation.prototype, "product", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return entity_2.Solicitation; }, function (solicitation) { return solicitation.donation; }, {
            eager: true,
            cascade: true
        }),
        __metadata("design:type", Array)
    ], Donation.prototype, "solicitations", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return entity_4.User; }, function (user) { return user.donations; }, {
            nullable: false,
        }),
        __metadata("design:type", entity_4.User)
    ], Donation.prototype, "owner", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Donation.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Date)
    ], Donation.prototype, "donated_at", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return entity_4.User; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", entity_4.User)
    ], Donation.prototype, "donated_to", void 0);
    Donation = __decorate([
        (0, typeorm_1.Entity)()
    ], Donation);
    return Donation;
}());
exports.Donation = Donation;
