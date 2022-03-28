import {
  Divider, 
  IconButton, 
  Toolbar, 
  Typography,
  Button,
  List,
  ListItem,
  makeStyles,
  Drawer} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'

const drawerWidth = 240

const useStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    width: '100%'
  },
  drawer: {
     width: drawerWidth,
     height: '80vh'
  }
})

export default function Service({children}){
  const classes = useStyles();
  return(

    <>
    <Drawer
    className = {classes.drawer}
    variant = "permanent"
    anchor="left"
    >
      <div>
      <List>
        <ListItem>
        <Button color= "inherit">
        User Services
      </Button>
     
        </ListItem>
      <ListItem>
      <Button color = "inherit">
        Bus Services
      </Button>
      </ListItem>
      <ListItem>
      <Button color = "inherit">
        Driver Services
      </Button>
      </ListItem>

      </List>
      </div>
      
      
     
    </Drawer>
    
    </>
  );
}