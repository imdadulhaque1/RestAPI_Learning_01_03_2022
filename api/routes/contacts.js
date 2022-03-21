const express = require("express");
const router = express.Router(); 

const contactController = require("../controllers/contactController")

 
// ------> Show Data from database | Clear & Data show from "AllContactsController -> controllers/contactController"
router.get('/', contactController.getAllContactsController)

// ------> Insert Data to database | Clear & Connect with "postNewContactController -> controllers/contactController"
router.post('/', contactController.postNewContactController )

// ------> Get single contact
router.get('/:id', contactController.getSingleContact)

// ------> Edit single contact
router.put('/:id', contactController.editSingleContact)

// ------> Delete single contact
router.delete('/:id', contactController.deleteSingleContact);

module.exports = router;