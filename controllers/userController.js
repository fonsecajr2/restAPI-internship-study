let users = require('../models/userModel.js')

exports.getAllUsers = (req, res) => {
    res.json(users)
}   

exports.getUserById = (req, res) => {
    const id = req.params.id
    const parsedId = parseInt(id)

    const user = users.find(user => user.id === parsedId)

    if (isNaN(parsedId)) {
        return res.status(400).json({ message: 'Invalid id' })
    }

    const userFound = users.find(user => user.id === parsedId)

    res.status(200).json(userFound)
}

exports.createUser = (req, res) => {
    const { name } = req.body
    
    const maxId = users.length > 0 ? Math.max(...users.map(user => user.id)) : 0

    const newUser = {
        id: maxId + 1,
        name: name
    }

    users.push(newUser)
    res.status(201).json(newUser)
}

exports.updateUser = (req, res) => {
    const id = req.params.id
    const { name } = req.body
    const parsedId = parseInt(id)

    if (isNaN(parsedId)) {
        return res.status(400).json({ message: 'Invalid id' })
    }

    const userIndex = users.findIndex(user => user.id === parsedId)

    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' })
    }
    if (name) {
        users[userIndex].name = name
    }

    res.status(200).json(users[userIndex])
}

exports.deleteUser = (req, res) => {
    const id = req.params.id
    const parsedId = parseInt(id)

    if (isNaN(parsedId)) {
        return res.status(400).json({ message: 'Invalid id' })
    }

    users = users.filter(user => user.id !== parsedId)

    res.status(204)
}



