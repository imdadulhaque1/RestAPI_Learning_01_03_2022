const ContactModel = require("../models/ContactModel");

const getAllContactsController = (req, res, next) =>{
    ContactModel.find()
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
}


// ------> Insert new Data to database
const postNewContactController = (req, res, next)=>{
    // -----> Now need to connect this contactData with mongoose-Database to store the data
    const contactData = new ContactModel({
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
}


module.exports = {
    getAllContactsController,
    postNewContactController
}