import { ApolloServer } from 'apollo-server'
import { schema } from '.'
export const server = new ApolloServer({ schema })
