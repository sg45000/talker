import { ServerInfo } from 'apollo-server'
import { GraphQLClient } from 'graphql-request'
import getPort, { makeRange } from 'get-port'
import { server } from '../../src/graphql/server'

type TestContext = {
  client: GraphQLClient
}

export function createTestContext(): TestContext {
  const ctx = {} as TestContext
  const graphqlCtx = graphqlTestContext()

  beforeEach(async () => {
    const client = await graphqlCtx.before()

    Object.assign(ctx, {
      client
    })
  })

  afterEach(async () => {
    await graphqlCtx.after()
  })

  return ctx
}

function graphqlTestContext() {
  let serverInstance: ServerInfo | null = null

  return {
    async before() {
      const port = await getPort({ port: makeRange(4000, 6000) })
      serverInstance = await server.listen({ port })
      return new GraphQLClient(`http://localhost:${port}`)
    },
    async after() {
      serverInstance?.server.close()
    }
  }
}
