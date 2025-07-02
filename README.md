# Apollo Gateway
## Project Overview
Apollo Gateway acts as a unified GraphQL API gateway for the Flow OverStack platform, combining schemas from multiple microservices into a single federated schema. It routes and orchestrates queries and mutations across the underlying GraphQL services, enabling clients to interact with a consolidated API endpoint.

## Technologies and Patterns Used
* **Apollo Federation** — for schema federation and query delegation
* **Node.js & TypeScript** — core runtime and language
* **GraphQL** — unified schema and API layer

## Getting Started
### Prerequisites
* **Node.js** 
* **Docker (optional for containerized deployment)**
* **Running underlying GraphQL microservices**

## Installation
1. Clone the repo
2. Configure service URLs for the federated services in `supergraph.yaml`
3. [Install Rover CLI](https://www.apollographql.com/docs/rover/getting-started)
4. [Accecpt terms of the ELV2 License](https://www.apollographql.com/docs/rover/commands/supergraphs#federation-2-elv2-license)
5. Update `supergraph.graphql`:
   
   ```bash
   rover supergraph compose --config supergraph.yaml > supergraph.graphql
   ```
6. [Install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
7. Run the gateway:
   ```bash
    npm install --save-dev typescript ts-node @types/node
    npm start
   ```

Access the GraphQL endpoint at http://localhost:5000/graphql

