import { GraphQLClient } from 'graphql-request';
require('dotenv').config();

const client = new GraphQLClient(process.env.GATSBY_GRAPHQL_HOST);
export default client;
