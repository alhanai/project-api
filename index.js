const express = require('express');
const mysql2 = require('mysql2');
const cors = require('cors');
app = express();
app.use(cors());

const connection = mysql2.createConnection({
    host:'localhost',
    user:'root',
    database:'testing',
    password:''
});



app.get('/',(req,res)=>res.json({success:0,message:'WELCOME TO LIST TO POSTS'}));
app.get('/cruds',(req,res)=>{
    connection.query("select * from cruds",(err,rows,fields)=>{
        if(!!err){
            console.log("err->",err);
        }else{
            res.json(rows);
}

})
})
app.listen(8000,()=>console.log('connected on port 8000'));