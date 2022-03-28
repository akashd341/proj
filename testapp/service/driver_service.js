
const fs = require('../config')
const db = fs.firestore()

exports.savedetails = async(req,res)=>{
    const data = req.body;
    var driver_id = req.body.driver_id;
    const result = await db.collection('Driver_Details').doc(driver_id).set(data);
    res.send("details added");
};
exports.getdetails = async(req,res)=>{
    
    const snapshot = await db.collection('Driver_Details').get();
    myarray = []
    snapshot.forEach(doc => {
        myarray.push(doc.data())
        console.log(doc.data())
    });
    //console.log(myarray[0]);
    if(myarray.length == 0 ){
      console.log("No data available")
    }
    res.send(myarray);
}
exports.getdetailsbyid = async(req,res) =>{
  var driver_id = req.params.driver_id;
  const snapshot = await db.collection('Driver_Details').doc(driver_id).get();
  if(snapshot.data()!=undefined || snapshot.data()!=null){
    res.send(snapshot.data())
  }
  else{
    console.log("No data found");
    res.send("No data found");
  }
}

exports.removedetails = async(req,res)=>{
  var vehicle_number = req.body.driver_id;
  const result = await db.collection('Driver_Details').doc(driver_id).delete();
  res.send("details of "+driver_id  + "deleted");

}

exports.getDriver = async(driver_id)=>{
  try{
    const snapshot = await db.collection('Driver_Details').doc(driver_id).get();
  
      return snapshot.data();
  
  
  }
  catch(err){
    console.log(err)
  }
}

