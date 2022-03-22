const bcrypt = require('bcrypt')
const User = require('../models/UserModel')


// ----> User Registeration
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

// ----> Registered User Login
const loginController = (req, res, next) =>{
    let email = req.body.email
    let enteredPassword = req.body.password

    User.findOne({email})
        .then(userData =>{
            if (userData){
                bcrypt.compare(enteredPassword, userData.password, (err, result) =>{
                    if(err){
                        res.json({
                            message: "Error Occured!"
                        })
                    }
                    if(result){
                        res.json({
                            message: "Login Successful!",
                            userData
                        })
                    }else{
                        res.json({
                            message: "Login failed! Password Does't Match!"
                        })

                    }
                })
            }else{
                res.json({
                    message: "User not found!"
                })
            }
        })
}


// ----> Show all registered user
const getAllUser = (req, res, next) =>{
    User.find()
        .then(data =>{
            res.status(200).json({
                message: "Successfully, Showed user list!",
                UserList: data
            })
        })
        .catch(err =>{
            res.status(500).json({
                message: "Error Occured!",
                error: err
            })
        })
}


module.exports ={
    registerController,
    loginController,
    getAllUser
}