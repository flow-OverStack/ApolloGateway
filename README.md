# Apollo Gateway

Apollo Gateway is the unified GraphQL API gateway for the Flow OverStack platform. It combines schemas from multiple microservices into a single federated schema and routes queries and mutations across the underlying services, exposing one consolidated API endpoint to clients.

Built with Apollo Federation, Node.js and TypeScript.

## Prerequisites
* Node.js and npm
* [Rover CLI](https://www.apollographql.com/docs/rover/getting-started)
* The underlying federated GraphQL microservices running and reachable

## Getting started
1. Clone the repo and install dependencies:
   ```bash
   npm install
   ```
2. Configure the URLs of the federated services in `supergraph.yaml`.
3. Accept the terms of the [Federation 2 ELV2 license](https://www.apollographql.com/docs/rover/commands/supergraphs#federation-2-elv2-license):
   ```bash
   export APOLLO_ELV2_LICENSE=accept
   ```
4. Compose the supergraph schema:
   ```bash
   rover supergraph compose --config supergraph.yaml > supergraph.graphql
   ```
5. Start the gateway:
   ```bash
   npm start
   ```

The GraphQL endpoint is available at http://localhost:5000/graphql.

