const router = require("express").Router();

const Cart = require('../model/Cart');
const { route } = require("./auth");



// Create cart
router.post('/createCart' , async(req , res) => {
    try {
    const newCart =  new Cart(req.body);
    const saveCart = await newCart.save();
    res.status(201).json(saveCart);
    }

    catch(err)
    {
        res.status(500).json(err);
    }
});

// UpdatedCart

router.post("/id" , async(req , res) => {
    try
    {
        const updatedCart = new Cart.findByIdAndUpdate(
            req.params.id,
            {$set  : req.body},
            {new : true}
        );
        res.status(201).json(updatedCart);
    } catch(err) {

        res.status(500).json(err);
    }
})

//Deleted Cart

router.post("/:id" , async(req , res) => {

    try 
    {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart Deleted Successfully");
    }
    catch(err) {
        res.status(500).json(err);
    }

});

// Get user by id

router.get("/find/:userId" , async(req , res) => {

    try {

    const cart = Cart.findOne({userId : req.params.userId});
    res.status(200).json(cart);
    }
    catch(err) {
        res.status(500).json(err);
    }

})

//findAll

router.get("/" , async (req , res) => {
    try {
    const carts = Cart.find();
    res.status(200).json(carts);
    }
    catch(err)
    {
        res.status(500).json(err);
    }

})

module.exports= router