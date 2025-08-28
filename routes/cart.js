const router = require("express").Router();

const Cart = require('../model/Cart');



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

module.exports= router