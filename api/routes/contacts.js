const express = require("express");
const router = express.Router(); 

const contactController = require("../controllers/contactController")

 
// ------> Show Data from database | Clear & Data show from "AllContactsController -> controllers/contactController"
router.get('/', contactController.getAllContactsController)

// ------> Insert Data to database | Clear & Connect with "postNewContactController -> controllers/contactController"
router.post('/', contactController.postNewContactController )


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