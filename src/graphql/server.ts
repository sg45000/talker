import { ApolloServer } from 'apollo-server'
import { schema } from '.'
import { context } from './context'
export const server = new ApolloServer({ schema, context })
