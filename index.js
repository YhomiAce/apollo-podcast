const express = require('express');
const { ApolloServer} = require("apollo-server")
const connectDB = require('./config/db');
const typeDef = require("./type/index");
const resolvers = require("./resolvers/index")

// const app = express();

connectDB();
const server = new ApolloServer({
    typeDefs: typeDef,
    resolvers, 
})
const PORT = process.env.PORT || 5000
server.listen(PORT).then(({url})=>{
    console.log(`Server started on Port: ${url}`)
});