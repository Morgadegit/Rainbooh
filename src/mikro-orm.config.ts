import { __prod__ } from "./constants";
import { Campaign } from "./entities/ads";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
    migrations: {
        path: path.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities : [Campaign],
    dbName:"rainboohDb",
    debug: !__prod__,
    type: 'mysql',
} as Parameters<typeof MikroORM.init>[0];