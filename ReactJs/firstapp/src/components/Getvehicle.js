import { React,useEffect, useState } from "react";
import {axios} from 'axios';
import Vehicle_details from "./Vehicle_Components/vehicle_details";

const Getvehicle = ()=>{
    
    const [vehicle,setVehicle] = useState([]);
    const getdata = async()=>{
        const response = await fetch('/api1/vehicle/getallvehicles')
        const result = await response.json();
        setVehicle(result)
        console.log(result)
        
        
    }
    useEffect(()=>{
       getdata();
       console.log(vehicle)

    },[])
    return(
        <>
       
        <div>
            {
                vehicle.map((currElem)=>{
                    return(
                  <span><Vehicle_details myobj={currElem}/></span>
                    )
                })
            }
        </div>
        
        
       
        </>
       
    )
}

export default Getvehicle;
