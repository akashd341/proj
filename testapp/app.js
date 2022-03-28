
const express = require('express');
const app = express();
const bodyParser = require('body-parser');




const vehicle_router = require('./routers/vehicle_router')
const driver_router = require('./routers/driver_router')
const user_router = require('./routers/user_router')


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());



app.use('/user',user_router)
app.use('/driver',driver_router)
app.use('/vehicle',vehicle_router);




app.listen(8081,()=>{
    console.log("server is listening at port 8081");
})

