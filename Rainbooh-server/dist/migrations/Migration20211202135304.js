"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20211202135304 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20211202135304 extends migrations_1.Migration {
    async up() {
        this.addSql('create table `campaign` (`id` int unsigned not null auto_increment primary key, `created_at` datetime not null, `updated_at` datetime not null, `company_name` varchar(255) not null, `desc` text not null, `start_date` datetime not null, `end_date` datetime not null) default character set utf8mb4 engine = InnoDB;');
    }
}
exports.Migration20211202135304 = Migration20211202135304;
//# sourceMappingURL=Migration20211202135304.js.map