import {IResolvers} from 'graphql-tools'
import {orderArgs,inputUser,inputId} from './types'
import sortArgs from './sort'
const fs = require("fs")

const resolverMap: IResolvers = {
    Query:{
        getUsers(_: void,args:orderArgs,context:any): string{
            let result = sortArgs(context.userData,args)
            return JSON.stringify(result)
        }
    },
    Mutation:{
        editUser(_: void,args:inputUser,context:any): boolean{
            if(!context.userData[args.inputUser.id])return false
            try {
                context.userData[args.inputUser.id]={
                    name:args.inputUser.name,
                    age:args.inputUser.age,
                    username:args.inputUser.username,
                    hireDate:args.inputUser.hireDate
                }
                fs.writeFile("data/users_data.json",JSON.stringify(context.userData), (err:any) => {
                    if(err)throw err
                    console.log("Users updated")
                })
                return true
            } catch (error) {
                console.log("something went wrong \n"+error)
                return false
            }
        },
        createUser(_: void,args:inputUser,context:any): boolean{
            if(context.userData[args.inputUser.id])return false
            try {
                context.userData[args.inputUser.id]={
                    name:args.inputUser.name,
                    age:args.inputUser.age,
                    username:args.inputUser.username,
                    hireDate:args.inputUser.hireDate
                }
                fs.writeFile("data/users_data.json",JSON.stringify(context.userData), (err:any) => {
                    if(err)throw err
                    console.log("Users created")
                })
                return true
            } catch (error) {
                console.log("something went wrong \n"+error)
                return false
            }
        },
        deleteUser(_: void,args:inputId,context:any): boolean{
            if(!context.userData[args.id])return false
            try {
                delete context.userData[args.id]
                fs.writeFile("data/users_data.json",JSON.stringify(context.userData), (err:any) => {
                    if(err)throw err
                    console.log("Users deleted")
                })
                return true
            } catch (error) {
                console.log("something went wrong \n"+error)
                return false
            }
        }

    }
}

export default resolverMap