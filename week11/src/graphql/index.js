import { schemaComposer } from 'graphql-compose'

// eslint-disable-next-line import/order
import './relation'
import * as mutations from './mutation'
import * as queries from './query'

schemaComposer.Query.addFields(queries)
schemaComposer.Mutation.addFields(mutations)

const schema = schemaComposer.buildSchema()

export default schema
