const mongoose = require('mongoose');


// Employees schema
const employeeSchema = new mongoose.Schema({
    name:String,
    phone:String,
    salary: Number,
    address:String
})


module.exports = mongoose.model('employee',employeeSchema); 