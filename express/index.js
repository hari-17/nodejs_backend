const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World')
});


app.get('/product',(req,res)=>{
    const products =[
        {
            id: 1,
            label: 'Product 1',
        },
        {
            id: 2,
            label: 'Product 2',
        }
    ]

    res.json(products);
});


app.get('/product/:id',(req,res)=>{

    const products =[
        {
            id: 1,
            label: 'Product 1',
        },
        {
            id: 2,
            label: 'Product 2',
        }
    ]


    console.log(req.params.id);
});



const port = 3000;

app.listen(port, ()=> {
    
    console.log("Server listening 3000");

});