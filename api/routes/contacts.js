const express = require("express");
// const express = require('express').Router();
const router = express.Router(); 

 

router.get('/', (req, res, next) =>{

})

router.post('/', (req, res, next) =>{
    
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