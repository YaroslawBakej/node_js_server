const fs=require('fs')
const { readFileSync, writeFileSync } = require('fs')

const storage='storage/user.json'
function getUser(){
    return JSON.parse(fs.readFileSync(storage))
}

function getUserById(id){
    const user=JSON.parse(readFileSync(storage))
    const filtered=user.filter(el=>el.id==id)
    return filtered
}

function updateUser(id, name, surname, email, pwd){
    const user=JSON.parse(readFileSync(storage))
    const filtered=user.filter(el, el.id!==id)
    if(filtered.length!=user.length){
        filtered.push({ id, name, surname, email,pwd })

    }
    writeFileSync(filtered)
     return filtered
}
module.exports={getUser, getUserById, updateUser}