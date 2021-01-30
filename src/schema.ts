import 'graphql-import-node'
import * as typeDefs from '../data/schema.graphql'
import {makeExecutableSchema} from 'graphql-tools'
import resolvers from './resolverMap'
import {GraphQLSchema} from 'graphql'


const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
})

export default schema