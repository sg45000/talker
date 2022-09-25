import { makeSchema } from 'nexus'
import { join } from 'path'
import * as types from './schema'

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(__dirname, 'types', 'typegen.ts'),
    schema: join(__dirname, '..', '..', 'schema.graphql') // SDL
  },
  contextType: {
    module: join(__dirname, 'context.ts'),
    export: 'Context'
  }
})
