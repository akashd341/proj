import { React, useEffect, useState } from "react";
import {useLoadScript, GoogleMap, Marker} from '@react-google-maps/api'
import {io} from 'socket.io-client'

import {Card,Grid} from '@material-ui/core'
import { useParams } from "react-router";

const containerStyle = {
  width: '80vw',
  height: '90vh'
};




export default function Track(props){
  const [vehicle_details,setVehicle_details] = useState({latitude:'22.5726',longitude: '88.3639' });
  const [response,setResponse] = useState(" ")
  const [driver_details,setDriver_details] = useState({});
  const params = useParams();
  
    
  useEffect(()=>{
    
    
    let socket = io('//localhost:9494/',{
      autoConnect : false,
      withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  },
  query: 'vehicle_number='+params.vehicle_number

      
    })
    socket.open();
    socket.on("connect",()=>{
     
             console.log("hello connected to server");
             
    })
    socket.on('Details',data=>{
      console.log(data)
      setVehicle_details(data.Vehicle_Details)
      setDriver_details(data.Driver_Details)
    })
    
  
      return(()=>{
        socket.disconnect()
      });
    
    
    },[]);



   


   const coords = {lat: parseFloat(22.5726), lng:parseFloat(88.3639)}
  const{isLoaded,loadError} = useLoadScript({
    googleMapsApiKey: 'AIzaSyAfpJqZQCs7Uf46uLKTBGhcqJeVmKv40es'
  })
  if(loadError) return ("Error loading Maps");
  if(!isLoaded) return "Loading Maps";
  return(
    <Grid container spacing = {2}>
      <Grid item xs={2}>
        <item>Driver Details  </item>
      </Grid>

      <Grid item xs={10}>
        
        <item>
      <Card variant="outlined" style={{padding:'2vh'}}>  
      
      <GoogleMap
       mapContainerStyle={containerStyle} 
       zoom={18}
       center={coords}
       
      
       >
      <Marker position = {coords} icon = {
        {
          url: '/bus_icon.png',
          scaledSize: new window.google.maps.Size(40,40),
          origin: new window.google.maps.Point(0,0),
          anchor: new window.google.maps.Point(20,20),
        
        }
          
        }
       
      
      />
      </GoogleMap>
      </Card>
      </item>
      </Grid>
     
    </Grid>
    
  )
}

  