"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20211202152335 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20211202152335 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table `campaign` add unique `campaign_company_name_unique`(`company_name`);');
    }
}
exports.Migration20211202152335 = Migration20211202152335;
//# sourceMappingURL=Migration20211202152335.js.map