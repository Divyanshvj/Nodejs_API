const con = require('./config');
const express = require('express');
const app = express();
app.use(express.json());

// user calls 

app.get('/user/all', (req,res)=>{  
    con.query('select * from user', (err,result)=>
    {
        if(!err) res.send(result);
        else
        res.send(err);
    })
})

app.post('/user/insert', (req,res)=>
{
    const data = req.body 
    con.query('insert into user set ? ', data , (err,result)=>
    {
        res.send(result);
    })
})
app.put('/user/update/:phone', (req,res)=>
{
    const data = [req.body.name,req.body.dob, req.body.email, req.params.phone];
    con.query("update user set name = ?, dob = ? , email = ? where phone = ?", data, (err,result)=>
    {
        res.send(result);
    } )
    
})
app.delete('/user/delete/:phone',(req,res)=>
{
    const data = req.params.phone;
    con.query("delete from user where phone = ?", data , (err,result)=>
    {
        res.send(result);
    })
})

// info calls started

app.get('/info/all' , (req, res)=>
{
    con.query("select * from info " , (err, result)=>
    {
        if(!err) res.send(result);
        else
        res.send(err);
    })
})

app.post('/info/insert', (req,res)=>
{
    const data = req.body
    con.query('insert into info set ? ' , data , (err,result)=>
    {
        if(!err)
        res.send(result);
        else 
        res.send(err);
    })
    
})
app.put('/info/update/:rollno', (req,res)=>
{
    const data = [req.body.semester, req.body.marks ,  req.params.rollno];
    con.query("update info set semester = ? , marks = ? where rollno = ?", data, (err,result)=>
    {
        if(!err)
        res.send(result);
        else
        res.send(err)

   } )

})

app.delete('/info/delete/:rollno',(req,res)=>
{
    const data = req.params.rollno;
    con.query("delete from info where rollno = ?", data , (err,result)=>
    {
        res.send(result);
    })
})


app.listen(4500);





