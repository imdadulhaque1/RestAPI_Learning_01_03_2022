const express = require("express");
const router = express.Router(); 

const contactController = require("../controllers/contactController")

 
// ------> Show Data from database | Clear & Data show from "AllContactsController -> controllers/contactController"
router.get('/', contactController.getAllContactsController)

// ------> Insert Data to database | Clear & Connect with "postNewContactController -> controllers/contactController"
router.post('/', contactController.postNewContactController )


module.exports = router;