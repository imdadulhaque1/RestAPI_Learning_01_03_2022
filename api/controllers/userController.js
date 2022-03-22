const bcrypt = require('bcrypt')
const User = require('../models/UserModel')

const registerController = (req, res, next) =>{
    
    bcrypt.hash(req.body.password, 10, (err, hash) =>{
        if(err){
            res.json({
                error: err
            })
        }
        let user = new User({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            password: hash
        })
        user.save()
            .then(data =>{
                res.status(201).json({
                    message: "User Successfully Registered!",
                    userInfo: data
                })
            })
            .catch(err =>{
                res.status(500).json({
                    message: "Error Occured!",
                    error: err
                })
            })
    })
}

module.exports ={
    registerController
}