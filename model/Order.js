
const require = mongoose("mongoose");
const Oderschema = new mongoose.Schema(
    {
        userId:{type:String, required:true, unique:true},
        products:[
            {
                productId:{

                    type:String
                },
                quntity:{
                
                     type:Number,
                     default:1,

                },

            },
        ],
        address:{type:Object,required:true},
        amount:{type:Number,required:true},
        status:{type:String, default:"pending"},

    },
    {
       timestamp:true 
    },
);
module.exports = mongoose.model("Order",Oderschema);