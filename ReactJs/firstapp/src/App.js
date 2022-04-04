import logo from './logo.svg';
import './App.css';


import React, {Component, useState} from 'react';
import Layout  from './components/Layout';
import Home from './components/Home';
import VehicleServices from './components/VehicleServices';
import { Route,Routes} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Getvehicle from './components/Getvehicle';
import AddVehicle from './components/Vehicle_Components/AddVehicle';
import UpdateVehicle from './components/Vehicle_Components/UpdateVehicle';
import DeleteVehicle from './components/Vehicle_Components/DeleteVehicle';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CompleteVech from './components/Vehicle_Components/CompleteVech';
import Services from './components/Services';

import Track from './components/Track';
import Login from './components/Login';




function App(){
  const [color,setColor] = useState("red");
  const [active,setactive]=useState(false);
  const shoot = ()=>{
    setColor("blue");
  }
  function chek(x){
    setactive(x);
  }
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout active={active} />}>
      <Route exact path = "/" element = {<Login chek={chek}/>}/>
          <Route path = "/Home" element = {<Home/>}/>
          <Route path = "/track/:vehicle_number" element = {<Track/>}/>
          <Route path= "vehicleservices" element= {<VehicleServices/>}>
          <Route path="getvehicle" element = {<Getvehicle/>}/>
          <Route path="addvehicle" element = {<AddVehicle/>}/>
          <Route path="updatevehicle" element={<UpdateVehicle/>}/>
          <Route path="deletevehicle" element = {<DeleteVehicle/>}/>
          <Route path="com" element={<CompleteVech/>}/>
          </Route>
          
      </Route>
    </Routes>
  </BrowserRouter>
  
    </>);
}
   

     
    
   


export default App;
