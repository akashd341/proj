import React, { useEffect } from 'react';
import Track from '../Track'
import Box from '@material-ui/core/Box';
import { Button, Card, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core';
import { Link,Outlet } from "react-router-dom";
const useStyles = makeStyles({
   root:{
      maxWidth: '40%',
      marginBottom: '12px',
      marginTop: '12px',
      marginLeft: '30%',
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

const Vehicle_details = (props)=>{
   const classes = useStyles();
   
   
 return (

    <>
        <Card variant = "outlined" className={classes.root}>
           <CardContent className={classes.bullet}>
            <li>Vehicle_Number: {props.myobj.vehicle_number}</li>
           <li>Driver_id :{props.myobj.driver_id}</li>
           <li>Source :{props.myobj.source}</li>
           <li>Destination: {props.myobj.destination}</li>
           <li>Current latitude : {props.myobj.latitude}</li>
           <li>Current longitude : {props.myobj.longitude}</li>
           </CardContent>
            
           <CardActions>
              <Typography style={{marginRight: 'auto', display:'block'}}>
                 Status:- {props.myobj.status}
              </Typography>
              <Button variant="contained" className={classes.mybutton}><Link to={'/track/'+ props.myobj.vehicle_number} style = {{textDecoration:'none', color:'black'}}>Track</Link></Button>
           </CardActions>
           
        </Card>
    </>
 )
}
export default Vehicle_details;