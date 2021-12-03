import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class User {

  @Field()
  @PrimaryKey({unique:true})
  id!: number;

  @Field()
  @Property({unique:true})
  username!: string;

  @Property({type: "text"})
  password: string;

  @Field(() => String)
  @Property({type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();

  @Field(() => String)
  @Property({type: 'date'})
  createdAt = new Date();
}