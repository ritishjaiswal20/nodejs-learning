//NPM module 
//const color=require('cli-colors');
// (function(exports,module,require,__dirname,__filename){
//     var age=25;
//     console.log(name);
// })();
//this will run inithe backend
// console.log(age)// here it will give error because age is not defined 
// as the age var is declared in the function scope and the varible there destroyed as soon as the funciton end 
const color=require('cli-color');
console.log(color.red("hello nodejs"));
console.log(color.green("hey i am starting woth nodejs "));
console.log(color.blue("hey buddy i am with you"))  
console.log(color.yellow("hey buddy i am with you"))


//local module
const auth=require('./auth')
auth.register("ritish jaiswal");
auth.login("ritish",'secret');


//Core modules
const path=require('path')
console.log(__filename)//here it will rpint he complete file path
//dir name
console.log('folder name:',path.dirname(__filename))//her eit will tell the folder name which is node js
//path.dirname is function to tell the directory name in which this file is prsent
console.log(path.basename(__filename));// it will print the file name path
//path.basename is function to tell the file name
console.log(path.extname(__filename));//it will print the file extension
//extname is function to tell the file extension
console.log("parse:",path.parse(__filename));//it will print the file name and the file extension and other information

//join 
console.log(path.join(__dirname,'order','app.js'));// it will E:\web dev\nodejs\order\app.js
// it will add the following to the dir 


//File system
 const fs=require('fs')
//  fs.mkdir(path.join(__dirname,'/test'),(err)=>{
//      if(err){
//          console.log(err);
//          return
//      }
//      console.log("folder created");
//  })

//  fs.writeFile(path.join(__dirname,'test','test.txt'),'hello world',(err)=>{
//      if(err){
//          throw err;
//      }
//      fs.appendFile(path.join(__dirname,'test','test.txt'),'more data appended',(err)=>{
//             if(err){
//                 throw err;
//             }
//             console.log("data appneded");
//      })
//      console.log("file created");
//  })

//read a file
fs.readFile(path.join(__dirname,'test','test.txt'),'utf-8',(err, data)=>{
    if(err){
        throw err;
    }
    // const content=Buffer.from(data);
    // console.log(content.toString());
    console.log(data);//when we use utf 8 it will directly write the data 
}) 

//os module
const os = require('os');
console.log('Os type:',os.type());
console.log("Os platform",os.platform());
console.log("Cpu architecture",os.arch());
console.log("Cpu details",os.cpus());
console.log("Free Memory",os.freemem());
console.log("Total Memory",os.totalmem());
console.log('Up time:',os.uptime());


//Events module
const Emitter=require('events')
const myEmitter=new Emitter();
myEmitter.on('somename',(data)=>{
    console.log(data);
})
myEmitter.emit('somename',{
    name:'ritishjaiswal',
})

// class Ath{
//     register(username){
//         console.log("register succesfully");
//         this.emit('register',username);
//     }
// }
// const ath=new Ath();
// ath.on('register',(data)=>{
//     console.log('sednign email to username');
// })
// // ath.on('register',(data)=>{
// //     console.log('welcome email to username');
// // })
// ath.register("ritishjaiswal");
