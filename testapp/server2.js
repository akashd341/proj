const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const io = require('socket.io')(server,{
  cors:{
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
})



const vehicle_service = require('./service/vehicle_service')


io.on('connection', async(socket) => {
  console.log('connected');
  var vehicle_number = socket.handshake.query.vehicle_number;
  
  console.log(socket.handshake.query)
  console.log(socket.handshake.query.vehicle_number);
  const obj = await vehicle_service.getvehicle(vehicle_number);
  setInterval(()=>{
    socket.emit('Details',obj)
  },5000)
 
  
  socket.on('disconnect',()=>{
      console.log('user disconnected')
  })
  
});

server.listen(9494, () => {
  console.log('listening on port:9494');
});