// const express = require(express);

import express from 'express';

const app = express();

const port = 3000;

app.get('/',(req,res)=>{
    res.send('server running successfully');
})

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id: 1,
            title: 'Apple',
            content: 'A for apple'
        },
        {
            id: 2,
            title: 'Ball',
            content: 'B for Ball'
        },
        {
            id: 3,
            title: 'Cat',
            content: 'C for Cat'
        },
        {
            id: 1,
            title: 'Dog',
            content: 'D for Dog'
        },
        {
            id: 1,
            title: 'Elephant',
            content: 'E for Elephant'
        },
    ];
    res.send(jokes);

})

app.listen(port,()=>{
    console.log(`Server running on port : ${port}`)
})