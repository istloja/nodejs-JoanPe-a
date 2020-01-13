const express = require('express');
const body_parser = require('body-parser');

const app = express();
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.json({messager:'Hola mundo'})
})

app.get('/hola/es',(req,res)=>{
    res.json({messager:'Hola mundo'})
})
app.get('/hola/en',(req,res)=>{
    res.json({messager:'Hello Word'})
})

require('./routes')(app);


app.listen(3000,()=>{
    console.log('Iniciado')
})


