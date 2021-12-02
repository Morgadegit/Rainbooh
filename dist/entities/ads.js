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
exports.Campaign = void 0;
const core_1 = require("@mikro-orm/core");
const type_graphql_1 = require("type-graphql");
let Campaign = class Campaign {
    constructor() {
        this.startDate = new Date();
        this.endDate = new Date();
        this.updatedAt = new Date();
        this.createdAt = new Date();
    }
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", Number)
], Campaign.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, core_1.Property)({ unique: true }),
    __metadata("design:type", String)
], Campaign.prototype, "companyName", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: "rien" }),
    (0, core_1.Property)({ type: 'text' }),
    __metadata("design:type", String)
], Campaign.prototype, "desc", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, core_1.Property)({ type: 'date' }),
    __metadata("design:type", Date)
], Campaign.prototype, "startDate", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, core_1.Property)({ type: 'date' }),
    __metadata("design:type", Date)
], Campaign.prototype, "endDate", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, core_1.Property)({ type: 'date', onUpdate: () => new Date() }),
    __metadata("design:type", Date)
], Campaign.prototype, "updatedAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, core_1.Property)({ type: 'date' }),
    __metadata("design:type", Date)
], Campaign.prototype, "createdAt", void 0);
Campaign = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, core_1.Entity)()
], Campaign);
exports.Campaign = Campaign;
//# sourceMappingURL=ads.js.map