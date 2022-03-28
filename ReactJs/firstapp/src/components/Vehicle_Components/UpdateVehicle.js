
import { Button, Container, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(()=>({
    root:{
        marginTop: '4%'
    }
})

)

const UpdateVehicle = (props)=>{
    const classes = useStyles()
    return(
        <>
        <Grid container justifyContent="center" className={classes.root}>
        <TextField label = "Enter Vehicle Number" name="vehicle_number" id = "vehicle_number" size = "small" style={{width:'44.5vw',marginBottom: '1vh'}} variant="outlined" required />
        <Button>Find</Button>
        </Grid>
        
        </>
    )
}


export default UpdateVehicle;