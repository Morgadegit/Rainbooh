import { User } from "../entities/users";
import { MyContext } from "src/types";
import { Arg, Ctx, Field, Mutation, ObjectType, Query, Resolver } from "type-graphql";
import argon2 = require('argon2');

@ObjectType()
class FieldError {
    @Field()
    field: string;
    @Field()
    message: string;
}

@ObjectType()
class UserResponse {
    @Field(() => [FieldError], {nullable: true})
    errors?: FieldError[]
    @Field(() => User, {nullable: true})
    user?:User
}

@Resolver()
export class UserResolver {
    @Query (() => User, {nullable:true})
    async me(@Ctx() { em, req}: MyContext) 
    {
        if (!req.sessionID)
          return null;
    const user = await em.findOne(User, {username: req.sessionID})
        return user;
    }
    @Mutation(() => UserResponse)
    async register(
        @Arg('username') username:String,
        @Arg('password') password:string,
        @Ctx() {em}: MyContext) : Promise<UserResponse>
        {
            if(username.length < 1)
                return {
                    errors: [{
                        field: "username",
                        message: "username invalid"
                    }]
                }
            const hashedPass = await argon2.hash(password);
            const user = em.create(User, {username: username, password: hashedPass});
            await em.persistAndFlush(user);
            return {user};
        }
    @Mutation(() => UserResponse)
    async login(
        @Arg('username') username:string,
        @Arg('password') password:string,
        @Ctx() {em, req }: MyContext): Promise<UserResponse> {
        const user = await em.findOne(User, {username: username});
            if(!user) {
            return {
                errors: [{
                    field: "username",
                    message: "user not found"
                }],
          }
        };
          const valid = await argon2.verify(user.password, password);
          if (!valid)
          return {
              errors: [
                  {
              field: "password",
              message: "incorrect password",
                  }
              ]
          }

          req.sessionID = user.username;
          return { user };
        }        
    @Query(() => User)
    showUser(
        @Arg('id') id:number,
        @Ctx() {em}: MyContext): Promise<User | null>
        {return em.findOne(User, {id})} 
    @Query(() => [User])
    showUsers(
        @Ctx() {em}: MyContext): Promise<User[]>
        {return em.find(User, {})}
}