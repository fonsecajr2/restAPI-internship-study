let users = require('../models/userModel.js')
console.log('controller running')

exports.getAllUsers = (req, res) => {
    res.json(users)
}   

console.log("controller finished")