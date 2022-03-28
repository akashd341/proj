import { Container,TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles(()=>({
    root:{
        maxWidth: '48vw',
        marginTop : '4%',
        display: 'flex',
    }

}))

const DeleteVehicle = (props) =>{
    const classes = useStyles();
    const deletedetails = (e)=>{
        e.preventDefault()
        const formdata = document.forms[0];
        
        fetch("/vehicle/deletedetails", {
              method: "DELETE",
              body: JSON.stringify({
              vehicle_number: formdata.elements[0].value,
            }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
   
}).then(function(response){
    if(response.ok){
        document.getElementById("message").innerHTML = "successfully deleted"
        console.log("success")
    }
})
    }
    return(
        <>
        <Container className={classes.root}>
         <form>
         <TextField label = "Enter Vehicle Number" name="vehicle_number" id = "vehicle_number" style={{width:'44.5vw',marginBottom: '1vh'}} variant="filled" required />
             </form>   
        
        </Container>
        </>
    )
}

export default DeleteVehicle;