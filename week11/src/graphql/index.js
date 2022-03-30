import { schemaComposer } from 'graphql-compose'

import * as mutations from './mutation'
import * as queries from './query'

schemaComposer.Query.addFields(queries)
schemaComposer.Mutation.addFields(mutations)

const schema = schemaComposer.buildSchema()

export default schema
