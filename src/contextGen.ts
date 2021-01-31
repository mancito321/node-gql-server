
const context = ({req,res}:any)=>{
    const data = require("../data/users_data.json")
    return {req,res,userData:data}
}

export default context