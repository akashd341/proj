import { Box, Button, Container, FormControl, Grid, makeStyles, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme)=>({
    root:{
       
        display: 'flex',
        alignItems: 'center'
        
        
    },
    mybutton:{
       marginLeft: '90%'
        
    },
    errorheading:{
      align: 'center'
    }
})

)


const AddVehicle = (props) => {
    const classes = useStyles();
    const [message,setmessage] = useState({em : " "});
    
    useEffect(()=>{
        
        console.log(message.em)
    },[message])
    const postdetails = (e)=>{
        e.preventDefault()
       
        const formdata = document.forms[0];
        console.log(formdata.vehicle_number)
        fetch("/api1/vehicle/savedetails", {
              method: "POST",
              body: JSON.stringify({
              vehicle_number: formdata.elements[0].value,
              vehicle_type : formdata.elements[1].value,
              driver_id : formdata.elements[2].value
            }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }

   
}).then(res=>res.json()).then(res=>setmessage(res))
    
}
    return(
        <>
      
           
           <Grid container  direction= "column" className={classes.root}>
            
               <form onSubmit={postdetails} >
               <h6 id = "message" align = "center" style={{color: 'red'}}>{message.em}</h6><br></br>
                  <Grid item>
                  <TextField label = "Vehicle Number" name="vehicle_number" id = "vehicle_number" size="small" style={{width:'44.5vw',marginBottom: '2vh'}} variant="outlined" required /><br></br>
                  </Grid>
                   <Grid item>
                   <TextField label = "Vehicle Type" name = "vehicle_type" id= "vehicle_type" size="small" style={{width:'44.5vw' , marginBottom: '2vh'}} variant = "outlined" required/><br></br>
                   </Grid>
                   <Grid item>
                   <TextField label = "Driver Id" name = "driver_id" id = "driver_id" size="small" style={{width:'44.5vw',marginBottom: '2vh'}} variant="outlined" required/><br></br>
                   </Grid>
                   
                   <Grid className={classes.mybutton} item>
                       <Button type = "submit" variant  = "contained">Add</Button>
                       </Grid>
                   
                   
              </form>

               
           </Grid>
           
       
        </>
        
    )
}


export default AddVehicle;