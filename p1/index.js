const express = require('express')

const app = express();

const port = 3000;

app.get('/',(req,res)=>{
    res.send('Server running correctly');
})

app.get('/twitter',(req,res)=>{
    res.send('https://x.com');
})

app.get('/login',(req,res)=>{
    res.send('<h1>Login Page</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<a>www.youtube.com</a>')
})

app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`)
})