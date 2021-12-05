"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20211202175802 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20211202175802 extends migrations_1.Migration {
    async up() {
        this.addSql('create table `user` (`id` int unsigned not null auto_increment primary key, `username` text not null, `password` text not null, `updated_at` datetime not null, `created_at` datetime not null) default character set utf8mb4 engine = InnoDB;');
        this.addSql('alter table `campaign` drop index `campaign_company_name_unique`;');
    }
}
exports.Migration20211202175802 = Migration20211202175802;
//# sourceMappingURL=Migration20211202175802.js.map