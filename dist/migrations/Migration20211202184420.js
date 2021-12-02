"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20211202184420 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20211202184420 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table `user` add unique `user_id_unique`(`id`);');
        this.addSql('alter table `user` add unique `user_username_unique`(`username`);');
    }
}
exports.Migration20211202184420 = Migration20211202184420;
//# sourceMappingURL=Migration20211202184420.js.map