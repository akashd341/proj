import { useEffect, useState } from "react";
import {Button,Container, Grid,Paper} from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";


import { Link,Outlet } from "react-router-dom";
import Getvehicle from "./Getvehicle";



const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
        paddingTop: '5vh',
      },
      paper: {
        
        textAlign: 'center',
        background: 'blue',
        
      },

}));


const UserServices = ()=>{
  
    const classes = useStyles();

    return (
        
     <>
     
    <div className={classes.root}>
    <Container>
    <Grid container spacing={3}>
       
       <Grid item xs={6} sm={3}>
         <Paper className={classes.paper}><Button><Link to = "addvehicle" style={{textDecoration:'none', color:'black'}}>Add New Vehicle Details</Link></Button></Paper>
       </Grid>
       <Grid item xs={6} sm={3}>
         <Paper className={classes.paper}><Button><Link to="updatevehicle" style={{textDecoration:'none',color:'black'}}>Update Vehicle Details</Link></Button></Paper>
       </Grid>
       <Grid item xs={6} sm={3}>
         <Paper className={classes.paper}><Button><Link to="deletevehicle" style={{textDecoration:'none',color:'black'}}>Delete Vehicle Details</Link></Button></Paper>
       </Grid>
       <Grid item xs={6} sm={3}>
         <Paper className={classes.paper}><Button><Link to="getvehicle" style={{textDecoration:'none', color:'black'}}>View Vehicle Details</Link></Button></Paper>
       </Grid>
     </Grid>
    </Container>
     
    </div>
     <div>
       <Outlet/>
     </div>
     
    
     
     </>   
    )
}
export default UserServices;