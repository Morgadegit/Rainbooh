"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const ads_1 = require("./entities/ads");
const path_1 = __importDefault(require("path"));
const users_1 = require("./entities/users");
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [ads_1.Campaign, users_1.User],
    dbName: "rainboohDb",
    debug: !constants_1.__prod__,
    type: 'mysql',
};
//# sourceMappingURL=mikro-orm.config.js.map