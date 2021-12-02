import { MikroORM } from "@mikro-orm/core";
import "reflect-metadata";
import { __prod__} from "./constants"
//import { Campaign } from "./entities/ads";
import microConfig from './mikro-orm.config'
import express from 'express';
import {ApolloServer} from 'apollo-server-express'
import {buildSchema} from 'type-graphql';
import { HelloResolver } from "./resolvers/hello";
import { AdsResolver } from "./resolvers/ads";

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();

    const app = express();
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, AdsResolver],
            validate: false,
        }),
        context: () => ({ em: orm.em })
    });

    await apolloServer.start();
    
    apolloServer.applyMiddleware({ app });

    app.listen(4000, () => console.log('Server start'));
//    const ad = orm.em.create(Campaign, {companyName: 'Ynsect', desc: 'Startup d\'entomocultiure'});
//    await orm.em.persistAndFlush(ad);
};

main();