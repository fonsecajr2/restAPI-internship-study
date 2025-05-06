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
    const id = products.length + 1;
    
    const maxId = products.length > 0 ? Math.max(...products.map(product => product.id)) : 0;

    const newProduct = { 
        id: maxId + 1, 
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

    const productIndex = products.findIndex(product => product.id === parsedId)
    
    if (productIndex === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }

    console.log(`${productIndex} ${parsedId}`)

    products = products.filter(el => el.id !== parsedId)

    res.status(204).send(products)
}

