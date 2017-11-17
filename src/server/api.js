import express from 'express';

export  const api = express();

api.get('/user',(req,res)=>{
    console.log('fsdfsdfsdfsdfsUser');
    res.send({code:"0000",kkk:"yyy"});
})

api.get('/test',(req,res)=>{
    console.log('fsdfsdfsdfsdfsTEST');
    res.redirect('/api/user');
})