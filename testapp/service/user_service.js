
const fs = require('../config')
const db = fs.firestore();
const driver_service = require('../service/driver_service')


exports.password_generator = ()=>{
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 8;
  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }
   return password;
}

exports.savedetails = async(req,res,next)=>{
  try{
    const data = req.body;
    var user_id  = data.Email;
    data.password = this.password_generator();
    const result = await db.collection('User_Details').doc(user_id).set(data);
    if(data.driver_id!= null && data.driver_id!= undefined){
            const driver = await driver_service.getDriver(data.driver_id);
            if(driver === null || driver === undefined){
              console.log("invalid driver id")
              res.send("driver does not exist")
            }
            else{
              data.driver_details = driver
              await db.collection('User_Details').doc(user_id).set(data);
              res.send(driver)
            }
    }
  }
  catch(err){
    next(err)
  }
    
};

exports.getdetails = async(req,res)=>{
  const snapshot = await db.collection('User_Details').get();
  //console.log(snapshot)
  var userlist = []
 snapshot.forEach(doc => {
    console.log(doc.data());
    userlist.push(doc.data())
  });
    res.send(userlist);
}