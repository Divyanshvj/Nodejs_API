const mysql = require('mysql');
const con = mysql.createConnection({
    host:'localhost', 
    user: "root", 
    password:"password",
    database: "college"

});
con.connect((err)=>{
    if(err)
    {
        console.warn("error",err);

    }
    else
    console.log("connected");
})

module.exports = con;