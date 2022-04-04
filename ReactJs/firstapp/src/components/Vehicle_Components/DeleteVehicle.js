import { Container,TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import axios from 'axios';
import { Link,Outlet } from "react-router-dom";
import React, { useRef,useState,useEffect } from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
// import Vehicle_details from "./Vehicle_Components/vehicle_details";


const useStyles = makeStyles({
    root:{
       maxWidth: '50%',
       height:'200px',
       marginBottom: '12px',
       marginTop: '32px',
       marginLeft: '23%',
    },
    rot:{
        maxWidth: '55%',
        height:'280px',
        marginBottom: '12px',
        marginTop: '32px',
        marginLeft: '23%',
        border:'2px solid black',
        padding:'14px',
        fontFamily:'bold',
        
     },
    bullet:{
       display: 'inline-block',
       margin: '0 2px',
       transform: 'scale(0.9)',
       
    },
    mybutton:{
       
       backgroundColor: 'green',
    }
 })

const DeleteVehicle = (props) =>{
    const [log,setlog]=useState(false)
  
    const [deldata,setdeldata]=useState();
    const [state,setstate]=useState("xu");
    const [dat,setdat]=useState([{vehicle_type: 'Bus', driver_id: 'WB025601', longitude: '88.4143', vehicle_number: 'WB0256', latitude: '22.5797'}])
    const classes = useStyles();
    const getdata = async()=>{
        const response = await fetch('/api1/vehicle/getallvehicles')
        const result = await response.json();
      
   
        if(result!=[]){   
        setdat(result)
        }
        
        
    }
    useEffect(()=>{
       getdata();
     

    },[])
    const showRefContent = (e) => {
        e.preventDefault();
        const newarr=(dat.filter((con)=>con.vehicle_number==state))
        console.log(state);
        setdeldata(newarr);
        console.log(newarr)
        setlog(true);
      };
    // useEffect(()=>{
    //    getdata();
    //    console.log(vehicle)

    // },[])
    // const deletedetails = (e)=>{
    //     e.preventDefault()
        // const formdata = document.forms[0];
        // console.log(dat)
        // const remove = id => {
        //     axios.delete(`http://127.0.0.1:8000/api/1/student/${id}`).then(() => setcheck(check+1));
            
        //   };

        
//         fetch("/vehicle/deletedetails", {
//               method: "GET",
//               body: JSON.stringify({
//               vehicle_number: formdata.elements[0].value,
//             }),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
   
// }).then(function(response){
    // if(response.ok){
    //     document.getElementById("message").innerHTML = "successfully deleted"
    //     console.log("success")
    // }
    // console.log(response);
// })
    // }
    const dele=()=>{
        console.log("delete");
        // axios.delete(`http://127.0.0.1:8000/api/1/student/${id}`).then(() => setlog(false));
        setlog(false)

    };
    return(
        <>
        {/* {console.log(dat)} */}
        <Container className={classes.root}>
         <form onSubmit={showRefContent}>
         <TextField onChange={(e)=>setstate(e.target.value)} label = "Enter Vehicle Number" name="vehicle_number" id = "vehicle_number" style={{width:'44.5vw',marginBottom: '1vh'}} variant="filled" required />
             
             </form>   
        
        {log?<div>
        <Card variant = "outlined" className={classes.rot}>
        <h1 className='text-2xl font-medium text-primary mt-2 text-center'>
                    User Data 
                </h1>
           <CardContent className={classes.bullet}>
            <li>Vehicle_Number: {deldata[0].vehicle_number}</li>
           <li>Driver_id :{deldata[0].driver_id}</li>
           
           <li>Current latitude : {deldata[0].latitude}</li>
           <li>Current longitude : {deldata[0].longitude}</li>
           </CardContent>
           <button onClick={dele} className=" inline-block px-3 py-2 ml-[33%] bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button>
         
        </Card>
        </div>
        :null}
        </Container>
        </>
    )
}

export default DeleteVehicle;