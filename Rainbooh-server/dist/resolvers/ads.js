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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdsResolver = void 0;
const type_graphql_1 = require("type-graphql");
const ads_1 = require("../entities/ads");
let AdsResolver = class AdsResolver {
    adDisplay({ em }) { return em.find(ads_1.Campaign, {}); }
    adSingle(id, { em }) { return em.findOne(ads_1.Campaign, { id }); }
    async adAdd(companyName, desc, { em }) {
        const newAd = em.create(ads_1.Campaign, { companyName, desc });
        await em.persistAndFlush(newAd);
        return newAd;
    }
    async adUpdate(id, companyName, desc, { em }) {
        const Ad = await em.findOne(ads_1.Campaign, { id });
        if (!Ad)
            return null;
        if (typeof companyName !== 'undefined') {
            Ad.companyName = companyName;
        }
        if (typeof desc !== 'undefined') {
            Ad.desc = desc;
        }
        await em.persistAndFlush(Ad);
        return Ad;
    }
    async adDelete(id, { em }) {
        try {
            await em.nativeDelete(ads_1.Campaign, { id });
        }
        catch (_a) {
            return false;
        }
        return true;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [ads_1.Campaign]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdsResolver.prototype, "adDisplay", null);
__decorate([
    (0, type_graphql_1.Query)(() => ads_1.Campaign, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('id', () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AdsResolver.prototype, "adSingle", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => ads_1.Campaign),
    __param(0, (0, type_graphql_1.Arg)("name")),
    __param(1, (0, type_graphql_1.Arg)("desc")),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], AdsResolver.prototype, "adAdd", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => ads_1.Campaign, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Arg)("name", () => String, { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)("desc", () => String, { nullable: true })),
    __param(3, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, Object]),
    __metadata("design:returntype", Promise)
], AdsResolver.prototype, "adUpdate", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AdsResolver.prototype, "adDelete", null);
AdsResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], AdsResolver);
exports.AdsResolver = AdsResolver;
//# sourceMappingURL=ads.js.map