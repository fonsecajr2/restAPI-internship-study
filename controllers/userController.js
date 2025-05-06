let users = require('../models/userModel.js')

exports.getAllUsers = (req, res) => {
    res.json(users)
}   



