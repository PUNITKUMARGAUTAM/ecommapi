
const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
    {
        title:{type:String, required:true,unique:true},
        desc:{type:String, required:true, unique:true},
        image:{type:String, required:true},
        categories:{type:Array, required:true},
        name :{type:String, required:true,unique:true},
        price:{type:Number},
        color:{type:String},
        size:{type:String},
       
    },
    {
      timestamp:true
    },
);

module.exports = mongoose.model("Product",ProductSchema);