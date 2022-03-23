import { createServer } from 'http'

import { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageGraphQLPlayground, gql } from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-express'
import cors from 'cors'
import express from 'express'
// import { buildSchema } from 'graphql'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
  res.json({ message: 'Server running' })
})

// const schema = buildSchema(`
// type Query {
//   hello (name: String!): String
// }
// `)
// const root = {
//   hello: (args) => `Hello ${args.name} from GraphQL API`,
// }
const typeDefs = gql`
type Query {
  hello (name: String!): String
}
`
const resolvers = {
  Query: {
    hello: (source, args) => `Hello ${args.name} from GraphQL API`,
  },
}

const startApolloServer = async () => {
  const httpServer = createServer(app)
  const apolloServer = new ApolloServer({
    // schema,
    // rootValue: root,
    typeDefs,
    resolvers,
    introspection: true,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  })
  await apolloServer.start()
  apolloServer.applyMiddleware({ app, path: '/graphql' })
  httpServer.listen({ port: 3001 })
}
startApolloServer()
