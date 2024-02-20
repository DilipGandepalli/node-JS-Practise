const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        default: false
    },
    city: {
        type: String
    }
})

module.exports = mongoose.model('Employee',employeeSchema); 