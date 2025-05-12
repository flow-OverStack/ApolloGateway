const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'users', url: 'http://localhost:7163/graphql' },
    { name: 'questions', url: 'http://localhost:5170/graphql' }
  ]
});

const server = new ApolloServer({
  gateway,
  subscriptions: false
});

server.listen(5000).then(({ url }) => {
  console.log(`Apollo Gateway running at ${url}`);
});

// Start with
// node ApolloGatewayServer.js