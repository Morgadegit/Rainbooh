const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLSchema } = require('graphql');
const app = express();

class readableDate {
    constructor(date) {
        this.year = date.getFullYear();
        this.month = date.getMonth();
        this.day = date.getDate();
        this.readable = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
    }
}

const seedData = [
    {
    id: 1, name: 'Ynsect', description: 'Startup d\'entomoculture',
    campaignStart: new readableDate(new Date(2018, 11, 24)).readable,
    campaignEnd: new readableDate(new Date(2019, 11, 24)).readable,
    campaignType: 'Premium'
    },
    {
    id: 2, name: 'Ecosia', description: 'Moteur de recherche écologique',
    campaignStart: new readableDate(new Date(2015, 02, 18)).readable,
    campaignEnd: new readableDate(new Date(2016, 02, 18)).readable,
    campaignType: 'Normal'
    }
]

const adType = new GraphQLObjectType({
    name:'adType',
    fields:{
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        campaignStart: {type: GraphQLString},
        campaignEnd: {type: GraphQLString},
        campaignType: {type: GraphQLString}
    }
})

const adQuery = new GraphQLObjectType({
    name:'adQuery',
    fields:{
        ads: {
            type: GraphQLList(adType),
            resolve: () => seedData
        },
        ad: {
            type: adType,
            args: {
                id: {type: GraphQLInt}
            },
            resolve: (_, args) => seedData.find(ad => ad.id == args.id)
        }
    }
})

const schema = new GraphQLSchema({ query:adQuery });

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
  }))
  
app.listen(4000, () => console.log('server started'));