import { MikroORM } from "@mikro-orm/core";
import "reflect-metadata";
import { __prod__} from "./constants"
import microConfig from './mikro-orm.config'
import {ApolloServer} from 'apollo-server-express'
import {buildSchema} from 'type-graphql';
import { HelloResolver } from "./resolvers/hello";
import { AdsResolver } from "./resolvers/ads";
import { UserResolver } from "./resolvers/user";
import connectRedis from 'connect-redis';
import { MyContext } from "./types";
import session from 'express-session';
import cors from 'cors';
import { createClient } from 'redis';
import express from "express";



const main = async () => {
    const orm = await MikroORM.init(microConfig);
    // await orm.getMigrator().up();

    const app = express();
    const RedisStore = connectRedis(session);
    const redisClient = createClient();


    app.use(cors({
      origin: ["https://studio.apollographql.com", "http://localhost:3000"],
      credentials:true,
    }))
    app.use(
      session({
        name: 'qid',
        store: new RedisStore({ client: redisClient, disableTouch: true }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
            httpOnly: true,
            sameSite: "none",
            secure: __prod__,
        },
        saveUninitialized: false,
        secret: 'ezrtxhrdyugitryu',
        resave: false,
      })
    )

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, AdsResolver, UserResolver],
            validate: false,
        }),
        context: ({req, res}): MyContext => ({ em: orm.em, req, res })
    });

  await apolloServer.start();
    
  apolloServer.applyMiddleware({ app, cors: false});

  const LISTEN = 4000;

  app.listen(LISTEN, () => console.log(`Server start at ${LISTEN}`));
};

main();