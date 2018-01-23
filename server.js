const express = require('express');
const app =express();
const expressGraphQL=require('express-graphql');
const schema=require('./Schema/schema');

app.use('/graphql',expressGraphQL({
    schema,
    graphiql:true
}))

app.listen(4000,()=>{
    console.log("server is listening at 4000");
})