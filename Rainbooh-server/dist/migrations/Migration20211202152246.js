"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20211202152246 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20211202152246 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table `campaign` add unique `campaign_company_name_unique`(`company_name`);');
    }
}
exports.Migration20211202152246 = Migration20211202152246;
//# sourceMappingURL=Migration20211202152246.js.map