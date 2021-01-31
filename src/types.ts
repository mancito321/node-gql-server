interface orderArgs{
    orderBy:string,
    order:string
}
interface userArgs{
    id:string,
    name:string,
    age:string,
    username:string,
    hireDate:string,
}
interface inputUser{
    inputUser:userArgs
}
interface inputId{
    id:string
}

export {orderArgs, inputUser, inputId}