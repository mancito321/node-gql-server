import {IResolvers} from 'graphql-tools'
import {orderArgs} from './types'
import sortArgs from './sort'

const resolverMap: IResolvers = {
    Query:{
        getUsers(_: void,args:orderArgs,context:any): string{
            let result = sortArgs(context.userData,args)
            return JSON.stringify(result)
        }
    }
}

export default resolverMap