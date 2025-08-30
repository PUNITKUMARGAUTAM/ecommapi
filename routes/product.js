const router = require('express').Router();
const Product = require('../model/Product');

//Create Product

router.post("/createProduct", async (req, res) => {

    try {

        const newProducts = new Product(req.body);
        const saveProduct = newProducts.save();
        res.status(201).json(saveProduct);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// update Product

router.post("/updateByID/:id", async (req, res) => {

    try {
        const updateProduct = new Product.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(201).json(updateProduct);
    }
    catch (err) {
        res.status(500).json(err);
    }

});

// Delete Product

router.delete("/:id" , async(req , res) => {

    try {

        await Product.findByIdAndDelete(req.params.id);
        res.status(201).json("Product Deleted Successfully");
    }
    catch(err) {
        res.status(500).json(err);
    }
});

// getByid
router.get("/")



module.exports = router;