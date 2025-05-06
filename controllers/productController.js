let products = require('../models/productModel');

exports.getAllProducts = (req, res) => {
    res.status(200).json(products);
};

exports.getProductById = (req, res) =>  {
    const id = req.params.id;
    const parsedId = parseInt(id);

    if(isNaN(parsedId)) {
        return res.status(400).json({ message: 'Invalid product id' });
    }

    const product = products.find(product => product.id === parsedId);
    if (!product) {
        res.status(404).json({ message: 'Product not found' });
    }
    
    res.status(200).json(product)
}

exports.createProduct = (req, res) => {
    const newProduct = { 
        id: products.length + 1, 
        name: req.body.name, 
        price: req.body.price 
    }
    products.push(newProduct)
    res.status(201).json(newProduct)
}

exports.updateProduct = (req, res) => {
    const id = req.params.id;
    const parsedId = parseInt(id);
    const {name, price} = req.body

    if (isNaN(parsedId)) {
        return res.status(400).json({ message: 'Invalid product id' });
    }

    const productId = products.find(product => product.id === parsedId);

    if (name) products[productId].name = name
    if (price) products[productId].price = price

    res.status(200).json(products[productId])
}

exports.deleteProduct = (req, res) => {
    const id = req.params.id;
    const parsedId = parseInt(id);

    if (isNaN(parsedId)) {
        return res.status(400).json({ message: 'Invalid product id' });
    }

    const productId = products.findIndex(product => product.id === parsedId)
    products = products.filter(id => id !== productId)

    res.status(204).json(products)
}

