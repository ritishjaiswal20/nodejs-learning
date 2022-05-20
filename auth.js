 const register =function(username){
     console.log(`User ${username} has been registered`)
 }
 const login=function(username, password){
     console.log(`User ${username} has been loogedin `)
 }
 module.exports={
     register,
     login
     }
    // module.exports=login;//now login will export not register
