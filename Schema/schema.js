const graphQL=require('graphql');
const _ =require('lodash');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLInt
}=graphQL;

const users=[
    {
        name:'random',
        age:30,
        id:20
    },
    {
        name:'ansari',
        age:40,
        id:21
    }
];

const UserType=new GraphQLObjectType({
    name:'User',
    fields:{
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        age:{type:GraphQLInt},
    }
});

const RootQuery=new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        User:{
            type:UserType,
            args:{
                id:{
                    type:GraphQLString,
                }
            },
            resolve(parentValue,args){
               return _.find(users,{id:args.id});
            }
        }
    }
});

module.exports=new GraphQLSchema({
    query:RootQuery,
});