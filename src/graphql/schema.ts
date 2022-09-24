import { makeSchema } from 'nexus'
import { join } from 'path'

export const schema = makeSchema({
  types: [],
  outputs: {
    typegen: join(__dirname, 'types', 'typegen.ts'),
    schema: join(__dirname, '..', '..', 'schema.graphql') // SDL
  }
})
