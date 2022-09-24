import { server } from './graphql/server'

server.listen().then(({ url }) => {
  console.log(`start the server ${url}.`)
})
