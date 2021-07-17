//lesson 21.1.4
const express = require('express');
//routing still needed for good oranization
const routes = require('./routes');
//first express imported, now enabled for use
const app = express();
//declaring local port to use
const PORT = process.env.PORT || 3001;
//enable paths
const path = require('path');
//connect to database still needed
const db = require('./config/connection');
//put in apollo
const { ApolloServer } = require('apollo-server-express');
//
//pseudo coding *
//will need to make graphql typedefs and resolver and also to be imported for use
//needs the middleware authorization to connect and authorize
//the authorization may need to be incorperated in the Apollo server declaration but
//wasn't in the lesson*****

//i think all express things are still used, boilerplate from lesson 21
//--
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//and apply it to the Express server as middleware. (its enabled, now where to put it)
server.applyMiddleware({ app });
//--


//impliment the apollo server
//using context to clean up server after use, restarts session
const server = new ApolloServer({
  //pulled from https://www.apollographql.com/docs/apollo-server/security/authentication/
  //site called for double perenthesis but server would fail if I kept them?
  context: authMiddleware,
  typeDefs,
  resolvers
  
  
});

//start code
// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
