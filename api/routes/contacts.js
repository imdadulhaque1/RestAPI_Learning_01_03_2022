const express = require("express");
// const express = require('express').Router();
const router = express.Router();


router.get('/', (req, res, next) =>{
    res.send({
        "message": "Hello, Mr. Imdadul Haque. Have a message for you from contact api."
    })
})

router.post('/', (req, res, next) =>{
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    res.status(201).json({
        // message: "Hello, this is post from contact router!",
        name,
        email,
        message
    })
})

// router.get('/:id', (req, res, next) =>{
//     // console.log(req.url); 
//     const id = req.params.id
//     res.json({
//         id: id'/
//     })
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