const mongoose= require('mongoose')

const{Schema}= mongoose

const ProductSchema=new Schema({
    descripcion: {type: String, required: true},
    talle: {type: String},
    stock: {type: String},
})

module.exports=mongoose.model('Product',ProductSchema)