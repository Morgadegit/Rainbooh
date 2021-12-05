"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20211203103855 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20211203103855 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table `user` add unique `user_username_unique`(`username`);');
    }
}
exports.Migration20211203103855 = Migration20211203103855;
//# sourceMappingURL=Migration20211203103855.js.map