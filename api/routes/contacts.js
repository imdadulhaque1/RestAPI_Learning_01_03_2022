const express = require("express");
const router = express.Router(); 

const contactModel = require('../models/contactModel');
 
// ------> Show Data from database
router.get('/', (req, res, next) =>{
    contactModel.find()
        .then(data =>{
            res.status(200).json({
                message: "All Data Showed!",
                data
            })
        })
        .catch(err =>{
            res.status(500).json({
                message: "Error Occured!",
                error: err
            })
        })
})

// ------> Insert Data to database
router.post('/', (req, res, next) =>{
    // -----> Now need to connect this contactData with mongoose-Database to store the data
    const contactData = new contactModel({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    })
    contactData.save()
        .then(data =>{
            res.status(201).json({
                message: "Contact Added",
                contactData: data
            })
        })
        .catch(err =>{
            res.status(500).json({
                message: "Sorry, failed to save data. Phone & Email should be unique!",
                error: err
            })
        })
})


router.get('/:id', (req, res, next) =>{
    res.json({
        message: "I am Get Route."
    })
})

router.post('/:id', (req, res, next) =>{
    res.json({
        message: "I am Post Route."
    })
})
router.put('/:id', (req, res, next) =>{
    res.json({
        message: "I am Put Route."
    })
})
router.delete('/:id', (req, res, next) =>{
    res.json({
        message: "I am Delete Route."
    })
})

module.exports = router;