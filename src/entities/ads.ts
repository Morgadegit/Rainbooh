import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Campaign {

  @Field(() => Int)
  @PrimaryKey()
  id!: number;

  @Field()
  @Property({unique: true})
  companyName: string;

  @Field({ defaultValue : "rien"})
  @Property({type: 'text'})
  desc: string;

  @Field(() => String)
  @Property({type: 'date'})
  startDate: Date = new Date();

  @Field(() => String)
  @Property({type: 'date'})
  endDate: Date = new Date();
  
  @Field(() => String)
  @Property({type: 'date', onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Field(() => String)
  @Property({type: 'date'})
  createdAt: Date = new Date();
}