const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./database.js')
const Product= require('./models/product.js')

const port = process.env.PORT || 3000;

const app = express()
  .use(cors())
  .use(bodyParser.json())


app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

app.get('/products',(req,res)=>{
  // const allProducts = await Product.find()
  //console.log(allProduct)
  res.send("hola")
})