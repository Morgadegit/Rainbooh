"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20211202155457 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20211202155457 extends migrations_1.Migration {
    async up() {
        this.addSql('create table `campaign` (`id` int unsigned not null auto_increment primary key, `company_name` varchar(255) not null, `desc` text not null, `start_date` datetime not null, `end_date` datetime not null, `updated_at` datetime not null, `created_at` datetime not null) default character set utf8mb4 engine = InnoDB;');
        this.addSql('alter table `campaign` add unique `campaign_company_name_unique`(`company_name`);');
    }
}
exports.Migration20211202155457 = Migration20211202155457;
//# sourceMappingURL=Migration20211202155457.js.map