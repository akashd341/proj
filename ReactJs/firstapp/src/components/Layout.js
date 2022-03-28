import {
  AppBar,
  Divider, 
  IconButton, 
  Toolbar, 
  Typography,
  Button,
  List,
  ListItem,
  makeStyles,
  Drawer,
  Container
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { useState } from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import {Outlet,Link} from "react-router-dom";
import Home from './Home';
import Track from './Track';
import { blue } from '@material-ui/core/colors';
import PeopleIcon from '@material-ui/icons/People';
import DriveEtaIcon from '@material-ui/icons/DriveEta';


const drawerWidth = 120
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));
const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


const useStyles = makeStyles((theme)=>({
  myappbar:{
   
  },
  mylink: {
     textDecoration : 'none',
     color: 'white',
     textAlign: 'center'
  },
  mylist:{
    
  },

  menuButton:{
   marginLeft: "auto"

    
  },
  paper: {
     background: "blue",
     width: drawerWidth
     
  },
  iconAlign:{
    marginLeft: 160  }
}))

function Layout(){
   const classes = useStyles();
   const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  
   
    return (
        <>
       
        
      <AppBar position = "relative" className = {classes.myappbar} >
        <Toolbar>
          
          <Button
          aria-controls="customized-menu"
          variant="contained"
          color = "primary"
         

           >
           <Link to='/' style={{textDecoration: 'none',color: 'white'}}>Home</Link>
          </Button>
         


          <div className={classes.menuButton}>
          <Button
        aria-controls="customized-menu"
       
        variant="contained"
        color="primary"
        
      >
        <Link to = "/track" style={{textDecoration: ' none',color:'white'}}>Track</Link>
        
      </Button>
          
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Services
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <PeopleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText  primary={<Link to="/userservices" style={{textDecoration:'none',color:'black'}}>User Services</Link>} />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <PeopleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Driver Services" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <DriveEtaIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary={<Link to="/vehicleservices" style={{textDecoration:'none',color:'black'}}>Vehicle Services </Link>}/>
        </StyledMenuItem>
      </StyledMenu>
    </div>
        </Toolbar>
       
      </AppBar>
      <Typography variant = "body">
       
      </Typography>
     <Outlet/>
       
       </>
          
       
      )
};

export default Layout;