const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./database.js')
const Product= require('./models/product.js')

const port = process.env.PORT || 3000;

const app = express()
  .use(cors())
  .use(bodyParser.json())

  const swaggerJsDoc=require('swagger-jsdoc')
  const swaggerUi= require('swagger-ui-express')
  const swaggerOptions= {
    swaggerDefinition:{
      info:{
        title:"Inventario",
        description:"API para control de stock",
        contact:{
          name:"Juan Pablo Repik"
        },
        servers:["http://localhost:3000/"]
     }},
     apis:["server.js"]
  }

  const swaggerDocs=swaggerJsDoc(swaggerOptions)
  app.use('/docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs))

  


app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

app.get('/all',async (req,res)=>{
  const allProducts = await Product.find()
  
  res.send(JSON.stringify(allProducts))
})

app.post('/add',async (req,res)=>{
  const{descripcion,talle,stock}=req.body
  const newProd= new Product({descripcion,talle,stock})
  await newProd.save()
  console.log(newProd)
  res.send(JSON.stringify(newProd))
})

app.get('/f/descripcion/:prod',async(req,res)=>{
  const result=await Product.find({"descripcion":req.params.prod})
  if (result.length==0)
  res.send("-1")
  else
  res.send(JSON.stringify(result))
})

app.get('/d/descripcion/:prod',async(req,res)=>{
  const result=await Product.find({"descripcion":req.params.prod}).remove()
  if (result.length==0)
  res.send("-1")
  else
  res.send(JSON.stringify(result))
})