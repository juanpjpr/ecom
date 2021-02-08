const mongoose= require('mongoose')

const{Schema}= mongoose

const ProductSchema=new Schema({
    descripcion: {type: String, required: true},
    talle: {type: String},
    stock: {type: String},
},{

    versionKey: false // You should be aware of the outcome after set to false

});

module.exports=mongoose.model('Product',ProductSchema)