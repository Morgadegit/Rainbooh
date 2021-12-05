import { MyContext } from "src/types";
import { Arg, Ctx, Int, Mutation, Query, Resolver } from "type-graphql";
import { Campaign } from "../entities/ads"

@Resolver()
export class AdsResolver {
@Query(() => [Campaign])
    adDisplay(
    @Ctx() {em}: MyContext): Promise<Campaign[]>
    {return em.find(Campaign, {})}

@Query(() => Campaign, {nullable: true})
    adSingle(
        @Arg('id', () => Int) id:number,
        @Ctx() {em} : MyContext): Promise<Campaign | null>
        {return em.findOne(Campaign, { id })}

@Mutation(() => Campaign)
    async adAdd(
        @Arg("name") companyName:string,
        @Arg("desc") desc:string,
        @Ctx() {em}: MyContext): Promise<Campaign>
        {
        const newAd = em.create(Campaign, {companyName, desc})
        await em.persistAndFlush(newAd)
        return newAd;
        }

@Mutation(() => Campaign, { nullable: true})
    async adUpdate(
        @Arg("id") id:number,
        @Arg("name", () => String, { nullable:true }) companyName:string,
        @Arg("desc", () => String, { nullable:true }) desc:string,
        @Ctx() {em}: MyContext): Promise<Campaign | null>
        {
        const Ad = await em.findOne(Campaign, {id});
        if (!Ad)
            return null;
        if (typeof companyName !== 'undefined') {
            Ad.companyName = companyName;
        }
        if (typeof desc !== 'undefined') {
            Ad.desc = desc;
        }
        await em.persistAndFlush(Ad)
        return Ad;
        }
@Mutation(() => Boolean)
    async adDelete(
        @Arg("id") id:number,
        @Ctx() {em}: MyContext): Promise<boolean>
        {
            try {await em.nativeDelete(Campaign, { id });} 
            catch {return false;}
            return true;
        }
}