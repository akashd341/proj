


const fs  = require('../config')
const db = fs.firestore();
const functions = require('firebase-functions')

const driver_service = require('../service/driver_service')

// this  is for adding new bus data
 async function valid_Details(vehicle_number){
     try{
         
        const snapshot =  await db.collection('Vehicle_Details').doc(vehicle_number).get();
   
    //console.log(snapshot.data())
    if(snapshot.data() == undefined || snapshot.data() == null){
         return true;
    }
    else{
        return false;
    }
    
        
     }
     catch(error){
         console.log("error in valid details")
        
     }
    
}



exports.save_vehicle = async(req,res)=>{
    const data = req.body;
    var vehicle_number = req.body.vehicle_number;
     try{
        
        var x = await valid_Details(vehicle_number);
        if(x  == false){
            console.log("vehicle number already exist");
            var myobj = {em : "Vehicle number already exist"}
            console.log(myobj)
            res.send(myobj);
            
        }
        else{
            const result = await db.collection('Vehicle_Details').doc(vehicle_number).set(data);
            if(data.driver_id!=null || data.driver_id!=undefined){
                const driver = await driver_service.getDriver(data.driver_id);
                await db.collection('Vehicle_Details').doc(vehicle_number).collection('Driver_Details').doc(driver.driver_id).set(driver);
            }
            else{
                console.log("Driver not assigned yet");
            }
            console.log(result)

            res.send({em: "Vehicle number " + vehicle_number+ " registered successfully"} )
        }
     }
     catch(error){
         console.log();
         res.sendStatus(404);
     }
        
    }
    
   
        
   
exports.getallvehicles = async(req,res)=>{
    const dbRef =  db.collection('Vehicle_Details');
    myarray = [];
    const snapshot = await dbRef.get();
    snapshot.forEach(doc => {
       console.log(doc.data());
       myarray.push(doc.data());
    });
    res.send(myarray)
}



exports.trackvehicle = async(req,res)=>{
    try{
    var vehicle_number = req.params.vehicle_number;
    console.log(vehicle_number);
    const Vehicle_Details = await db.collection('Vehicle_Details').doc(vehicle_number).get();
    var Driver_Details
    if(Vehicle_Details.data().driver_id != null || Vehicle_Details.data().driver_id!=undefined){
        Driver_Details = await db.collection('Vehicle_Details').doc(vehicle_number).collection('Driver_Details').doc(Vehicle_Details.data().driver_id).get();
    }
    
   var result;
    if(Driver_Details.data()!= null || Driver_Details.data()!= undefined){
        res.send({'Vehicle_Details' : Vehicle_Details.data(), 'Driver_Details': Driver_Details.data()});
        console.log(Vehicle_Details.data())
        
    }
    else{
       res.send({'Vehicle_Details' : Vehicle_Details.data(), Driver_Details: 'Driver not assigned'});
    }
    
    
    
}
catch(err){
    console.log(err);
   // res.send(err)
}

    
}



exports.removevehicle = async(req,res)=>{
    var vehicle_number = req.body.vehicle_number;
    const result = await db.collection('Vehicle_Details').doc(vehicle_number).delete();
    res.send("details of"+vehicle_number  + "deleted");
  
}




exports.getvehicle = async(vehicle_number)=>{
    try{
    
    console.log(vehicle_number);
    const Vehicle_Details = await db.collection('Vehicle_Details').doc(vehicle_number).get();
    var Driver_Details
    if(Vehicle_Details.data().driver_id != null || Vehicle_Details.data().driver_id!=undefined){
        Driver_Details = await db.collection('Vehicle_Details').doc(vehicle_number).collection('Driver_Details').doc(Vehicle_Details.data().driver_id).get();
    }
   var result;
    if(Driver_Details.data()!= null || Driver_Details.data()!= undefined){
        return({'Vehicle_Details' : Vehicle_Details.data(), 'Driver_Details': Driver_Details.data()});
        console.log(Vehicle_Details.data())
        
    }
    else{
       return({'Vehicle_Details' : Vehicle_Details.data(), Driver_Details: ''});
    }
    
    
    
}
catch(err){
    console.log(err);
   
}

    
}

