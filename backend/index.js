const express = require('express');
const mongoose  = require('mongoose');
const app= express();
const cors = require('cors');
const userRouter = require('./routes/userRoute');
require('dotenv').config()

const port = process.env.PORT || 4000;


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
 



app.get('/',(req,res)=>{
    res.send("Hello gym app")
})
//user authentication
app.use('/',userRouter)




mongoose.connect(process.env.DATA_BASE)
.then(()=>{
        app.listen(port , ()=>{
                console.log("Database Connected");
            console.log("Server started on port no.4000" );
        })
    
    })
    .catch((error)=>{
        console.log(error);
    })