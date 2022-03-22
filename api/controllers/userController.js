const bcrypt = require('bcrypt')
const User = require('../models/UserModel')

const registerController = (req, res, next) =>{
    
    bcrypt.hash(req.body.password, 10, (err, hash) =>{
        if(err){
            res.json({
                error: err
            })
        }
        res.json({
            hash,
            original: req.body.password,
        })
    })
}

module.exports ={
    registerController
}