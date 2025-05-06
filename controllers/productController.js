let products = require('../models/productModel');

exports.getAllProducts = (req, res) => {
    res.json(products);
};

exports.createProduct = (req, res) => {
    const newProduct = { 
        id: products.length + 1, 
        name: req.body.name, 
        price: req.body.price 
    }
    products.push(newProduct)
    res.status(201).json(newProduct)
}