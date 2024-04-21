// module.exports = [
//     { name: "Divyansh", age: "22" }, { name: "vyansh", age: "23" }, { name: "Divy", age: "4" }

// ] 



// // 1 Making a \basic server api

// // const http = require('http');
// // const data = require('./data')
// // http.createServer((req,res)=>
// // {
// //     res.writeHead(200, {'contentType': 'application\json'});
// //     res.write(JSON.stringify( data) );


// //     res.end();
    
// // }).listen(3000);

// //2 Creating a file in a crud Folder

// const fs = require('fs');
// const path = require('path');
// const dirpath = path.join(__dirname, 'crud');
// console.log(dirpath);
// const filepath = `${dirpath}/apple.txt`;
// fs.writeFileSync( filepath , 'This is sample file');

// //3 read

// fs.readFile(filepath, 'utf8', (err,item)=>{
//     console.log(item);
// })

// //4 update

// fs.appendFile(filepath, ' and name is Divyansh', (err)=>
// {
//     if(!err) console.log("this is updated");
// })

// //5 Rename 

// fs.rename(filepath,`${dirpath}/fruit.txt`, (err)=>
// {
//     if (!err) console.log("file is updated")
//     else console.log("error");
// } )

// //6 delete

// fs.unlinkSync(filepath);

// const express = require('express');
// const app = express();
// app.get('', (req,res)=>{
//     res.send('This is divyansh');

// })

// app.get('/home', (req,res)=>
// {
//     res.send("Divyansh");
// })
// app.get('/home/about', (req,res)=>
// {
//     res.send("Div");
// })

// app.listen(3000);



// con.query('select * from user', (err,result)=>
// {
    // console.log(result);
// })
