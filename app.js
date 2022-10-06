const express = require('express');
const app = express();
const employeeRouter = require('./api/routes/Employee')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const http = require('http');

mongoose.connect('mongodb://localhost:27017/employeedata')
.then(()=>{
    console.log("Database connected....")
}).catch((err)=>{
    console.log(err)
})

app.use(express.json());

app.use('/employee',employeeRouter)

app.use((req,res,next) => {
    res.status(404).json({
        error : "url not found"
    })
})

const server = http.createServer(app);
server.listen(3000,console.log("server in running on port 3000"))

module.exports =app;

