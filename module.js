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
 