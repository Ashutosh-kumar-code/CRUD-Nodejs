const Employee = require('../model/EmplyeeModel');

const login = (req,res,next)=>{
    res.json({
        message:"Welcome! to this website, Have a nice Day"
    })
}

//to show data from database
const displayData = (req,res,next)=>{
        Employee.find()
        .then(result => {
            res.json({
                result
            })
        })
        .catch(err => {
            res.json({
                err
            })
        })
    }

    // to update data of database
const updateData = (req,res,next)=>{
      let employeeId = req.body.employeeId;
    
        let updateData = {
        name:req.body.name,
        phone:req.body.phone,
        salary: req.body.salary,
        address: req.body.address
        }
        Employee.findByIdAndUpdate(employeeId, {$set: updateData})
        .then(() => {
            res.json({
                message: 'update successfully'
            })
        })
        .catch(err => {
            res.json({
                message: 'error in updation of data'
            })
        })
    }

    // to store new data to database
 const storeNewData = (req, res, next)=>{
            let employee = new Employee({
                name: req.body.name,
                phone: req.body.phone,
                salary: req.body.salary,
                address: req.body.address
            })
            employee.save()
            .then(()=>{
                res.json({
                    message: 'employee added successfully'
                })
            })
            .catch(err=>{
                res.json({
                    message: 'an error occured in adding!'
                })   
            })
            }

   // to delete data of database
const deleteOneData = (req, res, next)=>{
        let employeeId = req.body.employeeId
        Employee.findByIdAndRemove(employeeId)
        .then(() => {
            res.json({
                message: 'deleted successfully'
            })
        })
        .catch(()=>{
            res.json({
                message: 'an error occured in deleting!'
            })   
        })
    }

module.exports = {
    login, displayData, updateData, storeNewData, deleteOneData
}