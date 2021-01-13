import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(process.env.GATSBY_GRAPHQL_HOST);
export default client;
