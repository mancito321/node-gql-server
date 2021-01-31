import {orderArgs} from './types'

const sort=(object:any,args:orderArgs)=>{
    let users = []
    let orderBy = args.orderBy? args.orderBy:"name"//defune the order to avlidate name age username hireDate
    for(const element in object){
        for(let index=0; index<users.length;index++){
            if(args.order == "down"){
                if(users[index] && object[element][orderBy]>users[index][orderBy]){
                    users.splice(index,0,{id:element,...object[element]})
                    break
                }else if(!users[index+1]){
                    users.push({id:element,...object[element]})
                    break
                }
            }else{
                if(users[index] && object[element][orderBy]<users[index][orderBy]){
                    users.splice(index,0,{id:element,...object[element]})
                    break
                }else if(!users[index+1]){
                    users.push({id:element,...object[element]})
                    break
                }
            }
        }
        if(!users[0]){
            users.push({id:element,...object[element]})
        }
    }
    return users
}

export default sort