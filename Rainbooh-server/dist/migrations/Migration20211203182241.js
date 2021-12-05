"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20211203182241 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20211203182241 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table `user` add unique `user_id_unique`(`id`);');
    }
}
exports.Migration20211203182241 = Migration20211203182241;
//# sourceMappingURL=Migration20211203182241.js.map