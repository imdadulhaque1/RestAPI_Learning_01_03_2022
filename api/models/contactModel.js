const mongoose = require('mongoose');
const valid = require(validator);
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name:{
        type: String,
        trim: true,      // Unnecessary Space remove in front of name and end of name
        required: true,
        minlength: 3
    },
    phone:{
        type: String,
        trim: true,
        required: true,
        unique: true,
        validate:{
            validator: (v) =>{
                return valid.isMobilePhone(v);
            },
            message: `${value} is not a valid Phone number.`
        }
    },
    email:{
        type: String,
        trim: true,
        validate:{
            validator: (v) => {
                return valid.isEmail(v);
            },
            message: `${value} is not an email!`
        }
    }
})


const Contact = mongoose.model('contact', ContactSchema)
module.exports = Contact;