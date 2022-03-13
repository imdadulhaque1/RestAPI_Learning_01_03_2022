const express = require("express");
// const express = require('express').Router();
const router = express.Router(); 


const contacts = [];

router.get('/', (req, res, next) =>{
    res.status(200).json({
        contacts
    })
})

router.post('/', (req, res, next) =>{
    // const name = req.body.name;
    // const email = req.body.email;
    // const message = req.body.message;
    // console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    contacts.push({
        name: req.body.name,
        email: req.body.email
    })
    res.status(201).json({
        message: "Data Saved!",
        // name,
        // email,
        // message
    })
})

// router.get('/:id', (req, res, next) =>{
//     // console.log(req.url); 
//     const id = req.params.id
//     res.jOrder Marketplace done
// })

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