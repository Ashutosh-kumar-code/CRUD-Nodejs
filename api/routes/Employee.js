const express = require('express');
const router = express.Router();
// const Employee = require('../model/EmplyeeModel')
const EmployeeControler = require('../controller/EmployeeControler')
const mongoose = require('mongoose');


router.get('/',EmployeeControler.login);
router.get('/show', EmployeeControler.displayData)
router.post('/edit', EmployeeControler.updateData)
router.post('/store', EmployeeControler.storeNewData)
router.post('/delete', EmployeeControler.deleteOneData)


module.exports = router;
