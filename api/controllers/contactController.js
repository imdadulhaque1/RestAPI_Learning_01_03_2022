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


// ------> Get single contact using id
const getSingleContact = (req, res, next) =>{
    let id = req.params.id;
    ContactModel.findById(id)
        .then(data =>{
            res.status(200).json({
                singleContact: data
            })
        })
        .catch(err =>{
            res.status(500).json({
                message: "Error Occured!",
                error: err
            })
        })
}

// ------> Delete single contact using id
const deleteSingleContact = (req, res, next) =>{
    let id = req.params.id;
    ContactModel.findByIdAndRemove(id)
        .then(data =>{
            res.status(200).json({
                message: "Contact Deleted!",
                deleteContact: data
            })
        })
        .catch(err =>{
            res.status(500).json({
                message: "Error Occured!",
                error: err
            })
        })
}

module.exports = {
    getAllContactsController,
    postNewContactController,
    getSingleContact,
    deleteSingleContact
}